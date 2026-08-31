import type { Metadata } from "next";
import { DetailDocTemplate } from "../../../components/docs/DetailDocTemplate";
import { formatEyebrow } from "../../../components/shell/navigation-utils";

export const metadata: Metadata = { title: "Checkbox" };

const checkboxCode = `<label class="choice-demo__item">
  <input type="checkbox" checked />
  개인정보 수집·이용에 동의합니다
</label>`;

export default function PcCheckboxDetail() {
  return (
    <DetailDocTemplate
      eyebrow={formatEyebrow("pc", "components")}
      category="Inputs"
      title="Checkbox"
      description="여러 개를 동시에 선택할 수 있는 항목에 사용합니다."
      version="1.0.0"
      previewCaption="선택·미선택 상태를 함께 확인해 보세요."
      preview={
        <div className="choice-demo">
          <label>
            <input type="checkbox" defaultChecked />
            개인정보 수집·이용에 동의합니다
          </label>
          <label>
            <input type="checkbox" />
            마케팅 정보 수신에 동의합니다(선택)
          </label>
        </div>
      }
      tokenRows={[
        { label: "모서리 반경", token: "--ref-radius-100" },
        { label: "선택 색상", token: "--sys-color-action-primary" },
        { label: "테두리", token: "--sys-color-border-strong" },
      ]}
      guidelines={[
        {
          tone: "do",
          label: "권장",
          title: "0개 이상 여러 개 선택에 사용합니다",
          body: "약관 동의, 목록 다중 선택처럼 독립적인 항목에 사용합니다.",
        },
        {
          tone: "avoid",
          label: "주의",
          title: "상호 배타적인 선택에는 사용하지 않습니다",
          body: "하나만 골라야 하면 Radio를 사용합니다.",
        },
      ]}
      accessibilityChecks={[
        "네이티브 input[type=checkbox]를 기반으로 구현해 키보드 지원을 기본으로 확보합니다.",
        "표 안의 전체 선택 체크박스는 부분 선택 상태(aria-checked=\"mixed\")도 지원합니다.",
        "라벨을 클릭해도 선택되도록 label과 input을 명시적으로 연결합니다.",
      ]}
      code={{ title: "HTML", code: checkboxCode }}
    />
  );
}
