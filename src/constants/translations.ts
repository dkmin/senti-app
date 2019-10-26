import { LANGUAGE } from './config';
import { withComma } from 'utils';

const TRANSLATIONS: {
  [key: string]: {
    // 일반
    COMMON_APP_NAME: string;
    COMMON_APP_DESCRIPTION: string;
    COMMON_ERROR: string;
    COMMON_LOADING: string;
    COMMON_YES: string;
    COMMON_NO: string;
    COMMON_CONFIRM: string;
    COMMON_CANCEL: string;
    COMMON_SAVE: string;
    COMMON_DELETE: string;
    COMMON_NOTICE: string;
    // 화면 이름
    SCREEN_CHATTING: string;
    SCREEN_PROFILE: string;
    // 오류
    ERROR_VIEW_TITLE: string;
    ERROR_VIEW_MESSAGE: (message: string) => string;
    ERROR_VIEW_REFRESH_BUTTON: string;
    ERROR_AUTH_REQUIRED: string;
    // 검색
    SEARCH_PLACEHOLDER: string;
    TAG_STORY_COUNT: (count: number) => string;
    TAG_SUBSCRIBE_BUTTON: string;
    SUBSCRIBE_TAG_FAILURE: (message: string) => string;
    // 이야기
    COVER_MODAL: string;
    ADD_TAG_PLACEHOLDER: string;
    RECORDER_RECORD_BUTTON: string;
    RECORDER_PLAY_BUTTON: string;
    RECORD_FAILURE_TOO_SHORT: string;
    RECORD_FAILURE_REQUEST_PERMISSION: string;
    RECORD_FAILURE: (message: string) => string;
    RECORD_UPLOAD_FAILURE_NOT_FOUND: string;
    RECORD_UPLOAD_FAILURE: (message: string) => string;
    CREATE_STORY_WITHOUT_TAGS: string;
    STORY_USER_ACTIONS: string;
    STORY_USER_ACTION_REPORT: string;
    STORY_USER_ACTION_FAILURE: (message: string) => string;
    STORY_DELETE_ALERT: string;
    STORY_DELETE_FAILURE: (message: string) => string;
    STORY_REPLY_FAILURE: string;
    MY_STORY_EMPTY_MESSAGE: string;
    REPLY_USE_COIN_TITLE: string;
    REPLY_USE_COIN_MESSAGE: string;
    REPLY_USE_FREE_COIN_MESSAGE: string;
    // 메시지
    MESSAGE_USE_COIN_TITLE: string;
    MESSAGE_USE_COIN_MESSAGE: string;
    MESSAGE_USE_COIN_FAILURE_NOT_ENOUGH: string;
    // 로그인
    LOGIN_TITLE: string;
    LOGIN_WITH_FACEBOOK: string;
    LOGIN_WITH_GOOGLE: string;
    LOGIN_AGREEMENT_MESSAGE: string;
    LOGIN_FAILURE_FACEBOOK: (message: string) => string;
    LOGIN_FAILURE_GOOGLE: (message: string) => string;
    LOGIN_FAILURE_GOOGLE_PLAY_SERVICE: string;
    // 계정
    MY_STORIES: string;
    PROFILE_EDIT: string;
    PROFILE_ACCOUNT: string;
    PROFILE_NAME: string;
    PROFILE_PHOTO_CHANGE_BUTTON: string;
    PROFILE_PHOTO_CHANGE_FAILURE: (message: string) => string;
    PROFILE_LOGOUT_BUTTON: string;
    GENDER_SELECT_MODAL: string;
    GENDER_MALE: string;
    GENDER_FEMALE: string;
    GENDER_NONE: string;
    // 지원
    SETTINGS_TITLE: string;
    SETTINGS_REPORT_PROBLEM: string;
    SETTINGS_REPORT_FAILURE_TITLE: string;
    SETTINGS_REPORT_FAILURE_MESSAGE: (message: string) => string;
    SETTINGS_TERMS_BUTTON: string;
    // 채팅
    CHATTING_EMPTY_MESSAGE: string;
    CHATTING_MESSAGE_COUNT: (count: number) => string;
    MESSAGE_PLAY_FAILURE: (message: string) => string;
    // 코인
    COIN_DESCRIPTION: string;
    COIN_COUNT: (coin: number) => string;
    COIN_CHARGE_BUTTON: string;
    COIN_DISCOUNT_RATE: (percent: string) => string;
    COIN_PRICE: (price: number) => string;
    COIN_REFERRAL: string;
    COIN_CHARGE_TAB: string;
    COIN_HISTORY_TAB: string;
    COIN_PURCHASE_SUCCESS_TITLE: string;
    COIN_PURCHASE_SUCCESS_MESSAGE: string;
    COIN_RESTORE_BUTTON: string;
    COIN_RESTORE_MESSAGE: string;
    FREE_COIN_AVAILABLE: string;
    FREE_COIN_TIME_LEFT: (minutes: string, seconds: string) => string;
    TRANSACTION_DATE_FORMAT: string;
    // 튜토리얼
    TUTORIAL_MAIN_TITLE: string;
    TUTORIAL_MAIN_DESCRIPTION: string;
    TUTORIAL_MAIN_STEP_1: string;
    TUTORIAL_MAIN_STEP_2: string;
    TUTORIAL_MAIN_STEP_3: string;
    TUTORIAL_AFTER_PLAY_TITLE: string;
    TUTORIAL_AFTER_PLAY_DESCRIPTION: string;
    TUTORIAL_AFTER_PLAY_STEP_1: string;
    TUTORIAL_CREATE_STORY_TITLE: string;
    TUTORIAL_CREATE_STORY_DESCRIPTION: string;
    TUTORIAL_CREATE_STORY_STEP_1: string;
    TUTORIAL_CREATE_STORY_STEP_2: string;
    TUTORIAL_PROFILE_TITLE: string;
    TUTORIAL_PROFILE_DESCRIPTION: string;
    TUTORIAL_PROFILE_STEP_1: string;
    TUTORIAL_PROFILE_STEP_2: string;
  };
} = {
  ko: {
    // 일반
    COMMON_APP_NAME: '센치',
    COMMON_APP_DESCRIPTION: '목소리로 소통하는 익명 커뮤니티',
    COMMON_ERROR: '오류',
    COMMON_LOADING: '로딩 중..',
    COMMON_YES: '예',
    COMMON_NO: '아니오',
    COMMON_CONFIRM: '확인',
    COMMON_CANCEL: '취소',
    COMMON_SAVE: '저장',
    COMMON_DELETE: '삭제',
    COMMON_NOTICE: '알림',
    // 화면 이름
    SCREEN_CHATTING: '대화',
    SCREEN_PROFILE: '프로필',
    // 오류
    ERROR_VIEW_TITLE: '일시적인 오류입니다.',
    ERROR_VIEW_MESSAGE: (message) => `아래 버튼을 눌러 다시 시도할 수 있습니다.\n문제가 반복된다면 저희에게 알려 주세요.\n\n${message.replace('GraphQL error: ', '')}`,
    ERROR_VIEW_REFRESH_BUTTON: '새로고침',
    ERROR_AUTH_REQUIRED: '로그인 후 이용해주세요',
    // 검색
    SEARCH_PLACEHOLDER: '검색',
    TAG_STORY_COUNT: (count) => `이야기 ${withComma(count)}개`,
    TAG_SUBSCRIBE_BUTTON: '관심',
    SUBSCRIBE_TAG_FAILURE: (message) => `태그 구독에 실패했습니다.\n${message.replace('GraphQL error: ', '')}`,
    // 이야기
    COVER_MODAL: '배경 이미지',
    ADD_TAG_PLACEHOLDER: '여기에 #태그를 추가해 보세요',
    RECORDER_RECORD_BUTTON: '눌러서 녹음',
    RECORDER_PLAY_BUTTON: '눌러서 듣기',
    RECORD_FAILURE_TOO_SHORT: '3초 이상 녹음해주세요',
    RECORD_FAILURE_REQUEST_PERMISSION: '마이크 사용 권한을 허용해주세요.',
    RECORD_FAILURE: (message: string) => `녹음에 실패했습니다. 다시 시도해 주세요.\n${message.replace('GraphQL error: ', '')}`,
    RECORD_UPLOAD_FAILURE_NOT_FOUND: '녹음 파일이 없습니다.',
    RECORD_UPLOAD_FAILURE: (message) => `녹음 파일 업로드에 실패했습니다.\n${message.replace('GraphQL error: ', '')}`,
    CREATE_STORY_WITHOUT_TAGS: '태그가 지정되지 않았습니다.\n태그를 추가하시겠어요?',
    STORY_USER_ACTIONS: '이 사용자를..',
    STORY_USER_ACTION_REPORT: '신고하기',
    STORY_USER_ACTION_FAILURE: (message) => `사용자 신고에 실패했습니다.\n${message.replace('GraphQL error: ', '')}`,
    STORY_DELETE_ALERT: '정말 삭제하시겠습니까?',
    STORY_DELETE_FAILURE: (message) => `이야기 삭제에 실패했습니다.\n${message.replace('GraphQL error: ', '')}`,
    STORY_REPLY_FAILURE: '이 이야기에는 답장할 수 없습니다.',
    MY_STORY_EMPTY_MESSAGE: '첫 번째 이야기를 공유해 보세요!',
    REPLY_USE_COIN_TITLE: '메시지 보내기',
    REPLY_USE_COIN_MESSAGE: '1코인을 사용하여 메시지를 바로 들을 수 있게 하시겠어요?',
    REPLY_USE_FREE_COIN_MESSAGE: '무료 코인을 사용하여 메시지를 바로 들을 수 있게 하시겠어요?',
    // 메시지
    MESSAGE_USE_COIN_TITLE: '메시지 듣기',
    MESSAGE_USE_COIN_MESSAGE: '1코인을 사용하여 메시지를 확인하시겠습니까?',
    MESSAGE_USE_COIN_FAILURE_NOT_ENOUGH: '코인이 부족합니다.',
    // 로그인
    LOGIN_TITLE: '로그인하고 모든 기능을 사용하세요!',
    LOGIN_WITH_FACEBOOK: '페이스북으로 시작하기',
    LOGIN_WITH_GOOGLE: '구글 계정으로 시작하기',
    LOGIN_FAILURE_FACEBOOK: (message) => `페이스북 로그인에 실패했습니다.\n${message.replace('GraphQL error: ', '')}`,
    LOGIN_FAILURE_GOOGLE: (message) => `구글 로그인에 실패했습니다.\n${message.replace('GraphQL error: ', '')}`,
    LOGIN_FAILURE_GOOGLE_PLAY_SERVICE: '구글 로그인에 실패했습니다.\n구글 플레이 서비스 초기화에 실패했습니다.',
    // 계정
    LOGIN_AGREEMENT_MESSAGE: '로그인하시면 이용약관 및 개인정보처리방침에\n동의하는 것으로 간주합니다.',
    MY_STORIES: '나의 이야기',
    PROFILE_EDIT: '정보 관리',
    PROFILE_ACCOUNT: '계정',
    PROFILE_NAME: '닉네임',
    PROFILE_PHOTO_CHANGE_BUTTON: '프로필 사진 변경',
    PROFILE_PHOTO_CHANGE_FAILURE: (message) => `프로필 사진 변경에 실패했습니다.\n${message.replace('GraphQL error: ', '')}`,
    PROFILE_LOGOUT_BUTTON: '로그아웃',
    GENDER_SELECT_MODAL: '성별을 선택하세요',
    GENDER_MALE: '남성',
    GENDER_FEMALE: '여성',
    GENDER_NONE: '성별',
    // 설정
    SETTINGS_TITLE: '지원',
    SETTINGS_REPORT_PROBLEM: '건의 & 불편 신고',
    SETTINGS_REPORT_FAILURE_TITLE: '알림',
    SETTINGS_REPORT_FAILURE_MESSAGE: (message) => `메일 작성에 실패했습니다.\n${message.replace('GraphQL error: ', '')}`,
    SETTINGS_TERMS_BUTTON: '이용약관 및 개인정보처리방침',
    // 채팅
    CHATTING_EMPTY_MESSAGE: '이야기에 답변해\n새로운 대화를 시작해 보세요.',
    CHATTING_MESSAGE_COUNT: (count) => `메시지 ${withComma(count)}개`,
    MESSAGE_PLAY_FAILURE: (message) => `메시지 재생에 실패했습니다.\n${message.replace('GraphQL error: ', '')}`,
    // 코인
    COIN_DESCRIPTION: '코인을 사용하여 메시지를 듣거나,\n보낸 메시지를 코인 사용 없이 듣게 할 수 있습니다.',
    COIN_COUNT: (amount) => `${amount}코인`,
    COIN_CHARGE_BUTTON: '충전',
    COIN_DISCOUNT_RATE: (percent) => `${percent}% 할인!`,
    COIN_PRICE: (price) => `${withComma(price)}원`,
    COIN_REFERRAL: '친구 초대하기',
    COIN_CHARGE_TAB: '코인 충전',
    COIN_HISTORY_TAB: '사용 내역',
    COIN_PURCHASE_SUCCESS_TITLE: '구매 완료',
    COIN_PURCHASE_SUCCESS_MESSAGE: '코인을 구매했습니다.',
    COIN_RESTORE_BUTTON: '미완료 결제 재시도',
    COIN_RESTORE_MESSAGE: '이전 구매 내역을 복구합니다.',
    FREE_COIN_AVAILABLE: '무료 코인 1개 사용 가능!',
    FREE_COIN_TIME_LEFT: (minutes: string, seconds: string) => `다음 무료 코인까지 ${minutes}:${seconds}`,
    TRANSACTION_DATE_FORMAT: 'YYYY년 M월 D일 HH시',
    // 튜토리얼
    TUTORIAL_MAIN_TITLE: '환영합니다.',
    TUTORIAL_MAIN_DESCRIPTION: '센치는 글이 아닌 목소리로 대화하는\n익명 커뮤니티입니다.',
    TUTORIAL_MAIN_STEP_1: '재생 버튼을 눌러 다른 사람의\n이야기를 들을 수 있습니다.',
    TUTORIAL_MAIN_STEP_2: '위아래로 스크롤하거나, 버튼을 눌러\n다음 이야기로 이동할 수 있습니다.',
    TUTORIAL_MAIN_STEP_3: '마음에 드는 이야기에는\n답장을 보내 보세요.',
    TUTORIAL_AFTER_PLAY_TITLE: '잘 하셨어요!',
    TUTORIAL_AFTER_PLAY_DESCRIPTION: '이야기를 하나 들었으니,\n이번엔 내 목소리를 올려 볼까요?',
    TUTORIAL_AFTER_PLAY_STEP_1: '추가 버튼을 눌러 목소리를 녹음하고,\n새로운 이야기를 올릴 수 있습니다.',
    TUTORIAL_CREATE_STORY_TITLE: '새로운 이야기',
    TUTORIAL_CREATE_STORY_DESCRIPTION: '연애, 꿈, 인간관계, 성적, 일상 등\n어떤 주제라도 상관 없어요.\n지금 하고 있는 그 생각을 말해 주세요.',
    TUTORIAL_CREATE_STORY_STEP_1: '앨범 버튼을 눌러\n배경 사진을 변경할 수 있습니다.',
    TUTORIAL_CREATE_STORY_STEP_2: '태그를 달아 이야기를 구분해 주세요.\n텍스트를 입력하고 엔터를 누르면 된답니다.',
    TUTORIAL_PROFILE_TITLE: '프로필 편집',
    TUTORIAL_PROFILE_DESCRIPTION: '\'정보 관리\' 버튼을 눌러\n프로필을 편집할 수 있습니다.',
    TUTORIAL_PROFILE_STEP_1: '프로필 사진을 설정해\n다른 사람과 쉽게 구분되어 보세요.',
    TUTORIAL_PROFILE_STEP_2: '성별을 선택하면\n같은 성별의 이야기를 덜 듣게 됩니다.',
  },
  en: {
    // 일반
    COMMON_APP_NAME: 'Senti',
    COMMON_APP_DESCRIPTION: 'Anonymous community with your voice',
    COMMON_ERROR: 'Error',
    COMMON_LOADING: 'Now Loading..',
    COMMON_YES: 'Yes',
    COMMON_NO: 'No',
    COMMON_CONFIRM: 'Confirm',
    COMMON_CANCEL: 'Cancel',
    COMMON_SAVE: 'Save',
    COMMON_DELETE: 'Delete',
    COMMON_NOTICE: 'Notice',
    // 화면 이름
    SCREEN_CHATTING: 'Chatting',
    SCREEN_PROFILE: 'Profile',
    // 오류
    ERROR_VIEW_TITLE: 'Temporary Error',
    ERROR_VIEW_MESSAGE: (message) => `Try again by press Refresh button.\nIf the error occurs constantly, please report us.\n\n${message.replace('GraphQL error: ', '')}`,
    ERROR_VIEW_REFRESH_BUTTON: 'Refresh',
    ERROR_AUTH_REQUIRED: 'Please Sign in.',
    // 검색
    SEARCH_PLACEHOLDER: 'Search',
    TAG_STORY_COUNT: (count) => `${withComma(count)} ${count > 1 ? 'stories' : 'story'}`,
    TAG_SUBSCRIBE_BUTTON: 'Subscribe',
    SUBSCRIBE_TAG_FAILURE: (message) => `Failed to subscribe tag.\n${message.replace('GraphQL error: ', '')}`,
    // 이야기
    COVER_MODAL: 'Cover Images',
    ADD_TAG_PLACEHOLDER: 'Add #hashtag here',
    RECORDER_RECORD_BUTTON: 'Tap to record',
    RECORDER_PLAY_BUTTON: 'Tap to play',
    RECORD_FAILURE_TOO_SHORT: 'Record more than 3 seconds',
    RECORD_FAILURE_REQUEST_PERMISSION: 'To record your voice, give Senti access to the microphone.',
    RECORD_FAILURE: (message: string) => `Failed to record. Please try again.\n${message.replace('GraphQL error: ', '')}`,
    RECORD_UPLOAD_FAILURE_NOT_FOUND: 'Record file does not exists.',
    RECORD_UPLOAD_FAILURE: (message) => `Failed to upload your story.\n${message.replace('GraphQL error: ', '')}`,
    CREATE_STORY_WITHOUT_TAGS: 'No tags exists.\nDo you want to add any?',
    STORY_USER_ACTIONS: 'This user..',
    STORY_USER_ACTION_REPORT: 'Report',
    STORY_USER_ACTION_FAILURE: (message) => `Failed to report user.\n${message.replace('GraphQL error: ', '')}`,
    STORY_DELETE_ALERT: 'Would you like to delete this item?',
    STORY_DELETE_FAILURE: (message) => `Failed to delete story.\n${message.replace('GraphQL error: ', '')}`,
    STORY_REPLY_FAILURE: 'Can\'t reply to this message.',
    MY_STORY_EMPTY_MESSAGE: 'Share your first story!',
    REPLY_USE_COIN_TITLE: 'Send Message',
    REPLY_USE_COIN_MESSAGE: 'Do you want to recipient to listen this message immediately by using 1 coin?',
    REPLY_USE_FREE_COIN_MESSAGE: 'Do you want to recipient to listen this message immediately by using free coin?',
    // 메시지
    MESSAGE_USE_COIN_TITLE: 'Load Message',
    MESSAGE_USE_COIN_MESSAGE: 'Do you want to load this message using 1 coin?',
    MESSAGE_USE_COIN_FAILURE_NOT_ENOUGH: 'Not enough coin',
    // 로그인
    LOGIN_TITLE: 'Sign in to use all features!',
    LOGIN_WITH_FACEBOOK: 'Sign in with Facebook',
    LOGIN_WITH_GOOGLE: 'Sign in with Google',
    LOGIN_AGREEMENT_MESSAGE: 'By logging in, you agree to our\nTerms of Service and Privacy Policy.',
    LOGIN_FAILURE_FACEBOOK: (message) => `Google login failed.\n${message.replace('GraphQL error: ', '')}`,
    LOGIN_FAILURE_GOOGLE: (message) => `Google login failed.\n${message.replace('GraphQL error: ', '')}`,
    LOGIN_FAILURE_GOOGLE_PLAY_SERVICE: 'Failed to login. There was a problem communicating with Google Play.',
    // 계정
    MY_STORIES: 'My Stories',
    PROFILE_EDIT: 'Edit Profile',
    PROFILE_ACCOUNT: 'Account',
    PROFILE_NAME: 'Nickname',
    PROFILE_PHOTO_CHANGE_BUTTON: 'Change Profile Photo',
    PROFILE_PHOTO_CHANGE_FAILURE: (message) => `Failed to change profile photo.\n${message.replace('GraphQL error: ', '')}`,
    PROFILE_LOGOUT_BUTTON: 'Log Out',
    GENDER_SELECT_MODAL: 'Select your gender',
    GENDER_MALE: 'Male',
    GENDER_FEMALE: 'Female',
    GENDER_NONE: 'Gender',
    // 설정
    SETTINGS_TITLE: 'Support',
    SETTINGS_REPORT_PROBLEM: 'Report a problem',
    SETTINGS_REPORT_FAILURE_TITLE: 'Report',
    SETTINGS_REPORT_FAILURE_MESSAGE: (message) => `Failed to report problem.\n${message.replace('GraphQL error: ', '')}`,
    SETTINGS_TERMS_BUTTON: 'Terms of Service / Privacy Policy',
    // 채팅
    CHATTING_EMPTY_MESSAGE: 'Start new chatting\nby respond to the story!',
    CHATTING_MESSAGE_COUNT: (count) => `${withComma(count)} message${count > 1 ? 's' : ''}`,
    MESSAGE_PLAY_FAILURE: (message) => `Failed to play message.\n${message.replace('GraphQL error: ', '')}`,
    // 코인
    COIN_DESCRIPTION: 'You can use coin to listen to the message.',
    COIN_COUNT: (amount) => `${amount} Coin${amount > 1 ? 's' : ''}`,
    COIN_CHARGE_BUTTON: 'Charge',
    COIN_DISCOUNT_RATE: (percent) => `${percent}% discount!`,
    COIN_PRICE: (price) => `USD ${withComma(price)}`,
    COIN_REFERRAL: 'Invite Friends',
    COIN_CHARGE_TAB: 'Charge',
    COIN_HISTORY_TAB: 'History',
    COIN_PURCHASE_SUCCESS_TITLE: 'Success',
    COIN_PURCHASE_SUCCESS_MESSAGE: 'Purchase completed successfully.',
    COIN_RESTORE_BUTTON: 'Retry Unsuccessful Purchases',
    COIN_RESTORE_MESSAGE: 'Restore your previous purchases.',
    FREE_COIN_AVAILABLE: 'Use 1 coin for free!',
    FREE_COIN_TIME_LEFT: (minutes: string, seconds: string) => `Free coin after: ${minutes}:${seconds}`,
    TRANSACTION_DATE_FORMAT: 'YYYY. MM. DD A h',
    // 튜토리얼
    TUTORIAL_MAIN_TITLE: 'Welcome!',
    TUTORIAL_MAIN_DESCRIPTION: '',
    TUTORIAL_MAIN_STEP_1: '',
    TUTORIAL_MAIN_STEP_2: '',
    TUTORIAL_MAIN_STEP_3: '',
    TUTORIAL_AFTER_PLAY_TITLE: 'Well done!',
    TUTORIAL_AFTER_PLAY_DESCRIPTION: '',
    TUTORIAL_AFTER_PLAY_STEP_1: '',
    TUTORIAL_CREATE_STORY_TITLE: 'New Story',
    TUTORIAL_CREATE_STORY_DESCRIPTION: '',
    TUTORIAL_CREATE_STORY_STEP_1: '',
    TUTORIAL_CREATE_STORY_STEP_2: '',
    TUTORIAL_PROFILE_TITLE: '',
    TUTORIAL_PROFILE_DESCRIPTION: '',
    TUTORIAL_PROFILE_STEP_1: '',
    TUTORIAL_PROFILE_STEP_2: '',
  },
};

export const LocalizedStrings = TRANSLATIONS[LANGUAGE] || TRANSLATIONS.en;
