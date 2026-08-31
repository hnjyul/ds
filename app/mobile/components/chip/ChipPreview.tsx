"use client";

import { useState } from "react";

const OPTIONS = ["전체", "카페", "편의점", "약국"];

export function ChipPreview() {
  const [selected, setSelected] = useState(OPTIONS[0]);

  return (
    <>
      {OPTIONS.map((label) => (
        <button
          key={label}
          type="button"
          className="chip"
          aria-pressed={selected === label}
          onClick={() => setSelected(label)}
        >
          {label}
        </button>
      ))}
    </>
  );
}
