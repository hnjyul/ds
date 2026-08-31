import type { Metadata } from "next";
import { DetailDocTemplate } from "../../../components/docs/DetailDocTemplate";
import { formatEyebrow } from "../../../components/shell/navigation-utils";

export const metadata: Metadata = { title: "Pagination" };

const paginationCode = `<nav class="pagination-demo" aria-label="페이지 탐색">
  <button type="button">이전</button>
  <button type="button" aria-current="page">1</button>
  <button type="button">2</button>
  <button type="button">3</button>
  <button type="button">다음</button>
</nav>`;

export default function PcPaginationDetail() {
  return (
    <DetailDocTemplate
      eyebrow={formatEyebrow("pc", "components")}
      category="Navigation"
      title="Pagination"
      description="많은 목록을 페이지 단위로 나누어 탐색할 수 있게 합니다."
      version="1.0.0"
      previewCaption="현재 페이지 상태를 함께 확인해 보세요."
      preview={
        <nav className="pagination-demo" aria-label="예시 페이지 탐색">
          <button type="button">이전</button>
          <button type="button" aria-current="page">
            1
          </button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button">다음</button>
        </nav>
      }
      tokenRows={[
        { label: "선택 색상", token: "--sys-color-action-primary" },
        { label: "모서리 반경", token: "--ref-radius-200" },
        { label: "버튼 간격", token: "--ref-space-100" },
      ]}
      guidelines={[
        {
          tone: "do",
          label: "권장",
          title: "현재 페이지와 전체 페이지 수를 함께 보여줍니다",
          body: "이전 · 다음뿐 아니라 임의 페이지로 바로 이동할 수 있게 합니다.",
        },
        {
          tone: "avoid",
          label: "주의",
          title: "페이지 번호만으로 목록 상태를 대신하지 않습니다",
          body: "총 항목 수와 정렬 기준을 목록 위에 함께 안내합니다.",
        },
      ]}
      accessibilityChecks={[
        "현재 페이지는 aria-current=\"page\"로 표시합니다.",
        "페이지 이동 버튼에 대상 페이지 번호를 포함한 접근 가능한 이름을 제공합니다.",
      ]}
      code={{ title: "HTML", code: paginationCode }}
    />
  );
}
