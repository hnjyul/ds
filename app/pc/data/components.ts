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
};
