import type { Metadata } from "next";
import { CategoryIndexTemplate } from "../../components/docs/CategoryIndexTemplate";
import { pcNav } from "../data/navigation";

export const metadata: Metadata = { title: "파운데이션" };

export default function PcFoundationIndex() {
  const category = pcNav.find((item) => item.id === "foundation")!;
  return <CategoryIndexTemplate surface="pc" category={category} />;
}
