# 📊 IDBlock.co 프로젝트

## 🎯 프로젝트 개요

**IDBlock.co**는 React + Vite 기반의 다국어 지원 웹사이트로, **크로스허브(CrossHub)**라는 보안 및
핀테크 솔루션을 홍보하는 기업 웹사이트입니다.

### 주요 특징

- **다국어 지원**: 한국어, 영어, 일본어, 베트남어 (4개국 언어)
- **모던 웹 기술**: React 19 + Vite 6 + Redux Toolkit
- **블로그 시스템**: 마크다운 기반 다국어 블로그
- **반응형 디자인**: 모바일/태블릿/데스크톱 최적화

---

## 🏗️ 기술 스택 및 아키텍처

### 프론트엔드 기술 스택

```json
핵심 기술:
- React 19.0.0 (최신 버전)
- Vite 6.2.0 (번들러)
- React Router DOM 7.5.0 (라우팅)
- Redux Toolkit (상태 관리)

UI/UX 라이브러리:
- GSAP (애니메이션)
- AOS (스크롤 애니메이션)
- React Scroll (부드러운 스크롤)

블로그 관련:
- React Markdown (마크다운 렌더링)
- Gray Matter (Front Matter 파싱)
- Shiki (코드 하이라이팅)
- Prism.js (추가 코드 하이라이팅)

기타:
- Google Maps API (@vis.gl/react-google-maps)
- React Calendar (달력 컴포넌트)
- Date-fns (날짜 처리)
```

### 아키텍처 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트들
│   ├── home/           # 홈페이지 섹션들
│   ├── about/          # 회사 소개 컴포넌트들
│   ├── blog/           # 블로그 관련 컴포넌트들
│   ├── careers/        # 채용 페이지 컴포넌트들
│   ├── developer/      # 개발자 센터 컴포넌트들
│   └── common/         # 공통 컴포넌트들
├── pages/              # 페이지 컴포넌트들
├── layout/             # 레이아웃 컴포넌트들
├── contexts/           # React Context
├── hooks/              # 커스텀 훅
├── store/              # Redux 스토어
├── locales/            # 다국어 번역 파일들
├── utils/              # 유틸리티 함수들
└── style/              # CSS 스타일 파일들
```

---

## 📱 주요 기능 및 페이지

### 1. 홈페이지 (`/`)

**주요 컴포넌트:**

- `HomeMain`: 메인 히어로 섹션
- `HomeQuestion` / `HomeQuestionGlobal`: 언어별 질문 섹션
- `HomeFeature`: 주요 기능 소개
- `HomeStep`: 이용 단계 안내
- `HomePatent`: 특허 정보
- `HomePartner`: 파트너사 소개

### 2. 회사 소개 (`/about`)

**주요 컴포넌트:**

- `AboutMain`: 회사 개요
- `AboutGoal`: 목표 및 비전
- `AboutHistory`: 회사 연혁
- `AboutNews`: 보도자료
- `AboutMap`: 오시는 길 (Google Maps 연동)
- `AboutContact`: 연락처 정보

### 3. 블로그 시스템 (`/blog`)

**특징:**

- 마크다운 기반 콘텐츠 관리
- 4개 언어 자동 지원
- 카테고리 필터링 (insight, news, event, development, design)
- 자동 인덱스 생성
- 코드 하이라이팅 지원
- PDF 및 동영상 임베드 지원

**관리 도구:**

```bash
npm run blog:create        # 대화형 게시글 생성
npm run blog:create:files  # 준비된 파일로 게시글 생성
npm run blog:list          # 게시글 목록 보기
npm run blog:edit          # 게시글 편집
npm run blog:delete        # 게시글 삭제
```

### 4. 개발자 센터 (`/devcenter`, `/dev`)

**주요 기능:**

- API 문서 및 가이드
- 개발자 대시보드 (`/dev/dashboard`)
- API 관리 (`/dev/dashboard/api`)
- 결제 관리 (`/dev/dashboard/payment`)
- 인증 시스템

### 5. 채용 페이지 (`/careers`)

**주요 컴포넌트:**

- `CareersIntro`: 채용 소개
- `CareersCulture`: 기업 문화
- `CareersHiringProcess`: 채용 프로세스
- `CareersOpenRoles`: 채용 공고
- 채용 상세 페이지 (`/careers/detail/:careerId`)

---

## 🌐 다국어 지원 시스템

### 언어 관리

```javascript
지원 언어:
- KOR: 한국어 (기본)
- ENG: 영어
- JPN: 일본어
- VNM: 베트남어

상태 관리: Redux (lanSlice)
저장소: sessionStorage
기본값: 영어 (ENG)
```

### 번역 시스템

```
src/locales/
├── kor.json, eng.json, jpn.json, vnm.json (공통)
├── home/        # 홈페이지 번역
├── about/       # 회사 소개 번역
├── blog/        # 블로그 번역
├── careers/     # 채용 번역
├── developer/   # 개발자 센터 번역
└── devcenter/   # 개발자 센터 번역
```

### 번역 사용법

```javascript
// 커스텀 훅 사용
const t = useT('componentName');
const text = t('key'); // 현재 언어에 맞는 번역 반환
```

---

## 📝 블로그 시스템 상세 분석

### 파일 구조

```
public/posts/
├── post-slug-2025/
│   ├── kor.md      # 한국어 버전
│   ├── eng.md      # 영어 버전
│   ├── jpn.md      # 일본어 버전
│   └── vnm.md      # 베트남어 버전
└── ...

