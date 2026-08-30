"use client";

import type { KeyboardEvent as ReactKeyboardEvent } from "react";

export type TabDefinition = { id: string; label: string };

type TabsProps = {
  tabs: TabDefinition[];
  activeTab: string;
  onChange: (id: string) => void;
  panelId: string;
  ariaLabel: string;
};

export function Tabs({ tabs, activeTab, onChange, panelId, ariaLabel }: TabsProps) {
  const handleKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      return;
    }

    event.preventDefault();
    const tabList = event.currentTarget.parentElement;
    const tabButtons = Array.from(
      tabList?.querySelectorAll<HTMLButtonElement>("[role='tab']") ?? [],
    );
    const currentIndex = tabButtons.indexOf(event.currentTarget);
    const nextIndex =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? tabButtons.length - 1
          : event.key === "ArrowRight"
            ? (currentIndex + 1) % tabButtons.length
            : (currentIndex - 1 + tabButtons.length) % tabButtons.length;
    const nextTab = tabs[nextIndex];

    if (nextTab) {
      onChange(nextTab.id);
      tabButtons[nextIndex]?.focus();
    }
  };

  return (
    <div className="tabs" role="tablist" aria-label={ariaLabel}>
      {tabs.map((tab) => (
        <button
          id={`tab-${tab.id}`}
          className="tabs__button"
          key={tab.id}
          type="button"
          role="tab"
          aria-selected={activeTab === tab.id}
          aria-controls={panelId}
          tabIndex={activeTab === tab.id ? 0 : -1}
          onClick={() => onChange(tab.id)}
          onKeyDown={handleKeyDown}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
