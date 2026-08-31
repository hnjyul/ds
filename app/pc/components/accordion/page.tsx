import type { Metadata } from "next";
import { DetailDocTemplate } from "../../../components/docs/DetailDocTemplate";
import { formatEyebrow } from "../../../components/shell/navigation-utils";

export const metadata: Metadata = { title: "Accordion" };

const accordionCode = `<details class="accordion-demo__item" open>
  <summary>자주 묻는 질문. 신청 자격은 어떻게 되나요?</summary>
  <p>주민등록상 거주지가 해당 지역인 만 19세 이상 성인이면 신청할 수 있습니다.</p>
</details>`;

export default function PcAccordionDetail() {
  return (
    <DetailDocTemplate
      eyebrow={formatEyebrow("pc", "components")}
      category="Disclosure"
      title="Accordion"
      description="관련된 여러 콘텐츠를 접고 펼쳐 한 화면에서 탐색할 수 있게 합니다."
      version="1.1.0"
      previewCaption="여러 항목을 접고 펼쳐 한 화면에서 탐색할 수 있습니다."
      preview={
        <div className="accordion-demo">
          <details className="accordion-demo__item" open>
            <summary>자주 묻는 질문 1. 신청 자격은 어떻게 되나요?</summary>
            <p>주민등록상 거주지가 해당 지역인 만 19세 이상 성인이면 신청할 수 있습니다.</p>
          </details>
          <details className="accordion-demo__item">
            <summary>자주 묻는 질문 2. 처리 기간은 얼마나 걸리나요?</summary>
            <p>접수 후 영업일 기준 5일 이내에 결과를 안내드립니다.</p>
          </details>
        </div>
      }
      tokenRows={[
        { label: "모서리 반경", token: "--component-accordion-radius" },
        { label: "헤더 높이", token: "--component-accordion-header-height" },
        { label: "테두리", token: "--component-accordion-border-color" },
      ]}
      guidelines={[
        {
          tone: "do",
          label: "권장",
          title: "독립적인 정보 단위에 사용합니다",
          body: "각 항목이 다른 항목과 순서 의존성 없이 이해될 수 있어야 합니다.",
        },
        {
          tone: "avoid",
          label: "주의",
          title: "필수로 읽어야 하는 정보를 숨기지 않습니다",
          body: "약관, 필수 안내처럼 반드시 확인해야 하는 정보는 접어 두지 않습니다.",
        },
      ]}
      accessibilityChecks={[
        "네이티브 details/summary 요소를 우선 사용해 키보드 · 스크린리더 지원을 기본으로 확보합니다.",
        "펼침 상태는 aria-expanded 또는 open 속성으로 보조기술에 전달합니다.",
        "여러 항목을 동시에 펼칠 수 있는지, 하나만 펼쳐지는지 동작 방식을 문서에 명시합니다.",
      ]}
      code={{ title: "HTML", code: accordionCode }}
    />
  );
}
