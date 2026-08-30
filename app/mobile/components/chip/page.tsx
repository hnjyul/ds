import type { Metadata } from "next";
import { DetailDocTemplate } from "../../../components/docs/DetailDocTemplate";
import { formatEyebrow } from "../../../components/shell/navigation-utils";
import { ChipPreview } from "./ChipPreview";

export const metadata: Metadata = { title: "Chip" };

const chipCode = `<button class="chip" type="button" aria-pressed="true">
  카페
</button>`;

export default function MobileChipDetail() {
  return (
    <DetailDocTemplate
      eyebrow={formatEyebrow("mobile", "components")}
      category="Selection"
      title="Chip"
      description="선택 가능한 짧은 옵션이나 필터를 표현하는 작은 조작 요소입니다."
      version="1.2.0"
      previewCaption="눌러서 선택 상태를 바꿔 보세요."
      preview={<ChipPreview />}
      tokenRows={[
        { label: "높이", token: "--component-chip-height" },
        { label: "선택 배경", token: "--component-chip-background-selected" },
        { label: "모서리 반경", token: "--component-chip-radius" },
      ]}
      guidelines={[
        {
          tone: "do",
          label: "권장",
          title: "한 줄로 스캔 가능한 선택지에 사용합니다",
          body: "필터, 카테고리처럼 병렬적으로 비교되는 짧은 옵션에 사용합니다.",
        },
        {
          tone: "avoid",
          label: "주의",
          title: "필수 입력을 Chip으로만 받지 않습니다",
          body: "값을 반드시 선택해야 한다면 기본 선택값을 미리 지정해 둡니다.",
        },
      ]}
      accessibilityChecks={[
        "선택 상태는 aria-pressed 또는 aria-selected로 전달합니다.",
        "선택 여부를 색상뿐 아니라 굵기·아이콘 변화로도 함께 표현합니다.",
        "여러 Chip을 화살표 키로 이동할 수 있도록 그룹으로 묶는 것을 권장합니다.",
      ]}
      code={{ title: "HTML", code: chipCode }}
    />
  );
}
