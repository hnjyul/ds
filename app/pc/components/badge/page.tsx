import type { Metadata } from "next";
import { DetailDocTemplate } from "../../../components/docs/DetailDocTemplate";
import { formatEyebrow } from "../../../components/shell/navigation-utils";

export const metadata: Metadata = { title: "Badge" };

const badgeCode = `<span class="status-badge">접수완료</span>
<span class="status-badge status-badge--warning">처리중</span>
<span class="status-badge status-badge--danger">반려</span>`;

export default function PcBadgeDetail() {
  return (
    <DetailDocTemplate
      eyebrow={formatEyebrow("pc", "components")}
      category="Display"
      title="Badge"
      description="새 소식이나 처리할 항목의 수를 짧게 알려주는 표시자입니다."
      version="1.0.0"
      previewCaption="상태별 색상을 함께 확인해 보세요."
      preview={
        <>
          <span className="status-badge">접수완료</span>
          <span className="status-badge status-badge--info">검토중</span>
          <span className="status-badge status-badge--warning">보완필요</span>
          <span className="status-badge status-badge--danger">반려</span>
        </>
      }
      tokenRows={[
        { label: "모서리 반경", token: "--ref-radius-full" },
        { label: "정보 배경", token: "--sys-color-surface-accent-subtle" },
        { label: "경고 텍스트", token: "--sys-color-text-warning" },
      ]}
      guidelines={[
        {
          tone: "do",
          label: "권장",
          title: "처리 상태는 색상군을 고정해서 씁니다",
          body: "완료는 성공, 반려는 위험 색상처럼 같은 의미에는 항상 같은 색상을 사용합니다.",
        },
        {
          tone: "avoid",
          label: "주의",
          title: "긴 문장을 담지 않습니다",
          body: "상태 이름 한두 단어로 제한하고, 설명이 필요하면 본문 텍스트로 전달합니다.",
        },
      ]}
      accessibilityChecks={[
        "색상만으로 상태를 구분하지 않고 텍스트 라벨을 함께 표시합니다.",
        "표 안에서 반복되는 Badge는 열 헤더에 상태 값의 의미를 미리 설명합니다.",
      ]}
      code={{ title: "HTML", code: badgeCode }}
    />
  );
}
