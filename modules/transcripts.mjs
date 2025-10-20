const ENGLISH_FONT_FAMILY = "Kanit";
const KOREAN_FONT_FAMILY = "Gothic A1";

const ENGLISH_TRANSCRIPT = new Map([
    [".header > .menu a", ["About", "Projects", "Experience"]],
    [
        ".about__header > h1",
        "I’ll create reliable systems to empower your business",
    ],
    [
        ".about__facts p",
        [
            "Open for part-time",
            "Yongin-si, South Korea",
            "21 years old",
            "6 years of experience",
        ],
    ],
    [
        ".about__left-column > p",
        "I’m Cho Hyunwoo, an undergraduate Hanyang University student.<br /><br />I deliver scalable and performant software and data-driven solutions using proven web technologies and modern data science tools.",
    ],
    [".about__actions > button", "Download CV"],
    [".toolbox__header > .menu a", ["Web", "Data"]],
    [".projects > h1", "Projects"],
    [".experience > h1", "Experience"],
    [
        ".experience__title > h2",
        [
            "Student Community Project",
            "Hackseoul Competition - Coupang Tower",
            "RED SOFT",
            "KORTROS",
        ],
    ],
    [
        ".experience__title > p",
        [
            "Contributor, 08/2024 - 02/2025, 06/2025 - present",
            "Participant, 24/08/2024 - 25/08/2024",
            "Intern Software Developer, 07/2023 - 08/2023",
            "Intern Data Analyst, 05/2022 - 06/2022",
        ],
    ],
    [
        ".experience__content",
        [
            "⏺ Developed and co-designed Django REST backend for AI-powered study assistant for Discord bot and Website<br /><br />⏺ Extended a React Dashboard decease detection service with token-based authentication, image files management, and decease detection flow<br /><br />⏺ Drone video frames segmentation and annotation of leaves",
            "⏺ Designed and developed FastAPI service and MySQL database to connect, developed by my teammates, Gemini-powered Coupang Clothes Search Engine to the Web UI",
            "⏺ Designed and developed the service manager for RED OS using SystemD DBus API and Gtk 4",
            "⏺ Scripted and optimized Google BigQuery SQL queries for analysts by 30%<br /><br />⏺ Analyzed and presented potential alternative Business Intelligence tools from Russian developers<br /><br />⏺ Collected and prepared data for Conversion Rate prediction model",
        ],
    ],
]);

const KOREAN_TRANSCRIPT = new Map([
    [".header > .menu a", ["소개", "프로젝트", "경력"]],
    [
        ".about__header > h1",
        "신뢰할 수 있는 시스템을 구축하여 귀사의 비즈니스를 지원합니다",
    ],
    [".about__facts p", ["파트타임 가능", "경기도 용인시", "21세", "6년 경력"]],
    [
        ".about__left-column > p",
        "저는 조현우입니다. 한양대학교 학부생입니다.<br /><br />검증된 웹 기술과 최신 데이터 과학 도구를 활용하여 확장 가능하고 성능이 우수한 소프트웨어 및 데이터 기반 솔루션을 제공합니다.",
    ],
    [".about__actions > button", "이력서 다운로드"],
    [".toolbox__header > .menu a", ["웹", "데이터"]],
    [".projects > h1", "프로젝트"],
    [".experience > h1", "경력"],
    [
        ".experience__title > h2",
        [
            "학생 커뮤니티 프로젝트",
            "핵서울 대회 - 쿠팡타워",
            "레드소프트",
            "코트로스",
        ],
    ],
    [
        ".experience__title > p",
        [
            "기여자, 2024년 8월 - 2025년 2월, 2025년 6월 - 현재",
            "참가자, 2024년 8월 24일 - 2024년 8월 25일",
            "소프트웨어 개발 인턴, 2023년 7월 - 2023년 8월",
            "데이터 분석 인턴, 2022년 5월 - 2022년 6월",
        ],
    ],
    [
        ".experience__content",
        [
            "⏺ Discord 봇 및 웹사이트용 AI 학습 도우미를 위한 Django REST 백엔드 개발 및 공동 설계<br /><br />⏺ React 대시보드 기반 질병 감지 서비스에 토큰 인증, 이미지 파일 관리, 질병 감지 플로우 확장<br /><br />⏺ 드론 영상의 잎사귀 분할 및 주석 작업",
            "⏺ FastAPI 서비스 및 MySQL 데이터베이스 설계·구현, Gemini 기반 쿠팡 의류 검색 엔진을 웹 UI와 연결 (팀원 개발분 포함)",
            "⏺ SystemD DBus API와 Gtk 4로 RED OS 서비스 매니저 설계 및 개발",
            "⏺ Google BigQuery SQL 쿼리 자동화 및 분석가용 최적화(30%)<br /><br />⏺ 러시아 개발자 비즈니스 인텔리전스 대체 솔루션 분석·제안<br /><br />⏺ 전환율 예측 모델을 위한 데이터 수집 및 사전 처리",
        ],
    ],
]);

/**
 * Sets up the language settings based on the provided language code.
 * @param {string} language - The language code to set up.
 */
function setup(language) {
    let transcript = null;
    let fontFamily = null;

    if (language === "en") {
        transcript = ENGLISH_TRANSCRIPT;
        fontFamily = ENGLISH_FONT_FAMILY;
    } else if (language === "ko") {
        transcript = KOREAN_TRANSCRIPT;
        fontFamily = KOREAN_FONT_FAMILY;
    } else {
        throw Error(
            `Invalid language code: ${language}. Choose among 'en' or 'ko'.`,
        );
    }

    for (let [selector, paragraph] of transcript) {
        if (paragraph instanceof Array) {
            $(selector)
                .get()
                .forEach((element, i) => {
                    element.innerHTML = paragraph[i];
                });
        } else if (typeof paragraph === "string") {
            $(selector).get(0).innerHTML = paragraph;
        } else {
            throw Error(
                `Invalid paragraph type: ${typeof paragraph}. Must be array or string`,
            );
        }
    }

    document.body.style.fontFamily = `${fontFamily}, sans-serif`;
}

export {
    ENGLISH_FONT_FAMILY,
    KOREAN_FONT_FAMILY,
    ENGLISH_TRANSCRIPT,
    KOREAN_TRANSCRIPT,
    setup,
};
