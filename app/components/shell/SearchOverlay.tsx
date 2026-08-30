"use client";

import Link from "next/link";
import type { RefObject } from "react";
import type { FlatSearchItem } from "./navigation-utils";

type SearchOverlayProps = {
  dialogRef: RefObject<HTMLElement | null>;
  inputRef: RefObject<HTMLInputElement | null>;
  query: string;
  onQueryChange: (value: string) => void;
  results: FlatSearchItem[];
  onClose: () => void;
  onResultClick: () => void;
};

export function SearchOverlay({
  dialogRef,
  inputRef,
  query,
  onQueryChange,
  results,
  onClose,
  onResultClick,
}: SearchOverlayProps) {
  return (
    <div className="search-layer">
      <button
        className="layer-backdrop"
        type="button"
        aria-label="검색 닫기"
        tabIndex={-1}
        onClick={onClose}
      />
      <section
        className="search-dialog"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="search-title"
        tabIndex={-1}
      >
        <h2 className="visually-hidden" id="search-title">
          문서 검색
        </h2>
        <div className="search-dialog__field">
          <span className="search-icon" aria-hidden="true" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            placeholder="페이지나 주제를 검색하세요"
            aria-label="문서 검색어"
            aria-controls="search-results"
            aria-describedby="search-help"
            onChange={(event) => onQueryChange(event.target.value)}
          />
          <button type="button" onClick={onClose}>
            ESC
          </button>
        </div>
        <p className="search-dialog__help" id="search-help" role="status" aria-live="polite">
          {results.length}개의 문서를 찾았습니다.
        </p>
        <ul className="search-results" id="search-results" aria-label="검색 결과">
          {results.length > 0 ? (
            results.map((item) => (
              <li key={`${item.categoryId}-${item.slug}`}>
                <Link href={item.href} onClick={onResultClick}>
                  <span className="search-results__icon" aria-hidden="true">
                    #
                  </span>
                  <span>
                    <strong>{item.label}</strong>
                    <small>
                      {item.categoryLabel} · {item.description}
                    </small>
                  </span>
                  <span aria-hidden="true">↵</span>
                </Link>
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
  );
}
