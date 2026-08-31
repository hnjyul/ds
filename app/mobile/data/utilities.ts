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

  divider: {
    category: "Utility",
    specimen: {
      kind: "table",
      rows: [
        { label: "두께", value: "0.0625rem (1px solid)", note: "border-top 또는 border-bottom 한 줄로만 적용해 레이아웃 높이에 영향을 주지 않습니다." },
        { label: "기본 구분선", value: "--sys-color-border-subtle", note: "리스트 항목, 카드 내부 필드처럼 반복되는 낮은 강조의 경계에 사용합니다." },
        { label: "강조 구분선", value: "--sys-color-border-default", note: "섹션과 섹션 사이처럼 더 뚜렷하게 분리해야 하는 경계에 사용합니다." },
        { label: "여백", value: "--ref-space-300", note: "구분선 위아래 최소 여백으로, 인접 콘텐츠와 맞붙어 보이지 않도록 확보합니다." },
      ],
    },
    usageNotes: [
      "리스트 항목처럼 반복되는 경계에는 --sys-color-border-subtle을, 헤더나 섹션 전환처럼 주의를 끌어야 하는 경계에는 --sys-color-border-default를 사용합니다.",
      "구분선을 이중선이나 그림자 박스로 대체하지 않고, border 한 줄과 --ref-space 여백 조합만으로 경계를 표현합니다.",
    ],
    accessibilityNotes: [
      "장식용 구분선은 CSS border로만 표현해 스크린리더 낭독 목록에 별도 항목으로 노출되지 않도록 합니다.",
      "목록·섹션의 의미 있는 경계를 나타낼 때는 <hr> 요소나 role=\"separator\"를 사용해 보조기술 사용자에게도 구조를 전달합니다.",
    ],
  },

  highlight: {
    category: "Utility",
    specimen: {
      kind: "table",
      rows: [
        { label: "강조 색상", value: "var(--sys-color-text-accent)", note: "브랜드 관련 핵심 문구를 강조할 때 기본으로 사용하는 색상입니다." },
        { label: "경고 강조 색상", value: "var(--sys-color-text-danger)", note: "삭제, 마감 임박 등 위험·주의 문맥에만 제한적으로 사용합니다." },
        { label: "강조 굵기", value: "var(--ref-font-weight-semibold)", note: "색상 변경 없이 굵기만으로 강조할 때 본문 기본값(regular)보다 한 단계 높여 사용합니다." },
        { label: "강조 배경", value: "var(--sys-color-surface-warning-subtle)", note: "문장 안 특정 구간을 배경색으로 강조할 때 사용하며, 텍스트 색상과 4.5:1 대비를 유지합니다." },
      ],
    },
    usageNotes: [
      "굵기만으로 강조할 때도 <strong> 요소를 사용해 시각적 강조와 스크린리더가 전달하는 의미적 강조를 일치시킵니다.",
      "한 문장 안에서 색상 강조는 1~2개 구간으로 제한하고, 경고 색상(--sys-color-text-danger)은 실제 위험·주의 정보에만 사용합니다.",
    ],
    accessibilityNotes: [
      "색상만으로 강조를 구분하지 않고 굵기나 밑줄 등 색맹 사용자도 인지 가능한 보조 단서를 함께 제공합니다.",
      "강조 색상과 배경 사이 대비는 WCAG AA 기준 4.5:1 이상을 유지합니다.",
    ],
  },

  "overlay-extension": {
    category: "Utility",
    specimen: {
      kind: "table",
      rows: [
        { label: "z-index", value: "--ref-z-overlay", note: "Dialog·BottomSheet 컨테이너에 훅이 자동으로 주입하는 값이라 컴포넌트에서 z-index를 별도로 지정하지 않습니다." },
        { label: "배경 스크림", value: "--sys-color-overlay", note: "useDialog·useBottomSheet가 여는 딤 배경 색상으로, rgba를 직접 쓰지 않고 이 토큰만 참조합니다." },
        { label: "전환 시간·이징", value: "--ref-duration-normal / --ref-easing-standard", note: "세 훅 모두 열림·닫힘 애니메이션에 동일하게 적용해 레이어 종류가 달라도 체감 속도가 일치합니다." },
        { label: "Sheet 형태", value: "--component-sheet-radius-top / --component-sheet-handle-width", note: "useBottomSheet가 렌더링하는 시트의 상단 라운드와 드래그 핸들 폭에 사용하는 토큰입니다." },
      ],
    },
    usageNotes: [
      "Dialog·BottomSheet는 조건부 렌더링 대신 open()/close() 호출로만 제어합니다 — 트리거 컴포넌트가 언마운트돼도 훅이 별도 포털에 유지하므로 JSX에 남겨두지 않습니다.",
      "Dialog와 BottomSheet는 인스턴스를 하나만 유지해 두 번째 open() 호출 시 이전 레이어를 먼저 close하지만, Toast는 useToast()가 큐를 관리해 여러 건을 동시에 쌓을 수 있습니다.",
    ],
    accessibilityNotes: [
      "Dialog·BottomSheet는 열릴 때 포커스를 내부 첫 포커스 가능 요소로 옮기고, close() 호출 시 열기 전 포커스였던 트리거 요소로 되돌립니다.",
      "Toast는 role=\"status\"와 aria-live=\"polite\"로만 알리고 포커스를 가져가지 않아 진행 중인 스크린리더 탐색 흐름을 끊지 않습니다.",
    ],
  },

  "token-naming": {
    category: "Utility",
    specimen: {
      kind: "table",
      rows: [
        { label: "참조 계층 (Reference)", value: "--ref-color-brand-600", note: "테마와 컴포넌트에 관계없이 고정된 원시값을 담으며, 색상·간격·라운드·타이포 램프의 실제 값은 이 계층에만 존재합니다." },
        { label: "시스템 계층 (System)", value: "--sys-color-action-primary", note: "표면·텍스트·행동 같은 의미 단위로 원시값을 별칭화하며, 모바일과 PC가 같은 이름을 공유합니다." },
        { label: "컴포넌트 계층 (Component)", value: "--component-button-background-primary", note: "컴포넌트가 실제로 소비하는 구현 계약으로, --ref-color-brand-600 → --sys-color-action-primary → 이 토큰 순서로 연결됩니다." },
        { label: "이름 형식", value: "--{layer}-{category}-{role}", note: "모든 토큰 이름은 소문자 kebab-case로 쓰고, 계층 접두사 뒤에 범주와 역할, 단계를 하이픈으로 이어 붙입니다." },
        { label: "재정의 레이어", value: "[data-theme] · [data-surface]", note: "다크 모드는 --ref 값을 바꾸지 않고 --sys 연결만 교체하며, 서페이스 레이어는 버튼·입력·아코디언 라운드처럼 서페이스마다 달라지는 토큰만 다시 선언합니다." },
      ],
    },
    usageNotes: [
      "새로운 값은 --ref 계층에 먼저 추가하고, 컴포넌트 스타일에서는 --ref를 직접 참조하지 않고 --sys를 거쳐 연결합니다.",
      "--sys 이름은 색상 값이 아니라 표면·텍스트·행동 같은 역할로 짓고, 라이트와 다크 두 테마에서 같은 이름이 성립하는지 확인합니다.",
      "서페이스마다 값이 달라지는 항목만 [data-surface] 레이어에 재정의하고, 나머지는 모바일과 PC가 같은 토큰을 그대로 공유합니다.",
    ],
    accessibilityNotes: [
      "다크 모드는 --sys 계층만 재연결하므로, 새 --sys 색상 토큰을 추가할 때 [data-theme=\"dark\"] 값도 함께 정의해 대비를 유지합니다.",
      "포커스 표시는 --sys-color-focus-ring 하나로 관리해 모든 컴포넌트가 동일한 포커스 대비를 갖도록 합니다.",
    ],
  },
};
