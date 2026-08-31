"use client";

import { useId, useState, type ReactNode } from "react";
import { Tabs } from "./Tabs";
import { CodeBlock } from "./CodeBlock";

export type GuidelineCard = { tone: "do" | "avoid"; label: string; title: string; body: string };
export type TokenRow = { label: string; token: string };
export type DetailCode = { title: string; code: string };

type DetailDocTemplateProps = {
  eyebrow: string;
  category: string;
  title: string;
  description: string;
  version: string;
  status?: string;
  preview: ReactNode;
  previewCaption: string;
  tokenRows: TokenRow[];
  guidelines: GuidelineCard[];
  accessibilityChecks: string[];
  code: DetailCode;
};

const TABS = [
  { id: "overview", label: "개요" },
  { id: "guidelines", label: "사용 지침" },
  { id: "accessibility", label: "접근성" },
  { id: "code", label: "코드" },
];

export function DetailDocTemplate({
  eyebrow,
  category,
  title,
  description,
  version,
  status = "Stable",
  preview,
  previewCaption,
  tokenRows,
  guidelines,
  accessibilityChecks,
  code,
}: DetailDocTemplateProps) {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const panelId = useId();

  return (
    <>
      <section className="hero-section hero-section--detail">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero-section__description">{description}</p>
        <dl className="component-meta" aria-label="문서 메타 정보">
          <div>
            <dt>분류</dt>
            <dd>{category}</dd>
          </div>
          <div>
            <dt>버전</dt>
            <dd>{version}</dd>
          </div>
          <div>
            <dt>상태</dt>
            <dd>
              <span className="status-badge">{status}</span>
            </dd>
          </div>
        </dl>
      </section>

      <section className="content-section">
        <article className="component-document component-document--flagship">
          <Tabs
            tabs={TABS}
            activeTab={activeTab}
            onChange={setActiveTab}
            panelId={panelId}
            ariaLabel={`${title} 문서 보기`}
          />
          <div
            className="tabs__panel"
            id={panelId}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            tabIndex={0}
          >
            {activeTab === "overview" && (
              <>
                <div className="component-preview">
                  <p className="component-preview__caption">{previewCaption}</p>
                  <div className="component-preview__canvas">{preview}</div>
                </div>
                {tokenRows.length > 0 && (
                  <dl className="token-values token-values--detail">
                    {tokenRows.map((row) => (
                      <div key={row.token}>
                        <dt>{row.label}</dt>
                        <dd>
                          <code>{row.token}</code>
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}
              </>
            )}

            {activeTab === "guidelines" && (
              <div className="guideline-grid">
                {guidelines.map((item) => (
                  <article className={`guideline-card guideline-card--${item.tone}`} key={item.title}>
                    <p className="guideline-card__label">{item.label}</p>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            )}

            {activeTab === "accessibility" && (
              <ul className="check-list" aria-label={`${title} 접근성 확인 항목`}>
                {accessibilityChecks.map((check) => (
                  <li key={check}>{check}</li>
                ))}
              </ul>
            )}

            {activeTab === "code" && <CodeBlock title={code.title} code={code.code} />}
          </div>
        </article>
      </section>
    </>
  );
}
