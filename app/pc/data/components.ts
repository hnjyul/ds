import type { GuidelineCard, TokenRow } from "../../components/docs/DetailDocTemplate";

export type ComponentEntry = {
  category: string;
  guidelines: GuidelineCard[];
  tokenRows: TokenRow[];
  accessibilityNotes: string[];
};

export const pcComponents: Record<string, ComponentEntry> = {
  gnb: {
    category: "Navigation",
    guidelines: [
      { tone: "do", label: "권장", title: "서비스 전체에서 항상 동일한 위치에 노출합니다", body: "메뉴 구성과 순서를 페이지마다 바꾸지 않습니다." },
      { tone: "avoid", label: "주의", title: "1차 메뉴를 7개 이상 두지 않습니다", body: "메뉴가 많아지면 하위 메뉴나 검색으로 위임합니다." },
    ],
    tokenRows: [
      { label: "헤더 높이", token: "--sys-layout-header-height" },
      { label: "쌓임 순서", token: "--ref-z-sticky" },
      { label: "하단 구분선", token: "--sys-color-border-subtle" },
    ],
    accessibilityNotes: [
      "nav 요소와 명확한 aria-label(예: '주요 메뉴')로 다른 내비게이션과 구분합니다.",
      "현재 위치한 메뉴 항목은 aria-current=\"page\"로 표시합니다.",
    ],
  },

  footer: {
    category: "Layout",
    guidelines: [
      { tone: "do", label: "권장", title: "정책 · 사업자 정보 등 신뢰 정보를 담습니다", body: "KRDS의 공식 배너(Masthead)처럼 공공 서비스임을 나타내는 정보를 포함할 수 있습니다." },
      { tone: "avoid", label: "주의", title: "주요 탐색을 Footer에만 두지 않습니다", body: "핵심 메뉴는 GNB에 두고 Footer는 보조 정보로 제한합니다." },
    ],
    tokenRows: [
      { label: "배경", token: "--sys-color-surface-subtle" },
      { label: "보조 텍스트", token: "--sys-color-text-tertiary" },
      { label: "상단 여백", token: "--ref-space-400" },
    ],
    accessibilityNotes: [
      "footer 요소(contentinfo 랜드마크)로 마크업해 스크린리더가 바로 이동할 수 있게 합니다.",
      "저작권 · 연락처처럼 작은 텍스트도 충분한 색상 대비를 유지합니다.",
    ],
  },

  datepicker: {
    category: "Inputs",
    guidelines: [
      { tone: "do", label: "권장", title: "선택한 날짜를 입력 필드에도 텍스트로 보여줍니다", body: "달력 없이도 직접 타이핑으로 날짜를 입력할 수 있게 합니다." },
      { tone: "avoid", label: "주의", title: "달력을 유일한 입력 수단으로 두지 않습니다", body: "특히 키보드 사용자를 위해 텍스트 입력 경로를 항상 열어둡니다." },
    ],
    tokenRows: [
      { label: "모서리 반경", token: "--component-field-radius" },
      { label: "선택 색상", token: "--sys-color-action-primary" },
      { label: "셀 모서리", token: "--ref-radius-100" },
    ],
    accessibilityNotes: [
      "grid/gridcell 역할과 방향키로 날짜 사이를 이동할 수 있게 합니다.",
      "선택된 날짜, 오늘 날짜를 색상뿐 아니라 텍스트 상태로도 구분해 스크린리더에 전달합니다.",
    ],
  },

  "step-indicator": {
    category: "Feedback",
    guidelines: [
      { tone: "do", label: "권장", title: "완료·진행·예정 상태를 구분합니다", body: "지나온 단계는 완료 표시로, 현재 단계는 강조 색상으로, 남은 단계는 대기 상태로 구분해 신청·결제 같은 다단계 절차의 전체 진행 상황을 한눈에 보여줍니다." },
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

  spinner: {
    category: "Feedback",
    guidelines: [
      { tone: "do", label: "권장", title: "예상 시간을 알 수 없을 때 사용합니다", body: "표 조회, 저장처럼 몇 초 안에 끝나는 짧고 불확실한 대기 상태에서 별도 UI 없이 진행 중임을 알릴 때 사용합니다." },
      { tone: "avoid", label: "주의", title: "레이아웃 예측이 필요하면 쓰지 않습니다", body: "표나 카드 목록처럼 최종 화면 구조를 미리 보여줘야 하면 Skeleton 형태를 사용합니다." },
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

  "coach-mark": {
    category: "Help",
    guidelines: [
      { tone: "do", label: "권장", title: "가리키는 대상을 명확히 합니다", body: "화살표나 말풍선 꼬리를 대상 요소에 정확히 맞춰 신규 기능이나 UI 변경을 어떤 요소에 대해 안내하는지 바로 알 수 있게 합니다." },
      { tone: "avoid", label: "주의", title: "일회성 안내로 제한합니다", body: "확인 후에는 다시 노출하지 않고, 상시 필요한 설명은 Tooltip이나 ContextualHelp로 낮춰 화면을 반복해서 가리지 않게 합니다." },
    ],
    tokenRows: [
      { label: "말풍선 배경", token: "--ref-color-brand-600" },
      { label: "쌓임 순서", token: "--ref-z-overlay" },
      { label: "그림자", token: "--ref-shadow-200" },
    ],
    accessibilityNotes: [
      "가리키는 대상 요소에 aria-describedby로 설명을 연결해 스크린리더가 맥락과 함께 읽도록 합니다.",
      "여러 단계로 이어지는 워크스루라면 키보드만으로 다음 · 건너뛰기 · 종료를 모두 조작할 수 있게 합니다.",
    ],
  },

  masthead: {
    category: "Identity",
    guidelines: [
      { tone: "do", label: "권장", title: "정부상징과 공식 문구를 함께 노출합니다", body: "국가상징과 '대한민국 공식 전자정부 누리집' 같은 공식 문구를 나란히 배치해 신뢰 정보를 전달합니다." },
      { tone: "avoid", label: "주의", title: "GNB와 시각 · 위계를 분리해 배치합니다", body: "Masthead는 GNB보다 위쪽에 별도 배경과 높이로 구분해 서비스 메뉴와 혼동되지 않게 합니다." },
    ],
    tokenRows: [
      { label: "배경", token: "--sys-color-surface-inverse" },
      { label: "텍스트", token: "--sys-color-text-inverse" },
      { label: "상하 여백", token: "--ref-space-100" },
    ],
    accessibilityNotes: [
      "정부상징 이미지에는 '대한민국 정부'처럼 의미를 전달하는 대체텍스트를 지정합니다.",
      "본문보다 먼저 읽히므로 문구를 간결하게 유지해 스크린리더 탐색을 지연시키지 않습니다.",
    ],
  },

  identifier: {
    category: "Identity",
    guidelines: [
      { tone: "do", label: "권장", title: "발행 기관명과 로고를 함께 표시합니다", body: "기관명만으로 식별이 어려우면 로고나 상징을 함께 두어 출처를 명확히 합니다." },
      { tone: "avoid", label: "주의", title: "Masthead 대신 쓰지 않습니다", body: "사이트 전체 신뢰 정보는 Masthead가 맡고, Identifier는 카드 · 게시물처럼 콘텐츠 단위에만 붙입니다." },
    ],
    tokenRows: [
      { label: "모서리 반경", token: "--ref-radius-200" },
      { label: "배경", token: "--sys-color-surface-subtle" },
      { label: "라벨 서체 크기", token: "--sys-type-label-sm-size" },
    ],
    accessibilityNotes: [
      "기관명은 이미지가 아닌 텍스트로 제공해 스크린리더가 그대로 읽게 합니다.",
      "카드 안에서 Identifier는 제목보다 먼저 읽히지 않도록 마크업 순서를 조정합니다.",
    ],
  },

  "skip-link": {
    category: "Navigation",
    guidelines: [
      { tone: "do", label: "권장", title: "포커스 시에만 화면에 나타나게 합니다", body: "평소에는 화면 밖으로 배치해 두었다가 Tab 키로 포커스가 들어오면 화면 안으로 이동해 보이도록 합니다." },
      { tone: "avoid", label: "주의", title: "display:none으로 숨기지 않습니다", body: "display:none이나 visibility:hidden을 쓰면 포커스 자체를 받을 수 없어 Tab 키로도 나타나지 않습니다." },
    ],
    tokenRows: [
      { label: "쌓임 순서", token: "--ref-z-skip-link" },
      { label: "포커스 링", token: "--sys-color-focus-ring" },
      { label: "배경(포커스 시)", token: "--sys-color-action-primary" },
    ],
    accessibilityNotes: [
      "이동 대상 요소에 id와 tabindex=\"-1\"을 지정해 클릭 후에도 포커스가 본문으로 이동하도록 합니다.",
      "문서 마크업에서 GNB보다 앞에 배치해 페이지 진입 후 첫 Tab 키 입력에서 바로 포커스되게 합니다.",
    ],
  },

  "side-navigation": {
    category: "Navigation",
    guidelines: [
      { tone: "do", label: "권장", title: "현재 항목을 색으로 구분합니다", body: "aria-current=\"location\"과 배경 · 글자색을 함께 바꿔, 목록이 길어 스크롤해도 지금 위치한 하위 메뉴를 놓치지 않게 합니다." },
      { tone: "avoid", label: "주의", title: "전역 메뉴를 대신하지 않습니다", body: "SideNavigation은 현재 섹션 내부의 하위 카테고리 탐색용이므로 서비스 전체 메뉴는 GNB에 유지하고 여기로 옮기지 않습니다." },
    ],
    tokenRows: [
      { label: "사이드바 너비", token: "--sys-layout-sidebar-width" },
      { label: "메뉴 항목 높이", token: "--component-navigation-item-height" },
      { label: "현재 항목 배경", token: "--sys-color-surface-accent-subtle" },
    ],
    accessibilityNotes: [
      "nav 요소에 aria-label(예: '섹션 메뉴')을 지정해 GNB · Breadcrumb 등 다른 내비게이션과 구분합니다.",
      "현재 위치한 항목은 aria-current=\"location\"으로 표시해, 페이지 전체가 아닌 현재 화면 안의 위치임을 알립니다.",
    ],
  },

  "in-page-navigation": {
    category: "Navigation",
    guidelines: [
      { tone: "do", label: "권장", title: "스크롤 위치에 맞춰 현재 섹션을 표시합니다", body: "본문을 내리는 동안 목차의 현재 항목에 강조 표시를 갱신해 사용자가 지금 읽는 위치를 알 수 있게 합니다." },
      { tone: "avoid", label: "주의", title: "소제목이 몇 개뿐인 짧은 문서에는 넣지 않습니다", body: "이동할 섹션이 부족한 페이지에서는 목차가 본문 폭만 줄여 오히려 가독성을 해칩니다." },
    ],
    tokenRows: [
      { label: "목차 레일 너비", token: "--sys-layout-toc-width" },
      { label: "현재 섹션 강조 색상", token: "--sys-color-text-accent" },
      { label: "항목 전환 속도", token: "--ref-duration-fast" },
    ],
    accessibilityNotes: [
      "aside 요소에 aria-label(예: \"이 페이지의 목차\")을 지정해 본문 안의 다른 링크 목록과 구분합니다.",
      "현재 보고 있는 섹션의 링크는 aria-current=\"location\"으로 표시해 스크린리더가 위치를 함께 안내하게 합니다.",
    ],
  },

  "structured-list": {
    category: "Display",
    guidelines: [
      { tone: "do", label: "권장", title: "레이블 열 너비를 한 줄로 통일합니다", body: "값의 시작 위치를 맞추면 여러 항목을 위에서 아래로 빠르게 훑어볼 수 있습니다." },
      { tone: "avoid", label: "주의", title: "행이 반복되는 비교 데이터엔 쓰지 않습니다", body: "여러 항목을 나란히 비교하거나 정렬해야 한다면 Table을 사용합니다." },
    ],
    tokenRows: [
      { label: "레이블 글자 무게", token: "--ref-font-weight-medium" },
      { label: "값 영역 여백", token: "--component-table-cell-padding-block" },
      { label: "행 구분선", token: "--sys-color-border-subtle" },
    ],
    accessibilityNotes: [
      "레이블은 dt, 값은 dd 요소로 구성해 스크린리더가 두 텍스트를 하나의 의미 단위로 읽게 합니다.",
      "dl 앞에 어떤 정보를 모아 놓았는지 알리는 제목(h2·h3)이나 aria-label을 함께 둡니다.",
    ],
  },

  "critical-alerts": {
    category: "Feedback",
    guidelines: [
      { tone: "do", label: "권장", title: "페이지 최상단에 고정합니다", body: "GNB보다 위, 모든 페이지 공통 위치에 노출해 서비스 전체 장애 · 점검 상황임을 즉시 알립니다." },
      { tone: "avoid", label: "주의", title: "경미한 안내엔 쓰지 않습니다", body: "일부 화면의 사소한 오류나 공지는 본문 흐름 안의 Alert · Callout으로 안내하고, 이 배너는 서비스 전체에 영향을 주는 장애 · 점검에만 사용합니다." },
    ],
    tokenRows: [
      { label: "배경", token: "--sys-color-surface-danger-subtle" },
      { label: "텍스트", token: "--sys-color-text-danger" },
      { label: "쌓임 순서", token: "--ref-z-overlay" },
    ],
    accessibilityNotes: [
      "닫기 버튼에는 무엇을 닫는지 알 수 있는 접근 가능한 이름(예: '장애 안내 닫기')을 제공합니다.",
      "탭 이동 순서에서 GNB보다 앞에 배치해 키보드 사용자가 가장 먼저 인지하게 합니다.",
    ],
  },

  carousel: {
    category: "Display",
    guidelines: [
      { tone: "do", label: "권장", title: "이전 · 다음 버튼에 정지 기능을 함께 둡니다", body: "자동으로 넘어가는 슬라이드에는 마우스 오버나 키보드 포커스 시 정지되는 컨트롤을 이전 · 다음 버튼 옆에 배치해 사용자가 읽는 속도를 조절할 수 있게 합니다." },
      { tone: "avoid", label: "주의", title: "정보 전달을 자동 재생에만 맡기지 않습니다", body: "슬라이드가 넘어간 뒤 놓치기 쉬우므로 공지나 중요 정보는 페이지 본문에도 함께 노출합니다." },
    ],
    tokenRows: [
      { label: "전환 속도", token: "--ref-duration-normal" },
      { label: "전환 이징", token: "--ref-easing-standard" },
      { label: "텍스트 가독 오버레이", token: "--sys-color-overlay" },
    ],
    accessibilityNotes: [
      "슬라이드 영역에 role=\"region\"과 aria-roledescription=\"carousel\"을 지정해 스크린리더가 콘텐츠 슬라이더임을 인식하게 합니다.",
      "자동 재생은 마우스 오버나 키보드 포커스가 들어오면 멈추고, 정지 · 재생 버튼을 이전 · 다음 버튼 옆에 제공합니다.",
    ],
  },

  "text-list": {
    category: "Display",
    guidelines: [
      { tone: "do", label: "권장", title: "순서 유무에 맞는 서식을 선택합니다", body: "절차처럼 순서가 중요한 안내는 번호 목록(ol)으로, 준비 서류처럼 순서가 없는 항목은 글머리 기호 목록(ul)으로 나열합니다." },
      { tone: "avoid", label: "주의", title: "긴 문단을 목록으로 쪼개지 않습니다", body: "서로 독립적이고 병렬적인 항목만 목록으로 묶고, 흐름이 이어지는 설명은 본문 문단으로 작성합니다." },
    ],
    tokenRows: [
      { label: "항목 간격", token: "--ref-space-75" },
      { label: "목록 본문 크기", token: "--sys-type-body-md-size" },
      { label: "본문 텍스트 색상", token: "--sys-color-text-primary" },
    ],
    accessibilityNotes: [
      "ol · ul과 li 요소로 마크업해 스크린리더가 전체 항목 수와 순서를 안내받을 수 있게 합니다.",
      "번호가 절차나 순서를 의미할 때는 글머리 기호 대신 순서 있는 목록(ol)을 사용해 의미를 정확히 전달합니다.",
    ],
  },

  link: {
    category: "Actions",
    guidelines: [
      { tone: "do", label: "권장", title: "링크 목적을 문구로 드러냅니다", body: "\"여기를 클릭\"이 아니라 이동할 대상을 담은 구체적인 텍스트를 링크로 사용합니다." },
      { tone: "avoid", label: "주의", title: "색상만으로 구분하지 않습니다", body: "밑줄 등 색상 외의 시각적 단서를 함께 제공해 색맹 사용자도 링크임을 알아볼 수 있게 합니다." },
    ],
    tokenRows: [
      { label: "링크 텍스트", token: "--sys-color-text-accent" },
      { label: "호버 색상", token: "--sys-color-action-primary-hover" },
      { label: "포커스 링", token: "--sys-color-focus-ring" },
    ],
    accessibilityNotes: [
      "a 요소와 유효한 href로 마크업해 스크린리더가 실제 이동 가능한 링크로 인식하게 합니다.",
      "키보드로 초점이 이동했을 때 배경과 뚜렷이 구분되는 포커스 링을 표시합니다.",
    ],
  },

  fab: {
    category: "Actions",
    guidelines: [
      { tone: "do", label: "권장", title: "핵심 행동 하나에만 사용합니다", body: "새 글 작성, 상담 신청처럼 사용자가 페이지에서 가장 자주 찾는 행동 하나에만 배정하고, 여러 행동이 필요하면 일반 버튼 그룹으로 전환합니다." },
      { tone: "avoid", label: "주의", title: "다른 플로팅 요소와 겹치지 않습니다", body: "화면 우하단에 상담 챗봇이나 맨 위로 버튼이 이미 떠 있다면 위치를 조정하거나 하나로 통합해 두 요소가 겹치지 않게 합니다." },
    ],
    tokenRows: [
      { label: "배경색", token: "--sys-color-action-primary" },
      { label: "쌓임 순서", token: "--ref-z-overlay" },
      { label: "그림자", token: "--ref-shadow-300" },
    ],
    accessibilityNotes: [
      "아이콘만으로 구성된 버튼이라면 aria-label에 실제로 실행되는 행동을 구체적인 텍스트로 담아 스크린리더 이용자도 목적을 알 수 있게 합니다.",
      "본문 위에 떠서 배경이 계속 바뀌므로, 포커스 상태에서도 링이 배경과 무관하게 뚜렷이 보이도록 충분한 대비를 유지합니다.",
    ],
  },

  tag: {
    category: "Selection",
    guidelines: [
      { tone: "do", label: "권장", title: "선택 여부를 시각적으로 구분합니다", body: "선택된 Tag는 배경과 테두리 색상을 함께 바꿔, 여러 항목을 한 화면에서 훑어보는 데스크톱 필터 목록에서도 선택 상태를 즉시 알아볼 수 있게 합니다." },
      { tone: "avoid", label: "주의", title: "상태 표시자로 쓰지 않습니다", body: "처리 결과나 진행 상태처럼 사용자가 직접 바꿀 수 없는 값은 Badge로 표시하고, Tag는 클릭으로 선택 · 해제 가능한 필터나 키워드에만 사용합니다." },
    ],
    tokenRows: [
      { label: "선택 상태 배경", token: "--sys-color-action-primary" },
      { label: "선택 해제 테두리", token: "--sys-color-border-default" },
      { label: "모서리 반경", token: "--ref-radius-300" },
    ],
    accessibilityNotes: [
      "선택 여부는 aria-pressed 값으로 전달하고, 색상뿐 아니라 테두리 굵기나 체크 아이콘으로도 함께 구분합니다.",
      "같은 목적의 Tag 여러 개는 하나의 그룹으로 묶고, 그룹 전체에 필터 목적을 설명하는 레이블을 제공합니다.",
    ],
  },

  "toggle-switch": {
    category: "Selection",
    guidelines: [
      { tone: "do", label: "권장", title: "전환 즉시 상태를 반영합니다", body: "알림 수신, 화면 표시 여부처럼 저장 버튼 없이 바로 적용되는 단일 설정 값에 사용합니다." },
      { tone: "avoid", label: "주의", title: "확인 절차가 필요하면 쓰지 않습니다", body: "해지, 결제 수단 변경처럼 되돌리기 어렵거나 확인이 필요한 항목은 저장 버튼이 있는 Checkbox 조합을 사용합니다." },
    ],
    tokenRows: [
      { label: "트랙 모서리 반경", token: "--ref-radius-full" },
      { label: "켜짐 상태 색상", token: "--sys-color-action-primary" },
      { label: "전환 애니메이션 속도", token: "--ref-duration-fast" },
    ],
    accessibilityNotes: [
      "role=\"switch\"와 aria-checked로 On/Off 상태를 전달하고, 클릭뿐 아니라 Space 키로도 전환되게 합니다.",
      "스위치 옆에 현재 상태를 나타내는 텍스트 라벨을 함께 두어 색상만으로 상태를 구분하지 않게 합니다.",
    ],
  },

  "contextual-help": {
    category: "Help",
    guidelines: [
      { tone: "do", label: "권장", title: "클릭으로 열고 닫습니다", body: "포커스나 호버로 자동 노출되는 Tooltip과 달리, 아이콘을 클릭해야 패널이 열리고 닫기 전까지 화면에 유지되게 합니다." },
      { tone: "avoid", label: "주의", title: "패널에 여러 주제를 섞지 않습니다", body: "하나의 입력 필드나 전문 용어에 대한 설명으로 범위를 좁히고, 서비스 전반 안내는 별도 도움말 페이지로 연결합니다." },
    ],
    tokenRows: [
      { label: "패널 배경", token: "--sys-color-surface-raised" },
      { label: "패널 테두리", token: "--sys-color-border-default" },
      { label: "패널 그림자", token: "--ref-shadow-200" },
    ],
    accessibilityNotes: [
      "트리거는 button 요소로 만들고 aria-expanded로 열림 상태를, aria-controls로 패널 id를 연결해 전달합니다.",
      "Escape 키로 패널을 닫고 포커스를 트리거 버튼으로 되돌리며, 패널 안 콘텐츠도 키보드만으로 끝까지 탐색할 수 있게 합니다.",
    ],
  },

  "file-upload": {
    category: "Inputs",
    guidelines: [
      { tone: "do", label: "권장", title: "형식 · 용량 제한 먼저 안내", body: "확장자, 최대 파일 크기, 첨부 가능 개수를 업로드 영역 위나 아래에 문구로 미리 안내해 반려를 줄입니다." },
      { tone: "avoid", label: "주의", title: "드래그만으로 받지 않습니다", body: "파일 찾기 버튼 등 클릭으로 탐색기를 여는 대체 경로를 함께 제공해 마우스 드래그가 어려운 사용자도 첨부할 수 있게 합니다." },
    ],
    tokenRows: [
      { label: "업로드 영역 테두리", token: "--component-field-border-color" },
      { label: "형식 · 용량 오류 테두리", token: "--component-field-border-color-error" },
      { label: "파일 찾기 버튼 색상", token: "--sys-color-action-primary" },
    ],
    accessibilityNotes: [
      "input[type=\"file\"] 요소는 화면에서 숨기더라도 label과 명확히 연결해 스크린리더가 첨부 파일 선택 컨트롤임을 인식하게 합니다.",
      "업로드가 끝나면 파일명과 성공 · 실패 상태를 role=\"status\"와 aria-live=\"polite\" 영역으로 알려 화면을 보지 않아도 결과를 확인할 수 있게 합니다.",
    ],
  },
};
