"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
} from "react";

type Theme = "light" | "dark";
type Density = "comfortable" | "compact";
type TabId = "overview" | "guidelines" | "accessibility" | "code";
type ActiveOverlay = "navigation" | "search" | null;

type NavigationItem = {
  id: string;
  label: string;
  description: string;
};

type NavigationGroup = {
  label: string;
  items: NavigationItem[];
};

const navigationGroups: NavigationGroup[] = [
  {
    label: "시작하기",
    items: [
      {
        id: "overview",
        label: "개요",
        description: "시스템의 목적과 기본 원칙",
      },
      {
        id: "principles",
        label: "설계 원칙",
        description: "명확성, 유연성, 포용성",
      },
    ],
  },
  {
    label: "기초",
    items: [
      {
        id: "tokens",
        label: "디자인 토큰",
        description: "Reference, System, Component",
      },
      {
        id: "foundations",
        label: "스타일",
        description: "색상, 글자, 간격, 형태",
      },
    ],
  },
  {
    label: "라이브러리",
    items: [
      {
        id: "components",
        label: "컴포넌트",
        description: "재사용 가능한 UI 단위",
      },
      {
        id: "patterns",
        label: "UI 패턴",
        description: "반복되는 과업의 조합",
      },
      {
        id: "flows",
        label: "서비스 플로",
        description: "사용자 여정과 완료 기준",
      },
    ],
  },
  {
    label: "운영",
    items: [
      {
        id: "accessibility",
        label: "접근성",
        description: "포용적 품질 기준",
      },
      {
        id: "resources",
        label: "리소스",
        description: "코드, 에셋, 변경 이력",
      },
    ],
  },
];

const tabs: { id: TabId; label: string }[] = [
  { id: "overview", label: "개요" },
  { id: "guidelines", label: "사용 지침" },
  { id: "accessibility", label: "접근성" },
  { id: "code", label: "코드" },
];

const buttonCode = `<button class="button button--primary" type="button">
  저장하기
</button>`;

const tokenCode = `:root {
  --ref-color-brand-600: #245fe5;
  --sys-color-action-primary:
    var(--ref-color-brand-600);
  --component-button-background-primary:
    var(--sys-color-action-primary);
}`;

const searchItems = navigationGroups.flatMap((group) =>
  group.items.map((item) => ({ ...item, group: group.label })),
);

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span className="brand-mark__cell" />
      <span className="brand-mark__cell" />
      <span className="brand-mark__cell" />
    </span>
  );
}

