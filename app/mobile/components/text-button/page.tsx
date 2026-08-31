import type { Metadata } from "next";
import { DetailDocTemplate } from "../../../components/docs/DetailDocTemplate";
import { formatEyebrow } from "../../../components/shell/navigation-utils";

export const metadata: Metadata = { title: "TextButton" };

const textButtonCode = `<button class="text-button-demo" type="button">
  전체 보기
</button>`;

export default function MobileTextButtonDetail() {
  return (
    <DetailDocTemplate
      eyebrow={formatEyebrow("mobile", "components")}
      category="Actions"
      title="TextButton"
      description="배경 없이 텍스트만으로 표현되는 가장 낮은 위계의 조작 요소입니다. BottomCTA의 보조 행동처럼 Button보다 강조를 낮춰야 할 때 씁니다."
      version="1.0.0"
      previewCaption="Button보다 시각적 무게가 가볍습니다."
      preview={
        <>
          <button className="text-button-demo" type="button">
            전체 보기
          </button>
          <button className="text-button-demo" type="button">
            건너뛰기
          </button>
        </>
      }
      tokenRows={[
        { label: "텍스트 색상", token: "--sys-color-text-accent" },
        { label: "호버 배경", token: "--sys-color-surface-accent-subtle" },
        { label: "모서리 반경", token: "--ref-radius-200" },
      ]}
      guidelines={[
        {
          tone: "do",
          label: "권장",
          title: "화면당 주 버튼을 하나로 유지하기 위해 씁니다",
          body: "Button과 나란히 둘 때는 항상 Button보다 시각적 무게가 낮아야 합니다.",
        },
        {
          tone: "avoid",
          label: "주의",
          title: "화면의 유일한 행동으로 쓰지 않습니다",
          body: "가장 중요한 행동은 항상 Button으로 표현하고, TextButton은 보조 행동에만 사용합니다.",
        },
      ]}
      accessibilityChecks={[
        "배경이 없어도 터치 영역은 44px × 44px 이상을 확보합니다.",
        "텍스트 색상만으로 버튼임을 구분하므로, 본문 링크와 시각적으로 혼동되지 않도록 주변 여백을 둡니다.",
      ]}
      code={{ title: "HTML", code: textButtonCode }}
    />
  );
}
