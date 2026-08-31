import type { Metadata } from "next";
import { DetailDocTemplate } from "../../../components/docs/DetailDocTemplate";
import { formatEyebrow } from "../../../components/shell/navigation-utils";

export const metadata: Metadata = { title: "BottomSheet" };

const bottomSheetCode = `<div class="bottom-sheet-demo" role="dialog" aria-modal="true" aria-labelledby="sheet-title">
  <div class="bottom-sheet-demo__handle" aria-hidden="true"></div>
  <h3 id="sheet-title">배송지를 선택하세요</h3>
  <p>최근 사용한 배송지 중 하나를 선택하거나 새 배송지를 추가할 수 있습니다.</p>
  <div class="bottom-sheet-demo__actions">
    <button class="button button--primary" type="button">이 주소로 배송</button>
    <button class="button button--secondary" type="button">새 배송지 추가</button>
  </div>
</div>`;

export default function MobileBottomSheetDetail() {
  return (
    <DetailDocTemplate
      eyebrow={formatEyebrow("mobile", "components")}
      category="Overlay"
      title="BottomSheet"
      description="화면 하단에서 올라와 추가 선택지나 정보를 보여주는 임시 표면입니다."
      version="1.4.0"
      previewCaption="화면 하단에서 올라오는 형태를 정적으로 보여줍니다."
      preview={
        <div className="bottom-sheet-demo">
          <div className="bottom-sheet-demo__handle" aria-hidden="true" />
          <h3>배송지를 선택하세요</h3>
          <p>최근 사용한 배송지 중 하나를 선택하거나 새 배송지를 추가할 수 있습니다.</p>
          <div className="bottom-sheet-demo__actions">
            <button className="button button--primary" type="button">
              이 주소로 배송
            </button>
            <button className="button button--secondary" type="button">
              새 배송지 추가
            </button>
          </div>
        </div>
      }
      tokenRows={[
        { label: "상단 모서리 반경", token: "--component-sheet-radius-top" },
        { label: "내부 여백", token: "--component-sheet-padding" },
        { label: "배경", token: "--component-sheet-background" },
      ]}
      guidelines={[
        {
          tone: "do",
          label: "권장",
          title: "한 화면의 결정 하나에 집중시킵니다",
          body: "여러 단계를 거치는 흐름이 아니라 단일 선택이나 확인에 사용합니다.",
        },
        {
          tone: "avoid",
          label: "주의",
          title: "필수 정보를 접어두지 않습니다",
          body: "핵심 선택지는 추가 스크롤 없이 보이도록 시트 높이를 제한합니다.",
        },
      ]}
      accessibilityChecks={[
        "열릴 때 포커스를 시트 안으로 이동하고, 배경 콘텐츠는 inert 처리합니다.",
        "핸들(손잡이)은 장식 요소이므로 aria-hidden을 적용합니다.",
        "Escape 키와 배경 탭으로 모두 닫을 수 있어야 합니다.",
        "시트의 제목 요소를 role=\"dialog\"의 접근 가능한 이름으로 연결합니다.",
      ]}
      code={{ title: "HTML", code: bottomSheetCode }}
    />
  );
}
