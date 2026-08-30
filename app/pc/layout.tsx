import type { ReactNode } from "react";
import { DocShell } from "../components/shell/DocShell";
import { pcNav } from "./data/navigation";

export default function PcLayout({ children }: { children: ReactNode }) {
  return (
    <DocShell surface="pc" nav={pcNav}>
      {children}
    </DocShell>
  );
}
