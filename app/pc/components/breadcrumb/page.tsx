import type { Metadata } from "next";
import { DetailDocTemplate } from "../../../components/docs/DetailDocTemplate";
import { formatEyebrow } from "../../../components/shell/navigation-utils";

export const metadata: Metadata = { title: "Breadcrumb" };

const breadcrumbCode = `<nav class="breadcrumb" aria-label="현재 위치">
  <ol>
    <li><a href="/pc">홈</a></li>
    <li><a href="/pc/components">컴포넌트</a></li>
    <li aria-current="page">Breadcrumb</li>
  </ol>
</nav>`;

export default function PcBreadcrumbDetail() {
  return (
    <DetailDocTemplate
      eyebrow={formatEyebrow("pc", "components")}
      category="Navigation"
      title="Breadcrumb"
      description="현재 위치까지의 경로를 계층적으로 보여주는 보조 내비게이션입니다."
      version="1.0.0"
      previewCaption="이 문서 상단의 경로 표시와 동일한 컴포넌트입니다."
      preview={
        <nav className="breadcrumb" aria-label="예시 경로">
          <ol>
            <li>
              <a href="#example-home">홈</a>
            </li>
            <li>
              <a href="#example-components">컴포넌트</a>
            </li>
            <li aria-current="page">Breadcrumb</li>
          </ol>
        </nav>
      }
      tokenRows={[
        { label: "현재 위치 텍스트", token: "--component-breadcrumb-text-current" },
        { label: "항목 간격", token: "--component-breadcrumb-gap" },
        { label: "구분자 색상", token: "--sys-color-border-strong" },
      ]}
      guidelines={[
        {
          tone: "do",
          label: "권장",
          title: "3~5단계 이내로 유지합니다",
          body: "경로가 너무 길면 중간 단계를 생략(…) 표시로 축약합니다.",
        },
        {
          tone: "avoid",
          label: "주의",
          title: "유일한 내비게이션 수단으로 쓰지 않습니다",
          body: "Breadcrumb는 GNB나 사이드바를 보완하는 보조 내비게이션입니다.",
        },
      ]}
      accessibilityChecks={[
        "nav 요소에 aria-label(예: '현재 위치')을 지정해 다른 nav와 구분합니다.",
        "마지막 항목(현재 페이지)은 링크가 아닌 텍스트로 두고 aria-current=\"page\"를 지정합니다.",
        "구분자(/)는 CSS content로 삽입해 스크린리더가 중복해서 읽지 않도록 합니다.",
      ]}
      code={{ title: "HTML", code: breadcrumbCode }}
    />
  );
}
