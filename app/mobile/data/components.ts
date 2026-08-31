import type { GuidelineCard, TokenRow } from "../../components/docs/DetailDocTemplate";

export type ComponentEntry = {
  category: string;
  guidelines: GuidelineCard[];
  tokenRows: TokenRow[];
  accessibilityNotes: string[];
};

export const mobileComponents: Record<string, ComponentEntry> = {
  "bottom-cta": {
    category: "Actions",
    guidelines: [
      { tone: "do", label: "권장", title: "핵심 행동 하나만 배치합니다", body: "화면당 BottomCTA는 하나만 사용하고, 보조 행동은 텍스트 버튼으로 낮춥니다." },
      { tone: "do", label: "권장", title: "행동 개수에 맞는 형태를 고릅니다", body: "행동이 하나면 Single, 대등한 두 선택지가 필요하면 Double, 스크롤과 무관하게 항상 노출해야 하면 Fixed를 사용합니다." },
      { tone: "avoid", label: "주의", title: "스크롤 콘텐츠를 가리지 않습니다", body: "고정 영역이 마지막 콘텐츠를 가리지 않도록 본문 하단에 충분한 여백을 확보합니다." },
    ],
    tokenRows: [
      { label: "버튼 높이", token: "--component-button-height-md" },
      { label: "내부 여백", token: "--ref-space-200" },
      { label: "배경", token: "--sys-color-surface-canvas" },
    ],
    accessibilityNotes: [
      "safe-area-inset-bottom 만큼 하단 여백을 추가로 확보합니다.",
      "버튼이 비활성 상태일 때도 이유를 텍스트로 함께 안내합니다.",
    ],
  },

  dialog: {
    category: "Overlay",
    guidelines: [
      { tone: "do", label: "권장", title: "결과를 되돌릴 수 없을 때 사용합니다", body: "삭제, 결제처럼 영향이 큰 행동을 확인받을 때 사용합니다." },
      { tone: "do", label: "권장", title: "취소 가능 여부로 형태를 나눕니다", body: "확인만 받으면 되는 정보 전달은 AlertDialog, 사용자가 진행 여부를 선택해야 하면 ConfirmDialog를 사용합니다." },
      { tone: "avoid", label: "주의", title: "단순 정보 전달에는 사용하지 않습니다", body: "가벼운 안내는 Toast나 인라인 메시지로 대체합니다." },
    ],
    tokenRows: [
      { label: "모서리 반경", token: "--ref-radius-400" },
      { label: "그림자", token: "--ref-shadow-300" },
      { label: "배경 오버레이", token: "--sys-color-overlay" },
    ],
    accessibilityNotes: [
      "열리는 즉시 포커스를 다이얼로그 안으로 이동하고, 닫히면 트리거로 되돌립니다.",
      "배경 콘텐츠는 inert 처리해 스크린리더 탐색에서 제외합니다.",
    ],
  },

  toast: {
    category: "Feedback",
    guidelines: [
      { tone: "do", label: "권장", title: "간단한 결과만 전달합니다", body: "저장 완료처럼 사용자가 이미 예상한 결과를 짧게 확인해 줍니다." },
      { tone: "avoid", label: "주의", title: "행동을 요구하지 않습니다", body: "확인이나 선택이 필요한 내용은 Dialog를 사용합니다." },
    ],
    tokenRows: [
      { label: "배경", token: "--sys-color-surface-inverse" },
      { label: "텍스트", token: "--sys-color-text-inverse" },
      { label: "모서리 반경", token: "--ref-radius-300" },
    ],
    accessibilityNotes: [
      "role=\"status\"와 aria-live=\"polite\"로 화면 이동 없이 스크린리더에 전달합니다.",
      "일정 시간 후 자동으로 사라지므로 같은 정보를 다른 곳에서도 확인할 수 있게 합니다.",
    ],
  },

  "list-row": {
    category: "Display",
    guidelines: [
      { tone: "do", label: "권장", title: "행 전체를 조작 영역으로 확장합니다", body: "제목만이 아니라 행 전체를 눌러도 반응하도록 합니다." },
      { tone: "avoid", label: "주의", title: "한 행에 조작을 두 개 이상 두지 않습니다", body: "행 안에 여러 버튼이 필요하면 별도 컴포넌트 구조를 검토합니다." },
    ],
    tokenRows: [
      { label: "행 높이", token: "--component-navigation-item-height" },
      { label: "내부 여백", token: "--ref-space-150" },
      { label: "구분선", token: "--sys-color-border-subtle" },
    ],
    accessibilityNotes: [
      "행 전체가 링크나 버튼이면 접근 가능한 이름에 우측 부가 정보까지 포함합니다.",
      "구분선은 장식용이므로 aria-hidden을 적용합니다.",
    ],
  },

  "top-nav-bar": {
    category: "Navigation",
    guidelines: [
      { tone: "do", label: "권장", title: "현재 화면을 설명하는 제목만 둡니다", body: "제목은 사용자가 방금 수행한 행동의 결과를 반영합니다." },
      { tone: "avoid", label: "주의", title: "행동을 3개 이상 배치하지 않습니다", body: "뒤로가기 외 주요 행동은 최대 1~2개로 제한합니다." },
    ],
    tokenRows: [
      { label: "헤더 높이", token: "--sys-layout-header-height" },
      { label: "쌓임 순서", token: "--ref-z-sticky" },
      { label: "하단 구분선", token: "--sys-color-border-subtle" },
    ],
    accessibilityNotes: [
      "뒤로가기 아이콘 버튼에는 '뒤로가기' 접근 가능한 이름을 제공합니다.",
      "제목은 heading으로 마크업해 스크린리더 탐색을 돕습니다.",
    ],
  },

  "progress-bar": {
    category: "Feedback",
    guidelines: [
      { tone: "do", label: "권장", title: "전체 단계 대비 현재 위치를 함께 보여줍니다", body: "예: '2/4단계'처럼 텍스트로도 진행률을 알려줍니다." },
      { tone: "avoid", label: "주의", title: "정확한 값을 모를 때 확정 진행바를 쓰지 않습니다", body: "소요 시간을 예측할 수 없으면 불확정(indeterminate) 형태를 사용합니다." },
    ],
    tokenRows: [
      { label: "진행 색상", token: "--sys-color-action-primary" },
      { label: "트랙 배경", token: "--sys-color-surface-subtle" },
      { label: "모서리 반경", token: "--ref-radius-full" },
    ],
    accessibilityNotes: [
      "role=\"progressbar\"와 aria-valuenow/min/max를 함께 제공합니다.",
      "색상 대비뿐 아니라 퍼센트 텍스트를 함께 노출합니다.",
    ],
  },

  switch: {
    category: "Inputs",
    guidelines: [
      { tone: "do", label: "권장", title: "즉시 반영되는 설정에만 사용합니다", body: "저장 버튼 없이 바로 적용되는 On/Off 설정에 사용합니다." },
      { tone: "avoid", label: "주의", title: "제출이 필요한 항목에는 사용하지 않습니다", body: "폼 제출이 필요한 선택은 Checkbox를 사용합니다." },
    ],
    tokenRows: [
      { label: "켜짐 색상", token: "--sys-color-action-primary" },
      { label: "모서리 반경", token: "--ref-radius-full" },
      { label: "전환 속도", token: "--ref-duration-fast" },
    ],
    accessibilityNotes: [
      "role=\"switch\"와 aria-checked로 현재 상태를 전달합니다.",
      "상태 변화는 색상뿐 아니라 손잡이 위치 이동으로도 표현합니다.",
    ],
  },

  checkbox: {
    category: "Inputs",
    guidelines: [
      { tone: "do", label: "권장", title: "0개 이상 여러 개 선택에 사용합니다", body: "약관 동의처럼 독립적인 선택 항목에 사용합니다." },
      { tone: "avoid", label: "주의", title: "상호 배타적인 선택에는 사용하지 않습니다", body: "하나만 골라야 하면 Radio를 사용합니다." },
    ],
    tokenRows: [
      { label: "모서리 반경", token: "--ref-radius-100" },
      { label: "선택 색상", token: "--sys-color-action-primary" },
      { label: "테두리", token: "--sys-color-border-strong" },
    ],
    accessibilityNotes: [
      "네이티브 input[type=checkbox]를 기반으로 구현해 키보드와 스크린리더 지원을 기본으로 확보합니다.",
      "라벨을 클릭해도 선택되도록 label과 input을 명시적으로 연결합니다.",
    ],
  },

  radio: {
    category: "Inputs",
    guidelines: [
      { tone: "do", label: "권장", title: "2~5개의 상호 배타적 옵션에 사용합니다", body: "선택지가 더 많아지면 Selectbox 형태를 검토합니다." },
      { tone: "avoid", label: "주의", title: "단일 On/Off 설정에는 사용하지 않습니다", body: "하나의 값만 켜고 끄는 경우 Switch를 사용합니다." },
    ],
    tokenRows: [
      { label: "모서리 반경", token: "--ref-radius-full" },
      { label: "선택 색상", token: "--sys-color-action-primary" },
      { label: "테두리", token: "--sys-color-border-strong" },
    ],
    accessibilityNotes: [
      "같은 그룹의 Radio는 role=\"radiogroup\"으로 묶고 화살표 키 이동을 지원합니다.",
      "그룹 전체를 설명하는 접근 가능한 이름을 제공합니다.",
    ],
  },

  tab: {
    category: "Navigation",
    guidelines: [
      { tone: "do", label: "권장", title: "같은 위계의 콘텐츠 전환에만 사용합니다", body: "성격이 다른 화면으로 이동할 때는 사용하지 않습니다." },
      { tone: "avoid", label: "주의", title: "탭 안에 탭을 중첩하지 않습니다", body: "위계가 깊어지면 별도 화면으로 분리합니다." },
    ],
    tokenRows: [
      { label: "선택 색상", token: "--sys-color-action-primary" },
      { label: "전환 속도", token: "--ref-duration-fast" },
      { label: "선택 텍스트 굵기", token: "--ref-font-weight-semibold" },
    ],
    accessibilityNotes: [
      "방향키로 탭 간 이동, Home/End로 처음·끝 탭 이동을 지원합니다.",
      "선택된 탭만 tabIndex=0을 갖도록 roving tabindex를 구현합니다.",
    ],
  },

  badge: {
    category: "Display",
    guidelines: [
      { tone: "do", label: "권장", title: "숫자나 짧은 상태만 표시합니다", body: "읽지 않은 개수, New 등 한눈에 파악 가능한 정보만 담습니다." },
      { tone: "avoid", label: "주의", title: "문장을 담지 않습니다", body: "설명이 필요한 정보는 Badge 대신 본문 텍스트로 전달합니다." },
    ],
    tokenRows: [
      { label: "모서리 반경", token: "--ref-radius-full" },
      { label: "강조 배경", token: "--sys-color-surface-danger-subtle" },
      { label: "강조 텍스트", token: "--sys-color-text-danger" },
    ],
    accessibilityNotes: [
      "숫자만으로 의미가 전달되지 않으면 접근 가능한 이름에 맥락을 추가합니다 (예: '읽지 않은 알림 3개').",
      "장식용 점(dot) 배지는 aria-hidden 처리합니다.",
    ],
  },

  avatar: {
    category: "Display",
    guidelines: [
      { tone: "do", label: "권장", title: "이미지가 없을 때 대체 표현을 준비합니다", body: "이니셜이나 기본 아이콘으로 항상 대상을 식별할 수 있게 합니다." },
      { tone: "avoid", label: "주의", title: "단독으로 조작 요소가 되지 않습니다", body: "클릭이 필요하면 버튼이나 링크로 감싸 명확한 역할을 부여합니다." },
    ],
    tokenRows: [
      { label: "모서리 반경", token: "--ref-radius-full" },
      { label: "배경(이니셜)", token: "--sys-color-surface-subtle" },
      { label: "텍스트 굵기", token: "--ref-font-weight-semibold" },
    ],
    accessibilityNotes: [
      "이미지에는 대상을 설명하는 alt 텍스트를, 이니셜에는 aria-label을 제공합니다.",
      "장식 목적의 프레임·테두리는 별도 마크업 없이 CSS로만 표현합니다.",
    ],
  },
};