src/utils/blog/
├── blogManager.cjs         # 블로그 관리 CLI 도구
├── blogTemplates.cjs       # 템플릿 시스템
├── generatePostIndex.cjs   # 인덱스 자동 생성
├── postsIndex.kor.js       # 한국어 게시글 인덱스
├── postsIndex.eng.js       # 영어 게시글 인덱스
├── postsIndex.jpn.js       # 일본어 게시글 인덱스
└── postsIndex.vnm.js       # 베트남어 게시글 인덱스
```

### 메타데이터 구조

```yaml
---
slug: 'post-slug-2025'
title: '게시글 제목'
description: '게시글 설명'
date: '2025-01-15'
filter: 'news' # insight, news, event, development, design
thumbnail: 'https://example.com/image.jpg'
---
```

### 고급 기능

- **자동 슬러그 생성**: 한글 제목 → 영문 URL 변환
- **템플릿 시스템**: 카테고리별 전문 템플릿 제공
- **유효성 검사**: Front Matter 자동 검증
- **인덱스 관리**: 게시글 목록 자동 업데이트

---

## 🎨 스타일링 시스템

### CSS 구조

```
src/style/
├── reset.css           # CSS 리셋
├── index.css           # 전역 스타일
├── home/               # 홈페이지 스타일
├── about/              # 회사 소개 스타일
├── blog/               # 블로그 스타일
├── careers/            # 채용 스타일
├── developer/          # 개발자 센터 스타일
├── common/             # 공통 컴포넌트 스타일
└── layout/             # 레이아웃 스타일
```

### 폰트 시스템

```css
.font-english: 영어 전용 폰트
.font-korea: 한국어/다국어 폰트
```

---

## 🔧 개발 도구 및 설정

### 주요 스크립트

```bash
npm run dev              # 개발 서버 실행 (블로그 인덱스 포함)
npm run build           # 프로덕션 빌드
npm run preview         # 빌드 미리보기
npm run lint            # ESLint 검사
npm run build:posts     # 블로그 인덱스 생성

# 블로그 관리
npm run blog:create     # 게시글 생성
npm run blog:list       # 게시글 목록
npm run blog:edit       # 게시글 편집
npm run blog:delete     # 게시글 삭제
```

### 개발 환경 설정

- **ESLint**: 코드 품질 관리
- **Prettier**: 코드 포맷팅
- **Vite**: 빠른 개발 서버 및 번들링
- **Path Alias**: `@/*` → `src/*` 매핑

---

## 🚀 배포 및 운영

### 에셋 관리

```
public/
├── assets/             # 정적 자산
│   ├── home/          # 홈페이지 이미지
│   ├── about/         # 회사 소개 이미지
│   ├── blog/          # 블로그 이미지
│   └── ...
├── posts/             # 블로그 포스트
└── thumbnail/         # 썸네일 이미지
```

### SEO 최적화

- 메타데이터 자동 생성
- 다국어 SEO 지원
- 구조화된 데이터
- 소셜 미디어 최적화

---

## 💡 주요 혁신 사항

### 1. 고도화된 블로그 CLI 도구

- **2가지 생성 방법**: 대화형 vs 파일 기반
- **자동 번역 준비**: 4개 언어 템플릿 자동 생성
- **슬러그 자동 생성**: 한글 → 영문 변환 알고리즘

### 2. 완전 자동화된 다국어 시스템

- **컨텍스트 기반 번역**: 페이지별 번역 네임스페이스
- **실시간 언어 전환**: 새로고침 없는 언어 변경
- **일관된 UX**: 모든 언어에서 동일한 사용자 경험

### 3. 개발자 친화적 구조

- **컴포넌트 기반 설계**: 재사용성 극대화
- **타입 안전성**: JSConfig를 통한 경로 매핑
- **개발 효율성**: 핫 리로드 및 자동 인덱싱

---

## 🎯 결론 및 요약

**IDBlock.co**는 현대적인 웹 기술을 활용한 **기업용 다국어 웹사이트**로, 다음과 같은 핵심 특징을
가집니다:

### 🏆 핵심 강점

1. **완전한 다국어 지원**: 4개국 언어 완전 지원
2. **고도화된 블로그 시스템**: CLI 도구를 통한 효율적 콘텐츠 관리
3. **모던 아키텍처**: React 19 + Vite 6 + Redux Toolkit 최신 기술 스택
4. **개발자 친화적**: 자동화된 도구와 명확한 구조

### 📊 프로젝트 규모

- **총 파일 수**: 200+ 개 컴포넌트 및 유틸리티
- **언어 지원**: 4개국 (한국어, 영어, 일본어, 베트남어)
- **페이지 구성**: 7개 주요 섹션 (홈, 회사소개, 블로그, 채용, 개발자센터 등)
- **블로그 포스트**: 40+ 개 다국어 게시글

이 프로젝트는 **기업 웹사이트의 모범 사례**로, 다국어 지원이 필요한 글로벌 기업에게 적합한 구조와
기능을 제공합니다.

---

## 📚 추가 자료

자세한 블로그 관리 방법은 다음 문서들을 참고하세요:

- [BLOG_MANAGER_README.md](./BLOG_MANAGER_README.md) - 블로그 매니저 사용 가이드
- [BLOG_POSTING_GUIDE.md](./BLOG_POSTING_GUIDE.md) - 블로그 게시글 작성 가이드
