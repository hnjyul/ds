import type { Metadata } from "next";
import { DetailDocTemplate } from "../../../components/docs/DetailDocTemplate";
import { formatEyebrow } from "../../../components/shell/navigation-utils";

export const metadata: Metadata = { title: "Table" };

const tableCode = `<table class="table-demo">
  <thead>
    <tr>
      <th scope="col">번호</th>
      <th scope="col">신청인</th>
      <th scope="col">상태</th>
      <th scope="col">신청일</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>홍길동</td><td>접수완료</td><td>2026.08.12</td></tr>
  </tbody>
</table>`;

export default function PcTableDetail() {
  return (
    <DetailDocTemplate
      eyebrow={formatEyebrow("pc", "components")}
      category="Data"
      title="Table"
      description="행과 열로 구조화된 데이터를 비교하고 탐색할 수 있게 보여줍니다."
      version="1.0.0"
      previewCaption="행과 열로 구성된 데이터를 스캔하기 쉽게 정렬합니다."
      preview={
        <div className="table-demo-wrapper">
          <table className="table-demo">
            <thead>
              <tr>
                <th scope="col">번호</th>
                <th scope="col">신청인</th>
                <th scope="col">상태</th>
                <th scope="col">신청일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>홍길동</td>
                <td>접수완료</td>
                <td>2026.08.12</td>
              </tr>
              <tr>
                <td>2</td>
                <td>김민준</td>
                <td>처리중</td>
                <td>2026.08.20</td>
              </tr>
              <tr>
                <td>3</td>
                <td>이서연</td>
                <td>반려</td>
                <td>2026.08.24</td>
              </tr>
            </tbody>
          </table>
        </div>
      }
      tokenRows={[
        { label: "헤더 배경", token: "--component-table-header-background" },
        { label: "행 구분선", token: "--component-table-row-border" },
        { label: "셀 여백", token: "--component-table-cell-padding-inline" },
      ]}
      guidelines={[
        {
          tone: "do",
          label: "권장",
          title: "표 대신 목록으로 대체 가능한지 먼저 검토합니다",
          body: "KRDS 가이드처럼, 정의 목록이나 단순 나열로 충분하면 표를 사용하지 않습니다.",
        },
        {
          tone: "avoid",
          label: "주의",
          title: "레이아웃 목적으로 표를 사용하지 않습니다",
          body: "시각적 정렬만 필요하다면 CSS 그리드를 사용합니다.",
        },
      ]}
      accessibilityChecks={[
        "모든 th에 scope 속성을 지정해 행 · 열 헤더를 명확히 구분합니다.",
        "표 전체를 요약하는 caption 또는 접근 가능한 이름을 제공합니다.",
        "가로 스크롤이 필요한 넓은 표는 스크롤 영역에 tabindex=\"0\"과 role=\"region\"을 함께 제공합니다.",
        "정렬 가능한 헤더는 버튼으로 구현하고 현재 정렬 방향을 aria-sort로 전달합니다.",
      ]}
      code={{ title: "HTML", code: tableCode }}
    />
  );
}
