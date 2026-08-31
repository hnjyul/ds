import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Root path defaults to the PC surface — most first-time visitors arrive on
// desktop to read documentation. Phone user agents convert to /mobile
// instead of forcing every visitor through a manual surface picker.
const MOBILE_USER_AGENT_PATTERN = /Android|iPhone|iPod|IEMobile|BlackBerry|Opera Mini|Windows Phone/i;

export function proxy(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") ?? "";
  const surface = MOBILE_USER_AGENT_PATTERN.test(userAgent) ? "mobile" : "pc";

  return NextResponse.redirect(new URL(`/${surface}`, request.url));
}

export const config = {
  matcher: "/",
};
