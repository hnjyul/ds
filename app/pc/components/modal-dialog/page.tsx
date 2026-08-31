import type { Metadata } from "next";
import { DetailDocTemplate } from "../../../components/docs/DetailDocTemplate";
import { formatEyebrow } from "../../../components/shell/navigation-utils";

export const metadata: Metadata = { title: "Modal · Dialog" };

const modalCode = `<div class="dialog-demo" role="presentation">
  <div class="dialog-demo__panel" role="alertdialog" aria-labelledby="dlg-title" aria-describedby="dlg-desc">
    <h3 id="dlg-title">신청을 취소하시겠어요?</h3>
    <p id="dlg-desc">취소하면 작성 중인 내용이 저장되지 않습니다.</p>
    <div class="dialog-demo__actions">
      <button type="button" class="button button--secondary">계속 작성</button>
      <button type="button" class="button button--primary">취소하기</button>
    </div>
  </div>
</div>`;

export default function PcModalDialogDetail() {
  return (
    <DetailDocTemplate
      eyebrow={formatEyebrow("pc", "components")}
      category="Overlay"
      title="Modal · Dialog"
      description="중요한 결정 전에 사용자의 주의를 집중시키는 모달 레이어입니다."
      version="1.0.0"
      previewCaption="열린 상태를 고정해서 보여줍니다."
      preview={
        <div className="dialog-demo" role="presentation">
          <div className="dialog-demo__panel" role="alertdialog" aria-labelledby="pc-dialog-title" aria-describedby="pc-dialog-desc">
            <h3 id="pc-dialog-title">신청을 취소하시겠어요?</h3>
            <p id="pc-dialog-desc">취소하면 작성 중인 내용이 저장되지 않습니다.</p>
            <div className="dialog-demo__actions">
              <button type="button" className="button button--secondary">
                계속 작성
              </button>
              <button type="button" className="button button--primary">
                취소하기
              </button>
            </div>
          </div>
        </div>
      }
      tokenRows={[
        { label: "모서리 반경", token: "--ref-radius-400" },
        { label: "그림자", token: "--ref-shadow-300" },
        { label: "배경 오버레이", token: "--sys-color-overlay" },
      ]}
      guidelines={[
        {
          tone: "do",
          label: "권장",
          title: "결과를 되돌릴 수 없을 때 사용합니다",
          body: "삭제, 승인처럼 영향이 큰 행동을 확인받을 때 사용합니다.",
        },
        {
          tone: "avoid",
          label: "주의",
          title: "단순 정보 전달에는 사용하지 않습니다",
          body: "가벼운 안내는 Alert · Callout으로 대체합니다.",
        },
      ]}
      accessibilityChecks={[
        "열리는 즉시 포커스를 모달 안으로 이동하고, 닫히면 트리거로 되돌립니다.",
        "배경 콘텐츠는 inert 처리해 Tab 이동과 스크린리더 탐색에서 제외합니다.",
        "Escape 키로 닫을 수 있어야 합니다.",
      ]}
      code={{ title: "HTML", code: modalCode }}
    />
  );
}
