import type { GuidelineCard } from "./DetailDocTemplate";

/** One step of a pattern's screen flow, with the components that make up that screen. */
export type PatternStep = {
  title: string;
  body: string;
  components: string[];
};

export type PatternDocData = {
  eyebrow: string;
  category: string;
  title: string;
  description: string;
  whenToUse: string[];
  steps: PatternStep[];
  guidelines: GuidelineCard[];
  accessibilityNotes: string[];
};

export function PatternDocTemplate({
  eyebrow,
  category,
  title,
  description,
  whenToUse,
  steps,
  guidelines,
  accessibilityNotes,
}: PatternDocData) {
  return (
    <>
      <section className="hero-section hero-section--detail">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero-section__description">{description}</p>
        <span className="component-document__category">{category}</span>
      </section>

      <section className="content-section" id="when" aria-labelledby="when-title">
        <h2 id="when-title">언제 사용하나요</h2>
        <ul className="check-list" aria-label={`${title} 사용 상황`}>
          {whenToUse.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="content-section" id="flow" aria-labelledby="flow-title">
        <h2 id="flow-title">화면 흐름</h2>
        <ol className="pattern-steps">
          {steps.map((step, index) => (
            <li className="pattern-step" key={step.title}>
              <span className="pattern-step__number" aria-hidden="true">
                {index + 1}
              </span>
              <div>
                <h3 className="pattern-step__title">{step.title}</h3>
                <p>{step.body}</p>
                <ul className="pattern-step__parts" aria-label={`${step.title} 단계에 사용하는 컴포넌트`}>
                  {step.components.map((component) => (
                    <li key={component}>{component}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="content-section" id="guidelines" aria-labelledby="guidelines-title">
        <h2 id="guidelines-title">주의사항</h2>
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
