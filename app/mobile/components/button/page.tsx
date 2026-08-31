import type { Metadata } from "next";
import { DetailDocTemplate } from "../../../components/docs/DetailDocTemplate";
import { formatEyebrow } from "../../../components/shell/navigation-utils";

export const metadata: Metadata = { title: "Button" };

const buttonCode = `<button class="button button--primary" type="button">
  변경사항 저장
</button>`;

export default function MobileButtonDetail() {
  return (
    <DetailDocTemplate
      eyebrow={formatEyebrow("mobile", "components")}
      category="Actions"
      title="Button"
      description="화면에서 가장 중요한 행동을 실행하는 기본 조작 요소입니다."
      version="2.1.0"
      previewCaption="실제 상태를 확인해 보세요."
      preview={
        <>
          <button className="button button--primary" type="button">
            변경사항 저장
          </button>
          <button className="button button--secondary" type="button">
            취소
          </button>
          <button className="button button--secondary" type="button" disabled>
            사용할 수 없음
          </button>
        </>
      }
      tokenRows={[
        { label: "기본 배경", token: "--component-button-background-primary" },
        { label: "보조 배경", token: "--component-button-background-secondary" },
        { label: "모서리 반경", token: "--component-button-radius" },
      ]}
      guidelines={[
        {
          tone: "do",
          label: "권장",
          title: "행동의 결과를 동사로 씁니다",
          body: "“확인”보다 “변경사항 저장”처럼 결과를 예측할 수 있게 표현합니다.",
        },
        {
          tone: "avoid",
          label: "주의",
          title: "동일한 위계의 강조를 반복하지 않습니다",
          body: "한 화면의 주요 버튼은 하나를 기본으로 하고 보조 행동은 낮춥니다.",
        },
      ]}
      accessibilityChecks={[
        "텍스트만으로 목적을 이해할 수 있는 접근 가능한 이름을 제공합니다.",
        "키보드 초점과 눌림 상태가 배경과 3:1 이상 구분되도록 합니다.",
        "비활성 상태는 색상뿐 아니라 실제 disabled 속성으로 전달합니다.",
        "터치 대상은 최소 44px × 44px의 조작 영역을 확보합니다.",
      ]}
      code={{ title: "HTML", code: buttonCode }}
    />
  );
}
