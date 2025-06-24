# 📝 IDBlock 프로젝트 블로그 게시글 작성 가이드

새로운 개발자가 이 프로젝트에서 블로그 게시글을 작성하고 관리하는 방법에 대한 완전한 가이드입니다.

## 📋 목차

1. [블로그 시스템 개요](#블로그-시스템-개요)
2. [프로젝트 구조](#프로젝트-구조)
3. [새 게시글 작성 방법](#새-게시글-작성-방법)
4. [게시글 메타데이터 작성](#게시글-메타데이터-작성)
5. [다국어 지원](#다국어-지원)
6. [이미지 및 미디어 관리](#이미지-및-미디어-관리)
7. [인덱스 파일 업데이트](#인덱스-파일-업데이트)
8. [개발 환경 실행](#개발-환경-실행)
9. [문제 해결](#문제-해결)

---

## 🔍 블로그 시스템 개요

이 프로젝트의 블로그는 다음과 같은 특징을 가지고 있습니다:

- **마크다운 기반**: 모든 게시글은 `.md` 파일로 작성됩니다
- **다국어 지원**: 한국어(`kor`), 영어(`eng`), 일본어(`jpn`), 베트남어(`vnm`) 지원
- **자동 인덱싱**: 스크립트를 통해 자동으로 게시글 목록이 생성됩니다
- **카테고리 필터링**: `insight`, `news`, `event`, `development`, `design` 등의 카테고리 지원

---

## 📁 프로젝트 구조

```
idblock.co/
├── public/
│   ├── posts/                    # 모든 블로그 게시글 저장소
│   │   ├── post-slug/           # 게시글 폴더 (슬러그명)
│   │   │   ├── kor.md          # 한국어 버전
│   │   │   ├── eng.md          # 영어 버전
│   │   │   ├── jpn.md          # 일본어 버전
│   │   │   └── vnm.md          # 베트남어 버전
│   │   └── ...
│   └── thumbnail/               # 썸네일 이미지 저장소
├── src/
│   ├── components/blog/         # 블로그 관련 컴포넌트
│   ├── pages/blog/             # 블로그 페이지 컴포넌트
│   ├── utils/blog/             # 블로그 유틸리티
│   │   ├── generatePostIndex.cjs  # 게시글 인덱스 생성 스크립트
│   │   ├── postsIndex.kor.js     # 한국어 게시글 인덱스
│   │   ├── postsIndex.eng.js     # 영어 게시글 인덱스
│   │   ├── postsIndex.jpn.js     # 일본어 게시글 인덱스
│   │   └── postsIndex.vnm.js     # 베트남어 게시글 인덱스
│   └── locales/blog/           # 블로그 관련 번역 파일
└── package.json                # 프로젝트 설정 및 스크립트
```

---

## ✏️ 새 게시글 작성 방법

### 1단계: 게시글 폴더 생성

`public/posts/` 디렉토리에 새로운 폴더를 만듭니다.

```bash
# 예시: 새로운 기능 발표 게시글
mkdir public/posts/new-feature-announcement-2025
```

**⚠️ 중요한 명명 규칙:**

- 폴더명은 게시글의 슬러그(slug)가 됩니다
- 영문 소문자, 숫자, 하이픈(`-`)만 사용
- 공백은 하이픈으로 대체
- URL에 그대로 사용되므로 SEO를 고려한 명명

### 2단계: 언어별 마크다운 파일 생성

각 언어별로 마크다운 파일을 생성합니다:

```bash
cd public/posts/new-feature-announcement-2025
touch kor.md eng.md jpn.md vnm.md
```

### 3단계: 마크다운 파일 작성

각 언어 파일에 다음 구조로 내용을 작성합니다:

```markdown
---
slug: 'new-feature-announcement-2025'
title: '새로운 기능 발표: IDBlock 2.0 출시'
description: 'IDBlock 2.0의 주요 개선사항과 새로운 기능들을 소개합니다.'
date: '2025-01-15'
filter: 'news'
thumbnail: 'https://example.com/thumbnail.jpg'
---

# 게시글 제목

여기에 게시글 내용을 마크다운으로 작성합니다.

## 부제목

- 리스트 아이템 1
- 리스트 아이템 2

![이미지 설명](이미지-URL)

[링크 텍스트](https://example.com)
```

---

## 📊 게시글 메타데이터 작성

마크다운 파일 상단의 Front Matter에는 다음 메타데이터가 필요합니다:

### 필수 필드

| 필드          | 설명                               | 예시                                    |
| ------------- | ---------------------------------- | --------------------------------------- |
| `slug`        | 게시글 고유 식별자 (폴더명과 동일) | `"new-feature-2025"`                    |
| `title`       | 게시글 제목                        | `"새로운 기능 소개"`                    |
| `description` | 게시글 요약 (SEO 및 미리보기)      | `"IDBlock의 새로운 기능을 소개합니다."` |
| `date`        | 게시 날짜 (YYYY-MM-DD 형식)        | `"2025-01-15"`                          |
| `filter`      | 카테고리                           | `"news"`                                |
| `thumbnail`   | 썸네일 이미지 URL                  | `"https://example.com/image.jpg"`       |

### 카테고리 종류 (`filter`)

- `insight`: 인사이트, 분석글
- `news`: 뉴스, 공지사항
- `event`: 이벤트, 행사 관련
- `development`: 개발 관련
- `design`: 디자인 관련

### 메타데이터 작성 예시

```yaml
---
slug: 'global-expansion-2025'
title: 'CrossHub 글로벌 확장 소식'
description:
  'CrossHub가 아시아 시장으로 확장하며 새로운 도약을 시작합니다. 주요 파트너십과 향후 계획을
  소개합니다.'
date: '2025-01-15'
filter: 'news'
thumbnail: 'https://media.licdn.com/dms/image/v2/D4E22AQG...'
---
```

---

## 🌐 다국어 지원

### 언어별 파일 구조

각 게시글은 4개 언어로 작성해야 합니다:

- `kor.md`: 한국어 (기본)
- `eng.md`: 영어
- `jpn.md`: 일본어
- `vnm.md`: 베트남어

### 번역 가이드라인

1. **메타데이터 번역**: `title`과 `description`은 각 언어에 맞게 번역
2. **슬러그 통일**: 모든 언어 파일에서 `slug`는 동일하게 유지
3. **날짜 형식**: `date` 필드는 모든 언어에서 동일한 형식 사용
4. **이미지 URL**: 가능한 한 동일한 이미지 사용, 필요시 언어별 이미지 제공

### 언어별 작성 예시

**kor.md:**

```yaml
---
slug: 'partnership-announcement-2025'
title: '새로운 파트너십 체결 발표'
description: 'CrossHub가 글로벌 보안 기업 Thales와 전략적 파트너십을 체결했습니다.'
date: '2025-01-10'
filter: 'news'
thumbnail: '/thumbnail/partnership-2025.jpg'
---
```

**eng.md:**

```yaml
---
slug: 'partnership-announcement-2025'
title: 'New Partnership Announcement'
description: 'CrossHub has formed a strategic partnership with global security company Thales.'
date: '2025-01-10'
filter: 'news'
thumbnail: '/thumbnail/partnership-2025.jpg'
---
```

---

## 🖼️ 이미지 및 미디어 관리

### 썸네일 이미지

1. **저장 위치**: `public/thumbnail/` 디렉토리
2. **명명 규칙**: `{게시글-슬러그}-{언어코드}.png` (선택사항)
3. **권장 크기**: 1200x630px (소셜 미디어 최적화)
4. **지원 형식**: JPG, PNG, WebP

### 본문 이미지

1. **외부 이미지**: LinkedIn, YouTube 등의 직접 URL 사용 가능
2. **로컬 이미지**: `public/assets/` 디렉토리에 저장 후 상대경로 사용

### 동영상 임베드

YouTube 동영상은 자동으로 임베드됩니다:

```markdown
![동영상 제목](https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg)
```

---

## 🔄 인덱스 파일 업데이트

게시글을 작성한 후에는 인덱스 파일을 업데이트해야 합니다.

### 자동 업데이트 (권장)

```bash
npm run build:posts
```

이 명령어는 다음 작업을 수행합니다:

1. `public/posts/` 디렉토리의 모든 게시글을 스캔
2. 각 언어별로 메타데이터 추출
3. 날짜순으로 정렬
4. `src/utils/blog/postsIndex.{언어}.js` 파일들을 자동 생성

### 수동 확인

자동 생성된 인덱스 파일들을 확인하여 올바르게 생성되었는지 검토:

- `src/utils/blog/postsIndex.kor.js`
- `src/utils/blog/postsIndex.eng.js`
- `src/utils/blog/postsIndex.jpn.js`
- `src/utils/blog/postsIndex.vnm.js`

---

## 🚀 개발 환경 실행

### 새 게시글 작성 후 개발 서버 실행

```bash
# 1. 인덱스 파일 업데이트
npm run build:posts

# 2. 개발 서버 실행 (인덱스 업데이트 포함)
npm run dev
```

### 실시간 확인

1. 브라우저에서 `http://localhost:5173/blog` 접속
2. 새로 작성한 게시글이 목록에 나타나는지 확인
3. 게시글 클릭하여 상세 페이지 정상 작동 확인
4. 언어 전환하여 모든 언어 버전 확인

---

## 🔧 문제 해결

### 자주 발생하는 문제들

#### 1. 게시글이 목록에 나타나지 않는 경우

**원인과 해결책:**

- **인덱스 업데이트 누락**: `npm run build:posts` 실행
- **메타데이터 오류**: Front Matter 형식 확인
- **파일명 오류**: 언어 코드 확인 (`kor.md`, `eng.md` 등)

#### 2. 썸네일 이미지가 표시되지 않는 경우

**원인과 해결책:**

- **URL 오류**: 이미지 URL이 접근 가능한지 확인
- **CORS 문제**: 외부 이미지의 경우 CORS 정책 확인
- **상대경로 오류**: `/thumbnail/` 경로 확인

#### 3. 마크다운 렌더링 오류

**원인과 해결책:**

- **특수문자**: 마크다운 특수문자는 이스케이프 처리
- **이미지 태그**: HTML 이미지 태그보다는 마크다운 문법 사용 권장
- **링크 오류**: URL 형식 확인

#### 4. 날짜 형식 오류

**올바른 형식:** `"2025-01-15"` (YYYY-MM-DD)  
**잘못된 형식:** `"2025/01/15"`, `"15-01-2025"` 등

### 디버깅 도구

#### 인덱스 생성 로그 확인

```bash
node src/utils/blog/generatePostIndex.cjs
```

#### 특정 게시글 메타데이터 확인

```javascript
const matter = require('gray-matter');
const fs = require('fs');

const content = fs.readFileSync('public/posts/your-post/kor.md', 'utf-8');
const { data } = matter(content);
console.log(data);
```

---

## 📝 체크리스트

새 게시글 작성 시 다음 체크리스트를 활용하세요:

### 작성 전 준비

- [ ] 게시글 주제와 카테고리 결정
- [ ] 슬러그명 결정 (URL에 사용될 이름)
- [ ] 썸네일 이미지 준비

### 파일 생성

- [ ] `public/posts/{슬러그}/` 폴더 생성
- [ ] `kor.md` 파일 생성 및 작성
- [ ] `eng.md` 파일 생성 및 작성
- [ ] `jpn.md` 파일 생성 및 작성
- [ ] `vnm.md` 파일 생성 및 작성

### 메타데이터 확인

- [ ] 모든 필수 필드 작성 확인
- [ ] 날짜 형식 확인 (YYYY-MM-DD)
- [ ] 카테고리 올바른지 확인
- [ ] 썸네일 URL 접근 가능한지 확인

### 테스트

- [ ] `npm run build:posts` 실행
- [ ] 개발 서버에서 게시글 목록 확인
- [ ] 모든 언어 버전 정상 작동 확인
- [ ] 이미지 및 링크 정상 작동 확인

### 배포 전 최종 확인

- [ ] 오타 및 문법 검토
- [ ] 이미지 최적화 확인
- [ ] SEO 메타데이터 최적화 확인

---

## 🆘 추가 도움이 필요한 경우

1. **기존 게시글 참고**: `public/posts/` 디렉토리의 기존 게시글들을 참고
2. **컴포넌트 확인**: `src/components/blog/` 디렉토리의 관련 컴포넌트들 확인
3. **스타일링**: `src/style/blog/` 디렉토리의 스타일 파일들 확인

이 가이드를 따라하면 새로운 개발자도 쉽게 블로그 게시글을 작성하고 관리할 수 있습니다. 추가 질문이나
문제가 있을 경우 기존 코드와 이 가이드를 참고하여 해결하시기 바랍니다.
