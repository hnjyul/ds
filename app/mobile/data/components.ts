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

  "bottom-info": {
    category: "Feedback",
    guidelines: [
      { tone: "do", label: "권장", title: "상태 정보 전달에만 사용합니다", body: "배송 현황 요약처럼 사용자 조작 없이 항상 노출해도 되는 상태나 요약 정보를 전달할 때 사용합니다." },
      { tone: "avoid", label: "주의", title: "행동 유도에는 사용하지 않습니다", body: "다음 단계로 이동을 유도해야 하면 BottomInfo 대신 행동 버튼이 있는 BottomCTA를 사용합니다." },
    ],
    tokenRows: [
      { label: "배경", token: "--sys-color-surface-subtle" },
      { label: "상단 구분선", token: "--sys-color-border-subtle" },
      { label: "본문 텍스트 색상", token: "--sys-color-text-secondary" },
    ],
    accessibilityNotes: [
      "내용이 실시간으로 바뀌면 aria-live=\"polite\" 영역으로 감싸 스크린리더가 변경 사항을 자동으로 안내받게 합니다.",
      "행동 버튼이 없는 순수 정보 영역이므로 tabindex를 넣지 않아 키보드 포커스 흐름에서 제외합니다.",
    ],
  },

  bubble: {
    category: "Overlay",
    guidelines: [
      { tone: "do", label: "권장", title: "가리키는 대상을 명확히 합니다", body: "말풍선의 꼬리를 대상 요소에 정확히 맞춰 어떤 화면 요소에 대한 설명인지 바로 알 수 있게 합니다." },
      { tone: "avoid", label: "주의", title: "일회성 안내로 제한합니다", body: "확인 후에는 다시 노출하지 않고, 상시 필요한 설명은 Tooltip으로 낮춰 화면을 반복해서 가리지 않게 합니다." },
    ],
    tokenRows: [
      { label: "말풍선 배경", token: "--ref-color-brand-600" },
      { label: "쌓임 순서", token: "--ref-z-overlay" },
      { label: "그림자", token: "--ref-shadow-200" },
    ],
    accessibilityNotes: [
      "가리키는 대상 요소에 aria-describedby로 말풍선 내용을 연결해 스크린리더가 맥락과 함께 읽도록 합니다.",
      "자동으로 사라지는 시간에만 의존하지 않고, 닫기 버튼을 제공해 사용자가 직접 닫을 수 있게 합니다.",
    ],
  },

  "grid-list": {
    category: "Display",
    guidelines: [
      { tone: "do", label: "권장", title: "썸네일 비율을 통일합니다", body: "모든 카드의 이미지 비율을 통일해야 여러 열이 나란히 놓여도 시선이 흐트러지지 않습니다." },
      { tone: "avoid", label: "주의", title: "텍스트 정보는 최소화합니다", body: "제목과 가격처럼 핵심 정보만 남기고, 자세한 설명은 상세 화면에서 전달합니다." },
    ],
    tokenRows: [
      { label: "열 간격", token: "--ref-space-150" },
      { label: "카드 모서리 반경", token: "--component-card-radius" },
      { label: "카드 그림자", token: "--component-card-shadow" },
    ],
    accessibilityNotes: [
      "그리드 전체를 목록으로, 각 카드를 항목으로 마크업해 스크린리더가 전체 개수와 순서를 안내하게 합니다.",
      "카드 이미지에는 상품명 등 의미 있는 대체 텍스트를 제공하고, 장식용 배지 아이콘은 aria-hidden으로 숨깁니다.",
    ],
  },

  "list-footer": {
    category: "Display",
    guidelines: [
      { tone: "do", label: "권장", title: "남은 항목 수를 안내합니다", body: "'더보기 (12)'처럼 남은 개수를 텍스트로 덧붙이면 사용자가 목록 분량을 미리 가늠할 수 있습니다." },
      { tone: "avoid", label: "주의", title: "목록 범위의 행동만 담습니다", body: "화면 전체를 대표하는 핵심 행동은 BottomCTA로 고정하고, ListFooter는 해당 목록에 한정된 다음 행동에만 사용합니다." },
    ],
    tokenRows: [
      { label: "텍스트 색상", token: "--sys-color-text-secondary" },
      { label: "상단 구분선", token: "--sys-color-border-subtle" },
      { label: "내부 여백", token: "--ref-space-200" },
    ],
    accessibilityNotes: [
      "더보기 행동의 접근 가능한 이름에 남은 항목 수를 포함해 스크린리더로도 분량을 알 수 있게 합니다.",
      "목록의 마지막 항목 다음에 자연스럽게 포커스가 이어지도록 DOM 순서를 목록 흐름과 일치시킵니다.",
    ],
  },

  "list-header": {
    category: "Display",
    guidelines: [
      { tone: "do", label: "권장", title: "제목 옆에 총 개수를 표시합니다", body: "사용자가 스크롤하기 전에 목록의 범위를 가늠할 수 있도록 제목 옆에 항목 개수를 함께 노출합니다." },
      { tone: "avoid", label: "주의", title: "정렬·필터는 최소한만 노출합니다", body: "진입점이 많아지면 목록 위 영역이 복잡해지므로 자주 쓰는 기준만 남기고 나머지는 필터 시트로 묶습니다." },
    ],
    tokenRows: [
      { label: "제목 굵기", token: "--ref-font-weight-semibold" },
      { label: "개수 텍스트 색상", token: "--sys-color-text-secondary" },
      { label: "정렬·필터 텍스트 크기", token: "--sys-type-label-sm-size" },
    ],
    accessibilityNotes: [
      "제목은 heading으로 마크업해 스크린리더가 목록의 시작 지점을 인식하게 합니다.",
      "정렬·필터 진입점에는 현재 선택된 기준을 접근 가능한 이름에 포함합니다 (예: '정렬, 최신순').",
    ],
  },

  loader: {
    category: "Feedback",
    guidelines: [
      { tone: "do", label: "권장", title: "예상 시간을 알 수 없을 때 사용합니다", body: "몇 초 안에 끝나는 짧고 불확실한 대기 상태에서 별도 UI 없이 진행 중임을 알릴 때 사용합니다." },
      { tone: "avoid", label: "주의", title: "레이아웃 예측이 필요하면 쓰지 않습니다", body: "카드 목록처럼 최종 화면 구조를 미리 보여줘야 하면 Skeleton을 사용합니다." },
    ],
    tokenRows: [
      { label: "인디케이터 색상", token: "--sys-color-action-primary" },
      { label: "회전 주기", token: "--ref-duration-normal" },
      { label: "오버레이 배경", token: "--sys-color-overlay" },
    ],
    accessibilityNotes: [
      "회전 아이콘은 aria-hidden 처리하고, 별도의 상태 텍스트에 role=\"status\"와 aria-live=\"polite\"를 적용해 로딩 시작을 전달합니다.",
      "prefers-reduced-motion 환경에서는 회전 애니메이션 대신 페이드 등 정적인 대체 표현으로 전환합니다.",
    ],
  },

  menu: {
    category: "Overlay",
    guidelines: [
      { tone: "do", label: "권장", title: "트리거 옆에 앵커링합니다", body: "메뉴는 화면 중앙이 아니라 트리거를 누른 지점 옆에서 열리도록 배치해 어떤 요소를 조작했는지 시각적으로 연결합니다." },
      { tone: "avoid", label: "주의", title: "긴 설명은 담지 않습니다", body: "각 항목은 '삭제', '공유'처럼 한 줄 동사구로 표현하고, 설명이 필요한 선택지는 Dialog나 BottomSheet를 사용합니다." },
    ],
    tokenRows: [
      { label: "배경", token: "--sys-color-surface-raised" },
      { label: "표면 그림자", token: "--ref-shadow-200" },
      { label: "모서리 반경", token: "--ref-radius-300" },
    ],
    accessibilityNotes: [
      "role=\"menu\"와 각 항목에 role=\"menuitem\"을 지정해 스크린리더가 선택 가능한 목록임을 인식하게 합니다.",
      "방향키로 항목 간 이동과 Esc로 닫기를 지원하고, 닫히면 포커스를 트리거로 되돌립니다.",
    ],
  },

  modal: {
    category: "Overlay",
    guidelines: [
      { tone: "do", label: "권장", title: "자유 형식 콘텐츠에 사용합니다", body: "폼, 목록, 미디어처럼 확인/취소 문구로 단순화할 수 없는 콘텐츠를 화면 중앙에 담을 때 사용합니다." },
      { tone: "avoid", label: "주의", title: "예/아니오 결정에는 쓰지 않습니다", body: "가벼운 확인·취소는 Dialog를, 화면 하단에 붙는 콘텐츠는 BottomSheet를 사용합니다." },
    ],
    tokenRows: [
      { label: "내부 여백", token: "--ref-space-400" },
      { label: "모서리 반경", token: "--ref-radius-500" },
      { label: "배경 오버레이", token: "--sys-color-overlay" },
    ],
    accessibilityNotes: [
      "확인/취소 버튼이 없는 자유 형식 콘텐츠이므로 닫기 버튼이나 backdrop 클릭 등 명시적인 닫기 수단을 항상 제공합니다.",
      "본문이 길어 스크롤이 필요하면 모달 내부에서만 스크롤되게 하고 배경 스크롤은 잠급니다.",
    ],
  },

  "progress-stepper": {
    category: "Feedback",
    guidelines: [
      { tone: "do", label: "권장", title: "완료·진행·예정 상태를 구분합니다", body: "지나온 단계는 완료 표시로, 현재 단계는 강조 색상으로, 남은 단계는 대기 상태로 구분해 전체 진행 상황을 한눈에 보여줍니다." },
      { tone: "avoid", label: "주의", title: "단계가 많아지면 사용하지 않습니다", body: "단계 수가 많아질수록 개별 인디케이터를 모두 나열하기보다 ProgressBar처럼 연속적인 형태로 전환합니다." },
    ],
    tokenRows: [
      { label: "완료·현재 단계 색상", token: "--sys-color-action-primary" },
      { label: "단계 연결선", token: "--sys-color-border-subtle" },
      { label: "단계 라벨 크기", token: "--sys-type-label-sm-size" },
    ],
    accessibilityNotes: [
      "현재 단계 항목에 aria-current=\"step\"을 지정해 스크린리더가 진행 위치를 파악할 수 있게 합니다.",
      "완료·현재·예정 상태를 색상만이 아니라 체크 아이콘이나 텍스트로도 함께 구분합니다.",
    ],
  },

  rating: {
    category: "Inputs",
    guidelines: [
      { tone: "do", label: "권장", title: "입력용과 표시용을 구분합니다", body: "사용자가 직접 점수를 매기는 입력형과 이미 매겨진 평균 점수를 확인만 하는 표시형을 구분해 상호작용 가능 여부를 명확히 전달합니다." },
      { tone: "avoid", label: "주의", title: "별점을 미리 채워두지 않습니다", body: "초기 상태를 특정 점수로 채워두면 실제 만족도보다 높게 왜곡되므로 빈 상태로 시작해 사용자가 직접 선택하게 합니다." },
    ],
    tokenRows: [
      { label: "채워진 별 색상", token: "--ref-color-amber-700" },
      { label: "빈 별 테두리", token: "--sys-color-border-strong" },
      { label: "별 사이 간격", token: "--ref-space-50" },
    ],
    accessibilityNotes: [
      "각 별에 '별점 3점'처럼 현재 값을 담은 접근 가능한 이름을 제공해 스크린리더가 아이콘 대신 정확한 점수를 읽게 합니다.",
      "채워진 별과 빈 별을 색상 차이만으로 구분하지 않고 채움·윤곽 같은 아이콘 형태 차이로도 구분합니다.",
    ],
  },

  result: {
    category: "Feedback",
    guidelines: [
      { tone: "do", label: "권장", title: "흐름의 종착점에서만 사용합니다", body: "결제, 가입, 신청처럼 여러 단계를 거친 작업이 끝났을 때 그 결과를 화면 전체에 요약해 보여줍니다." },
      { tone: "avoid", label: "주의", title: "일시적 확인에는 사용하지 않습니다", body: "화면 전환 없이 짧게 알리면 되는 저장 완료 같은 확인은 Toast를 사용합니다." },
    ],
    tokenRows: [
      { label: "전체 화면 배경", token: "--sys-color-surface-canvas" },
      { label: "결과 제목 크기", token: "--sys-type-title-lg-size" },
      { label: "다음 행동 버튼 배경", token: "--component-button-background-primary" },
    ],
    accessibilityNotes: [
      "결과 아이콘은 색상만으로 성공과 실패를 구분하지 않고, 텍스트 메시지와 함께 전달합니다.",
      "화면이 전환되면 제목 요소로 포커스를 이동해 스크린리더가 결과를 바로 읽도록 합니다.",
    ],
  },

  "search-field": {
    category: "Inputs",
    guidelines: [
      { tone: "do", label: "권장", title: "검색 범위를 구체적으로 안내합니다", body: "'상품명으로 검색'처럼 placeholder에 검색 대상을 명시해 어떤 값을 입력할지 바로 알 수 있게 합니다." },
      { tone: "avoid", label: "주의", title: "지우기 버튼을 항상 노출하지 않습니다", body: "입력값이 없을 때는 지우기 버튼을 숨기고, 텍스트가 입력된 뒤에만 나타나게 합니다." },
    ],
    tokenRows: [
      { label: "필드 높이", token: "--component-field-height" },
      { label: "검색 아이콘 색상", token: "--sys-color-text-tertiary" },
      { label: "포커스 테두리", token: "--component-field-border-color-focus" },
    ],
    accessibilityNotes: [
      "검색 입력에는 시각적 레이블이 없어도 aria-label로 '검색' 역할을 명시합니다.",
      "지우기 버튼에는 '검색어 지우기'처럼 동작을 설명하는 접근성 라벨을 붙입니다.",
    ],
  },

  "segmented-control": {
    category: "Inputs",
    guidelines: [
      { tone: "do", label: "권장", title: "상태 값 전환에만 사용합니다", body: "정렬 기준이나 보기 형식처럼 화면 콘텐츠 영역은 그대로 두고 값만 즉시 바뀌는 경우에 사용합니다." },
      { tone: "avoid", label: "주의", title: "콘텐츠 영역 전환에는 쓰지 않습니다", body: "선택에 따라 화면의 콘텐츠 영역 자체가 바뀌어야 한다면 SegmentedControl 대신 Tab을 사용합니다." },
    ],
    tokenRows: [
      { label: "세그먼트 배경", token: "--component-chip-background" },
      { label: "선택 세그먼트 배경", token: "--component-chip-background-selected" },
      { label: "선택 세그먼트 텍스트", token: "--component-chip-text-selected" },
    ],
    accessibilityNotes: [
      "role=radiogroup과 각 세그먼트에 role=radio를 지정해 하나만 선택 가능한 그룹임을 스크린리더에 전달합니다.",
      "좌우 방향키로 세그먼트 간 포커스를 이동하고 선택 즉시 변경된 값을 스크린리더로 안내합니다.",
    ],
  },

  skeleton: {
    category: "Feedback",
    guidelines: [
      { tone: "do", label: "권장", title: "실제 콘텐츠와 같은 형태로 배치합니다", body: "카드, 리스트 등 실제 레이아웃의 크기와 배열을 그대로 반영해 콘텐츠가 나타날 때 화면이 갑자기 밀리지 않게 합니다." },
      { tone: "avoid", label: "주의", title: "버튼 로딩 상태에는 사용하지 않습니다", body: "사용자가 직접 실행한 짧은 행동의 대기 상태는 버튼 내부 스피너로 표현하고, Skeleton은 화면 진입 시 콘텐츠 로딩에만 사용합니다." },
    ],
    tokenRows: [
      { label: "블록 배경", token: "--sys-color-surface-subtle" },
      { label: "모서리 반경", token: "--ref-radius-200" },
      { label: "전환 속도", token: "--ref-duration-normal" },
    ],
    accessibilityNotes: [
      "실제 콘텐츠가 아닌 자리표시 블록에는 aria-hidden을 적용해 스크린리더가 빈 도형을 읽지 않게 합니다.",
      "감싸는 컨테이너에 aria-busy=\"true\"를 적용해 로딩이 끝나면 상태 변화를 스크린리더에 전달합니다.",
    ],
  },

  slider: {
    category: "Inputs",
    guidelines: [
      { tone: "do", label: "권장", title: "현재 값을 항상 함께 표시합니다", body: "손잡이 위나 근처에 숫자를 노출해 드래그 중에도 값을 즉시 확인할 수 있게 합니다." },
      { tone: "avoid", label: "주의", title: "정확한 값 입력에는 사용하지 않습니다", body: "정확히 맞춰야 하는 값은 TextField나 숫자 입력으로 받고, Slider는 범위 안 대략적인 조정에만 사용합니다." },
    ],
    tokenRows: [
      { label: "트랙 채움", token: "--sys-color-action-primary" },
      { label: "트랙 배경", token: "--sys-color-surface-subtle" },
      { label: "손잡이 반경", token: "--ref-radius-full" },
    ],
    accessibilityNotes: [
      "role=\"slider\"와 aria-valuenow/min/max를 실시간으로 갱신해 현재 값을 전달합니다.",
      "방향키로 값을 조정할 수 있게 하고, 한 번 입력당 변화 단위를 예측 가능하게 유지합니다.",
    ],
  },

  "stepper-input": {
    category: "Inputs",
    guidelines: [
      { tone: "do", label: "권장", title: "일정한 폭으로 값을 조정합니다", body: "장바구니 수량처럼 1개 단위로 오르내리는 값에 사용하고, 현재 값은 숫자로 항상 함께 표시합니다." },
      { tone: "avoid", label: "주의", title: "범위가 넓으면 사용하지 않습니다", body: "버튼을 여러 번 눌러야 할 만큼 범위가 넓으면 직접 입력이 가능한 숫자 필드를 사용합니다." },
    ],
    tokenRows: [
      { label: "버튼 크기", token: "--component-button-height-sm" },
      { label: "버튼 모서리", token: "--ref-radius-full" },
      { label: "값 텍스트 색상", token: "--sys-color-text-primary" },
    ],
    accessibilityNotes: [
      "증가·감소 버튼에는 '수량 늘리기', '수량 줄이기'처럼 동작을 설명하는 접근 가능한 이름을 각각 제공합니다.",
      "최솟값이나 최댓값에 닿아 버튼이 비활성화되면 aria-disabled로 상태를 전달합니다.",
    ],
  },

  tooltip: {
    category: "Feedback",
    guidelines: [
      { tone: "do", label: "권장", title: "조작 요소에 바로 부착합니다", body: "아이콘 버튼처럼 의미가 바로 드러나지 않는 조작 요소 옆이나 위에 붙여 대상과의 관계를 명확히 합니다." },
      { tone: "avoid", label: "주의", title: "여러 줄 설명에는 쓰지 않습니다", body: "긴 문장이나 이미지, 행동 버튼이 필요하면 Bubble처럼 더 무거운 형태를 사용합니다." },
    ],
    tokenRows: [
      { label: "배경", token: "--sys-color-surface-inverse" },
      { label: "텍스트", token: "--sys-color-text-inverse" },
      { label: "모서리 반경", token: "--ref-radius-200" },
    ],
    accessibilityNotes: [
      "포커스와 호버 양쪽에서 노출하고, Escape 키로 즉시 닫을 수 있게 합니다.",
      "설명 텍스트는 aria-describedby로 대상 조작 요소와 연결해 스크린리더가 함께 읽도록 합니다.",
    ],
  },

  agreement: {
    category: "Inputs",
    guidelines: [
      { tone: "do", label: "권장", title: "전체 동의를 항목과 동기화합니다", body: "전체 동의를 켜면 모든 항목이 선택되고, 개별 항목을 하나라도 해제하면 전체 동의도 함께 해제되도록 동기화합니다." },
      { tone: "avoid", label: "주의", title: "필수 동의 없이 진행을 막습니다", body: "선택 약관 미동의는 진행을 막지 않지만, 필수 약관이 모두 동의되지 않으면 다음 단계 버튼을 비활성 상태로 둡니다." },
    ],
    tokenRows: [
      { label: "필수 항목 강조 색상", token: "--sys-color-text-danger" },
      { label: "체크박스 선택 색상", token: "--sys-color-action-primary" },
      { label: "항목 행 높이", token: "--component-navigation-item-height" },
    ],
    accessibilityNotes: [
      "전체 동의 체크박스의 접근 가능한 이름에 전체 항목 수와 동의한 개수를 함께 전달합니다.",
      "약관 본문을 확인하는 이동 영역과 동의 여부를 토글하는 체크박스의 터치 영역을 분리해 실수로 다른 화면으로 넘어가지 않게 합니다.",
    ],
  },

  keypad: {
    category: "Inputs",
    guidelines: [
      { tone: "do", label: "권장", title: "숫자 배열을 매번 새로 섞습니다", body: "키패드를 열 때마다 숫자 배치를 무작위로 재배열해 어깨너머 훔쳐보기나 입력 위치 추측으로 값이 유추되지 않게 합니다." },
      { tone: "avoid", label: "주의", title: "일반 입력에는 사용하지 않습니다", body: "노출돼도 무방한 값은 시스템 키보드와 TextField를 사용하고, Keypad는 비밀번호·PIN 등 민감한 값 입력에만 제한적으로 사용합니다." },
    ],
    tokenRows: [
      { label: "키 높이", token: "--component-button-height-md" },
      { label: "키 눌림 배경", token: "--component-button-background-secondary-hover" },
      { label: "패널 배경", token: "--component-sheet-background" },
    ],
    accessibilityNotes: [
      "키패드가 열리면 포커스를 첫 번째 키로 이동하고, 입력을 마치면 포커스를 원래 트리거 위치로 되돌립니다.",
      "배열이 무작위로 섞여도 각 키의 접근 가능한 이름은 화면에 보이는 숫자와 항상 일치시켜 스크린리더로도 정확히 입력할 수 있게 합니다.",
    ],
  },
};
