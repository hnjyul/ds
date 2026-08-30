import type { GuidelineCard, TokenRow } from "./DetailDocTemplate";

export type StandardDocData = {
  eyebrow: string;
  category: string;
  title: string;
  description: string;
  guidelines: GuidelineCard[];
  tokenRows: TokenRow[];
  accessibilityNotes: string[];
};

export function StandardDocTemplate({
  eyebrow,
  category,
  title,
  description,
  guidelines,
  tokenRows,
  accessibilityNotes,
}: StandardDocData) {
  return (
    <>
      <section className="hero-section hero-section--detail">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero-section__description">{description}</p>
        <span className="component-document__category">{category}</span>
      </section>

      <section className="content-section" id="guidelines" aria-labelledby="guidelines-title">
        <h2 id="guidelines-title">사용 지침</h2>
        <div className="guideline-grid">
          {guidelines.map((item) => (
            <article className={`guideline-card guideline-card--${item.tone}`} key={item.title}>
              <p className="guideline-card__label">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="tokens" aria-labelledby="tokens-title">
        <h2 id="tokens-title">토큰</h2>
        <dl className="token-values">
          {tokenRows.map((row) => (
            <div key={row.token}>
              <dt>{row.label}</dt>
              <dd>
                <code>{row.token}</code>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="content-section" id="accessibility" aria-labelledby="a11y-title">
        <h2 id="a11y-title">접근성</h2>
        <ul className="check-list" aria-label={`${title} 접근성 확인 항목`}>
          {accessibilityNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
