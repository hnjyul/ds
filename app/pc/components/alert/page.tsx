import type { Metadata } from "next";
import { DetailDocTemplate } from "../../../components/docs/DetailDocTemplate";
import { formatEyebrow } from "../../../components/shell/navigation-utils";

export const metadata: Metadata = { title: "Alert · Callout" };

const alertCode = `<div class="callout">
  <span class="callout__mark">!</span>
  <div>
    <h3>접수 마감이 얼마 남지 않았습니다</h3>
    <p>2026년 9월 5일까지 제출된 서류만 이번 회차 심사에 반영됩니다.</p>
  </div>
</div>`;

export default function PcAlertDetail() {
  return (
    <DetailDocTemplate
      eyebrow={formatEyebrow("pc", "components")}
      category="Feedback"
      title="Alert · Callout"
      description="본문 흐름 안에서 주의나 안내 메시지를 강조해 보여줍니다."
      version="1.0.0"
      previewCaption="이 문서 곳곳에 쓰인 것과 같은 컴포넌트입니다."
      preview={
        <div className="callout">
          <span className="callout__mark">!</span>
          <div>
            <h3>접수 마감이 얼마 남지 않았습니다</h3>
            <p>2026년 9월 5일까지 제출된 서류만 이번 회차 심사에 반영됩니다.</p>
          </div>
        </div>
      }
      tokenRows={[
        { label: "경고 배경", token: "--sys-color-surface-warning-subtle" },
        { label: "경고 텍스트", token: "--sys-color-text-warning" },
        { label: "모서리 반경", token: "--ref-radius-300" },
      ]}
      guidelines={[
        {
          tone: "do",
          label: "권장",
          title: "심각도에 따라 색상과 아이콘을 구분합니다",
          body: "정보 · 성공 · 경고 · 오류 네 가지로 의미를 분리합니다.",
        },
        {
          tone: "avoid",
          label: "주의",
          title: "일반 안내에 오류 색상을 남용하지 않습니다",
          body: "실제 오류가 아니라면 중립적인 정보 색상을 사용합니다.",
        },
      ]}
      accessibilityChecks={[
        "경고 · 오류 Alert는 role=\"alert\"로 등장 즉시 스크린리더에 전달합니다.",
        "색상만으로 심각도를 구분하지 않고 아이콘과 텍스트 라벨을 함께 사용합니다.",
      ]}
      code={{ title: "HTML", code: alertCode }}
    />
  );
}
