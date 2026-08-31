import type { CategoryId, NavItem, Surface, SurfaceNav } from "./types";

export type ResolvedLocation = {
  categoryId: CategoryId | null;
  categoryLabel: string | null;
  itemSlug: string | null;
  itemLabel: string | null;
};

export function buildHref(surface: Surface, categoryId: CategoryId, slug?: string): string {
  return slug ? `/${surface}/${categoryId}/${slug}` : `/${surface}/${categoryId}`;
}

export function resolveLocation(
  pathname: string,
  surface: Surface,
  nav: SurfaceNav,
): ResolvedLocation {
  const empty: ResolvedLocation = {
    categoryId: null,
    categoryLabel: null,
    itemSlug: null,
    itemLabel: null,
  };
  const prefix = `/${surface}`;

  if (pathname !== prefix && !pathname.startsWith(`${prefix}/`)) {
    return empty;
  }

  const parts = pathname.slice(prefix.length).split("/").filter(Boolean);
  const [categoryPart, itemPart] = parts;
  const category = nav.find((candidate) => candidate.id === categoryPart);

  if (!category) {
    return empty;
  }

  if (!itemPart) {
    return {
      categoryId: category.id,
      categoryLabel: category.label,
      itemSlug: null,
      itemLabel: null,
    };
  }

  const item = category.items.find((candidate) => candidate.slug === itemPart);

  return {
    categoryId: category.id,
    categoryLabel: category.label,
    itemSlug: itemPart,
    itemLabel: item?.label ?? itemPart,
  };
}

export type FlatSearchItem = NavItem & {
  categoryId: CategoryId;
  categoryLabel: string;
  href: string;
};

export function formatEyebrow(surface: Surface, categoryId: string): string {
  return `${surface.toUpperCase()} · ${categoryId.toUpperCase()}`;
}

export function flattenSearchItems(surface: Surface, nav: SurfaceNav): FlatSearchItem[] {
  return nav.flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      categoryId: category.id,
      categoryLabel: category.label,
      href: buildHref(surface, category.id, item.slug),
    })),
  );
}
