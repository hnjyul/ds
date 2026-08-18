# Common UI

브랜드에 종속되지 않는 범용 디자인 시스템 문서의 기본 레이아웃입니다. 디자인 원칙, 기초 스타일, 컴포넌트, UI 패턴, 서비스 플로와 접근성 기준을 하나의 문서 셸에서 탐색할 수 있습니다.

## 주요 구조

- `app/tokens.css`: Reference → System → Component 3단계 디자인 토큰
- `app/globals.css`: base → layout → component → utility 순서의 스타일
- `app/components/StyleGuideShell.tsx`: 탐색, 검색, 테마, 밀도, 문서 예시
- `tests/rendered-html.test.mjs`: 서버 렌더링 및 스타터 제거 검증

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
2. `--sys-*`: 표면, 텍스트, 행동처럼 맥락을 설명하는 의미값
3. `--component-*`: 컴포넌트가 소비하는 구현 계약

테마는 Reference 값을 바꾸지 않고 System 계층을 재연결합니다. 모든 이름은 소문자 kebab-case를 사용합니다.

## 참고 구조

- Toss Design System: 간결한 3열 문서 셸과 컴포넌트 문서 템플릿
- KRDS: 기초, 컴포넌트, UI 패턴, 서비스 플로의 단계적 정보 구조
- SODA: 원시값, 공통 의미값, 컴포넌트값으로 이어지는 변수 계층
