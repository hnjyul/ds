import Link from "next/link";
import type { Metadata } from "next";
import { mobileNav } from "./data/navigation";
import { buildHref } from "../components/shell/navigation-utils";

export const metadata: Metadata = {
  title: "Mobile",
  description: "터치와 한 손 조작을 우선하는 Common UI 모바일 서페이스의 파운데이션, 컴포넌트, 패턴, 유틸리티 문서입니다.",
};

export default function MobileHome() {
  return (
    <>
      <section className="hero-section" id="overview" aria-labelledby="mobile-overview-title">
        <p className="eyebrow">MOBILE · FOUNDATION</p>
        <h1 id="mobile-overview-title">
          한 손으로 완결되는
          <br />
          터치 인터페이스
        </h1>
        <p className="hero-section__description">
          모바일 미니앱 문서 구조를 기준으로 파운데이션 · 컴포넌트 · 패턴 · 유틸리티를 정리했습니다. 화면 폭과
          조작 방식이 다른 PC 서페이스는 상단의 &apos;PC 화면&apos; 링크에서 확인할 수 있습니다.
        </p>
        <div className="hero-section__actions">
          <Link className="button button--primary" href={buildHref("mobile", "components")}>
            컴포넌트 보기
          </Link>
          <Link className="button button--secondary" href={buildHref("mobile", "foundation")}>
            파운데이션 보기
          </Link>
        </div>
        <dl className="system-summary" aria-label="모바일 서페이스 요약">
          <div>
            <dt>{mobileNav.find((category) => category.id === "foundation")?.items.length}</dt>
            <dd>파운데이션 항목</dd>
          </div>
          <div>
            <dt>{mobileNav.find((category) => category.id === "components")?.items.length}</dt>
            <dd>컴포넌트</dd>
          </div>
          <div>
            <dt>{mobileNav.find((category) => category.id === "patterns")?.items.length}</dt>
            <dd>패턴</dd>
          </div>
          <div>
            <dt>{mobileNav.find((category) => category.id === "utilities")?.items.length}</dt>
            <dd>유틸리티</dd>
          </div>
        </dl>
      </section>

      <section className="content-section" id="token-flow" aria-labelledby="mobile-token-flow-title">
        <p className="section-kicker">Token flow</p>
        <h2 id="mobile-token-flow-title">원시값에서 컴포넌트까지</h2>
        <p className="section-description">
          모바일과 PC 서페이스는 <strong>Reference → System → Component</strong> 3단 토큰을 함께 사용합니다.
          두 서페이스는 같은 System 토큰을 공유하되, <code>[data-surface]</code> 레이어로 라운드 값이나 콘텐츠
          폭 같은 일부 Component 토큰만 다르게 재정의합니다.
        </p>
        <ol className="token-flow" aria-label="토큰 계층">
          <li className="token-layer">
            <span className="token-layer__number">1</span>
            <div>
              <p className="token-layer__label">Reference</p>
              <code>--ref-color-brand-600</code>
              <span>KRDS 정부 청색(#256EF4) 원시 값</span>
            </div>
          </li>
          <li className="token-layer">
            <span className="token-layer__number">2</span>
            <div>
              <p className="token-layer__label">System</p>
              <code>--sys-color-action-primary</code>
              <span>모바일 · PC가 함께 쓰는 의미 값</span>
            </div>
          </li>
          <li className="token-layer">
            <span className="token-layer__number">3</span>
            <div>
              <p className="token-layer__label">Component</p>
              <code>--component-button-background-primary</code>
              <span>서페이스별로 재정의 가능한 구현 계약</span>
            </div>
          </li>
        </ol>
      </section>

      <section className="content-section" id="categories" aria-labelledby="mobile-categories-title">
        <p className="section-kicker">Structure</p>
        <h2 id="mobile-categories-title">파운데이션 · 컴포넌트 · 패턴 · 유틸리티</h2>
        <div className="index-card-grid">
          {mobileNav.map((category) => (
            <Link className="index-card" href={buildHref("mobile", category.id)} key={category.id}>
              <span className="index-card__treatment">{category.items.length}개 항목</span>
              <strong>{category.label}</strong>
              <p>{category.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
