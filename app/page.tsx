import Link from "next/link";
import type { Metadata } from "next";
import { BrandMark } from "./components/shell/SiteHeader";

export const metadata: Metadata = {
  title: { absolute: "Common UI — 모바일 · PC 디자인 시스템" },
  description:
    "터치 우선 모바일 서페이스와 KRDS(대한민국 정부 디자인 시스템)를 참고해 보강한 PC 서페이스로 나뉜 Common UI 문서입니다.",
};

export default function Home() {
  return (
    <div className="landing">
      <header className="landing__header">
        <span className="site-brand">
          <BrandMark />
          <span className="site-brand__name">Common UI</span>
        </span>
      </header>

      <main>
        <section className="hero-section" id="overview" aria-labelledby="landing-title">
          <p className="eyebrow">MOBILE · PC</p>
          <h1 id="landing-title">
            화면에 맞는 언어로
            <br />
            말하는 디자인 시스템
          </h1>
          <p className="hero-section__description">
            같은 디자인 토큰 위에서 모바일과 PC가 서로 다른 정보 구조로 대화합니다. 모바일은 TDS Mobile 문서의
            파운데이션 · 컴포넌트 · 유틸리티 구조를 참고해 재구성했고, PC는 KRDS(대한민국 정부 디자인 시스템)를
            참고해 표 · 아코디언 · 브레드크럼 등으로 내용을 보강했습니다.
          </p>
        </section>

        <section className="content-section" id="pick-surface" aria-labelledby="pick-surface-title">
          <h2 className="visually-hidden" id="pick-surface-title">
            서페이스 선택
          </h2>
          <div className="index-card-grid landing__surfaces">
            <Link className="index-card" href="/mobile">
              <span className="index-card__treatment">Touch-first</span>
              <strong>Mobile</strong>
              <p>TDS Mobile 문서 구조를 참고해 파운데이션 · 컴포넌트 · 유틸리티를 재구성했습니다.</p>
            </Link>
            <Link className="index-card" href="/pc">
              <span className="index-card__treatment">KRDS-enhanced</span>
              <strong>PC</strong>
              <p>KRDS를 참고해 표, 아코디언, 브레드크럼 등 데스크톱 전용 컴포넌트로 내용을 보강했습니다.</p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
