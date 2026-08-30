import type { SurfaceNav } from "../../components/shell/types";

export const pcNav: SurfaceNav = [
  {
    id: "foundation",
    label: "파운데이션",
    description: "KRDS(대한민국 정부 디자인 시스템)를 참고해 보강한, 넓은 화면과 정보 밀도를 전제로 한 기초 원칙입니다.",
    items: [
      { slug: "color", label: "색상", description: "KRDS 정부 청색을 기준으로 한 Primary · Secondary와 의미 기반 색상 토큰의 사용 원칙을 정의합니다.", treatment: "standard" },
      { slug: "typography", label: "타이포그래피", description: "본문, 제목, 라벨 등 역할 기반 글자 스타일과 데스크톱 가독성 기준을 정의합니다.", treatment: "standard" },
      { slug: "icon", label: "아이콘", description: "정보 밀도가 높은 데스크톱 화면에서 아이콘 크기와 스타일 사용 기준을 정의합니다.", treatment: "standard" },
      { slug: "grid", label: "그리드 · 레이아웃", description: "콘텐츠 최대 폭과 열 구조로 넓은 화면의 정보 배치를 정의합니다.", treatment: "standard" },
      { slug: "motion", label: "모션", description: "화면 전환과 상태 변화에 사용하는 지속시간과 이징 곡선을 정의합니다.", treatment: "standard" },
      { slug: "elevation", label: "엘리베이션", description: "카드, 팝오버 등 표면 사이의 위계를 그림자 단계로 표현하는 원칙입니다.", treatment: "standard" },
    ],
  },
  {
    id: "components",
    label: "컴포넌트",
    description: "마우스 · 키보드 조작과 넓은 화면을 전제로, KRDS의 컴포넌트 구성을 참고해 보강한 UI 단위입니다.",
    items: [
      { slug: "button", label: "Button", description: "화면에서 가장 중요한 행동을 실행하는 기본 조작 요소입니다.", treatment: "full" },
      { slug: "table", label: "Table", description: "행과 열로 구조화된 데이터를 비교하고 탐색할 수 있게 보여줍니다.", treatment: "full" },
      { slug: "accordion", label: "Accordion", description: "관련된 여러 콘텐츠를 접고 펼쳐 한 화면에서 탐색할 수 있게 합니다.", treatment: "full" },
      { slug: "breadcrumb", label: "Breadcrumb", description: "현재 위치까지의 경로를 계층적으로 보여주는 보조 내비게이션입니다.", treatment: "full" },
      { slug: "text-field", label: "TextField", description: "사용자가 텍스트를 입력하고 상태 피드백을 받는 입력 요소입니다.", treatment: "standard" },
      { slug: "checkbox", label: "Checkbox", description: "여러 개를 동시에 선택할 수 있는 항목에 사용합니다.", treatment: "standard" },
      { slug: "radio", label: "Radio", description: "여러 옵션 중 하나만 선택해야 할 때 사용합니다.", treatment: "standard" },
      { slug: "tab", label: "Tab", description: "같은 위계의 콘텐츠를 전환해서 보여주는 탐색 요소입니다.", treatment: "standard" },
      { slug: "badge", label: "Badge", description: "새 소식이나 처리할 항목의 수를 짧게 알려주는 표시자입니다.", treatment: "standard" },
      { slug: "card", label: "Card", description: "관련 정보를 하나의 표면에 묶어 보여주는 콘텐츠 단위입니다.", treatment: "standard" },
      { slug: "tooltip", label: "Tooltip", description: "짧은 보충 설명을 필요한 순간에만 보여주는 보조 정보입니다.", treatment: "standard" },
      { slug: "modal-dialog", label: "Modal · Dialog", description: "중요한 결정 전에 사용자의 주의를 집중시키는 모달 레이어입니다.", treatment: "standard" },
      { slug: "pagination", label: "Pagination", description: "많은 목록을 페이지 단위로 나누어 탐색할 수 있게 합니다.", treatment: "standard" },
      { slug: "gnb", label: "GNB", description: "서비스 전체를 아우르는 상단 전역 내비게이션입니다.", treatment: "standard" },
      { slug: "footer", label: "Footer", description: "정책, 연락처 등 부가 정보를 담는 화면 최하단 영역입니다.", treatment: "standard" },
      { slug: "datepicker", label: "Datepicker", description: "달력을 통해 날짜를 선택하거나 범위를 지정합니다.", treatment: "standard" },
      { slug: "selectbox", label: "Selectbox", description: "여러 옵션 중 하나를 목록에서 선택하는 입력 요소입니다.", treatment: "standard" },
      { slug: "alert", label: "Alert · Callout", description: "본문 흐름 안에서 주의나 안내 메시지를 강조해 보여줍니다.", treatment: "standard" },
    ],
  },
  {
    id: "utilities",
    label: "유틸리티",
    description: "특정 컴포넌트에 속하지 않지만 PC 화면 전반과 공공 서비스 접근성 기준에서 지켜야 하는 규칙입니다.",
    items: [
      { slug: "focus-ring", label: "포커스 링", description: "키보드 탐색 시 현재 초점을 명확히 드러내는 규칙입니다.", treatment: "standard" },
      { slug: "responsive-grid", label: "반응형 그리드", description: "화면 폭에 따라 콘텐츠 열 수와 여백이 바뀌는 규칙입니다.", treatment: "standard" },
      { slug: "spacing-scale", label: "간격 스케일", description: "섹션과 컴포넌트 사이 여백을 만드는 4px 기반 척도입니다.", treatment: "standard" },
      { slug: "kwcag-checklist", label: "KWCAG 접근성 체크리스트", description: "한국형 웹 콘텐츠 접근성 지침 준수를 위한 점검 항목입니다.", treatment: "standard" },
    ],
  },
];
