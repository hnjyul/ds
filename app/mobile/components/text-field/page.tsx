import type { Metadata } from "next";
import { DetailDocTemplate } from "../../../components/docs/DetailDocTemplate";
import { formatEyebrow } from "../../../components/shell/navigation-utils";

export const metadata: Metadata = { title: "TextField" };

const textFieldCode = `<div class="field-demo">
  <label for="phone">전화번호</label>
  <input id="phone" type="tel" placeholder="010-0000-0000" />
  <small>휴대폰 본인 인증에 사용됩니다.</small>
</div>`;

export default function MobileTextFieldDetail() {
  return (
    <DetailDocTemplate
      eyebrow={formatEyebrow("mobile", "components")}
      category="Inputs"
      title="TextField"
      description="사용자가 텍스트를 입력하고 상태 피드백을 받는 입력 요소입니다."
      version="1.8.0"
      previewCaption="기본 상태와 오류 상태를 함께 확인해 보세요."
      preview={
        <>
          <div className="field-demo">
            <label htmlFor="field-demo-default">전화번호</label>
            <input id="field-demo-default" type="tel" placeholder="010-0000-0000" />
            <small>휴대폰 본인 인증에 사용됩니다.</small>
          </div>
          <div className="field-demo">
            <label htmlFor="field-demo-error">이메일</label>
            <input id="field-demo-error" type="email" defaultValue="not-an-email" aria-invalid="true" />
            <small data-tone="error">올바른 이메일 형식이 아니에요.</small>
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
          title: "오류는 발생 즉시, 구체적으로 안내합니다",
          body: "제출 시점이 아니라 입력 직후 무엇이 잘못됐는지 알려줍니다.",
        },
        {
          tone: "avoid",
          label: "주의",
          title: "placeholder를 라벨 대신 쓰지 않습니다",
          body: "입력을 시작하면 사라지는 placeholder만으로 항목을 설명하지 않습니다.",
        },
      ]}
      accessibilityChecks={[
        "모든 입력에는 시각적으로 연결된 <label>이 있어야 합니다.",
        "오류 상태는 aria-invalid와 함께 오류 메시지를 aria-describedby로 연결합니다.",
        "키보드만으로 입력, 오류 확인, 재입력까지 가능해야 합니다.",
        "적절한 inputmode·autocomplete를 지정해 모바일 키보드를 최적화합니다.",
      ]}
      code={{ title: "HTML", code: textFieldCode }}
    />
  );
}
