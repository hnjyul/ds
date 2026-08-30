import type { ReferenceSpecimen } from "../../components/docs/ReferenceDocTemplate";

export type UtilityEntry = {
  category: string;
  specimen: ReferenceSpecimen;
  usageNotes: string[];
  accessibilityNotes: string[];
};

export const mobileUtilities: Record<string, UtilityEntry> = {
  "safe-area": {
    category: "Utility",
    specimen: {
      kind: "table",
      rows: [
        { label: "상단 Safe Area", value: "env(safe-area-inset-top)", note: "노치, 카메라 펀치홀이 있는 기기의 상태 표시줄 영역을 피합니다." },
        { label: "하단 Safe Area", value: "env(safe-area-inset-bottom)", note: "홈 인디케이터가 있는 기기에서 BottomCTA·BottomSheet 하단 여백에 더합니다." },
        { label: "최소 하단 여백", value: "16px", note: "Safe Area 값이 0인 기기에서도 유지하는 최소 여백입니다." },
      ],
    },
    usageNotes: [
      "화면 최하단에 고정되는 BottomCTA, TabBar는 safe-area-inset-bottom 값을 padding에 더합니다.",
      "safe-area 값은 실제 기기에서만 0이 아니므로, 데스크톱 브라우저 미리보기에서는 최소 여백만 확인합니다.",
    ],
    accessibilityNotes: [
      "Safe Area를 침범한 콘텐츠는 제스처 영역과 겹쳐 오조작을 유발할 수 있어 반드시 여백을 확보합니다.",
    ],
  },

  elevation: {
    category: "Utility",
    specimen: {
      kind: "table",
      rows: [
        { label: "z-sticky", value: "40", note: "상단 헤더처럼 스크롤 중에도 고정되는 레이어." },
        { label: "z-overlay", value: "80", note: "모바일 전체 메뉴, 검색, BottomSheet 등 화면을 덮는 레이어." },
        { label: "z-skip-link", value: "100", note: "키보드 포커스 시에만 나타나는 본문 바로가기 링크로, 항상 최상단에 위치합니다." },
      ],
    },
    usageNotes: [
      "새로운 레이어를 추가할 때 임의의 z-index 값을 쓰지 않고 정의된 3단계 스케일 중 하나를 사용합니다.",
      "레이어가 열려 있는 동안 배경 영역은 inert 처리해 스크린리더와 키보드 포커스가 레이어 안에만 머물도록 합니다.",
    ],
    accessibilityNotes: [
      "겹쳐진 레이어 뒤의 콘텐츠는 aria-hidden과 inert를 함께 적용해 보조기술 사용자에게 노출되지 않도록 합니다.",
    ],
  },

  "color-mode": {
    category: "Utility",
    specimen: {
      kind: "table",
      rows: [
        { label: "속성", value: "[data-theme=\"light\" | \"dark\"]", note: "html 요소에 설정되며 System 토큰 레이어 전체를 재연결합니다." },
        { label: "저장 위치", value: "localStorage(\"common-ui-theme\")", note: "사용자가 선택한 테마를 다음 방문에도 유지합니다." },
        { label: "초기값", value: "prefers-color-scheme", note: "저장된 값이 없으면 기기 설정을 따릅니다." },
      ],
    },
    usageNotes: [
      "컴포넌트 CSS는 --ref-* 원시값을 직접 참조하지 않고 --sys-* 의미 토큰만 참조해 테마 전환에 자동으로 대응합니다.",
      "테마 전환 시 깜빡임을 막기 위해 root layout의 인라인 스크립트가 hydration 이전에 data-theme을 설정합니다.",
    ],
    accessibilityNotes: [
      "다크 모드에서도 모든 텍스트·배경 조합이 WCAG AA 대비를 유지하도록 System 토큰 값을 별도로 정의합니다.",
      "고대비 모드(prefers-contrast: more)에서는 테두리 색상을 더 진하게 강제합니다.",
    ],
  },

  breakpoints: {
    category: "Utility",
    specimen: {
      kind: "table",
      rows: [
        { label: "~479px", value: "Small phone", note: "액션 버튼이 전체 너비로 확장되고, 헤더 라벨이 아이콘으로 축약됩니다." },
        { label: "480–767px", value: "Phone", note: "모바일 서페이스의 기준 레이아웃입니다." },
        { label: "768–1023px", value: "Large phone / Small tablet", note: "카드형 그리드가 2열로 확장됩니다." },
      ],
    },
    usageNotes: [
      "모바일 서페이스는 최대 1023px까지를 대상으로 하며, 그 이상은 PC 서페이스로 안내합니다(헤더의 'PC 화면' 링크).",
      "브레이크포인트는 컴포넌트 단위가 아니라 레이아웃(그리드 열 수, 헤더 구성) 단위로만 적용합니다.",
    ],
    accessibilityNotes: [
      "뷰포트 폭이 아니라 콘텐츠가 실제로 필요로 하는 공간을 기준으로 줄바꿈되도록 min()/clamp()를 함께 사용합니다.",
    ],
  },

  "a11y-utilities": {
    category: "Utility",
    specimen: {
      kind: "table",
      rows: [
        { label: ".visually-hidden", value: "clip-path: inset(50%)", note: "화면에는 보이지 않지만 스크린리더에는 읽히는 텍스트에 사용합니다." },
        { label: ":focus-visible", value: "outline 3px", note: "키보드 포커스에만 나타나는 아웃라인으로, 마우스 클릭 시에는 표시되지 않습니다." },
        { label: ".skip-link", value: "tab 최초 진입 시 노출", note: "본문으로 바로 이동할 수 있는 링크입니다." },
      ],
    },
    usageNotes: [
      "아이콘만 있는 조작 요소에는 시각적 라벨 대신 .visually-hidden 텍스트나 aria-label을 반드시 제공합니다.",
      "outline을 임의로 제거하지 않고 :focus-visible 토큰(--sys-color-focus-ring)을 그대로 사용합니다.",
    ],
    accessibilityNotes: [
      "포커스 아웃라인과 배경 사이 대비는 3:1 이상을 유지합니다.",
      "모든 인터랙티브 레이어(검색, 전체 메뉴)는 포커스 트랩과 Escape 닫기를 함께 제공합니다.",
    ],
  },
};
