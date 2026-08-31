"use client";

import { useId, useState } from "react";
import { Tabs } from "../../../components/docs/Tabs";

const DEMO_TABS = [
  { id: "notice", label: "공지사항" },
  { id: "faq", label: "자주 묻는 질문" },
  { id: "contact", label: "문의하기" },
];

export function TabPreview() {
  const [activeTab, setActiveTab] = useState(DEMO_TABS[0].id);
  const panelId = useId();

  return (
    <div className="tab-preview">
      <Tabs tabs={DEMO_TABS} activeTab={activeTab} onChange={setActiveTab} panelId={panelId} ariaLabel="예시 탭" />
      <div className="tab-preview__panel" id={panelId} role="tabpanel" aria-labelledby={`tab-${activeTab}`} tabIndex={0}>
        {activeTab === "notice" && <p>새로운 공지사항이 없습니다.</p>}
        {activeTab === "faq" && <p>자주 묻는 질문 3건을 확인할 수 있습니다.</p>}
        {activeTab === "contact" && <p>평일 09:00~18:00에 문의할 수 있습니다.</p>}
      </div>
    </div>
  );
}
