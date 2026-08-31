import type { GuidelineCard, TokenRow } from "../../components/docs/DetailDocTemplate";

export type ComponentEntry = {
  category: string;
  guidelines: GuidelineCard[];
  tokenRows: TokenRow[];
  accessibilityNotes: string[];
};

export const pcComponents: Record<string, ComponentEntry> = {
  "text-field": {
    category: "Inputs",
    guidelines: [
      { tone: "do", label: "권장", title: "레이블과 도움말을 항상 함께 제공합니다", body: "필수 여부와 형식 예시를 레이블 아래 도움말로 명시합니다." },
      { tone: "avoid", label: "주의", title: "필수 입력을 색상만으로 표시하지 않습니다", body: "별표(*)나 '필수' 텍스트를 색상과 함께 사용합니다." },
    ],
    tokenRows: [
      { label: "필드 높이", token: "--component-field-height" },
      { label: "포커스 테두리", token: "--component-field-border-color-focus" },
      { label: "오류 테두리", token: "--component-field-border-color-error" },
    ],
    accessibilityNotes: [
      "레이블과 입력을 for/id로 명시적으로 연결합니다.",
      "오류 메시지는 aria-describedby로 입력 요소와 연결합니다.",
    ],
  },

  checkbox: {
    category: "Inputs",
    guidelines: [
      { tone: "do", label: "권장", title: "0개 이상 여러 개 선택에 사용합니다", body: "약관 동의, 목록 다중 선택처럼 독립적인 항목에 사용합니다." },
      { tone: "avoid", label: "주의", title: "상호 배타적인 선택에는 사용하지 않습니다", body: "하나만 골라야 하면 Radio를 사용합니다." },
    ],
    tokenRows: [
      { label: "모서리 반경", token: "--ref-radius-100" },
      { label: "선택 색상", token: "--sys-color-action-primary" },
      { label: "테두리", token: "--sys-color-border-strong" },
    ],
    accessibilityNotes: [
      "네이티브 input[type=checkbox]를 기반으로 구현해 키보드 지원을 기본으로 확보합니다.",
      "표 안의 전체 선택 체크박스는 부분 선택 상태(aria-checked=\"mixed\")도 지원합니다.",
    ],
  },

  radio: {
    category: "Inputs",
    guidelines: [
      { tone: "do", label: "권장", title: "2~5개의 상호 배타적 옵션에 사용합니다", body: "선택지가 더 많아지면 Selectbox를 검토합니다." },
      { tone: "avoid", label: "주의", title: "단일 On/Off 설정에는 사용하지 않습니다", body: "하나의 값만 켜고 끄는 경우 Switch 형태를 사용합니다." },
    ],
    tokenRows: [
      { label: "모서리 반경", token: "--ref-radius-full" },
      { label: "선택 색상", token: "--sys-color-action-primary" },
      { label: "테두리", token: "--sys-color-border-strong" },
    ],
    accessibilityNotes: [
      "같은 그룹의 Radio는 role=\"radiogroup\"으로 묶고 방향키 이동을 지원합니다.",
      "그룹 전체를 설명하는 접근 가능한 이름(fieldset/legend 또는 aria-label)을 제공합니다.",
    ],
  },

  tab: {
    category: "Navigation",
    guidelines: [
      { tone: "do", label: "권장", title: "같은 위계의 콘텐츠 전환에만 사용합니다", body: "성격이 다른 화면 이동에는 사용하지 않습니다." },
      { tone: "avoid", label: "주의", title: "탭 개수를 7개 이상 두지 않습니다", body: "탭이 많아지면 좌측 사이드바 내비게이션 구조를 검토합니다." },
    ],
    tokenRows: [
      { label: "선택 색상", token: "--sys-color-action-primary" },
      { label: "전환 속도", token: "--ref-duration-fast" },
      { label: "선택 텍스트 굵기", token: "--ref-font-weight-semibold" },
    ],
    accessibilityNotes: [
      "방향키로 탭 간 이동, Home/End로 처음 · 끝 탭 이동을 지원합니다(마우스 없이도 완전히 조작 가능).",
      "선택된 탭만 tabIndex=0을 갖도록 roving tabindex를 구현합니다.",
    ],
  },

  badge: {
    category: "Display",
    guidelines: [
      { tone: "do", label: "권장", title: "숫자나 짧은 상태만 표시합니다", body: "처리 대기 건수, 신규 표시 등 한눈에 파악 가능한 정보만 담습니다." },
      { tone: "avoid", label: "주의", title: "문장을 담지 않습니다", body: "설명이 필요한 정보는 Badge 대신 본문 텍스트나 Tooltip으로 전달합니다." },
    ],
    tokenRows: [
      { label: "모서리 반경", token: "--ref-radius-full" },
      { label: "강조 배경", token: "--sys-color-surface-danger-subtle" },
      { label: "강조 텍스트", token: "--sys-color-text-danger" },
    ],
    accessibilityNotes: [
      "숫자만으로 의미가 전달되지 않으면 접근 가능한 이름에 맥락을 추가합니다.",
      "장식용 점(dot) 배지는 aria-hidden 처리합니다.",
    ],
  },

  card: {
    category: "Display",
    guidelines: [
      { tone: "do", label: "권장", title: "관련 정보를 하나의 조작 단위로 묶습니다", body: "제목, 요약, 행동을 카드 하나에 담아 스캔하기 쉽게 합니다." },
      { tone: "avoid", label: "주의", title: "카드 안에 카드를 중첩하지 않습니다", body: "위계가 더 필요하면 카드 대신 섹션 구분선을 사용합니다." },
    ],
    tokenRows: [
      { label: "내부 여백", token: "--component-card-padding" },
      { label: "모서리 반경", token: "--component-card-radius" },
      { label: "그림자", token: "--component-card-shadow" },
    ],
    accessibilityNotes: [
      "카드 전체가 하나의 링크라면 카드 내부에 다른 링크를 중첩해 두지 않습니다.",
      "카드의 제목을 heading으로 마크업해 목록 단위 탐색을 돕습니다.",
    ],
  },

  tooltip: {
    category: "Feedback",
    guidelines: [
      { tone: "do", label: "권장", title: "보조 설명에만 사용합니다", body: "필수 정보는 툴팁 없이도 화면에서 바로 확인 가능해야 합니다." },
      { tone: "avoid", label: "주의", title: "hover만을 유일한 진입 방법으로 두지 않습니다", body: "포커스로도 동일한 내용이 노출되어야 합니다." },
    ],
    tokenRows: [
      { label: "배경", token: "--sys-color-surface-inverse" },
      { label: "텍스트", token: "--sys-color-text-inverse" },
      { label: "모서리 반경", token: "--ref-radius-200" },
    ],
    accessibilityNotes: [
      "role=\"tooltip\"과 aria-describedby로 트리거 요소와 연결합니다.",
      "Escape로 닫을 수 있어야 하고, 마우스가 벗어나도 포커스가 남아 있으면 유지합니다.",
    ],
  },

  "modal-dialog": {
    category: "Overlay",
    guidelines: [
      { tone: "do", label: "권장", title: "결과를 되돌릴 수 없을 때 사용합니다", body: "삭제, 승인처럼 영향이 큰 행동을 확인받을 때 사용합니다." },
      { tone: "avoid", label: "주의", title: "단순 정보 전달에는 사용하지 않습니다", body: "가벼운 안내는 Alert · Callout으로 대체합니다." },
    ],
    tokenRows: [
      { label: "모서리 반경", token: "--ref-radius-400" },
      { label: "그림자", token: "--ref-shadow-300" },
      { label: "배경 오버레이", token: "--sys-color-overlay" },
    ],
    accessibilityNotes: [
      "열리는 즉시 포커스를 모달 안으로 이동하고, 닫히면 트리거로 되돌립니다.",
      "배경 콘텐츠는 inert 처리해 Tab 이동과 스크린리더 탐색에서 제외합니다.",
    ],
  },

  pagination: {
    category: "Navigation",
    guidelines: [
      { tone: "do", label: "권장", title: "현재 페이지와 전체 페이지 수를 함께 보여줍니다", body: "이전 · 다음뿐 아니라 임의 페이지로 바로 이동할 수 있게 합니다." },
      { tone: "avoid", label: "주의", title: "페이지 번호만으로 목록 상태를 대신하지 않습니다", body: "총 항목 수와 정렬 기준을 목록 위에 함께 안내합니다." },
    ],
    tokenRows: [
      { label: "선택 색상", token: "--sys-color-action-primary" },
      { label: "모서리 반경", token: "--ref-radius-200" },
      { label: "버튼 간격", token: "--ref-space-100" },
    ],
    accessibilityNotes: [
      "현재 페이지는 aria-current=\"page\"로 표시합니다.",
      "페이지 이동 버튼에 대상 페이지 번호를 포함한 접근 가능한 이름을 제공합니다.",
    ],
  },

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

  selectbox: {
    category: "Inputs",
    guidelines: [
      { tone: "do", label: "권장", title: "5개 이상의 옵션 중 하나를 고를 때 사용합니다", body: "옵션이 4개 이하라면 Radio 그룹이 더 빠르게 스캔됩니다." },
      { tone: "avoid", label: "주의", title: "뜻이 통하지 않는 축약어를 쓰지 않습니다", body: "행정 용어가 필요하다면 도움말을 함께 제공합니다." },
    ],
    tokenRows: [
      { label: "필드 높이", token: "--component-field-height" },
      { label: "테두리", token: "--component-field-border-color" },
      { label: "모서리 반경", token: "--ref-radius-100" },
    ],
    accessibilityNotes: [
      "네이티브 select 또는 동등한 listbox 패턴을 사용해 키보드 탐색을 기본 제공합니다.",
      "선택 값이 바뀌면 결과를 인접 영역에도 명확히 반영합니다.",
    ],
  },

  alert: {
    category: "Feedback",
    guidelines: [
      { tone: "do", label: "권장", title: "심각도에 따라 색상과 아이콘을 구분합니다", body: "정보 · 성공 · 경고 · 오류 네 가지로 의미를 분리합니다." },
      { tone: "avoid", label: "주의", title: "일반 안내에 오류 색상을 남용하지 않습니다", body: "실제 오류가 아니라면 중립적인 정보 색상을 사용합니다." },
    ],
    tokenRows: [
      { label: "경고 배경", token: "--sys-color-surface-warning-subtle" },
      { label: "경고 텍스트", token: "--sys-color-text-warning" },
      { label: "모서리 반경", token: "--ref-radius-300" },
    ],
    accessibilityNotes: [
      "경고 · 오류 Alert는 role=\"alert\"로 등장 즉시 스크린리더에 전달합니다.",
      "색상만으로 심각도를 구분하지 않고 아이콘과 텍스트 라벨을 함께 사용합니다.",
    ],
  },
};
