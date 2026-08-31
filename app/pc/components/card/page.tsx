import type { Metadata } from "next";
import { DetailDocTemplate } from "../../../components/docs/DetailDocTemplate";
import { formatEyebrow } from "../../../components/shell/navigation-utils";

export const metadata: Metadata = { title: "Card" };

const cardCode = `<article class="card-demo">
  <h3>2026년 청년 월세 지원</h3>
  <p>만 19~34세 무주택 청년에게 월 최대 20만 원을 지원합니다.</p>
</article>`;

export default function PcCardDetail() {
  return (
    <DetailDocTemplate
      eyebrow={formatEyebrow("pc", "components")}
      category="Display"
      title="Card"
      description="관련 정보를 하나의 표면에 묶어 보여주는 콘텐츠 단위입니다."
      version="1.0.0"
      previewCaption="목록에서 반복되는 카드 하나의 예시입니다."
      preview={
        <article className="card-demo">
          <h3>2026년 청년 월세 지원</h3>
          <p>만 19~34세 무주택 청년에게 월 최대 20만 원을 지원합니다.</p>
        </article>
      }
      tokenRows={[
        { label: "내부 여백", token: "--component-card-padding" },
        { label: "모서리 반경", token: "--component-card-radius" },
        { label: "그림자", token: "--component-card-shadow" },
      ]}
      guidelines={[
        {
          tone: "do",
          label: "권장",
          title: "관련 정보를 하나의 조작 단위로 묶습니다",
          body: "제목, 요약, 행동을 카드 하나에 담아 스캔하기 쉽게 합니다.",
        },
        {
          tone: "avoid",
          label: "주의",
          title: "카드 안에 카드를 중첩하지 않습니다",
          body: "위계가 더 필요하면 카드 대신 섹션 구분선을 사용합니다.",
        },
      ]}
      accessibilityChecks={[
        "카드 전체가 하나의 링크라면 카드 내부에 다른 링크를 중첩해 두지 않습니다.",
        "카드의 제목을 heading으로 마크업해 목록 단위 탐색을 돕습니다.",
      ]}
      code={{ title: "HTML", code: cardCode }}
    />
  );
}
