import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render(path, headers = {}) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html", ...headers },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  return { response, html: await response.text() };
}

const DESKTOP_USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0 Safari/537.36";
const MOBILE_USER_AGENT =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 Safari/604.1";

test("root path converts a desktop visit to the PC surface", async () => {
  const { response } = await render("/", { "user-agent": DESKTOP_USER_AGENT });
  assert.equal(response.status, 307);
  assert.equal(new URL(response.headers.get("location"), "http://localhost").pathname, "/pc");
});

test("root path converts a phone visit to the Mobile surface", async () => {
  const { response } = await render("/", { "user-agent": MOBILE_USER_AGENT });
  assert.equal(response.status, 307);
  assert.equal(new URL(response.headers.get("location"), "http://localhost").pathname, "/mobile");
});

test("server-renders the mobile surface with its own nav and no PC-only components", async () => {
  const { response, html } = await render("/mobile");
  assert.equal(response.status, 200);
  assert.match(html, /data-surface="mobile"/);
  assert.match(html, /<main[^>]*id="main-content"/i);
  assert.match(html, /BottomSheet/);
  assert.doesNotMatch(html, /Table<\/strong>|Accordion<\/strong>|Breadcrumb<\/strong>/);
});

test("server-renders the pc surface with KRDS-enhanced components and no mobile-only components", async () => {
  const { response, html } = await render("/pc");
  assert.equal(response.status, 200);
  assert.match(html, /data-surface="pc"/);
  assert.match(html, /KRDS/);
  assert.doesNotMatch(html, /BottomSheet<\/strong>|바텀시트/);
});

test("renders a full-treatment flagship page on each surface", async () => {
  const mobileButton = await render("/mobile/components/button");
  assert.equal(mobileButton.response.status, 200);
  assert.match(mobileButton.html, /role="tablist"/);
  assert.match(mobileButton.html, /변경사항 저장/);

  const pcTable = await render("/pc/components/table");
  assert.equal(pcTable.response.status, 200);
  assert.match(pcTable.html, /role="tablist"/);
  assert.match(pcTable.html, /class="table-demo"/);
});

test("renders a data-driven standard/reference page and returns 404 for an unknown slug", async () => {
  const known = await render("/mobile/foundation/color");
  assert.equal(known.response.status, 200);
  assert.match(known.html, /색상/);

  const unknown = await render("/pc/components/does-not-exist");
  assert.equal(unknown.response.status, 404);
});

test("keeps the finished site free of starter preview assets and wires the surfaces correctly", async () => {
  const [landingPage, mobileLayout, pcLayout, packageJson, tokens] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/mobile/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/pc/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../app/tokens.css", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(landingPage, /StyleGuideShell/);
  assert.match(mobileLayout, /DocShell/);
  assert.match(mobileLayout, /surface="mobile"/);
  assert.match(pcLayout, /DocShell/);
  assert.match(pcLayout, /surface="pc"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(tokens, /--ref-color-brand-600:\s*#256ef4/i);
  assert.match(tokens, /--ref-color-neutral-900:\s*#1e2124/i);
  assert.match(tokens, /--component-button-height-md/);
  await assert.rejects(access(new URL("../app/components/StyleGuideShell.tsx", import.meta.url)));
  await assert.rejects(access(new URL("../app/_sites-preview/", import.meta.url)));
  await assert.rejects(access(new URL("../public/_sites-preview/", templateRoot)));
});
