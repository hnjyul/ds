import type { ReferenceSpecimen } from "../../components/docs/ReferenceDocTemplate";

export type UtilityEntry = {
  category: string;
  specimen: ReferenceSpecimen;
  usageNotes: string[];
  accessibilityNotes: string[];
};

export const pcUtilities: Record<string, UtilityEntry> = {
  "focus-ring": {
    category: "Utility",
    specimen: {
      kind: "table",
      rows: [
        { label: "포커스 색상", value: "--sys-color-focus-ring", note: "Primary 계열 색상으로, 배경과 최소 3:1 대비를 유지합니다." },
        { label: "아웃라인 두께", value: "3px", note: "마우스 클릭보다 키보드 탐색을 우선 고려한 두께입니다." },
        { label: "적용 방식", value: ":focus-visible", note: "마우스 클릭 시에는 표시하지 않고 키보드 포커스에만 나타납니다." },
      ],
    },
    usageNotes: [
      "outline: none으로 임의로 제거하지 않고, 필요하다면 :focus-visible로 시점만 제어합니다.",
      "커스텀 컴포넌트(Tab, Accordion 헤더 등)도 네이티브 포커스 스타일과 동일한 두께 · 색상을 유지합니다.",
    ],
    accessibilityNotes: [
      "포커스 순서는 시각적 배치 순서와 일치해야 하며, tabindex를 양수로 강제하지 않습니다.",
      "KWCAG(한국형 웹 콘텐츠 접근성 지침) 2.4.7 초점 이동과 표시 기준을 따릅니다.",
    ],
  },

  "responsive-grid": {
    category: "Utility",
    specimen: {
      kind: "table",
      rows: [
        { label: "~1023px", value: "1열", note: "사이드바가 숨겨지고 전체 메뉴 버튼으로 대체됩니다." },
        { label: "1024–1279px", value: "사이드바 + 본문 2열", note: "우측 목차는 숨기고 페이지 하단 접이식 목차로 대체합니다." },
        { label: "1280px~", value: "사이드바 + 본문 + 목차 3열", note: "PC 서페이스의 기준 레이아웃입니다." },
      ],
    },
    usageNotes: [
      "표(Table)처럼 열이 많은 콘텐츠는 그리드 단계와 별개로 자체 가로 스크롤 영역을 갖습니다.",
      "카드 그리드(Foundation·Components 목록)는 auto-fill을 사용해 뷰포트 폭에 따라 열 수가 자연스럽게 늘어납니다.",
    ],
    accessibilityNotes: [
      "그리드 단계가 바뀌어도 콘텐츠 총량은 동일하게 유지하고, 정보를 숨기지 않습니다.",
    ],
  },

  "spacing-scale": {
    category: "Utility",
    specimen: {
      kind: "table",
      rows: [
        { label: "space-200", value: "16px", note: "표 셀, 카드 내부의 기본 여백." },
        { label: "space-300", value: "24px", note: "섹션 내부 요소 사이의 여백." },
        { label: "space-500", value: "40px", note: "섹션과 섹션을 구분하는 여백." },
      ],
    },
    usageNotes: [
      "PC 서페이스는 정보 밀도가 높은 대신, 섹션 사이 여백(space-500 이상)은 모바일보다 넉넉하게 유지해 시각적 피로를 줄입니다.",
      "표 셀 내부처럼 촘촘한 영역은 space-150~200 범위로 제한합니다.",
    ],
    accessibilityNotes: [
      "인접한 클릭 대상 사이 최소 간격을 8px 이상 유지해 마우스 오조작을 줄입니다.",
    ],
  },

  "kwcag-checklist": {
    category: "Utility",
    specimen: {
      kind: "table",
      rows: [
        { label: "인식의 용이성", value: "대체 텍스트, 자막, 명확한 지시", note: "이미지 · 아이콘에 의미 있는 대체 텍스트를 제공합니다." },
        { label: "운용의 용이성", value: "키보드 접근성, 충분한 시간", note: "모든 기능을 키보드만으로 조작할 수 있어야 합니다." },
        { label: "이해의 용이성", value: "가독성, 예측 가능성, 콘텐츠의 논리성", note: "동일한 기능은 항상 같은 방식으로 동작해야 합니다." },
        { label: "견고성", value: "문법 준수, 웹 애플리케이션 접근성", note: "마크업이 표준을 준수해 보조기술과 호환되어야 합니다." },
      ],
    },
    usageNotes: [
      "이 체크리스트는 한국형 웹 콘텐츠 접근성 지침(KWCAG)의 4대 원칙 구조를 요약한 것으로, 공공 서비스 컴포넌트를 새로 만들 때 최소 점검 기준으로 사용합니다.",
      "각 컴포넌트 문서의 '접근성' 섹션은 이 4대 원칙 중 해당 컴포넌트에 실제로 적용되는 항목만 구체적으로 서술합니다.",
    ],
    accessibilityNotes: [
      "새 컴포넌트를 추가할 때 4대 원칙 각각에 대해 최소 1개 이상의 확인 항목을 문서화하는 것을 원칙으로 합니다.",
    ],
  },
};
