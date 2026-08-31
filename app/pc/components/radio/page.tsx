import type { Metadata } from "next";
import { DetailDocTemplate } from "../../../components/docs/DetailDocTemplate";
import { formatEyebrow } from "../../../components/shell/navigation-utils";

export const metadata: Metadata = { title: "Radio" };

const radioCode = `<fieldset>
  <legend>수령 방법</legend>
  <label><input type="radio" name="delivery" checked /> 방문 수령</label>
  <label><input type="radio" name="delivery" /> 우편 발송</label>
</fieldset>`;

export default function PcRadioDetail() {
  return (
    <DetailDocTemplate
      eyebrow={formatEyebrow("pc", "components")}
      category="Inputs"
      title="Radio"
      description="여러 옵션 중 하나만 선택해야 할 때 사용합니다."
      version="1.0.0"
      previewCaption="같은 그룹 안에서 하나만 선택됩니다."
      preview={
        <div className="choice-demo" role="radiogroup" aria-label="수령 방법">
          <label>
            <input type="radio" name="pc-radio-demo" defaultChecked />
            방문 수령
          </label>
          <label>
            <input type="radio" name="pc-radio-demo" />
            우편 발송
          </label>
        </div>
      }
      tokenRows={[
        { label: "모서리 반경", token: "--ref-radius-full" },
        { label: "선택 색상", token: "--sys-color-action-primary" },
        { label: "테두리", token: "--sys-color-border-strong" },
      ]}
      guidelines={[
        {
          tone: "do",
          label: "권장",
          title: "2~5개의 상호 배타적 옵션에 사용합니다",
          body: "선택지가 더 많아지면 Selectbox를 검토합니다.",
        },
        {
          tone: "avoid",
          label: "주의",
          title: "단일 On/Off 설정에는 사용하지 않습니다",
          body: "하나의 값만 켜고 끄는 경우 Switch 형태를 사용합니다.",
        },
      ]}
      accessibilityChecks={[
        "같은 그룹의 Radio는 role=\"radiogroup\"으로 묶고 방향키 이동을 지원합니다.",
        "그룹 전체를 설명하는 접근 가능한 이름(fieldset/legend 또는 aria-label)을 제공합니다.",
      ]}
      code={{ title: "HTML", code: radioCode }}
    />
  );
}
