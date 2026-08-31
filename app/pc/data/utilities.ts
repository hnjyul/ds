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

  "language-switcher": {
    category: "Utility",
    specimen: {
      kind: "table",
      rows: [
        { label: "배치 위치", value: "GNB 유틸리티 바 우측", note: "전체메뉴 · 로그인과 같은 줄에 두고 GNB 주 메뉴보다 낮은 시각적 우선순위로 배치합니다." },
        { label: "트리거 크기", value: "--component-button-height-sm", note: "유틸리티 바의 다른 텍스트 링크와 높이를 맞춰 정렬을 흐트러뜨리지 않습니다." },
        { label: "닫힘 상태 표시", value: "현재 언어명 텍스트", note: "국기 아이콘이나 언어 코드만으로 대체하지 않고 언어명을 문자로 노출합니다." },
        { label: "펼침 목록", value: "--ref-z-overlay", note: "--component-navigation-item-height 높이의 GNB 드롭다운과 같은 구조를 재사용해 다른 콘텐츠 위에 표시합니다." },
      ],
    },
    usageNotes: [
      "언어 전환 트리거는 GNB 유틸리티 바 안에서 로그인 · 전체메뉴 링크와 동일한 --component-button-height-sm 높이로 맞추고 별도로 축소하지 않습니다.",
      "펼침 목록에서 현재 언어 항목은 --sys-color-action-primary 텍스트 색상과 aria-current 속성으로 함께 표시해, 이동 없이도 현재 언어를 바로 확인하게 합니다.",
    ],
    accessibilityNotes: [
      "트리거에 aria-haspopup=\"listbox\"와 aria-expanded를 지정하고, 목록 항목은 방향키로 이동하며 Escape 키로 닫히게 구현합니다.",
      "언어명은 번역하지 않고 해당 언어로 표기해(예: 한국어, English), 원어 사용자가 목록에서 자신의 언어를 바로 찾을 수 있게 합니다.",
    ],
  },

  resize: {
    category: "Utility",
    specimen: {
      kind: "table",
      rows: [
        { label: "확대 단계", value: "3단계 (100% · 125% · 150%)", note: "html 요소의 font-size 배율을 전환해 rem 기반 --sys-type-body-md-size 등 텍스트 토큰이 함께 커지도록 합니다." },
        { label: "확대 상한", value: "200%", note: "KWCAG 1.4.4 텍스트 크기 조정 기준에 따라 200%까지 확대해도 가로 스크롤 없이 콘텐츠를 읽을 수 있어야 합니다." },
        { label: "컨트롤 위치", value: "GNB 우측, 로그인 앞", note: "본문 진입 전에 항상 노출되는 고정 위치로 페이지마다 이동하지 않습니다." },
        { label: "버튼 스타일", value: "--component-button-height-sm, --sys-color-action-secondary", note: "보조 버튼 톤을 사용해 본문의 주요 행동(Primary 버튼)과 시각적으로 구분합니다." },
      ],
    },
    usageNotes: [
      "글자 크기 조정 컨트롤은 GNB 안에 상시 노출하고, 별도 설정 페이지로 숨기지 않습니다.",
      "선택한 확대 단계는 localStorage에 저장해 페이지를 이동하거나 새로고침해도 그대로 유지합니다.",
    ],
    accessibilityNotes: [
      "150% 단계로 확대해도 버튼 레이블이나 표 셀 텍스트가 잘리거나 다른 요소와 겹치지 않는지 확인합니다.",
      "사이트 내 확대 컨트롤은 브라우저 자체 확대(Ctrl + 스크롤, 200%)를 대체하지 않으며 두 기능은 함께 동작해야 합니다.",
    ],
  },

  "accessible-multimedia": {
    category: "Utility",
    specimen: {
      kind: "table",
      rows: [
        { label: "이미지 대체 텍스트", value: "alt 속성 필수 지정", note: "정보를 전달하는 이미지는 내용을 그대로 옮긴 대체 텍스트를 넣고, 장식용 이미지는 alt 값을 빈 문자열로 지정합니다." },
        { label: "동영상 자막", value: "자막 트랙(WebVTT) 제공", note: "사전 녹화 동영상은 발화 내용과 화자를 구분한 자막 파일을 함께 제공합니다." },
        { label: "오디오 대체 텍스트", value: "텍스트 스크립트 제공", note: "오디오 전용 콘텐츠는 내용을 문자로 옮긴 스크립트를 재생 영역 인근에 배치합니다." },
        { label: "자동 재생 제어", value: "정지 · 일시정지 컨트롤 노출", note: "3초 이상 자동 재생되는 콘텐츠는 사용자가 즉시 멈출 수 있는 컨트롤을 제공합니다." },
      ],
    },
    usageNotes: [
      "동영상을 게시하기 전 자막 파일의 타임코드와 화자 표기가 실제 발화와 일치하는지 검수합니다.",
      "정보 전달용 이미지는 그림이 담은 의미를 대체 텍스트에 그대로 옮기고, 장식용 아이콘 · 배경 이미지는 빈 alt로 처리해 스크린리더가 반복 안내하지 않도록 합니다.",
    ],
    accessibilityNotes: [
      "KWCAG(한국형 웹 콘텐츠 접근성 지침) 1.1.1 텍스트 아닌 콘텐츠, 1.2.2 자막 제공 기준에 대응합니다.",
      "3초 이상 자동 재생되는 콘텐츠는 KWCAG 2.2.2 일시정지 · 정지 · 숨기기 기준에 따라 사용자가 제어할 수 있어야 합니다.",
    ],
  },
};
