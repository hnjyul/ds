import type { SurfaceNav } from "../../components/shell/types";

export const mobileNav: SurfaceNav = [
  {
    id: "foundation",
    label: "파운데이션",
    description: "색상, 타이포그래피, 아이콘, 간격, 라운드, 모션 등 모바일 화면을 구성하는 가장 작은 단위의 원칙입니다.",
    items: [
      { slug: "color", label: "색상", description: "브랜드 색상과 의미 기반 색상 토큰의 사용 원칙을 정의합니다.", treatment: "standard" },
      { slug: "typography", label: "타이포그래피", description: "본문, 제목, 라벨 등 역할 기반 글자 스타일 세트를 정의합니다.", treatment: "standard" },
      { slug: "icon", label: "아이콘 · 에셋", description: "선(line)과 채움(fill) 스타일 아이콘, 이미지 에셋의 사용 기준을 정의합니다.", treatment: "standard" },
      { slug: "spacing", label: "간격", description: "화면 밀도와 리듬을 만드는 4px 기반 간격 스케일을 정의합니다.", treatment: "standard" },
      { slug: "radius", label: "라운드", description: "터치 컴포넌트의 형태감을 결정하는 모서리 반경 스케일을 정의합니다.", treatment: "standard" },
      { slug: "motion", label: "모션", description: "화면 전환과 상태 변화에 사용하는 지속시간과 이징 곡선을 정의합니다.", treatment: "standard" },
    ],
  },
  {
    id: "components",
    label: "컴포넌트",
    description: "터치 조작과 한 손 사용성을 우선하는 모바일 미니앱 화면에서 반복 사용되는 UI 단위입니다.",
    items: [
      { slug: "button", label: "Button", description: "화면에서 가장 중요한 행동을 실행하는 기본 조작 요소입니다.", treatment: "full" },
      { slug: "bottom-sheet", label: "BottomSheet", description: "화면 하단에서 올라와 추가 선택지나 정보를 보여주는 임시 표면입니다.", treatment: "full" },
      { slug: "text-field", label: "TextField", description: "사용자가 텍스트를 입력하고 상태 피드백을 받는 입력 요소입니다. 값을 둘로 나눠 받는 SplitTextField, 여러 줄 입력이 필요한 TextArea도 같은 구조를 공유합니다.", treatment: "full" },
      { slug: "chip", label: "Chip", description: "선택 가능한 짧은 옵션이나 필터를 표현하는 작은 조작 요소입니다.", treatment: "full" },
      { slug: "bottom-cta", label: "BottomCTA", description: "화면 하단에 고정되어 다음 단계로 이동을 유도하는 행동 영역입니다. 버튼 하나만 두는 Single, 두 개를 나란히 두는 Double, 스크롤과 무관하게 항상 고정되는 Fixed 형태로 나뉩니다.", treatment: "standard" },
      { slug: "dialog", label: "Dialog", description: "중요한 결정 전에 사용자의 주의를 집중시키는 모달 레이어입니다. 정보만 확인시키는 AlertDialog와 취소 가능한 결정을 받는 ConfirmDialog 두 형태로 나뉩니다.", treatment: "standard" },
      { slug: "toast", label: "Toast · Snackbar", description: "화면 흐름을 막지 않고 짧은 상태 메시지를 잠시 보여줍니다.", treatment: "standard" },
      { slug: "list-row", label: "ListRow", description: "제목, 설명, 우측 요소를 일관된 구조로 배열하는 목록 행입니다. 행 안 영역(왼쪽 아이콘, 오른쪽 부가 요소 등)을 조합해 구성합니다.", treatment: "standard" },
      { slug: "top-nav-bar", label: "TopNavBar", description: "현재 화면의 제목과 뒤로가기, 주요 행동을 담는 상단 내비게이션입니다.", treatment: "standard" },
      { slug: "progress-bar", label: "ProgressBar", description: "여러 단계로 이루어진 작업의 진행 상태를 알려줍니다.", treatment: "standard" },
      { slug: "switch", label: "Switch", description: "즉시 반영되는 두 가지 상태를 전환하는 조작 요소입니다.", treatment: "standard" },
      { slug: "checkbox", label: "Checkbox", description: "여러 개를 동시에 선택할 수 있는 항목에 사용합니다.", treatment: "standard" },
      { slug: "radio", label: "Radio", description: "여러 옵션 중 하나만 선택해야 할 때 사용합니다.", treatment: "standard" },
      { slug: "tab", label: "Tab", description: "같은 위계의 콘텐츠를 전환해서 보여주는 탐색 요소입니다.", treatment: "standard" },
      { slug: "badge", label: "Badge", description: "새 소식이나 처리할 항목의 수를 짧게 알려주는 표시자입니다.", treatment: "standard" },
      { slug: "avatar", label: "Avatar", description: "사용자나 대상을 시각적으로 식별하는 원형 이미지 요소입니다.", treatment: "standard" },
    ],
  },
  {
    id: "utilities",
    label: "유틸리티",
    description: "특정 컴포넌트에 속하지 않지만 모바일 화면 전반에서 지켜야 하는 규칙과 보조 클래스입니다.",
    items: [
      { slug: "safe-area", label: "Safe Area", description: "노치, 홈 인디케이터 등 기기 여백을 침범하지 않도록 하는 여백 규칙입니다.", treatment: "standard" },
      { slug: "elevation", label: "Elevation · Z-index", description: "겹쳐지는 레이어의 쌓임 순서를 정의하는 z-index 스케일입니다.", treatment: "standard" },
      { slug: "color-mode", label: "Color Mode", description: "라이트 · 다크 모드 전환 시 시스템 토큰이 재연결되는 방식입니다.", treatment: "standard" },
      { slug: "breakpoints", label: "Breakpoints", description: "화면 폭에 따라 레이아웃이 반응하는 기준점을 정의합니다.", treatment: "standard" },
      { slug: "a11y-utilities", label: "접근성 유틸리티", description: "포커스 링, 스크린리더 전용 텍스트 등 접근성 보조 클래스 모음입니다.", treatment: "standard" },
    ],
  },
];
