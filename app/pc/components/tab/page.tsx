import type { Metadata } from "next";
import { DetailDocTemplate } from "../../../components/docs/DetailDocTemplate";
import { formatEyebrow } from "../../../components/shell/navigation-utils";
import { TabPreview } from "./TabPreview";

export const metadata: Metadata = { title: "Tab" };

const tabCode = `<div role="tablist" aria-label="예시 탭">
  <button role="tab" aria-selected="true">공지사항</button>
  <button role="tab" aria-selected="false">자주 묻는 질문</button>
  <button role="tab" aria-selected="false">문의하기</button>
</div>`;

export default function PcTabDetail() {
  return (
    <DetailDocTemplate
      eyebrow={formatEyebrow("pc", "components")}
      category="Navigation"
      title="Tab"
      description="같은 위계의 콘텐츠를 전환해서 보여주는 탐색 요소입니다."
      version="1.0.0"
      previewCaption="실제로 눌러서 전환해 보세요."
      preview={<TabPreview />}
      tokenRows={[
        { label: "선택 색상", token: "--sys-color-action-primary" },
        { label: "전환 속도", token: "--ref-duration-fast" },
        { label: "선택 텍스트 굵기", token: "--ref-font-weight-semibold" },
      ]}
      guidelines={[
        {
          tone: "do",
          label: "권장",
          title: "같은 위계의 콘텐츠 전환에만 사용합니다",
          body: "성격이 다른 화면 이동에는 사용하지 않습니다.",
        },
        {
          tone: "avoid",
          label: "주의",
          title: "탭 개수를 7개 이상 두지 않습니다",
          body: "탭이 많아지면 좌측 사이드바 내비게이션 구조를 검토합니다.",
        },
      ]}
      accessibilityChecks={[
        "방향키로 탭 간 이동, Home/End로 처음 · 끝 탭 이동을 지원합니다(마우스 없이도 완전히 조작 가능).",
        "선택된 탭만 tabIndex=0을 갖도록 roving tabindex를 구현합니다.",
      ]}
      code={{ title: "HTML", code: tabCode }}
    />
  );
}
