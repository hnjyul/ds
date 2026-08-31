import Link from "next/link";
import type { Metadata } from "next";
import { pcNav } from "./data/navigation";
import { buildHref } from "../components/shell/navigation-utils";

export const metadata: Metadata = {
  title: "PC",
  description: "KRDS(대한민국 정부 디자인 시스템)를 참고해 보강한 Common UI PC 서페이스의 파운데이션, 컴포넌트, 유틸리티 문서입니다.",
};

export default function PcHome() {
  return (
    <>
      <section className="hero-section" id="overview" aria-labelledby="pc-overview-title">
        <p className="eyebrow">PC · KRDS-ENHANCED</p>
        <h1 id="pc-overview-title">
          공공 서비스 기준으로
          <br />
          넓힌 데스크톱 화면
        </h1>
        <p className="hero-section__description">
          모바일과 같은 디자인 토큰을 공유하면서, KRDS(대한민국 정부 디자인 시스템)를 참고해 표 · 아코디언 ·
          브레드크럼 등 정보 밀도가 높은 데스크톱 전용 컴포넌트로 내용을 보강했습니다.
        </p>
        <div className="hero-section__actions">
          <Link className="button button--primary" href={buildHref("pc", "components")}>
            컴포넌트 보기
          </Link>
          <Link className="button button--secondary" href={buildHref("pc", "foundation")}>
            파운데이션 보기
          </Link>
        </div>
        <dl className="system-summary" aria-label="PC 서페이스 요약">
          <div>
            <dt>{pcNav.find((category) => category.id === "foundation")?.items.length}</dt>
            <dd>파운데이션 항목</dd>
          </div>
          <div>
            <dt>{pcNav.find((category) => category.id === "components")?.items.length}</dt>
            <dd>컴포넌트</dd>
          </div>
          <div>
            <dt>{pcNav.find((category) => category.id === "utilities")?.items.length}</dt>
            <dd>유틸리티</dd>
          </div>
        </dl>
      </section>

      <section className="content-section" id="krds" aria-labelledby="pc-krds-title">
        <p className="section-kicker">Reference</p>
        <h2 id="pc-krds-title">KRDS를 참고해 보강한 지점</h2>
        <p className="section-description">
          Primary 색상 <code>#256EF4</code>(정부 청색)와 Secondary 회청색 계열, 본문 텍스트 색상
          <code>#1E2124</code>는 모두 KRDS 공식 색상 토큰을 그대로 반영했습니다. Table · Accordion ·
          Breadcrumb 등 정보 밀도가 높은 컴포넌트를 우선 보강했습니다.
        </p>
        <div className="principle-grid">
          <article className="principle-card">
            <span className="principle-card__index">01</span>
            <h3>단일 액센트 컬러</h3>
            <p>여러 브랜드 컬러 대신 정부 청색 하나를 Primary로 사용해 신뢰감 있는 인상을 유지합니다.</p>
          </article>
          <article className="principle-card">
            <span className="principle-card__index">02</span>
            <h3>정보 밀도 우선</h3>
            <p>Table, Accordion, Breadcrumb 등 많은 정보를 압축해 보여주는 컴포넌트를 우선 보강했습니다.</p>
          </article>
          <article className="principle-card">
            <span className="principle-card__index">03</span>
            <h3>접근성 체크리스트</h3>
            <p>KWCAG 4대 원칙(인식 · 운용 · 이해 · 견고성)을 유틸리티 문서로 별도 제공합니다.</p>
          </article>
        </div>
      </section>

      <section className="content-section" id="categories" aria-labelledby="pc-categories-title">
        <p className="section-kicker">Structure</p>
        <h2 id="pc-categories-title">파운데이션 · 컴포넌트 · 유틸리티</h2>
        <div className="index-card-grid">
          {pcNav.map((category) => (
            <Link className="index-card" href={buildHref("pc", category.id)} key={category.id}>
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
