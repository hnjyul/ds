import type { ReactNode } from "react";
import { DocShell } from "../components/shell/DocShell";
import { mobileNav } from "./data/navigation";

export default function MobileLayout({ children }: { children: ReactNode }) {
  return (
    <DocShell surface="mobile" nav={mobileNav}>
      {children}
    </DocShell>
  );
}
