// Fonts by langugae
export const ENGLISH_FONT_FAMILY = "Kanit";
export const KOREAN_FONT_FAMILY = "Gothic A1";

// Time-related constants
export const MY_BIRTH_DATE = new Date("2003-12-23T00:00:00");
export const CODING_START_DATE = new Date("2020-01-01T00:00:00");

// Transcripts
export const ENGLISH_TRANSCRIPT = new Map([
    [".main-header > .menu a", ["About", "Projects", "Experience"]],
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
    [".about__actions > button > a", "Download CV"],
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
        ".experience__section:nth-of-type(1) ul li p",
        [
            "Developed and co-designed Django REST backend for AI-powered study assistant for Discord bot and Website",
            "Extended a React Dashboard decease detection service with token-based authentication, image files management, and decease detection flow",
            "Drone video frames segmentation and annotation of leaves"
        ],
    ],
    [
        ".experience__section:nth-of-type(2) ul li p",
        [
            "Designed and developed FastAPI service and MySQL database to connect, developed by my teammates, Gemini-powered Coupang Clothes Search Engine to the Web UI"
        ],
    ],
    [
        ".experience__section:nth-of-type(3) ul li p",
        [
            "Designed and developed the service manager for RED OS using SystemD DBus API and Gtk 4"
        ],
    ],
    [
        ".experience__section:nth-of-type(4) ul li p",
        [
            "Scripted and optimized Google BigQuery SQL queries for analysts by 30%",
            "Analyzed and presented potential alternative Business Intelligence tools from Russian developers",
            "Collected and prepared data for Conversion Rate prediction model"
        ]
    ],
]);

export const KOREAN_TRANSCRIPT = new Map([
    ["[data-transcript-group=menu][data-transcript-item=about]", "소개"],
    ["[data-transcript-group=menu][data-transcript-item=projects]", "프로젝트"],
    ["[data-transcript-group=menu][data-transcript-item=experience]", "경력"],

    ["[data-transcript-group=main-header][data-transcript-item=headline]", "신뢰할 수 있는 시스템을 구축하여 귀사의 비즈니스를 지원합니다"],
    ["[data-transcript-group=main-header][data-transcript-item=paragraph]", "저는 조현우입니다. 한양대학교 학부생입니다.<br /><br />검증된 웹 기술과 최신 데이터 과학 도구를 활용하여 확장 가능하고 성능이 우수한 소프트웨어 및 데이터 기반 솔루션을 제공합니다."],
    ["[data-transcript-group=main-header][data-transcript-item=action]", "See Experience"],

    ["[data-transcript-group=facts][data-transcript-item=part-time]", "파트타임 가능"],
    ["[data-transcript-group=facts][data-transcript-item=location]", "경기도 용인시"],
    ["[data-transcript-group=facts][data-transcript-item=age]", "21세"],
    ["[data-transcript-group=facts][data-transcript-item=experience]", "6년 경력"],

    ["[data-transcript-group=projects-header][data-transcript-item=headline]", "프로젝트"],
    ["[data-transcript-group=experience-header][data-transcript-item=headline]", "경력"],

    ["[data-transcript-group=experiences][data-transcript-item=scp]", "학생 커뮤니티 프로젝트"],
    ["[data-transcript-group=experiences][data-transcript-item=scp-period]", "기여자, 2024년 8월 - 2025년 2월, 2025년 6월 - 현재"],
    ["[data-transcript-group=experiences][data-transcript-item=scp-paragraph-1]", "Discord 봇 및 웹사이트용 AI 학습 도우미를 위한 Django REST 백엔드 개발 및 공동 설계"],
    ["[data-transcript-group=experiences][data-transcript-item=scp-paragraph-2]", "React 대시보드 기반 질병 감지 서비스에 토큰 인증, 이미지 파일 관리, 질병 감지 플로우 확장"],
    ["[data-transcript-group=experiences][data-transcript-item=scp-paragraph-3]", "드론 영상의 잎사귀 분할 및 주석 작업"],

    ["[data-transcript-group=experiences][data-transcript-item=hcct]", "핵서울 대회 - 쿠팡타워"],
    ["[data-transcript-group=experiences][data-transcript-item=hcct-period]", "참가자, 2024년 8월 24일 - 2024년 8월 25일"],
    ["[data-transcript-group=experiences][data-transcript-item=hcct-paragraph-1]", "FastAPI 서비스 및 MySQL 데이터베이스 설계·구현, Gemini 기반 쿠팡 의류 검색 엔진을 웹 UI와 연결 (팀원 개발분 포함)"],

    ["[data-transcript-group=experiences][data-transcript-item=rs]", "레드소프트"],
    ["[data-transcript-group=experiences][data-transcript-item=rs-period]", "소프트웨어 개발 인턴, 2023년 7월 - 2023년 8월"],
    ["[data-transcript-group=experiences][data-transcript-item=rs-paragraph-1]", "SystemD DBus API와 Gtk 4로 RED OS 서비스 매니저 설계 및 개발"],

    ["[data-transcript-group=experiences][data-transcript-item=kortros]", "코트로스"],
    ["[data-transcript-group=experiences][data-transcript-item=kortros-period]", "데이터 분석 인턴, 2022년 5월 - 2022년 6월"],
    ["[data-transcript-group=experiences][data-transcript-item=kortros-paragraph-1]", "Google BigQuery SQL 쿼리 자동화 및 분석가용 최적화(30%)"],
    ["[data-transcript-group=experiences][data-transcript-item=kortros-paragraph-2]", "러시아 개발자 비즈니스 인텔리전스 대체 솔루션 분석·제안"],
    ["[data-transcript-group=experiences][data-transcript-item=kortros-paragraph-3]", "전환율 예측 모델을 위한 데이터 수집 및 사전 처리"],

    ["[data-transcript-group=experiences][data-transcript-item=action", "이력서 다운로드"],
]);

// Technologies
export const TECHNOLOGIES = [
    { title: "Django", iconName: "Django" },
    { title: "Git", iconName: "Git" },
    { title: "GCP", iconName: "GCP" },
    { title: "MySQL", iconName: "MySQL" },
    { title: "Docker", iconName: "Docker" },
    { title: "SQL", iconName: "SQL" },
    { title: "PyTorch", iconName: "PyTorch" },
    { title: "Sklearn", iconName: "Sklearn" },
    { title: "OpenCV", iconName: "OpenCV" },
    { title: "FastAPI", iconName: "FastAPI" },
    { title: "Python", iconName: "Python" },
    { title: "A/B test", iconName: "AB" },
];

// Projects
export const PROJECTS = [
    {
        imageUrl: "../public/images/placeholder-16-9.png",
        title: "Project 1",
        description: "Upcoming...",
        link: "http://localhost:8000/",
    },
    {
        imageUrl: "../public/images/placeholder-16-9.png",
        title: "Project 2",
        description: "Upcoming...",
        link: "http://localhost:8000/",
    },
    {
        imageUrl: "../public/images/placeholder-16-9.png",
        title: "Project 3",
        description: "Upcoming...",
        link: "http://localhost:8000/",
    },
    {
        imageUrl: "../public/images/placeholder-16-9.png",
        title: "Project 4",
        description: "Upcoming...",
        link: "http://localhost:8000/",
    },
];

