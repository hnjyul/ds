import type { GuidelineCard } from "../../components/docs/DetailDocTemplate";
import type { PatternStep } from "../../components/docs/PatternDocTemplate";

export type PatternEntry = {
  category: string;
  whenToUse: string[];
  steps: PatternStep[];
  guidelines: GuidelineCard[];
  accessibilityNotes: string[];
};

export const mobilePatterns: Record<string, PatternEntry> = {
  onboarding: {
    category: "진입",
    whenToUse: [
      "미니앱을 처음 연 사용자에게 이 서비스가 무엇을 해 주는지 세 화면 안에 설명하고 곧바로 첫 주문 화면으로 넘겨야 할 때 사용합니다.",
      "위치·알림 권한이나 필수 약관 동의가 있어야 핵심 기능이 동작해서, 홈 진입 전에 동의를 한 번에 받아야 할 때 사용합니다.",
      "관심 카테고리나 배송지처럼 최소한의 정보를 먼저 받아야 첫 화면을 개인화할 수 있을 때 사용합니다.",
      "기존 사용자에게 구조가 크게 바뀐 화면을 다시 안내하고 달라진 조작 방식을 익히게 할 때 사용합니다.",
    ],
    steps: [
      {
        title: "가치 한 문장 제시",
        body: "TopNavBar에는 제목 대신 '건너뛰기' TextButton만 두고, 본문에는 서비스가 해결하는 문제를 한 문장과 이미지 하나로 보여줍니다. 사용자는 하단 BottomCTA의 '시작하기'를 눌러 다음 화면으로 넘어갑니다.",
        components: ["TopNavBar", "TextButton", "BottomCTA"],
      },
      {
        title: "핵심 사용법 훑기",
        body: "화면당 기능 하나만 이미지와 두 줄 설명으로 보여주고, 상단 ProgressStepper가 전체 몇 화면 중 몇 번째인지 알려줍니다. 사용자는 좌우 스와이프나 BottomCTA의 '다음'으로 이동하며, TextButton으로 언제든 흐름을 빠져나갑니다.",
        components: ["ProgressStepper", "BottomCTA", "TextButton"],
      },
      {
        title: "약관과 권한 동의",
        body: "Agreement에 전체 동의와 필수·선택 약관을 한 목록으로 모으고, 약관 전문은 BottomSheet로 열어 화면을 벗어나지 않게 합니다. 필수 항목이 모두 선택되어야 BottomCTA의 '동의하고 계속'이 활성화됩니다.",
        components: ["Agreement", "BottomSheet", "BottomCTA"],
      },
      {
        title: "관심사 최소 입력",
        body: "첫 화면을 개인화할 관심 카테고리를 Chip 목록에서 여러 개 고르게 하고, 이름처럼 지금 꼭 필요한 값만 TextField 한두 개로 받습니다. 선택을 마치면 BottomCTA로 마지막 단계에 진입합니다.",
        components: ["Chip", "TextField", "BottomCTA"],
      },
      {
        title: "첫 행동으로 연결",
        body: "Result 화면에서 준비가 끝났음을 알리고 Button 하나로 첫 주문·첫 검색 같은 실제 행동 화면으로 바로 보냅니다. 도착한 화면에서는 Bubble로 가장 중요한 조작 한 곳만 짚어 줍니다.",
        components: ["Result", "Button", "Bubble"],
      },
    ],
    guidelines: [
      { tone: "do", label: "권장", title: "건너뛰기를 항상 열어 둡니다", body: "모든 온보딩 화면에 TextButton으로 건너뛰기를 두고, 건너뛴 사용자도 홈이나 설정에서 같은 안내를 다시 볼 수 있게 합니다." },
      { tone: "avoid", label: "주의", title: "설명 전에 가입을 묻지 않습니다", body: "회원가입과 권한 요청은 사용자가 가치를 이해한 뒤로 미루고, 첫 화면에서는 로그인 없이 확인할 수 있는 내용만 보여줍니다." },
    ],
    accessibilityNotes: [
      "화면 이동을 스와이프로만 처리하지 않고 BottomCTA의 '다음' 버튼으로도 같은 이동이 되게 해서, 스크린리더 사용자가 흐름 중간에 갇히지 않게 합니다.",
      "온보딩 화면이 바뀌면 새 화면의 제목으로 포커스를 옮기고, 진행 상태는 '3단계 중 2단계'처럼 aria-label 텍스트로도 읽히게 합니다.",
    ],
  },

  "login-auth": {
    category: "진입",
    whenToUse: [
      "미니앱에 처음 들어온 사용자에게 서비스 이용 전 휴대폰 본인확인으로 실명과 연락처를 확인받는 화면에 사용합니다.",
      "이미 가입한 사용자가 앱을 다시 열었을 때 간편 비밀번호 여섯 자리만으로 통과하는 잠금 해제 화면에 사용합니다.",
      "결제 수단 등록이나 개인정보 조회처럼 영향이 큰 행동 직전에 인증을 한 번 더 요구하는 재인증 화면에 사용합니다.",
      "기기 변경이나 명의 변경 이후 기존 간편 비밀번호를 다시 등록하도록 안내하는 화면에 사용합니다.",
    ],
    steps: [
      {
        title: "인증 수단 선택",
        body: "상단에 현재 단계를 알리는 진행 표시와 함께 통신사 본인확인, 간편 비밀번호 등 사용 가능한 수단이 행 목록으로 놓입니다. 사용자는 수단 하나를 고르고 하단 고정 버튼으로 다음 단계로 넘어갑니다.",
        components: ["TopNavBar", "ProgressStepper", "ListRow", "BottomCTA"],
      },
      {
        title: "약관 동의와 정보 입력",
        body: "이름, 생년월일, 휴대폰 번호 입력란과 필수·선택 약관 동의 목록이 한 화면에 순서대로 놓입니다. 사용자는 값을 채우고 필수 약관에 동의한 뒤 인증 요청을 보냅니다.",
        components: ["TextField", "Agreement", "BottomCTA"],
      },
      {
        title: "인증번호 입력",
        body: "문자로 받은 인증번호를 넣는 입력란과 남은 유효시간이 함께 표시되고, 그 아래에 재발송 진입점이 놓입니다. 재발송을 누르면 발송 완료가 짧은 알림으로 확인됩니다.",
        components: ["TextField", "TextButton", "BottomCTA", "Toast · Snackbar"],
      },
      {
        title: "간편 비밀번호 입력",
        body: "화면 하단에 배열이 섞인 보안 키패드가 고정되고, 상단에는 입력한 자릿수만 표시됩니다. 연속 실패로 계정이 잠기면 다음 행동을 묻는 확인 레이어가 열립니다.",
        components: ["Keypad", "TextButton", "Dialog"],
      },
      {
        title: "인증 결과 확인",
        body: "인증을 처리하는 동안 로딩 인디케이터가 돌고, 처리가 끝나면 성공 또는 실패를 아이콘과 문구로 알리는 결과 화면이 나타납니다. 사용자는 하단 버튼으로 원래 하려던 작업으로 돌아갑니다.",
        components: ["Loader", "Result", "BottomCTA"],
      },
    ],
    guidelines: [
      { tone: "do", label: "권장", title: "남은 단계를 먼저 알립니다", body: "첫 화면에 ProgressStepper로 전체 단계와 현재 위치를 함께 표시해, 사용자가 인증을 시작하기 전에 남은 절차를 예측하게 합니다." },
      { tone: "avoid", label: "주의", title: "시스템 키보드로 대체하지 않습니다", body: "간편 비밀번호와 PIN은 입력값이 노출될 수 있으므로 Keypad로만 받고, 자동완성과 붙여넣기를 함께 차단합니다." },
    ],
    accessibilityNotes: [
      "보안 키패드는 배열이 매번 바뀌므로 각 키에 해당 숫자를 접근 가능한 이름으로 부여하고, 입력 상황은 '6자리 중 2자리 입력됨'처럼 자릿수만 aria-live로 전달합니다.",
      "인증번호 유효시간은 매초 읽히지 않도록 aria-live를 끄고, 만료 시점에만 role=\"alert\"로 재발송 안내를 전달합니다.",
    ],
  },

  "input-form": {
    category: "입력",
    whenToUse: [
      "배송지 등록처럼 이름·연락처·주소 등 여러 항목을 받아 한 번에 제출하는 화면에 사용합니다.",
      "회원가입처럼 앞 단계의 입력값에 따라 뒤에 나올 항목이 달라지는 화면에 사용합니다.",
      "결제 신청처럼 개인정보 입력과 약관 동의를 함께 받아야 하는 화면에 사용합니다.",
      "입력 도중 이탈하면 처음부터 다시 채워야 해서 진행 상태를 남겨 두어야 하는 화면에 사용합니다.",
    ],
    steps: [
      {
        title: "진행 범위를 알립니다",
        body: "TopNavBar에 현재 화면의 제목을 두고, 그 아래 ProgressStepper로 전체 단계와 현재 위치를 함께 표시합니다. 사용자는 앞으로 몇 단계가 남았는지 확인한 뒤 입력을 시작합니다.",
        components: ["TopNavBar", "ProgressStepper"],
      },
      {
        title: "항목을 입력합니다",
        body: "한 단계에는 서로 관련된 항목만 모아 TextField로 받고, 선택지가 적을 때는 Radio나 Chip으로 대체해 키보드 사용을 줄입니다. 사용자는 위에서 아래로 순서대로 항목을 채웁니다.",
        components: ["TextField", "Radio", "Chip"],
      },
      {
        title: "입력값을 검증합니다",
        body: "필드를 벗어나는 순간 형식 오류를 TextField 하단 메시지로 보여주고, 필수 항목이 비어 있으면 BottomCTA를 비활성 상태로 유지합니다. 사용자는 다음으로 넘어가기 전에 잘못된 값을 고칩니다.",
        components: ["TextField", "BottomCTA"],
      },
      {
        title: "약관에 동의합니다",
        body: "필수와 선택 약관을 Agreement로 묶어 전체 동의와 Checkbox 개별 동의를 함께 제공하고, 조항 전문은 BottomSheet에서 확인하게 합니다. 사용자는 필요한 항목만 선택하고 마지막 단계로 이동합니다.",
        components: ["Agreement", "Checkbox", "BottomSheet"],
      },
      {
        title: "제출하고 결과를 봅니다",
        body: "BottomCTA를 누르면 Loader로 처리 중임을 알리고, 완료되면 Result로 성공 여부와 다음 행동을 안내합니다. 실패하면 Dialog로 원인과 재시도 방법을 전달해 입력값을 유지한 채 다시 시도하게 합니다.",
        components: ["BottomCTA", "Loader", "Result", "Dialog"],
      },
    ],
    guidelines: [
      { tone: "do", label: "권장", title: "한 단계에 한 주제만 담습니다", body: "배송지와 결제 수단처럼 성격이 다른 항목은 단계를 나눠, 가상 키보드가 올라와도 현재 입력 중인 항목과 다음 행동이 함께 보이게 합니다." },
      { tone: "avoid", label: "주의", title: "입력값을 버리지 않습니다", body: "뒤로가기나 검증 실패로 단계를 되돌아갈 때 이미 채운 값을 지우지 않고 그대로 복원해 재입력을 요구하지 않습니다." },
    ],
    accessibilityNotes: [
      "단계를 이동하면 포커스를 새 단계의 제목이나 첫 입력으로 옮겨 스크린리더가 바뀐 내용부터 읽게 합니다.",
      "제출에 실패하면 오류가 발생한 첫 입력으로 포커스를 이동하고, 전체 오류 개수는 aria-live 영역으로 함께 알립니다.",
    ],
  },

  consent: {
    category: "입력",
    whenToUse: [
      "회원가입 마지막 단계에서 서비스 이용약관과 개인정보 수집 동의를 한 화면에 모아 받을 때 사용합니다.",
      "미니앱 첫 결제 화면에서 결제대행 약관과 개인정보 제3자 제공 동의를 받아야 다음으로 진행할 수 있을 때 사용합니다.",
      "마케팅 수신 동의처럼 선택 항목이 필수 항목과 섞여 있어 둘을 시각적으로 구분해야 할 때 사용합니다.",
      "본인인증이나 계좌 연결처럼 외부 기관 약관이 포함되어 동의 항목이 네 개를 넘어갈 때 사용합니다.",
    ],
    steps: [
      {
        title: "동의 화면 진입",
        body: "TopNavBar에 현재 단계 제목을 두고 ProgressStepper로 전체 절차 중 동의 단계임을 표시합니다. 사용자는 아래에 모인 약관 목록 전체를 한 화면에서 확인합니다.",
        components: ["TopNavBar", "ProgressStepper"],
      },
      {
        title: "전체 동의 선택",
        body: "목록 맨 위에 전체 동의 행을 두고, 이 행을 누르면 아래 개별 항목이 한 번에 모두 선택됩니다. 사용자는 항목을 하나씩 누르지 않고 동의를 한 번에 완료합니다.",
        components: ["Agreement", "Checkbox"],
      },
      {
        title: "개별 항목 조정",
        body: "필수 항목과 선택 항목에 각각 구분 표시를 붙여 위계를 드러냅니다. 사용자는 선택 항목만 따로 해제하고, 개별 항목이 하나라도 해제되면 전체 동의도 함께 해제됩니다.",
        components: ["Agreement", "Checkbox", "Badge"],
      },
      {
        title: "약관 본문 확인",
        body: "항목 오른쪽 보기 영역을 누르면 약관 전문이 하단 시트로 표시됩니다. 사용자는 본문을 확인한 뒤 그 자리에서 동의하거나 시트를 닫고 목록으로 복귀합니다.",
        components: ["Agreement", "BottomSheet", "TextButton", "Button"],
      },
      {
        title: "동의 확정과 진행",
        body: "필수 항목이 모두 선택되면 하단 고정 영역의 다음 버튼이 활성화됩니다. 필수 항목이 남은 상태에서 누르면 아직 동의하지 않은 항목을 짧은 메시지로 안내합니다.",
        components: ["BottomCTA", "Button", "Toast · Snackbar"],
      },
    ],
    guidelines: [
      { tone: "do", label: "권장", title: "필수와 선택을 라벨로 구분합니다", body: "체크 상태만으로는 위계가 드러나지 않으므로 각 항목 앞에 '필수'와 '선택'을 텍스트로 붙이고, 진행이 막혔을 때는 남은 필수 항목의 이름을 함께 노출합니다." },
      { tone: "avoid", label: "주의", title: "동의 상태를 미리 켜두지 않습니다", body: "선택 약관을 기본 선택으로 두면 사용자의 의사로 인정되지 않으므로, 모든 항목을 해제 상태로 시작하고 사용자가 직접 누르게 합니다." },
    ],
    accessibilityNotes: [
      "전체 동의 체크박스는 개별 항목이 일부만 선택된 상태에서 aria-checked=\"mixed\"로 중간 상태를 전달합니다.",
      "다음 버튼이 비활성일 때 aria-describedby로 아직 동의하지 않은 필수 항목의 이름을 연결해, 목록을 다시 훑지 않고도 이유를 알 수 있게 합니다.",
    ],
  },

  "list-browse": {
    category: "탐색",
    whenToUse: [
      "상품 목록이나 쿠폰함처럼 항목이 수십 개를 넘어 한 화면에 모두 담을 수 없을 때 사용합니다.",
      "거래 내역이나 알림함처럼 사용자가 기간·상태 같은 조건에 맞는 항목만 골라 봐야 할 때 사용합니다.",
      "지점 찾기처럼 검색어와 필터를 함께 걸어야 원하는 결과에 닿는 화면에 사용합니다.",
      "서버가 전체를 한 번에 내려주지 못해 목록을 페이지 단위로 나눠 불러와야 할 때 사용합니다.",
    ],
    steps: [
      {
        title: "목록 진입과 훑기",
        body: "상단에 화면 제목이 보이고 그 아래 머리말에 전체 항목 수와 정렬·필터 진입점이 놓입니다. 데이터가 도착하기 전에는 같은 높이의 자리표시자가 목록 형태를 먼저 보여줍니다.",
        components: ["TopNavBar", "ListHeader", "ListRow", "Skeleton"],
      },
      {
        title: "검색어로 좁히기",
        body: "목록 위 검색 입력에 단어를 넣으면 입력하는 동안 결과가 실시간으로 줄어듭니다. 최근 검색어는 입력 아래에 칩으로 남아 다시 누르면 바로 적용됩니다.",
        components: ["SearchField", "Chip", "ListRow"],
      },
      {
        title: "필터와 정렬 적용",
        body: "필터를 누르면 하단 시트가 올라와 조건을 여러 개 고르고 시트 하단의 고정 버튼으로 한 번에 적용합니다. 적용된 조건은 목록 위에 칩으로 남아 하나씩 해제할 수 있습니다.",
        components: ["BottomSheet", "Checkbox", "BottomCTA", "Chip"],
      },
      {
        title: "결과 확인과 빈 상태",
        body: "조건에 맞는 결과 수가 목록 머리말에서 갱신됩니다. 맞는 항목이 하나도 없으면 빈 상태 화면이 조건을 지우는 행동과 함께 나타납니다.",
        components: ["ListHeader", "Result", "Chip"],
      },
      {
        title: "다음 묶음 불러오기",
        body: "목록 끝에 닿으면 하단에 로딩 표시가 나타났다가 다음 묶음이 아래에 이어 붙습니다. 불러오기에 실패하면 같은 자리에서 다시 시도하도록 안내합니다.",
        components: ["ListFooter", "Loader", "ListRow", "Toast · Snackbar"],
      },
    ],
    guidelines: [
      { tone: "do", label: "권장", title: "적용된 조건을 목록 위에 남깁니다", body: "필터 시트를 닫은 뒤에도 어떤 조건이 걸려 있는지 칩으로 보여주고, 칩을 하나씩 눌러 바로 해제할 수 있게 합니다." },
      { tone: "avoid", label: "주의", title: "무한 스크롤에만 의존하지 않습니다", body: "상세 화면에서 돌아왔을 때 스크롤 위치와 적용 조건을 복원하거나, 더보기 버튼을 함께 제공해 사용자가 보던 지점을 잃지 않게 합니다." },
    ],
    accessibilityNotes: [
      "필터나 검색으로 목록이 갱신되면 바뀐 결과 개수를 aria-live=\"polite\" 영역으로 읽어 화면 변화를 소리로도 알립니다.",
      "추가로 불러온 항목은 기존 목록 뒤에 이어 붙여 포커스가 목록 처음으로 되돌아가지 않게 합니다.",
    ],
  },

  "error-handling": {
    category: "피드백",
    whenToUse: [
      "결제 화면에서 카드번호 형식이 맞지 않아 제출이 막히는 순간에 사용합니다.",
      "목록 화면을 여는 도중 네트워크가 끊겨 콘텐츠를 한 줄도 그리지 못할 때 사용합니다.",
      "로그인 세션이 만료되어 상세 화면을 열 권한이 사라졌을 때 사용합니다.",
      "쿠폰 등록처럼 서버가 값을 거절해 사용자가 다른 값을 다시 넣어야 할 때 사용합니다.",
    ],
    steps: [
      {
        title: "제출과 응답 대기",
        body: "사용자가 BottomCTA를 눌러 값을 제출하면 버튼이 진행 중 상태로 바뀌고 같은 요청이 중복으로 나가지 않습니다. 화면 전체를 새로 불러오는 경우에는 본문 자리에 Skeleton을 깔아 대기 구간을 드러냅니다.",
        components: ["BottomCTA", "Loader", "Skeleton"],
      },
      {
        title: "오류 지점 표시",
        body: "입력값이 잘못된 경우 문제가 된 필드 바로 아래에 무엇이 잘못됐는지와 어떤 형식이 맞는지를 함께 적습니다. 필수 동의를 놓친 경우도 같은 방식으로 해당 항목 옆에 표시하고, 첫 번째 오류 위치까지 화면을 올려 줍니다.",
        components: ["TextField", "Agreement", "BottomCTA"],
      },
      {
        title: "화면 단위 실패 안내",
        body: "네트워크 실패나 권한 없음처럼 화면에 그릴 내용이 아예 없으면 본문을 Result로 바꿔 원인 한 줄과 다음 행동 하나를 보여줍니다. TopNavBar의 뒤로가기는 그대로 남겨 사용자가 막힌 화면에 갇히지 않습니다.",
        components: ["Result", "Button", "TopNavBar"],
      },
      {
        title: "복구 행동 제시",
        body: "'다시 시도'는 화면 하단에 두어 한 손으로 닿게 하고, 로그인·설정 이동 같은 보조 경로는 TextButton으로 낮춥니다. 결제 중단처럼 사용자가 처리 방법을 골라야 하는 실패는 Dialog로 선택지를 두 개까지만 제시합니다.",
        components: ["BottomCTA", "TextButton", "Dialog"],
      },
      {
        title: "복구 결과 확인",
        body: "재시도가 성공하면 Toast · Snackbar로 짧게 알리고 원래 흐름을 그대로 이어갑니다. 같은 요청이 다시 실패하면 동일한 문구를 반복하지 않고 고객센터 연결 같은 대체 경로를 덧붙입니다.",
        components: ["Toast · Snackbar", "Result", "TextButton"],
      },
    ],
    guidelines: [
      { tone: "do", label: "권장", title: "오류 문구에 복구 행동을 붙입니다", body: "'다시 시도', '로그인하기'처럼 지금 누를 수 있는 행동을 오류 메시지와 같은 영역에 배치해 사용자가 화면을 벗어나지 않게 합니다." },
      { tone: "avoid", label: "주의", title: "오류를 토스트로만 알리지 않습니다", body: "Toast · Snackbar는 몇 초 뒤 사라져 값을 고치는 동안 다시 읽을 수 없으므로, 수정이 필요한 오류는 해당 필드 옆에 계속 남깁니다." },
    ],
    accessibilityNotes: [
      "실패한 입력에는 aria-invalid=\"true\"를 붙이고 제출 직후 첫 번째 오류 필드로 포커스를 옮깁니다.",
      "오류 영역에 aria-live=\"assertive\"를 지정해 재시도가 다시 실패할 때마다 변경된 문구를 즉시 읽어 줍니다.",
    ],
  },

  "empty-state": {
    category: "피드백",
    whenToUse: [
      "장바구니나 위시리스트처럼 사용자가 아직 아무것도 담지 않아 목록이 비어 있는 첫 진입 화면에 사용합니다.",
      "검색어를 입력했지만 일치하는 항목이 0건이어서 결과 목록 자리가 비는 화면에 사용합니다.",
      "기간이나 상태 필터를 좁힌 뒤 표시할 항목이 사라진 주문 내역·알림함 화면에 사용합니다.",
      "삭제나 완료 처리로 마지막 항목이 없어져 목록이 비게 되는 순간에 사용합니다.",
    ],
    steps: [
      {
        title: "결과를 기다립니다",
        body: "목록이 들어올 자리에 Skeleton을 같은 높이로 깔아 두고, 사용자는 화면이 흔들리지 않는 상태로 조회가 끝나기를 기다립니다.",
        components: ["TopNavBar", "Skeleton", "Loader"],
      },
      {
        title: "빈 상태를 알립니다",
        body: "0건이 확정되면 Skeleton 자리에 Result가 들어가 무엇이 비었고 왜 비었는지 한두 줄로 설명합니다. 사용자는 화면 중앙에서 상황을 먼저 읽습니다.",
        components: ["Result", "TopNavBar"],
      },
      {
        title: "다음 행동을 제안합니다",
        body: "설명 바로 아래에 상황을 직접 푸는 행동 하나를 Button으로 두고 보조 경로는 TextButton으로 낮춥니다. 검색 0건이면 바로 눌러볼 추천어를 Chip으로 함께 보여줍니다.",
        components: ["Button", "TextButton", "Chip"],
      },
      {
        title: "조건을 다시 좁힙니다",
        body: "사용자가 Chip을 누르거나 상단 SearchField로 돌아가 검색어를 고치면 조회가 곧바로 다시 실행됩니다. 조건이 많은 화면에서는 BottomSheet로 필터를 열어 한 손으로 수정합니다.",
        components: ["SearchField", "Chip", "BottomSheet"],
      },
      {
        title: "결과 화면으로 돌아옵니다",
        body: "조건이 맞으면 빈 상태 자리에 ListHeader와 ListRow가 다시 채워지고, 몇 건이 조회되었는지 Toast · Snackbar로 짧게 알립니다.",
        components: ["ListHeader", "ListRow", "Toast · Snackbar"],
      },
    ],
    guidelines: [
      { tone: "do", label: "권장", title: "0건 이유를 문장으로 밝힙니다", body: "\"결과가 없습니다\" 대신 어떤 조건에서 0건인지 적어 사용자가 다음에 무엇을 바꿀지 판단하게 합니다." },
      { tone: "avoid", label: "주의", title: "검색 조건을 함께 지우지 않습니다", body: "빈 상태가 목록 영역만 대체하게 하고, SearchField와 선택된 Chip은 그대로 남겨 조건을 바로 고칠 수 있게 합니다." },
    ],
    accessibilityNotes: [
      "목록이 0건으로 바뀌는 순간을 aria-live=\"polite\" 영역으로 알려 화면을 보지 않는 사용자도 결과 개수를 알 수 있게 합니다.",
      "빈 상태로 바뀔 때 포커스가 사라진 목록 항목에 남지 않도록 제안 행동 버튼이나 SearchField로 포커스를 옮깁니다.",
    ],
  },

  "loading-state": {
    category: "피드백",
    whenToUse: [
      "주문 내역, 상품 목록처럼 서버에서 여러 건을 받아 본문 전체를 채워야 하는 화면에 사용합니다.",
      "검색어를 입력하거나 필터를 눌러 결과 목록이 통째로 교체되는 화면에 사용합니다.",
      "결제 확인, 본인 인증처럼 하단 버튼을 누른 뒤 응답까지 수 초가 걸리는 화면에 사용합니다.",
      "목록 끝에 닿으면 다음 페이지를 이어 불러오는 무한 스크롤 화면에 사용합니다.",
    ],
    steps: [
      {
        title: "골격을 먼저 띄웁니다",
        body: "화면에 진입하는 즉시 상단 제목과 목록 제목은 실제 값으로 그리고, 본문 자리에는 도착할 콘텐츠와 같은 형태의 자리표시자를 채웁니다. 사용자는 화면이 이미 열렸다고 인식하고 스크롤을 시작합니다.",
        components: ["TopNavBar", "ListHeader", "Skeleton"],
      },
      {
        title: "대기 표현을 고릅니다",
        body: "카드나 목록처럼 도착할 구조를 아는 영역은 Skeleton으로 자리를 예약하고, 결과 개수와 형태를 알 수 없는 검색·필터 결과는 Loader 하나만 본문 중앙에 둡니다.",
        components: ["Skeleton", "Loader", "GridList"],
      },
      {
        title: "조작을 잠급니다",
        body: "사용자가 하단 버튼을 눌러 요청을 보내면 버튼은 진행 중 상태로 바뀌어 같은 요청이 두 번 나가는 것을 막습니다. 단계 수를 아는 처리는 남은 양을 함께 보여줍니다.",
        components: ["BottomCTA", "Button", "ProgressBar"],
      },
      {
        title: "이어지는 로딩을 알립니다",
        body: "목록 끝에서 다음 페이지를 불러올 때는 이미 읽고 있던 행은 그대로 두고 목록 하단 영역에서만 대기를 표시합니다. 사용자는 읽던 위치를 잃지 않고 계속 스크롤합니다.",
        components: ["ListRow", "ListFooter", "Loader"],
      },
      {
        title: "결과로 교체합니다",
        body: "데이터가 도착하면 자리표시자를 같은 위치의 실제 콘텐츠로 바꿉니다. 화면이 비어 있는 상태에서 실패하면 원인과 재시도 버튼을 담은 결과 화면으로, 이미 콘텐츠가 있는 상태에서 실패하면 짧은 메시지로 알립니다.",
        components: ["Result", "Button", "Toast · Snackbar"],
      },
    ],
    guidelines: [
      { tone: "do", label: "권장", title: "도착할 레이아웃과 같게 만듭니다", body: "자리표시자의 블록 개수·높이·간격을 실제 콘텐츠에 맞춰, 데이터가 도착하는 순간 화면이 밀리거나 튀지 않게 합니다." },
      { tone: "avoid", label: "주의", title: "짧은 대기에는 띄우지 않습니다", body: "0.4초 안에 끝나는 요청까지 대기 표현을 넣으면 깜빡임만 남으므로, 지연이 확인된 뒤에 표시합니다." },
    ],
    accessibilityNotes: [
      "로딩 중인 영역에 aria-busy=\"true\"를 지정하고 콘텐츠가 도착하면 해제해, 스크린리더가 빈 골격을 콘텐츠로 읽지 않게 합니다.",
      "'불러오는 중', '불러오기 완료'를 aria-live=\"polite\" 영역에 한 번씩만 전달해, 화면 변화를 보지 못하는 사용자도 대기가 끝난 시점을 알 수 있게 합니다.",
    ],
  },

  completion: {
    category: "피드백",
    whenToUse: [
      "여러 단계 신청서를 마지막까지 제출해 접수번호와 처리 예정일을 확정해서 알려야 할 때 사용합니다.",
      "결제 승인 직후 금액·수단·주문번호를 한 화면에서 확인시키고 주문 상세로 이어 줘야 할 때 사용합니다.",
      "본인인증이나 서류 제출이 실패해 원인과 재시도 방법을 같은 자리에서 안내해야 할 때 사용합니다.",
      "미니앱에서 처리를 끝낸 사용자를 원래 서비스나 다음 화면으로 돌려보낼 지점이 필요할 때 사용합니다.",
    ],
    steps: [
      {
        title: "제출 직전 확인",
        body: "마지막 입력 화면 상단의 ProgressStepper가 여기가 끝 단계임을 보여주고, 하단 BottomCTA로 제출을 실행합니다. 되돌릴 수 없는 처리는 Dialog로 한 번 더 확인받습니다.",
        components: ["ProgressStepper", "BottomCTA", "Dialog"],
      },
      {
        title: "처리 중 대기",
        body: "요청을 보낸 직후 Loader가 처리 중임을 알리고, 단계가 여러 개면 ProgressBar로 남은 진행을 함께 보여줍니다. 이 화면에서는 TopNavBar의 뒤로가기를 비워 중복 제출을 차단합니다.",
        components: ["Loader", "ProgressBar", "TopNavBar"],
      },
      {
        title: "결과 확정 화면",
        body: "Result가 화면 중앙에서 성공·실패 아이콘과 한 문장으로 결과를 확정하고, 아래 ListRow가 접수번호·금액·처리 예정일 같은 근거 정보를 나열합니다. TopNavBar에는 뒤로가기 대신 닫기만 남깁니다.",
        components: ["Result", "ListRow", "TopNavBar"],
      },
      {
        title: "다음 행동 연결",
        body: "하단 BottomCTA에 주문 상세 보기 같은 다음 행동 하나를 두고, 홈으로 돌아가기 등 보조 경로는 TextButton으로 낮춥니다. 배송·심사처럼 이후 상태가 계속 바뀌면 BottomInfo로 현재 상황을 덧붙입니다.",
        components: ["BottomCTA", "TextButton", "BottomInfo"],
      },
      {
        title: "실패 시 복구 경로",
        body: "처리에 실패하면 같은 Result 자리에 실패 아이콘과 원인 문장을 표시하고, BottomCTA를 다시 시도로 바꿉니다. 접수번호 복사처럼 화면을 바꾸지 않는 작은 성공은 Toast · Snackbar로 알립니다.",
        components: ["Result", "BottomCTA", "Toast · Snackbar"],
      },
    ],
    guidelines: [
      { tone: "do", label: "권장", title: "결과와 근거를 같이 보여줍니다", body: "신청이 완료되었다는 문장만 남기지 말고 접수번호, 결제 금액, 처리 예정일처럼 사용자가 나중에 대조할 수 있는 값을 ListRow로 함께 남깁니다." },
      { tone: "avoid", label: "주의", title: "뒤로가기로 폼에 돌아가지 않습니다", body: "결과 화면에서 기기 뒤로가기를 누르면 이미 제출한 입력 폼으로 돌아가 중복 제출이 일어나므로, 완료 시점에 이전 단계를 히스토리에서 제거합니다." },
    ],
    accessibilityNotes: [
      "처리가 끝나 화면이 바뀌면 Result의 결과 제목으로 포커스를 옮겨 스크린리더가 성공·실패 문장을 가장 먼저 읽게 합니다.",
      "대기 화면의 Loader에는 aria-busy와 처리 중임을 설명하는 텍스트를 함께 제공해 화면이 멈춘 것으로 오해하지 않게 합니다.",
    ],
  },
};
