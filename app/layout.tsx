import type { Metadata, Viewport } from "next";
import "./globals.css";

const preferenceScript = `(function(){try{const storedTheme=localStorage.getItem('common-ui-theme');const theme=storedTheme==='dark'||storedTheme==='light'?storedTheme:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');const storedDensity=localStorage.getItem('common-ui-density');document.documentElement.dataset.theme=theme;document.documentElement.dataset.density=storedDensity==='compact'?'compact':'comfortable';}catch(error){document.documentElement.dataset.theme='light';document.documentElement.dataset.density='comfortable';}})();`;

export const metadata: Metadata = {
  title: {
    default: "Common UI — 범용 디자인 시스템",
    template: "%s | Common UI",
  },
  description:
    "브랜드에 종속되지 않는 디자인 토큰, 컴포넌트, UI 패턴과 접근성 문서의 기본 구조입니다.",
  applicationName: "Common UI",
  keywords: ["디자인 시스템", "스타일가이드", "디자인 토큰", "접근성"],
  openGraph: {
    title: "Common UI — 범용 디자인 시스템",
    description: "값에서 의미로, 의미에서 일관된 사용자 경험으로.",
    type: "website",
    locale: "ko_KR",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#101318" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        {/* Pretendard: open-license web font stack-in for KRDS's "Pretendard GOV". Loaded by the
            visitor's browser from a public CDN — unrelated to this build environment's own network
            access — with the existing Korean system-font stack as a graceful fallback. */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@latest/dist/web/static/pretendard.css"
        />
        <script dangerouslySetInnerHTML={{ __html: preferenceScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
