# Common UI

브랜드에 종속되지 않는 범용 디자인 시스템 문서입니다. 모바일과 PC를 별도 서페이스(`/mobile`, `/pc`)로 나누어
각 환경에 맞는 파운데이션 · 컴포넌트 · 유틸리티 문서를 제공합니다.

- **Mobile** (`/mobile`): TDS Mobile 문서의 Foundation · Components · Utilities 메뉴 구조를 참고해 재구성했습니다.
- **PC** (`/pc`): 같은 구조를 KRDS(대한민국 정부 디자인 시스템)를 참고해 표 · 아코디언 · 브레드크럼 등
  데스크톱 전용 컴포넌트로 보강했습니다.

두 서페이스는 같은 디자인 토큰(`app/tokens.css`)을 공유하며, `[data-surface="mobile"|"pc"]` 레이어로
라운드 값 · 콘텐츠 폭 등 일부 Component 토큰만 다르게 재정의합니다.

## 주요 구조

- `app/tokens.css`: Reference → System → Component 3단계 디자인 토큰. Primary(`#256ef4`)와 본문 텍스트
  근사 검정(`#1e2124`)은 KRDS 공개 정보로 확인해 반영했습니다. Secondary 램프는 근사값이며 코드 주석에
  근거와 한계를 명시했습니다.
- `app/globals.css` + `app/styles/*.css`: base → layout → component → utility 순서의 스타일. 서페이스별
  신규 컴포넌트 프리뷰는 `app/styles/mobile-components.css` / `pc-components.css`에, 문서 템플릿 공통 UI는
  `app/styles/doc-templates.css`에 있습니다.
- `app/components/shell/DocShell.tsx`: 테마 · 밀도 · 검색(⌘K) · 모바일 전체 메뉴 · 포커스 트랩 · 페이지별
  목차(TOC)를 관리하는 공용 셸. `app/mobile/layout.tsx`, `app/pc/layout.tsx`에서 각 서페이스의 nav 데이터와
  함께 마운트됩니다.
- `app/components/docs/*`: 데이터 기반 문서 템플릿(`CategoryIndexTemplate`, `DetailDocTemplate`,
  `StandardDocTemplate`, `ReferenceDocTemplate`) — 각 서페이스의 `data/{navigation,foundation,components,utilities}.ts`
  콘텐츠를 렌더링합니다.
- `app/mobile/`, `app/pc/`: 서페이스별 라우트. `components/button`처럼 상세 문서(탭 + 실시간 프리뷰)가
  필요한 8개 대표 컴포넌트는 정적 폴더로, 나머지는 `[slug]` 동적 라우트로 데이터를 읽어 렌더링합니다.
- `tests/rendered-html.test.mjs`: 서버 렌더링, 서페이스 분리, 토큰 값 검증.

## 실행

Node.js 22.13 이상이 필요합니다.

```bash
npm install
npm run dev
npm run build
npm test
```

## 토큰 원칙

1. `--ref-*`: 색상과 크기 같은 고정 원시값
2. `--sys-*`: 표면, 텍스트, 행동처럼 맥락을 설명하는 의미값 (모바일 · PC 공유)
3. `--component-*`: 컴포넌트가 소비하는 구현 계약 (`[data-surface]`로 일부만 서페이스별 재정의)

테마는 Reference 값을 바꾸지 않고 System 계층을 재연결합니다. 모든 이름은 소문자 kebab-case를 사용합니다.

## 참고 구조

- Toss Design System(TDS Mobile): Foundation · Components · Utilities 메뉴 구조 — `/mobile`의 정보 구조 기준
- KRDS: 기초 · 컴포넌트의 단계적 정보 구조와 정부 청색 Primary 색상 — `/pc` 보강의 기준
- SODA: 원시값 → 공통 의미값 → 컴포넌트값으로 이어지는 변수 계층 — `app/tokens.css`의 3단 토큰 구조

> 이 리포지토리를 작업한 환경은 네트워크 정책상 tossmini-docs.toss.im, krds.go.kr, soda.j2inlab.workers.dev에
> 직접 접근할 수 없었습니다. 메뉴 구조와 색상은 확인 가능한 공개 정보(웹검색 요약)와 일반 지식을 근거로
> 재구성했으며, 정확한 수치가 필요한 항목은 코드 주석에 근거와 한계를 남겨 두었습니다.
