import type { ReferenceSpecimen } from "../../components/docs/ReferenceDocTemplate";

export type FoundationEntry = {
  category: string;
  specimen: ReferenceSpecimen;
  usageNotes: string[];
  accessibilityNotes: string[];
};

export const mobileFoundation: Record<string, FoundationEntry> = {
  color: {
    category: "Foundation",
    specimen: {
      kind: "swatches",
      groups: [
        {
          label: "Primary — KRDS 정부 청색 계열",
          swatches: [
            { name: "Brand 50", value: "var(--ref-color-brand-50)", token: "--ref-color-brand-50" },
            { name: "Brand 300", value: "var(--ref-color-brand-300)", token: "--ref-color-brand-300" },
            { name: "Brand 600 (Primary)", value: "var(--ref-color-brand-600)", token: "--ref-color-brand-600" },
            { name: "Brand 800", value: "var(--ref-color-brand-800)", token: "--ref-color-brand-800" },
          ],
        },
        {
          label: "Secondary — Primary에서 파생한 근사값",
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
            { name: "Neutral 900", value: "var(--ref-color-neutral-900)", token: "--ref-color-neutral-900" },
          ],
        },
      ],
    },
    usageNotes: [
      "가장 중요한 행동에는 Primary(Brand 600)를, 덜 중요한 강조나 보조 배경에는 Secondary를 사용합니다.",
      "Primary는 KRDS가 공개한 정부 청색(#256EF4)을 그대로 사용하며, Secondary는 같은 색상군에서 파생한 근사값입니다 — 이 세션에서 krds.go.kr 색상 페이지에 직접 접근할 수 없어 정확한 Secondary 수치는 추후 재검증이 필요합니다.",
      "색상만으로 상태를 구분하지 않고 아이콘이나 텍스트 라벨을 함께 사용합니다.",
    ],
    accessibilityNotes: [
      "흰 배경 위 Primary 텍스트는 대비비 약 4.55:1로 WCAG AA 본문 기준(4.5:1)을 충족합니다.",
      "다크 모드에서는 Primary가 더 밝은 톤(Brand 300)으로 재연결되어 어두운 배경에서도 대비를 유지합니다.",
    ],
  },

  typography: {
    category: "Foundation",
    specimen: {
      kind: "type",
      specimens: [
        {
          label: "Title",
          sampleText: "서비스를 더 쉽게",
          tokenName: "--ref-font-size-800 · Bold",
          style: { fontSize: "var(--ref-font-size-800)", fontWeight: "var(--ref-font-weight-bold)", letterSpacing: "-0.03em" },
        },
        {
          label: "Heading",
          sampleText: "중요한 내용을 분명하게",
          tokenName: "--ref-font-size-600 · Semibold",
          style: { fontSize: "var(--ref-font-size-600)", fontWeight: "var(--ref-font-weight-semibold)", letterSpacing: "-0.02em" },
        },
        {
          label: "Body",
          sampleText: "본문은 충분한 줄 간격으로 한 손 조작 중에도 편안하게 읽을 수 있어야 합니다.",
          tokenName: "--sys-type-body-md-size",
          style: { fontSize: "var(--sys-type-body-md-size)", lineHeight: "var(--sys-type-body-md-line-height)" },
        },
        {
          label: "Label",
          sampleText: "라벨 텍스트",
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
      "한 화면에서 Title은 한 번만 사용해 정보 위계를 명확히 합니다.",
      "본문 줄 간격(line-height)은 1.7을 기본으로 해 작은 화면에서도 읽기 피로를 줄입니다.",
      "글자 크기를 임의로 조정하지 않고 역할 기반 토큰(Title/Heading/Body/Label)을 그대로 사용합니다.",
    ],
    accessibilityNotes: [
      "본문 최소 크기는 14px(--ref-font-size-300) 이상을 유지합니다.",
      "사용자가 시스템 글자 크기를 200%까지 확대해도 레이아웃이 깨지지 않도록 rem 단위를 사용합니다.",
    ],
  },

  icon: {
    category: "Foundation",
    specimen: {
      kind: "table",
      rows: [
        { label: "기본 크기", value: "20px / 24px", note: "본문 인라인 아이콘은 20px, 독립 아이콘 버튼은 24px을 기본으로 합니다." },
        { label: "선 굵기", value: "1.5px", note: "Line 스타일 아이콘의 획 두께 기준입니다." },
        { label: "최소 터치 영역", value: "44px × 44px", note: "아이콘만 있는 버튼도 실제 터치 영역은 44px 이상을 확보합니다." },
        { label: "스타일", value: "Line / Fill", note: "기본은 Line, 선택된 상태나 강조가 필요할 때 Fill을 사용합니다." },
      ],
    },
    usageNotes: [
      "장식용 아이콘에는 접근성 이름을 비우고 aria-hidden으로 스크린리더에서 제외합니다.",
      "의미를 전달하는 아이콘(예: 닫기, 뒤로가기)은 반드시 접근 가능한 이름을 제공합니다.",
      "같은 의미에는 같은 아이콘을 항상 동일하게 사용해 학습 비용을 줄입니다.",
    ],
    accessibilityNotes: [
      "아이콘 버튼의 실제 히트 영역은 시각적 아이콘 크기보다 커야 하며 44px 미만이 되지 않도록 합니다.",
      "색상 대비가 낮은 환경에서도 형태로 구분되도록 Line/Fill 두 가지 상태를 함께 제공합니다.",
    ],
  },

  spacing: {
    category: "Foundation",
    specimen: {
      kind: "table",
      rows: [
        { label: "space-50", value: "4px", note: "아이콘과 라벨 사이처럼 가장 좁은 간격." },
        { label: "space-100", value: "8px", note: "칩, 배지 등 작은 요소 내부 여백." },
        { label: "space-200", value: "16px", note: "카드 내부, 목록 행 사이의 기본 간격." },
        { label: "space-300", value: "24px", note: "섹션 내부 요소 사이의 넉넉한 간격." },
        { label: "space-400", value: "32px", note: "섹션과 섹션을 구분하는 간격." },
      ],
    },
    usageNotes: [
      "모든 간격은 4px 배수를 기본 단위로 사용해 화면 간 리듬을 일정하게 유지합니다.",
      "임의의 px 값을 직접 입력하지 않고 정의된 --ref-space-* 토큰만 사용합니다.",
      "밀도(Density)를 압축으로 전환하면 컴포넌트 내부 간격만 좁아지고, 섹션 간격은 유지됩니다.",
    ],
    accessibilityNotes: [
      "인접한 터치 대상 사이 최소 간격을 8px 이상 유지해 오조작을 줄입니다.",
      "확대 배율(200%)에서도 간격 비율이 깨지지 않도록 상대 단위(rem)로 정의합니다.",
    ],
  },

  radius: {
    category: "Foundation",
    specimen: {
      kind: "table",
      rows: [
        { label: "radius-100", value: "6px", note: "체크박스, 작은 입력 요소처럼 각진 느낌이 필요한 곳." },
        { label: "radius-300", value: "12px", note: "버튼, 입력 필드 등 기본 컴포넌트의 기본값." },
        { label: "radius-400", value: "16px", note: "카드, 다이얼로그처럼 넓은 표면." },
        { label: "radius-500", value: "20px", note: "바텀시트 상단처럼 화면 모서리에 붙는 큰 표면." },
        { label: "radius-full", value: "999px", note: "칩, 배지, 아바타 등 완전한 원형/알약 형태." },
      ],
    },
    usageNotes: [
      "같은 위계의 컴포넌트는 같은 라운드 값을 사용해 화면에 일관된 형태 언어를 만듭니다.",
      "중첩된 컴포넌트(카드 안의 버튼 등)는 바깥 라운드보다 작거나 같은 라운드를 사용합니다.",
    ],
    accessibilityNotes: [
      "라운드 값 자체는 접근성에 직접 영향을 주지 않지만, 형태 대비가 필요한 저시력 사용자를 위해 배경과의 경계선(border)을 함께 제공합니다.",
    ],
  },

  motion: {
    category: "Foundation",
    specimen: {
      kind: "table",
      rows: [
        { label: "duration-fast", value: "120ms", note: "버튼 눌림, 토글처럼 즉각적인 반응이 필요한 상태 변화." },
        { label: "duration-normal", value: "200ms", note: "레이어 등장/퇴장처럼 공간 이동이 있는 전환." },
        { label: "easing-standard", value: "cubic-bezier(0.2, 0, 0, 1)", note: "가속 후 감속하는 기본 이징 곡선." },
      ],
    },
    usageNotes: [
      "모션은 상태 변화의 이유를 설명하는 용도로만 사용하고, 장식 목적의 애니메이션은 최소화합니다.",
      "바텀시트, 다이얼로그 등 레이어형 컴포넌트는 등장 시 아래에서 위로, 퇴장 시 반대로 이동합니다.",
    ],
    accessibilityNotes: [
      "prefers-reduced-motion 설정 시 모든 지속시간을 0에 가깝게 줄여 모션을 최소화합니다.",
      "모션이 정보를 전달하는 유일한 수단이 되지 않도록 텍스트나 아이콘 변화를 함께 제공합니다.",
    ],
  },
};
