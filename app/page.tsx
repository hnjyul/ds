import type { Metadata } from "next";
import { StyleGuideShell } from "./components/StyleGuideShell";

export const metadata: Metadata = {
  title: { absolute: "Common UI — 범용 디자인 시스템" },
  description:
    "디자인 토큰, 컴포넌트, UI 패턴과 접근성 기준을 연결하는 범용 스타일가이드입니다.",
};

export default function Home() {
  return <StyleGuideShell />;
}
