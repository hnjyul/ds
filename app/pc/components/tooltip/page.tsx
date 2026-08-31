import type { Metadata } from "next";
import { DetailDocTemplate } from "../../../components/docs/DetailDocTemplate";
import { formatEyebrow } from "../../../components/shell/navigation-utils";

export const metadata: Metadata = { title: "Tooltip" };

const tooltipCode = `<span class="tooltip-demo">
  <button type="button" class="icon-button" aria-describedby="tip-1">?</button>
  <span role="tooltip" id="tip-1" class="tooltip-demo__bubble">주민등록상 주소 기준입니다</span>
</span>`;

export default function PcTooltipDetail() {
  return (
    <DetailDocTemplate
      eyebrow={formatEyebrow("pc", "components")}
      category="Feedback"
      title="Tooltip"
      description="짧은 보충 설명을 필요한 순간에만 보여주는 보조 정보입니다."
      version="1.0.0"
      previewCaption="포커스 · 호버 시 노출되는 상태를 고정해서 보여줍니다."
      preview={
        <span className="tooltip-demo">
          <button type="button" className="icon-button" aria-describedby="pc-tooltip-demo">
            ?
          </button>
          <span role="tooltip" id="pc-tooltip-demo" className="tooltip-demo__bubble">
            주민등록상 주소 기준입니다
          </span>
        </span>
      }
      tokenRows={[
        { label: "배경", token: "--sys-color-surface-inverse" },
        { label: "텍스트", token: "--sys-color-text-inverse" },
        { label: "모서리 반경", token: "--ref-radius-200" },
      ]}
      guidelines={[
        {
          tone: "do",
          label: "권장",
          title: "보조 설명에만 사용합니다",
          body: "필수 정보는 툴팁 없이도 화면에서 바로 확인 가능해야 합니다.",
        },
        {
          tone: "avoid",
          label: "주의",
          title: "hover만을 유일한 진입 방법으로 두지 않습니다",
          body: "포커스로도 동일한 내용이 노출되어야 합니다.",
        },
      ]}
      accessibilityChecks={[
        "role=\"tooltip\"과 aria-describedby로 트리거 요소와 연결합니다.",
        "Escape로 닫을 수 있어야 하고, 마우스가 벗어나도 포커스가 남아 있으면 유지합니다.",
      ]}
      code={{ title: "HTML", code: tooltipCode }}
    />
  );
}
