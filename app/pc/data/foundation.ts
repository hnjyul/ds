import type { ReferenceSpecimen } from "../../components/docs/ReferenceDocTemplate";

export type FoundationEntry = {
  category: string;
  specimen: ReferenceSpecimen;
  usageNotes: string[];
  accessibilityNotes: string[];
};

export const pcFoundation: Record<string, FoundationEntry> = {
  color: {
    category: "Foundation",
    specimen: {
      kind: "swatches",
      groups: [
        {
          label: "Primary — KRDS 정부 청색(#256EF4)",
          swatches: [
            { name: "Brand 50", value: "var(--ref-color-brand-50)", token: "--ref-color-brand-50" },
            { name: "Brand 300", value: "var(--ref-color-brand-300)", token: "--ref-color-brand-300" },
            { name: "Brand 600 (Primary)", value: "var(--ref-color-brand-600)", token: "--ref-color-brand-600" },
            { name: "Brand 800", value: "var(--ref-color-brand-800)", token: "--ref-color-brand-800" },
          ],
        },
        {
          label: "Secondary — Primary와 구분되는 독립 색상군",
          swatches: [
            { name: "Secondary 50", value: "var(--ref-color-brand-secondary-50)", token: "--ref-color-brand-secondary-50" },
            { name: "Secondary 300", value: "var(--ref-color-brand-secondary-300)", token: "--ref-color-brand-secondary-300" },
            { name: "Secondary 600", value: "var(--ref-color-brand-secondary-600)", token: "--ref-color-brand-secondary-600" },
            { name: "Secondary 800", value: "var(--ref-color-brand-secondary-800)", token: "--ref-color-brand-secondary-800" },
          ],
        },
        {
          label: "Neutral",
          swatches: [
            { name: "Neutral 50", value: "var(--ref-color-neutral-50)", token: "--ref-color-neutral-50" },
            { name: "Neutral 300", value: "var(--ref-color-neutral-300)", token: "--ref-color-neutral-300" },
            { name: "Neutral 600", value: "var(--ref-color-neutral-600)", token: "--ref-color-neutral-600" },
            { name: "Neutral 900 (본문 텍스트)", value: "var(--ref-color-neutral-900)", token: "--ref-color-neutral-900" },
          ],
        },
      ],
    },
    usageNotes: [
      "KRDS는 정부 청색 하나를 단일 액센트로 사용해 신뢰감을 전달합니다 — 이 시스템도 Primary를 화면당 하나의 핵심 행동에만 집중해서 사용합니다.",
      "본문 텍스트 근사 검정(#1E2124)과 순백 배경(#FFFFFF)을 기본 조합으로 사용해 공공 서비스에 맞는 절제된 대비를 유지합니다.",
      "Secondary는 정보 밀도가 높은 표(Table), 보조 내비게이션(Breadcrumb, GNB)의 비활성 상태 등에 제한적으로 사용합니다.",
    ],
    accessibilityNotes: [
      "흰 배경 위 Primary 텍스트는 대비비 약 4.55:1로 WCAG AA 본문 기준(4.5:1)을 충족합니다.",
      "KRDS는 색상군마다 11단계(5~95) 스케일을 제공하며, 이 시스템은 문서 화면에서 실제로 쓰는 대표 4단계(50·300·600·800)만 노출합니다.",
    ],
  },

  typography: {
    category: "Foundation",
    specimen: {
      kind: "type",
      specimens: [
        {
          label: "Title",
          sampleText: "공공 디지털 서비스의 기준",
          tokenName: "--ref-font-size-900 · Bold",
          style: { fontSize: "var(--ref-font-size-900)", fontWeight: "var(--ref-font-weight-bold)", letterSpacing: "-0.03em" },
        },
        {
          label: "Heading",
          sampleText: "표와 목록을 명확하게 구분합니다",
          tokenName: "--ref-font-size-700 · Semibold",
          style: { fontSize: "var(--ref-font-size-700)", fontWeight: "var(--ref-font-weight-semibold)", letterSpacing: "-0.02em" },
        },
        {
          label: "Body",
          sampleText: "데스크톱 본문은 한 줄에 너무 많은 글자가 들어가지 않도록 최대 폭을 제한해 읽기 편안하게 합니다.",
          tokenName: "--sys-type-body-md-size",
          style: { fontSize: "var(--sys-type-body-md-size)", lineHeight: "var(--sys-type-body-md-line-height)" },
        },
        {
          label: "Label",
          sampleText: "테이블 헤더 라벨",
          tokenName: "--sys-type-label-sm-size",
          style: {
            fontSize: "var(--sys-type-label-sm-size)",
            fontWeight: "var(--sys-type-label-sm-weight)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          },
        },
      ],
    },
    usageNotes: [
      "본문 최대 폭을 --sys-layout-content-max(64rem)로 제한해 넓은 화면에서도 한 줄이 지나치게 길어지지 않도록 합니다.",
      "표(Table) 헤더처럼 정보 밀도가 높은 곳은 Label 토큰을 사용해 본문과 위계를 분명히 구분합니다.",
    ],
    accessibilityNotes: [
      "브라우저 확대 200%에서도 표와 폼 레이아웃이 가로 스크롤 없이 재배치되도록 합니다.",
      "글자 크기를 px로 고정하지 않고 상대 단위(rem)를 사용해 사용자 기본 글자 크기 설정을 존중합니다.",
    ],
  },

  icon: {
    category: "Foundation",
    specimen: {
      kind: "table",
      rows: [
        { label: "기본 크기", value: "16px / 20px", note: "본문 인라인 아이콘은 16px, 버튼·탭 등 조작 요소 아이콘은 20px을 기본으로 합니다." },
        { label: "선 굵기", value: "1.5px", note: "Line 스타일 아이콘의 획 두께 기준입니다." },
        { label: "최소 클릭 영역", value: "40px × 40px", note: "마우스 조작 기준으로 모바일보다 다소 작은 최소 영역을 허용합니다." },
      ],
    },
    usageNotes: [
      "표, 목록처럼 아이콘이 반복되는 곳에서는 크기를 통일해 스캔 속도를 높입니다.",
      "정부 서비스 특성상 과도한 장식 아이콘보다 의미 전달에 집중한 최소한의 아이콘만 사용합니다.",
    ],
    accessibilityNotes: [
      "아이콘 버튼은 키보드 포커스만으로도 접근 가능한 이름이 스크린리더에 낭독되어야 합니다.",
      "마우스 hover에만 의존하는 아이콘 툴팁은 키보드 포커스 시에도 동일하게 노출합니다.",
    ],
  },

  grid: {
    category: "Foundation",
    specimen: {
      kind: "table",
      rows: [
        { label: "콘텐츠 최대 폭", value: "64rem (1024px)", note: "--sys-layout-content-max — 본문 가독성을 위한 상한입니다." },
        { label: "셸 최대 폭", value: "96rem (1536px)", note: "--sys-layout-shell-max — 사이드바 · 목차를 포함한 전체 레이아웃 상한입니다." },
        { label: "사이드바 폭", value: "16rem (256px)", note: "--sys-layout-sidebar-width — 좌측 탐색 영역 고정 폭입니다." },
      ],
    },
    usageNotes: [
      "3열(사이드바 · 본문 · 목차) 레이아웃은 1280px 이상에서만 모두 표시하고, 그 아래는 목차부터 순차적으로 접습니다.",
      "표, 대시보드처럼 넓은 콘텐츠가 필요한 페이지는 콘텐츠 최대 폭 제한을 예외적으로 해제할 수 있습니다.",
    ],
    accessibilityNotes: [
      "그리드가 재배치되어도 DOM 순서와 시각적 순서(포커스 이동 순서)가 항상 일치해야 합니다.",
    ],
  },

  motion: {
    category: "Foundation",
    specimen: {
      kind: "table",
      rows: [
        { label: "duration-fast", value: "120ms", note: "버튼, 토글 등 즉각적인 반응이 필요한 상태 변화." },
        { label: "duration-normal", value: "200ms", note: "드롭다운, 팝오버 등 위치 이동이 있는 전환." },
        { label: "easing-standard", value: "cubic-bezier(0.2, 0, 0, 1)", note: "가속 후 감속하는 기본 이징 곡선." },
      ],
    },
    usageNotes: [
      "마우스 hover 상태 전환은 120ms 이내로 짧게 유지해 조작감을 즉각적으로 느끼게 합니다.",
      "대량의 데이터가 바뀌는 표 갱신 등은 모션 없이 즉시 반영해 대기 시간을 늘리지 않습니다.",
    ],
    accessibilityNotes: [
      "prefers-reduced-motion 설정 시 모든 지속시간을 0에 가깝게 줄여 모션을 최소화합니다.",
    ],
  },

  elevation: {
    category: "Foundation",
    specimen: {
      kind: "table",
      rows: [
        { label: "shadow-100", value: "0 1px 2px rgb(11 13 18 / 5%)", note: "카드, 표 등 콘텐츠와 같은 층위의 옅은 구분." },
        { label: "shadow-200", value: "0 8px 24px rgb(11 13 18 / 8%)", note: "드롭다운, 팝오버처럼 콘텐츠 위에 뜨는 표면." },
        { label: "shadow-300", value: "0 20px 56px rgb(11 13 18 / 14%)", note: "모달, 바텀시트 등 화면을 가리는 최상위 레이어." },
      ],
    },
    usageNotes: [
      "그림자 단계는 z-index(Utilities → 반응형 그리드 참고)와 함께 위계를 표현하며, 값을 임의로 조합하지 않습니다.",
      "같은 시각적 층위의 컴포넌트는 항상 같은 그림자 단계를 사용합니다.",
    ],
    accessibilityNotes: [
      "그림자만으로 상태를 구분하지 않고 테두리 색상 변화를 함께 제공해 저시력 환경에서도 구분되게 합니다.",
    ],
  },

  writing: {
    category: "Foundation",
    specimen: {
      kind: "table",
      rows: [
        { label: "버튼 레이블", value: "신청하기", note: "'확인'처럼 결과를 감추는 말 대신, 누르면 무슨 일이 일어나는지 동사로 밝혀 적습니다." },
        { label: "행정 용어", value: "신청서를 내면", note: "'제출하면'보다 쉬운 말을 앞세우되, 법령에서 쓰는 용어는 괄호로 함께 적습니다." },
        { label: "제도 용어 첫 등장", value: "가구원(함께 사는 가족)", note: "민원인이 처음 보는 제도 용어는 첫 등장에 일상어 풀이를 괄호로 붙이고, 같은 화면에서는 한 번만 설명합니다." },
        { label: "오류 메시지", value: "생년월일 6자리를 적어 주세요", note: "'입력값 오류'처럼 상태만 알리지 않고, 무엇이 잘못됐는지와 어떻게 고치는지를 한 문장에 함께 담습니다." },
        { label: "안내문 톤", value: "처리에 3일이 걸립니다", note: "사과나 감탄 표현을 앞에 두지 않고 사실과 소요 기간을 먼저 말해, 사용자가 다음 행동을 바로 판단하게 합니다." },
      ],
    },
    usageNotes: [
      "버튼·링크 레이블과 이동한 화면의 제목을 글자 그대로 일치시켜, '신청하기'를 누른 사용자가 도착한 곳이 맞는지 의심하지 않게 합니다.",
      "날짜와 기한은 '3일 이내'가 아니라 '2026년 3월 2일(월)까지'처럼 실제 날짜와 요일로 적어, 사용자가 직접 계산하지 않게 합니다.",
      "한 문장은 60자 안팎에서 끊고 한 문단에 한 가지 정보만 담아, 글자 크기를 키운 화면에서도 읽던 자리를 잃지 않게 합니다.",
    ],
    accessibilityNotes: [
      "오류 문구는 색이나 아이콘만으로 전달하지 않고 문장으로 함께 적으며, aria-describedby로 해당 입력 요소와 연결합니다.",
      "링크 텍스트에는 '자세히 보기' 대신 이동할 문서 이름을 담아, 링크 목록만 훑는 스크린리더 사용자도 목적지를 구분할 수 있게 합니다.",
    ],
  },
};
