import type { Metadata } from "next";
import { DetailDocTemplate } from "../../../components/docs/DetailDocTemplate";
import { formatEyebrow } from "../../../components/shell/navigation-utils";

export const metadata: Metadata = { title: "IconButton" };

const iconButtonCode = `<button class="icon-button" type="button" aria-label="뒤로가기">
  <span aria-hidden="true">←</span>
</button>`;

export default function MobileIconButtonDetail() {
  return (
    <DetailDocTemplate
      eyebrow={formatEyebrow("mobile", "components")}
      category="Actions"
      title="IconButton"
      description="아이콘 하나로 의미를 전달하는 조작 요소입니다. 레이블 텍스트 없이도 터치 영역과 접근 가능한 이름을 모두 갖춰야 합니다."
      version="1.0.0"
      previewCaption="시각적 아이콘은 작아도 터치 영역은 44px 이상을 확보합니다."
      preview={
        <>
          <button className="icon-button" type="button" aria-label="뒤로가기">
            <span aria-hidden="true">←</span>
          </button>
          <button className="icon-button" type="button" aria-label="검색">
            <span aria-hidden="true">⌕</span>
          </button>
          <button className="icon-button" type="button" aria-label="더보기">
            <span aria-hidden="true">⋯</span>
          </button>
        </>
      }
      tokenRows={[
        { label: "터치 영역", token: "--ref-space-500" },
        { label: "모서리 반경", token: "--ref-radius-200" },
        { label: "호버 배경", token: "--sys-color-surface-subtle" },
      ]}
      guidelines={[
        {
          tone: "do",
          label: "권장",
          title: "행동 하나에 아이콘 하나만 씁니다",
          body: "여러 의미를 하나의 아이콘에 담지 않고, 필요하면 텍스트 버튼으로 바꿉니다.",
        },
        {
          tone: "avoid",
          label: "주의",
          title: "아이콘만으로 뜻이 통하지 않으면 사용하지 않습니다",
          body: "널리 쓰이는 기호(뒤로가기, 닫기, 검색)가 아니라면 텍스트 라벨을 함께 노출합니다.",
        },
      ]}
      accessibilityChecks={[
        "시각적 아이콘 크기와 무관하게 실제 터치 영역은 44px × 44px 이상을 확보합니다.",
        "아이콘은 aria-hidden으로 감추고, 버튼 자체에 aria-label로 접근 가능한 이름을 제공합니다.",
      ]}
      code={{ title: "HTML", code: iconButtonCode }}
    />
  );
}
