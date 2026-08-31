import type { Metadata } from "next";
import { DetailDocTemplate } from "../../../components/docs/DetailDocTemplate";
import { formatEyebrow } from "../../../components/shell/navigation-utils";

export const metadata: Metadata = { title: "TextField" };

const textFieldCode = `<div class="field-demo">
  <label for="dept">담당 부서</label>
  <input id="dept" type="text" placeholder="예: 민원여권과" />
  <small>정확한 부서명을 입력하면 처리 담당자를 바로 찾을 수 있습니다.</small>
</div>`;

export default function PcTextFieldDetail() {
  return (
    <DetailDocTemplate
      eyebrow={formatEyebrow("pc", "components")}
      category="Inputs"
      title="TextField"
      description="사용자가 텍스트를 입력하고 상태 피드백을 받는 입력 요소입니다. 모바일과 같은 필드 토큰을 공유합니다."
      version="1.0.0"
      previewCaption="기본 상태와 오류 상태를 함께 확인해 보세요."
      preview={
        <>
          <div className="field-demo">
            <label htmlFor="pc-field-default">담당 부서</label>
            <input id="pc-field-default" type="text" placeholder="예: 민원여권과" />
            <small>정확한 부서명을 입력하면 처리 담당자를 바로 찾을 수 있습니다.</small>
          </div>
          <div className="field-demo">
            <label htmlFor="pc-field-error">사업자등록번호</label>
            <input id="pc-field-error" type="text" defaultValue="123-45-678" aria-invalid="true" />
            <small data-tone="error">10자리 숫자를 하이픈 없이 입력해 주세요.</small>
          </div>
        </>
      }
      tokenRows={[
        { label: "필드 높이", token: "--component-field-height" },
        { label: "포커스 테두리", token: "--component-field-border-color-focus" },
        { label: "오류 테두리", token: "--component-field-border-color-error" },
      ]}
      guidelines={[
        {
          tone: "do",
          label: "권장",
          title: "레이블과 도움말을 항상 함께 제공합니다",
          body: "필수 여부와 형식 예시를 레이블 아래 도움말로 명시합니다.",
        },
        {
          tone: "avoid",
          label: "주의",
          title: "필수 입력을 색상만으로 표시하지 않습니다",
          body: "별표(*)나 '필수' 텍스트를 색상과 함께 사용합니다.",
        },
      ]}
      accessibilityChecks={[
        "레이블과 입력을 for/id로 명시적으로 연결합니다.",
        "오류 메시지는 aria-describedby로 입력 요소와 연결합니다.",
        "포커스 테두리는 배경과 3:1 이상의 대비를 유지합니다.",
      ]}
      code={{ title: "HTML", code: textFieldCode }}
    />
  );
}
