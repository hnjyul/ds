import Link from "next/link";
import type { NavCategory, Surface } from "../shell/types";
import { buildHref, formatEyebrow } from "../shell/navigation-utils";

export function CategoryIndexTemplate({
  surface,
  category,
}: {
  surface: Surface;
  category: NavCategory;
}) {
  return (
    <>
      <section className="hero-section hero-section--detail">
        <p className="eyebrow">{formatEyebrow(surface, category.id)}</p>
        <h1>{category.label}</h1>
        <p className="hero-section__description">{category.description}</p>
      </section>

      <section className="content-section" id="index" aria-labelledby="index-title">
        <h2 className="visually-hidden" id="index-title">
          {category.label} 목록
        </h2>
        <div className="index-card-grid">
          {category.items.map((item) => (
            <Link
              className="index-card"
              href={buildHref(surface, category.id, item.slug)}
              key={item.slug}
            >
              <span className="index-card__treatment">
                {item.treatment === "full" ? "상세 가이드" : "요약"}
              </span>
              <strong>{item.label}</strong>
              <p>{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
