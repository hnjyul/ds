export type Surface = "mobile" | "pc";
export type Treatment = "full" | "standard";
export type CategoryId = "foundation" | "components" | "patterns" | "utilities";

export type NavItem = {
  slug: string;
  label: string;
  description: string;
  treatment: Treatment;
};

export type NavCategory = {
  id: CategoryId;
  label: string;
  description: string;
  items: NavItem[];
};

export type SurfaceNav = NavCategory[];

export type TocHeading = {
  id: string;
  label: string;
};
