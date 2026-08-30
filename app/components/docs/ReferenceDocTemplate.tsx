import type { CSSProperties } from "react";

export type SwatchGroup = { label: string; swatches: { name: string; value: string; token: string }[] };
export type SpecRow = { label: string; value: string; note?: string };
export type TypeSpecimen = { label: string; sampleText: string; tokenName: string; style: CSSProperties };

export type ReferenceSpecimen =
  | { kind: "swatches"; groups: SwatchGroup[] }
  | { kind: "table"; rows: SpecRow[] }
  | { kind: "type"; specimens: TypeSpecimen[] };

export type ReferenceDocData = {
  eyebrow: string;
  category: string;
  title: string;
  description: string;
  specimen: ReferenceSpecimen;
  usageNotes: string[];
  accessibilityNotes: string[];
};

function Specimen({ specimen }: { specimen: ReferenceSpecimen }) {
  if (specimen.kind === "swatches") {
    return (
      <div className="reference-swatch-groups">
        {specimen.groups.map((group) => (
          <div className="reference-swatch-group" key={group.label}>
            <p className="reference-swatch-group__label">{group.label}</p>
            <div className="reference-swatch-row">
              {group.swatches.map((swatch) => (
                <div className="reference-swatch" key={swatch.name}>
                  <span className="reference-swatch__chip" style={{ background: swatch.value }} />
                  <span className="reference-swatch__name">{swatch.name}</span>
                  <code>{swatch.token}</code>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (specimen.kind === "type") {
    return (
      <div className="type-specimens">
        {specimen.specimens.map((item) => (
          <div className="type-specimen" key={item.tokenName}>
            <span style={item.style}>{item.sampleText}</span>
            <code>{item.tokenName}</code>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="reference-table" role="table" aria-label="레퍼런스 값 표">
      <div className="reference-table__row reference-table__row--head" role="row">
        <span role="columnheader">항목</span>
        <span role="columnheader">값</span>
        <span role="columnheader">설명</span>
      </div>
      {specimen.rows.map((row) => (
        <div className="reference-table__row" role="row" key={row.label}>
          <span role="cell" data-label="항목">
            {row.label}
          </span>
          <span role="cell" data-label="값">
            <code>{row.value}</code>
          </span>
          <span role="cell" data-label="설명">
            {row.note ?? ""}
          </span>
        </div>
      ))}
    </div>
  );
}

export function ReferenceDocTemplate({
  eyebrow,
  category,
  title,
  description,
  specimen,
  usageNotes,
  accessibilityNotes,
}: ReferenceDocData) {
  return (
    <>
      <section className="hero-section hero-section--detail">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero-section__description">{description}</p>
        <span className="component-document__category">{category}</span>
      </section>

      <section className="content-section" id="specimen" aria-labelledby="specimen-title">
        <h2 id="specimen-title">레퍼런스</h2>
        <Specimen specimen={specimen} />
      </section>

      <section className="content-section" id="usage" aria-labelledby="usage-title">
        <h2 id="usage-title">사용 원칙</h2>
        <ul className="check-list" aria-label="사용 원칙">
          {usageNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
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