export function StyleGuideShell() {
  const [activeSection, setActiveSection] = useState("overview");
  const [activeTab, setActiveTab] = useState<TabId>("overview");
  const [theme, setTheme] = useState<Theme>("light");
  const [density, setDensity] = useState<Density>("comfortable");
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const mobileCloseRef = useRef<HTMLButtonElement>(null);
  const siteHeaderRef = useRef<HTMLElement>(null);
  const docsLayoutRef = useRef<HTMLDivElement>(null);
  const searchDialogRef = useRef<HTMLElement>(null);
  const mobileNavigationRef = useRef<HTMLElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const activeOverlay: ActiveOverlay = isSearchOpen
    ? "search"
    : isMobileNavigationOpen
      ? "navigation"
      : null;

  const filteredSearchItems = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLocaleLowerCase("ko");

    if (!normalizedQuery) {
      return searchItems;
    }

    return searchItems.filter((item) =>
      [item.label, item.description, item.group]
        .join(" ")
        .toLocaleLowerCase("ko")
        .includes(normalizedQuery),
    );
  }, [searchQuery]);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("common-ui-theme");
    const storedDensity = window.localStorage.getItem("common-ui-density");
    const initialTheme: Theme =
      storedTheme === "dark" || storedTheme === "light"
        ? storedTheme
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    const initialDensity: Density =
      storedDensity === "compact" ? "compact" : "comfortable";

    document.documentElement.dataset.theme = initialTheme;
    document.documentElement.dataset.density = initialDensity;
    const frame = window.requestAnimationFrame(() => {
      setTheme(initialTheme);
      setDensity(initialDensity);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const sections = searchItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { rootMargin: "-20% 0px -68%", threshold: [0, 0.2, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      const target = event.target;
      const isEditable =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        (target instanceof HTMLElement && target.isContentEditable);

      if (
        ((!isEditable && event.key === "/") ||
          ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k")) &&
        !isSearchOpen
      ) {
        event.preventDefault();
        returnFocusRef.current =
          document.activeElement instanceof HTMLElement
            ? document.activeElement
            : null;
        setIsSearchOpen(true);
      }

      if (event.key === "Escape") {
        setIsSearchOpen(false);
        setIsMobileNavigationOpen(false);
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [isSearchOpen]);

  useEffect(() => {
    const pageRegions = [siteHeaderRef.current, docsLayoutRef.current].filter(
      (region): region is HTMLElement => region !== null,
    );
    const activeLayer =
      activeOverlay === "search"
        ? searchDialogRef.current
        : activeOverlay === "navigation"
          ? mobileNavigationRef.current
          : null;
    const previousOverflow = document.body.style.overflow;

    if (!activeOverlay || !activeLayer) {
      pageRegions.forEach((region) => {
        region.inert = false;
        region.removeAttribute("aria-hidden");
      });
      document.body.style.overflow = previousOverflow;

      const returnTarget = returnFocusRef.current;
      if (returnTarget?.isConnected) {
        window.requestAnimationFrame(() => returnTarget.focus());
      }
      returnFocusRef.current = null;
      return undefined;
    }

    const initialFocus =
      activeOverlay === "search"
        ? searchInputRef.current
        : mobileCloseRef.current;
    (initialFocus ?? activeLayer).focus();

    pageRegions.forEach((region) => {
      region.inert = true;
      region.setAttribute("aria-hidden", "true");
    });
    document.body.style.overflow = "hidden";

    const focusableSelector = [
      "a[href]",
      "button:not([disabled]):not([tabindex='-1'])",
      "input:not([disabled])",
      "[tabindex]:not([tabindex='-1'])",
    ].join(",");

    const handleOverlayKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = Array.from(
        activeLayer.querySelectorAll<HTMLElement>(focusableSelector),
      ).filter((element) => element.getClientRects().length > 0);
      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (!firstElement || !lastElement) {
        event.preventDefault();
        activeLayer.focus();
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    activeLayer.addEventListener("keydown", handleOverlayKeyDown);

    return () => {
      activeLayer.removeEventListener("keydown", handleOverlayKeyDown);
      pageRegions.forEach((region) => {
        region.inert = false;
        region.removeAttribute("aria-hidden");
      });
      document.body.style.overflow = previousOverflow;
    };
  }, [activeOverlay]);

  const rememberReturnFocus = (trigger?: HTMLElement) => {
    if (!returnFocusRef.current) {
      returnFocusRef.current =
        trigger ??
        (document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null);
    }
  };

  const openSearch = (trigger?: HTMLElement) => {
    rememberReturnFocus(trigger);
    setIsSearchOpen(true);
  };

  const openMobileNavigation = (trigger: HTMLElement) => {
    rememberReturnFocus(trigger);
    setIsMobileNavigationOpen(true);
  };

  const updateTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("common-ui-theme", nextTheme);
  };

  const updateDensity = () => {
    const nextDensity: Density =
      density === "comfortable" ? "compact" : "comfortable";
    setDensity(nextDensity);
    document.documentElement.dataset.density = nextDensity;
    window.localStorage.setItem("common-ui-density", nextDensity);
  };

  const navigateToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsSearchOpen(false);
    setIsMobileNavigationOpen(false);
    setSearchQuery("");
    window.requestAnimationFrame(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    });
  };

  const handleNavigationLinkClick = (
    event: ReactMouseEvent<HTMLAnchorElement>,
  ) => {
    const sectionId = event.currentTarget.dataset.sectionId;

    if (!sectionId) {
      return;
    }

    setActiveSection(sectionId);
    setIsMobileNavigationOpen(false);
  };

  const handleSearchResultClick = (
    event: ReactMouseEvent<HTMLAnchorElement>,
  ) => {
    const sectionId = event.currentTarget.dataset.searchSection;

    if (sectionId) {
      event.preventDefault();
      navigateToSection(sectionId);
    }
  };

  const handleTabKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      return;
    }

    event.preventDefault();
    const tabList = event.currentTarget.parentElement;
    const tabButtons = Array.from(
      tabList?.querySelectorAll<HTMLButtonElement>("[role='tab']") ?? [],
    );
    const currentIndex = tabButtons.indexOf(event.currentTarget);
    const nextIndex =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? tabButtons.length - 1
          : event.key === "ArrowRight"
            ? (currentIndex + 1) % tabButtons.length
            : (currentIndex - 1 + tabButtons.length) % tabButtons.length;
    const nextTab = tabs[nextIndex];

    if (nextTab) {
      setActiveTab(nextTab.id);
      tabButtons[nextIndex]?.focus();
    }
  };

  const copyCode = async (code: string, codeId: string) => {
    await navigator.clipboard.writeText(code);
    setCopiedCode(codeId);
    window.setTimeout(() => setCopiedCode(null), 1600);
  };

  const renderTabContent = () => {
    if (activeTab === "guidelines") {
      return (
        <div className="guideline-grid">
          <article className="guideline-card guideline-card--do">
            <p className="guideline-card__label">권장</p>
            <h3>행동의 결과를 동사로 씁니다</h3>
            <p>“확인”보다 “변경사항 저장”처럼 결과를 예측할 수 있게 표현합니다.</p>
          </article>
          <article className="guideline-card guideline-card--avoid">
            <p className="guideline-card__label">주의</p>
            <h3>동일한 위계의 강조를 반복하지 않습니다</h3>
            <p>한 화면의 주요 버튼은 하나를 기본으로 하고 보조 행동은 낮춥니다.</p>
          </article>
        </div>
      );
    }

    if (activeTab === "accessibility") {
      return (
        <ul className="check-list" aria-label="버튼 접근성 확인 항목">
          <li>텍스트만으로 목적을 이해할 수 있는 접근 가능한 이름을 제공합니다.</li>
          <li>키보드 초점과 눌림 상태가 배경과 3:1 이상 구분되도록 합니다.</li>
          <li>비활성 상태는 색상뿐 아니라 실제 disabled 속성으로 전달합니다.</li>
          <li>터치 대상은 최소 2.75rem × 2.75rem의 조작 영역을 확보합니다.</li>
        </ul>
      );
    }

    if (activeTab === "code") {
      return (
        <div className="code-block">
          <div className="code-block__header">
            <span>HTML</span>
            <button
              className="text-button"
              type="button"
              onClick={() => void copyCode(buttonCode, "button")}
            >
              {copiedCode === "button" ? "복사됨" : "코드 복사"}
            </button>
          </div>
          <pre>
            <code>{buttonCode}</code>
          </pre>
        </div>
      );
    }

    return (
      <div className="component-preview">
        <p className="component-preview__caption">실제 상태를 확인해 보세요.</p>
        <div className="component-preview__canvas">
          <button className="button button--primary" type="button">
            변경사항 저장
          </button>
          <button className="button button--secondary" type="button">
            취소
          </button>
          <button className="button button--secondary" type="button" disabled>
            사용할 수 없음
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="style-guide">
      <a className="skip-link" href="#main-content">
        본문 바로가기
      </a>

      <header className="site-header" ref={siteHeaderRef}>
        <div className="site-header__inner">
          <button
            className="icon-button site-header__menu"
            type="button"
            aria-label="전체 메뉴 열기"
            aria-expanded={isMobileNavigationOpen}
            aria-controls="mobile-navigation"
            onClick={(event) => openMobileNavigation(event.currentTarget)}
          >
            <span className="menu-icon" aria-hidden="true" />
          </button>

          <a className="site-brand" href="#overview" aria-label="Common UI 홈">
            <BrandMark />
            <span className="site-brand__name">Common UI</span>
          </a>
          <span className="version-badge">v0.1</span>

          <nav className="site-header__links" aria-label="주요 메뉴">
            <a href="#foundations">기초</a>
            <a href="#components">컴포넌트</a>
            <a href="#patterns">패턴</a>
            <a href="#resources">리소스</a>
          </nav>

          <div className="site-header__actions">
            <button
              className="search-trigger"
              type="button"
              aria-haspopup="dialog"
              onClick={(event) => openSearch(event.currentTarget)}
            >
              <span className="search-icon" aria-hidden="true" />
              <span className="search-trigger__label">문서 검색</span>
              <kbd>⌘ K</kbd>
            </button>
            <button
              className="icon-button density-toggle"
              type="button"
              aria-label={`문서 밀도를 ${density === "comfortable" ? "좁게" : "넓게"} 변경`}
              onClick={updateDensity}
            >
              <span className="density-icon" aria-hidden="true" />
            </button>
            <button
              className="icon-button"
              type="button"
              aria-label={`${theme === "light" ? "어두운" : "밝은"} 테마로 변경`}
              onClick={updateTheme}
            >
              <span className="theme-icon" aria-hidden="true">
                {theme === "light" ? "◐" : "☀"}
              </span>
            </button>
          </div>
        </div>
      </header>

      <div className="docs-layout" ref={docsLayoutRef}>
        <aside className="sidebar" aria-label="문서 탐색">
          <nav className="sidebar__navigation">
            {navigationGroups.map((group) => (
              <section className="navigation-group" key={group.label}>
                <h2>{group.label}</h2>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.id}>
                      <a
                        className="navigation-link"
                        href={`#${item.id}`}
                        data-section-id={item.id}
                        aria-current={activeSection === item.id ? "location" : undefined}
                        onClick={handleNavigationLinkClick}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </nav>
          <div className="sidebar__meta">
            <span className="status-dot" aria-hidden="true" />
            <span>문서 상태: 초안</span>
          </div>
        </aside>

        <main className="docs-main" id="main-content">
          <article className="docs-article">
            <nav className="breadcrumb" aria-label="현재 위치">
              <ol>
                <li>
                  <a href="#overview">시작하기</a>
                </li>
                <li aria-current="page">개요</li>
              </ol>
            </nav>

            <details className="mobile-toc">
              <summary>이 페이지에서</summary>
              <nav aria-label="모바일 페이지 목차">
                {searchItems.map((item) => (
                  <a
                    href={`#${item.id}`}
                    key={item.id}
                    data-section-id={item.id}
                    onClick={handleNavigationLinkClick}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </details>

            <section className="hero-section" id="overview" aria-labelledby="overview-title">
              <p className="eyebrow">FOUNDATION · VERSION 0.1</p>
              <h1 id="overview-title">서비스를 설계하는<br />공통 언어</h1>
              <p className="hero-section__description">
                브랜드가 바뀌어도 원칙과 구조는 유지되도록 설계한 범용 스타일가이드입니다.
                명확한 토큰, 재사용 가능한 컴포넌트, 검증 가능한 접근성 기준을 한곳에서 관리합니다.
              </p>
              <div className="hero-section__actions">
                <a className="button button--primary" href="#tokens">
                  토큰 구조 보기
                </a>
                <a className="button button--secondary" href="#components">
                  컴포넌트 살펴보기
                </a>
              </div>
              <dl className="system-summary" aria-label="시스템 주요 특징">
                <div>
                  <dt>3단계</dt>
                  <dd>토큰 계층</dd>
                </div>
                <div>
                  <dt>AA</dt>
                  <dd>기본 대비 목표</dd>
                </div>
                <div>
                  <dt>4 → 12</dt>
                  <dd>반응형 그리드</dd>
                </div>
              </dl>
            </section>

            <section className="content-section" id="principles" aria-labelledby="principles-title">
              <p className="section-kicker">Principles</p>
              <h2 id="principles-title">좋은 결정을 반복 가능하게</h2>
              <p className="section-description">
                원칙은 취향을 통제하는 규칙이 아니라, 팀이 같은 기준으로 더 빠르게 판단하도록 돕는 도구입니다.
              </p>
              <div className="principle-grid">
                <article className="principle-card">
                  <span className="principle-card__index">01</span>
                  <h3>명확하게</h3>
                  <p>가장 중요한 정보와 행동을 먼저 보여주고, 다음 단계를 예측할 수 있게 합니다.</p>
                </article>
                <article className="principle-card">
                  <span className="principle-card__index">02</span>
                  <h3>유연하게</h3>
                  <p>브랜드 값과 의미, 컴포넌트를 분리해 제품의 규모와 맥락 변화에 대응합니다.</p>
                </article>
                <article className="principle-card">
                  <span className="principle-card__index">03</span>
                  <h3>포용적으로</h3>
                  <p>키보드, 보조기술, 확대, 고대비 환경을 초기 설계 조건으로 포함합니다.</p>
                </article>
              </div>
            </section>

            <section className="content-section" id="tokens" aria-labelledby="tokens-title">
              <p className="section-kicker">Design tokens</p>
              <h2 id="tokens-title">값에서 의미로, 의미에서 경험으로</h2>
              <p className="section-description">
                원시값을 바로 쓰지 않고 <strong>Reference → System → Component</strong> 순서로 연결합니다.
                테마를 바꿀 때는 System 계층만 교체합니다.
              </p>

              <ol className="token-flow" aria-label="토큰 계층">
                <li className="token-layer">
                  <span className="token-layer__number">1</span>
                  <div>
                    <p className="token-layer__label">Reference</p>
                    <code>--ref-color-brand-600</code>
                    <span>고정된 원시 값</span>
                  </div>
                </li>
                <li className="token-layer">
                  <span className="token-layer__number">2</span>
                  <div>
                    <p className="token-layer__label">System</p>
                    <code>--sys-color-action-primary</code>
                    <span>맥락과 의도</span>
                  </div>
                </li>
                <li className="token-layer">
                  <span className="token-layer__number">3</span>
                  <div>
                    <p className="token-layer__label">Component</p>
                    <code>--component-button-background-primary</code>
                    <span>구현 계약</span>
                  </div>
                </li>
              </ol>

              <div className="code-block code-block--token">
                <div className="code-block__header">
                  <span>tokens.css</span>
                  <button
                    className="text-button"
                    type="button"
                    onClick={() => void copyCode(tokenCode, "token")}
                  >
                    {copiedCode === "token" ? "복사됨" : "코드 복사"}
                  </button>
                </div>
                <pre>
                  <code>{tokenCode}</code>
                </pre>
              </div>

              <aside className="callout" aria-labelledby="token-rule-title">
                <span className="callout__mark" aria-hidden="true">i</span>
                <div>
                  <h3 id="token-rule-title">이름은 역할을 설명해야 합니다</h3>
                  <p>
                    소문자 kebab-case를 사용하고 약어를 피합니다. 값이 달라져도 이름이 유효한지 확인하세요.
                  </p>
                </div>
              </aside>
            </section>

            <section className="content-section" id="foundations" aria-labelledby="foundations-title">
              <p className="section-kicker">Foundations</p>
              <h2 id="foundations-title">일관성을 만드는 기본 재료</h2>
              <p className="section-description">
                색상, 글자, 간격, 형태는 독립된 값이 아니라 같은 리듬을 만드는 하나의 체계입니다.
              </p>

              <article className="foundation-panel">
                <header className="foundation-panel__header">
                  <div>
                    <p className="section-kicker">Color</p>
                    <h3>의미 중심 색상</h3>
                  </div>
                  <span className="foundation-panel__meta">Light · Dark</span>
                </header>
                <div className="color-scales">
                  <div className="color-scale">
                    <span className="color-swatch color-swatch--brand-100" />
                    <span className="color-swatch color-swatch--brand-300" />
                    <span className="color-swatch color-swatch--brand-500" />
                    <span className="color-swatch color-swatch--brand-700" />
                    <span className="color-swatch color-swatch--brand-900" />
                  </div>
                  <div className="color-scale">
                    <span className="color-swatch color-swatch--neutral-50" />
                    <span className="color-swatch color-swatch--neutral-200" />
                    <span className="color-swatch color-swatch--neutral-400" />
                    <span className="color-swatch color-swatch--neutral-700" />
                    <span className="color-swatch color-swatch--neutral-900" />
                  </div>
                </div>
                <dl className="token-values">
                  <div><dt>Action</dt><dd><code>--sys-color-action-primary</code></dd></div>
                  <div><dt>Surface</dt><dd><code>--sys-color-surface-canvas</code></dd></div>
                  <div><dt>Text</dt><dd><code>--sys-color-text-primary</code></dd></div>
                </dl>
              </article>

              <article className="foundation-panel">
                <header className="foundation-panel__header">
                  <div>
                    <p className="section-kicker">Typography</p>
                    <h3>역할 중심 타이포그래피</h3>
                  </div>
                  <span className="foundation-panel__meta">16px root</span>
                </header>
                <div className="type-specimens">
                  <div className="type-specimen type-specimen--display">
                    <span>서비스를 더 쉽게</span><code>Title / LG</code>
                  </div>
                  <div className="type-specimen type-specimen--heading">
                    <span>중요한 내용을 분명하게</span><code>Heading / MD</code>
                  </div>
                  <div className="type-specimen type-specimen--body">
                    <span>본문은 충분한 줄 간격으로 편안하게 읽을 수 있어야 합니다.</span><code>Body / MD</code>
                  </div>
                </div>
              </article>
            </section>

            <section className="content-section" id="components" aria-labelledby="components-title">
              <p className="section-kicker">Components</p>
              <div className="section-heading-row">
                <div>
                  <h2 id="components-title">작은 단위부터 완성도 있게</h2>
                  <p className="section-description">
                    모든 컴포넌트 문서는 구조, 용례, 상태, 반응형, 접근성, 토큰, API를 같은 순서로 설명합니다.
                  </p>
                </div>
                <span className="status-badge">Stable</span>
              </div>

              <article className="component-document">
                <header className="component-document__header">
                  <div>
                    <span className="component-document__category">Actions</span>
                    <h3>Button</h3>
                    <p>사용자가 중요한 행동을 실행하거나 다음 단계로 이동하도록 돕습니다.</p>
                  </div>
                  <span className="component-document__version">2.1.0</span>
                </header>

                <div className="tabs" role="tablist" aria-label="버튼 문서 보기">
                  {tabs.map((tab) => (
                    <button
                      id={`tab-${tab.id}`}
                      className="tabs__button"
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={activeTab === tab.id}
                      aria-controls="component-tab-panel"
                      tabIndex={activeTab === tab.id ? 0 : -1}
                      onClick={() => setActiveTab(tab.id)}
                      onKeyDown={handleTabKeyDown}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                <div
                  className="tabs__panel"
                  id="component-tab-panel"
                  role="tabpanel"
                  aria-labelledby={`tab-${activeTab}`}
                  tabIndex={0}
                >
                  {renderTabContent()}
                </div>
              </article>
            </section>

            <section className="content-section" id="patterns" aria-labelledby="patterns-title">
              <p className="section-kicker">UI Patterns</p>
              <h2 id="patterns-title">반복되는 과업을 검증된 조합으로</h2>
              <div className="pattern-list">
                <article>
                  <span className="pattern-list__index">01</span>
                  <div><h3>입력과 검증</h3><p>입력 이유, 형식, 오류 복구를 하나의 흐름으로 설명합니다.</p></div>
                  <a href="#components" aria-label="입력과 검증 패턴 자세히 보기">→</a>
                </article>
                <article>
                  <span className="pattern-list__index">02</span>
                  <div><h3>피드백과 상태</h3><p>진행, 성공, 경고, 실패 상황을 적절한 강도로 전달합니다.</p></div>
                  <a href="#components" aria-label="피드백과 상태 패턴 자세히 보기">→</a>
                </article>
                <article>
                  <span className="pattern-list__index">03</span>
                  <div><h3>동의와 확인</h3><p>사용자가 영향을 이해한 뒤 명시적으로 결정하도록 돕습니다.</p></div>
                  <a href="#components" aria-label="동의와 확인 패턴 자세히 보기">→</a>
                </article>
              </div>
            </section>

            <section className="content-section" id="flows" aria-labelledby="flows-title">
              <p className="section-kicker">Service flows</p>
              <h2 id="flows-title">화면을 넘어 완료까지</h2>
              <p className="section-description">
                UI 패턴이 화면 안의 반복 과업을 다룬다면, 서비스 플로는 발견부터 완료·복구까지의 사용자 여정을 다룹니다.
              </p>
              <ol className="journey-flow">
                <li><span>1</span><div><strong>발견</strong><small>진입점과 기대 형성</small></div></li>
                <li><span>2</span><div><strong>이해</strong><small>조건과 영향 확인</small></div></li>
                <li><span>3</span><div><strong>수행</strong><small>입력과 선택</small></div></li>
                <li><span>4</span><div><strong>완료</strong><small>결과와 다음 행동</small></div></li>
              </ol>
            </section>

            <section className="content-section" id="accessibility" aria-labelledby="accessibility-title">
              <p className="section-kicker">Accessibility</p>
              <h2 id="accessibility-title">접근성은 별도 단계가 아닙니다</h2>
              <p className="section-description">
                시스템 전체의 공통 기준과 각 컴포넌트의 구체적인 상호작용 기준을 함께 문서화합니다.
              </p>
              <div className="quality-grid">
                <article><strong>4.5:1</strong><span>본문 텍스트 최소 대비</span></article>
                <article><strong>200%</strong><span>확대 시 콘텐츠 유지</span></article>
                <article><strong>44px</strong><span>권장 터치 영역</span></article>
                <article><strong>100%</strong><span>키보드 핵심 과업</span></article>
              </div>
              <p className="accessibility-note">
                컴포넌트 사용만으로 접근성 준수가 자동 보장되지는 않습니다. 실제 콘텐츠와 흐름을 함께 검증하세요.
              </p>
            </section>

            <section className="content-section" id="resources" aria-labelledby="resources-title">
              <p className="section-kicker">Resources</p>
              <h2 id="resources-title">설계부터 운영까지 연결</h2>
              <div className="resource-grid">
                <a href="#tokens"><span>Design</span><strong>토큰과 디자인 에셋</strong><small>Variables · Library</small></a>
                <a href="#components"><span>Code</span><strong>컴포넌트 패키지</strong><small>HTML · React</small></a>
                <a href="#resources"><span>Operate</span><strong>변경 이력과 기여</strong><small>Changelog · RFC</small></a>
              </div>
            </section>

            <footer className="article-footer">
              <p>마지막 수정일 <time dateTime="2026-08-18">2026.08.18</time></p>
              <nav aria-label="이전 및 다음 문서">
                <a href="#overview"><span>이전</span><strong>소개</strong></a>
                <a href="#tokens"><span>다음</span><strong>디자인 토큰</strong></a>
              </nav>
            </footer>
          </article>
        </main>

        <aside className="table-of-contents" aria-label="이 페이지의 목차">
          <p>이 페이지에서</p>
          <nav>
            {searchItems.map((item) => (
              <a
                href={`#${item.id}`}
                key={item.id}
                data-section-id={item.id}
                aria-current={activeSection === item.id ? "location" : undefined}
                onClick={handleNavigationLinkClick}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a className="feedback-link" href="#resources">
            문서 개선 방법 <span aria-hidden="true">→</span>
          </a>
        </aside>
      </div>

      {isMobileNavigationOpen && (
        <div className="mobile-navigation-layer">
          <button
            className="layer-backdrop"
            type="button"
            aria-label="전체 메뉴 닫기"
            tabIndex={-1}
            onClick={() => setIsMobileNavigationOpen(false)}
          />
          <aside
            className="mobile-navigation"
            id="mobile-navigation"
            ref={mobileNavigationRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label="모바일 문서 탐색"
          >
            <header className="mobile-navigation__header">
              <a className="site-brand" href="#overview" onClick={() => setIsMobileNavigationOpen(false)}>
                <BrandMark />
                <span className="site-brand__name">Common UI</span>
              </a>
              <button
                className="icon-button close-button"
                ref={mobileCloseRef}
                type="button"
                aria-label="전체 메뉴 닫기"
                onClick={() => setIsMobileNavigationOpen(false)}
              >
                <span aria-hidden="true">×</span>
              </button>
            </header>
            <button
              className="search-trigger search-trigger--mobile"
              type="button"
              onClick={() => {
                setIsMobileNavigationOpen(false);
                openSearch();
              }}
            >
              <span className="search-icon" aria-hidden="true" />
              문서 검색
            </button>
            <nav className="mobile-navigation__body">
              {navigationGroups.map((group) => (
                <section className="navigation-group" key={group.label}>
                  <h2>{group.label}</h2>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item.id}>
                        <a
                          className="navigation-link"
                          href={`#${item.id}`}
                          data-section-id={item.id}
                          aria-current={activeSection === item.id ? "location" : undefined}
                          onClick={handleNavigationLinkClick}
                        >
                          <span>{item.label}</span>
                          <small>{item.description}</small>
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </nav>
          </aside>
        </div>
      )}

      {isSearchOpen && (
        <div className="search-layer">
          <button
            className="layer-backdrop"
            type="button"
            aria-label="검색 닫기"
            tabIndex={-1}
            onClick={() => setIsSearchOpen(false)}
          />
          <section
            className="search-dialog"
            ref={searchDialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="search-title"
            tabIndex={-1}
          >
            <h2 className="visually-hidden" id="search-title">문서 검색</h2>
            <div className="search-dialog__field">
              <span className="search-icon" aria-hidden="true" />
              <input
                ref={searchInputRef}
                type="search"
                value={searchQuery}
                placeholder="페이지나 주제를 검색하세요"
                aria-label="문서 검색어"
                aria-controls="search-results"
                aria-describedby="search-help"
                onChange={(event) => setSearchQuery(event.target.value)}
              />
              <button type="button" onClick={() => setIsSearchOpen(false)}>ESC</button>
            </div>
            <p
              className="search-dialog__help"
              id="search-help"
              role="status"
              aria-live="polite"
            >
              {filteredSearchItems.length}개의 문서를 찾았습니다.
            </p>
            <ul
              className="search-results"
              id="search-results"
              aria-label="검색 결과"
            >
              {filteredSearchItems.length > 0 ? (
                filteredSearchItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      data-search-section={item.id}
                      onClick={handleSearchResultClick}
                    >
                      <span className="search-results__icon" aria-hidden="true">#</span>
                      <span>
                        <strong>{item.label}</strong>
                        <small>{item.group} · {item.description}</small>
                      </span>
                      <span aria-hidden="true">↵</span>
                    </a>
                  </li>
                ))
              ) : (
                <li className="search-results__empty">
                  <strong>일치하는 문서가 없습니다.</strong>
                  <span>다른 단어나 더 짧은 검색어를 입력해 보세요.</span>
                </li>
              )}
            </ul>
          </section>
        </div>
      )}
    </div>
  );
}
