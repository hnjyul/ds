import type { Metadata } from "next";
import { DetailDocTemplate } from "../../../components/docs/DetailDocTemplate";
import { formatEyebrow } from "../../../components/shell/navigation-utils";

export const metadata: Metadata = { title: "Selectbox" };

const selectboxCode = `<div class="field-demo">
  <label for="region">신청 지역</label>
  <select id="region">
    <option>서울특별시</option>
    <option>부산광역시</option>
    <option>대구광역시</option>
  </select>
</div>`;

export default function PcSelectboxDetail() {
  return (
    <DetailDocTemplate
      eyebrow={formatEyebrow("pc", "components")}
      category="Inputs"
      title="Selectbox"
      description="여러 옵션 중 하나를 목록에서 선택하는 입력 요소입니다."
      version="1.0.0"
      previewCaption="네이티브 select 기반 예시입니다."
      preview={
        <div className="field-demo">
          <label htmlFor="pc-selectbox-demo">신청 지역</label>
          <select id="pc-selectbox-demo" defaultValue="서울특별시">
            <option>서울특별시</option>
            <option>부산광역시</option>
            <option>대구광역시</option>
          </select>
        </div>
      }
      tokenRows={[
        { label: "필드 높이", token: "--component-field-height" },
        { label: "테두리", token: "--component-field-border-color" },
        { label: "모서리 반경", token: "--ref-radius-100" },
      ]}
      guidelines={[
        {
          tone: "do",
          label: "권장",
          title: "5개 이상의 옵션 중 하나를 고를 때 사용합니다",
          body: "옵션이 4개 이하라면 Radio 그룹이 더 빠르게 스캔됩니다.",
        },
        {
          tone: "avoid",
          label: "주의",
          title: "뜻이 통하지 않는 축약어를 쓰지 않습니다",
          body: "행정 용어가 필요하다면 도움말을 함께 제공합니다.",
        },
      ]}
      accessibilityChecks={[
        "네이티브 select 또는 동등한 listbox 패턴을 사용해 키보드 탐색을 기본 제공합니다.",
        "선택 값이 바뀌면 결과를 인접 영역에도 명확히 반영합니다.",
      ]}
      code={{ title: "HTML", code: selectboxCode }}
    />
  );
}
