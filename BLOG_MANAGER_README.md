# 🚀 IDBlock 블로그 매니저 사용 가이드

IDBlock 프로젝트의 블로그 게시글을 쉽게 생성하고 관리할 수 있는 CLI 도구입니다.

## 📋 목차

1. [개요](#개요)
2. [주요 기능](#주요-기능)
3. [설치 및 설정](#설치-및-설정)
4. [사용법](#사용법)
5. [게시글 생성 방법](#게시글-생성-방법)
6. [카테고리 및 템플릿](#카테고리-및-템플릿)
7. [파일 구조](#파일-구조)
8. [문제 해결](#문제-해결)

---

## 🎯 개요

IDBlock 블로그 매니저는 프론트엔드 지식 없이도 쉽게 블로그 게시글을 작성할 수 있는 CLI 도구입니다.
4개 언어(한국어, 영어, 일본어, 베트남어)를 지원하며, 카테고리별 전문 템플릿을 제공합니다.

## ✨ 주요 기능

### 🔧 핵심 기능

- **2가지 생성 방법**: 대화형 생성 및 준비된 파일 적용
- **다국어 지원**: 한국어, 영어, 일본어, 베트남어 자동 생성
- **카테고리별 템플릿**: 뉴스, 인사이트, 이벤트, 개발, 디자인 전문 템플릿
- **자동 슬러그 생성**: 한글 제목을 영문 URL로 자동 변환
- **파일 유효성 검사**: 마크다운 파일 메타데이터 검증
- **인덱스 자동 업데이트**: 게시글 목록 자동 생성 및 업데이트

### 📁 관리 기능

- **게시글 목록 보기**: 전체 게시글 목록 및 메타데이터 확인
- **게시글 편집**: 시스템 편집기를 통한 직접 편집
- **게시글 삭제**: 안전한 게시글 삭제 기능
- **도움말**: 상세한 사용법 및 옵션 설명

---

## 📦 설치 및 설정

### 필요 조건

- Node.js 14.0.0 이상
- npm 또는 yarn 패키지 매니저

### 설치 확인

프로젝트 루트 디렉토리에서 다음 명령어로 설치 상태를 확인할 수 있습니다:

```bash
npm run blog:create help
```

---

## 🛠️ 사용법

### 기본 명령어

```bash
# 1. 대화형 게시글 생성
npm run blog:create

# 2. 준비된 파일로 게시글 생성
npm run blog:create:files

# 3. 게시글 목록 보기
npm run blog:list

# 4. 게시글 편집
npm run blog:edit

# 5. 게시글 삭제
npm run blog:delete
```

### 고급 명령어

```bash
# 직접 실행
node src/utils/blog/blogManager.cjs

# 특정 작업 바로 실행
node src/utils/blog/blogManager.cjs list
node src/utils/blog/blogManager.cjs edit
node src/utils/blog/blogManager.cjs delete
node src/utils/blog/blogManager.cjs create files
```

---

## 📝 게시글 생성 방법

### 방법 1: 대화형 게시글 생성

프론트엔드 지식이 없어도 쉽게 사용할 수 있는 단계별 가이드입니다.

```bash
npm run blog:create
```

**입력 단계:**

1. 게시글 제목 (한국어)
2. 게시글 설명 (한국어)
3. 카테고리 선택 (insight, news, event, development, design)
4. 템플릿 사용 여부 (y/n/list)
5. 썸네일 URL (선택사항)
6. 슬러그 (자동 생성)
7. 게시 날짜 (자동 생성)

**결과:**

- 4개 언어 파일 자동 생성
- 템플릿 적용 (선택시)
- 인덱스 자동 업데이트

### 방법 2: 준비된 파일로 게시글 생성 ⭐ 추천

사용자가 직접 4개 언어로 준비한 마크다운 파일들을 적용하는 방법입니다.

```bash
npm run blog:create:files
```

**사용 방법:**

1. **임시 폴더 생성**

   ```bash
   mkdir temp-blog-post
   cd temp-blog-post
   ```

2. **4개 언어 파일 준비**
   - `kor.md` (한국어)
   - `eng.md` (영어)
   - `jpn.md` (일본어)
   - `vnm.md` (베트남어)

3. **파일 형식 예시**

   ```markdown
   ---
   slug: 'my-awesome-post-2025'
   title: '멋진 게시글 제목'
   description: '이 게시글은 정말 멋진 내용을 담고 있습니다.'
   date: '2025-01-15'
   filter: 'news'
   thumbnail: 'https://example.com/thumbnail.jpg'
   ---

   # 게시글 제목

   여기에 게시글 내용을 작성합니다.

   ## 소제목

   - 리스트 아이템 1
   - 리스트 아이템 2
   ```

4. **블로그 매니저 실행**

   ```bash
   npm run blog:create:files
   ```

5. **폴더 경로 입력**
   ```
   준비된 파일들이 있는 폴더 경로를 입력하세요: ./temp-blog-post
   ```

**장점:**

- 더 정확한 번역 및 내용 제어
- 복잡한 마크다운 문법 사용 가능
- 언어별 맞춤형 콘텐츠 작성 가능
- 기존 콘텐츠 재활용 용이

**주의사항:**

- 모든 파일의 `slug`는 동일해야 함
- Front Matter 형식을 정확히 작성
- 필수 필드 누락 없이 작성

---

## 🏷️ 카테고리 및 템플릿

### 지원 카테고리

| 카테고리      | 설명              | 템플릿 포함 내용                                                      |
| ------------- | ----------------- | --------------------------------------------------------------------- |
| `news`        | 뉴스, 공지사항    | 주요 소식, 배경 및 의미, 향후 계획, 관련 링크                         |
| `insight`     | 인사이트, 분석글  | 핵심 인사이트, 데이터 분석, 트렌드 분석, 결론 및 시사점               |
| `event`       | 이벤트, 행사 관련 | 이벤트 개요, 주요 프로그램, 하이라이트, 현장 스케치, 참가 후기        |
| `development` | 개발 관련         | 개발 배경, 기술 스택, 주요 기능, 구현 세부사항, 테스트 결과           |
| `design`      | 디자인 관련       | 디자인 개요, 사용자 리서치, 디자인 컨셉, 비주얼 디자인, 사용성 테스트 |

### 템플릿 사용 옵션

- `y`: 선택한 카테고리의 전문 템플릿 사용
- `n`: 기본 템플릿 사용
- `list`: 사용 가능한 모든 템플릿 보기

---

## 📁 파일 구조

### 생성되는 파일 구조

```
public/posts/
├── your-post-slug-2025/
│   ├── kor.md          # 한국어 버전
│   ├── eng.md          # 영어 버전
│   ├── jpn.md          # 일본어 버전
│   └── vnm.md          # 베트남어 버전
└── another-post/
    ├── kor.md
    ├── eng.md
    ├── jpn.md
    └── vnm.md
```

### 메타데이터 구조

```yaml
---
slug: 'post-slug-2025'
title: '게시글 제목'
description: '게시글 설명'
date: '2025-01-15'
filter: 'news'
thumbnail: 'https://example.com/image.jpg'
---
```

### 자동 생성되는 인덱스 파일

```
src/utils/blog/
├── postsIndex.kor.js   # 한국어 게시글 인덱스
├── postsIndex.eng.js   # 영어 게시글 인덱스
├── postsIndex.jpn.js   # 일본어 게시글 인덱스
└── postsIndex.vnm.js   # 베트남어 게시글 인덱스
```

---

## 🔧 자동 슬러그 생성

한글 제목을 영문 URL로 자동 변환하는 고도화된 시스템입니다.

### 변환 규칙

1. **일반 단어 변환**
   - 새 → new
   - 소식 → news
   - 발표 → announcement
   - 개발 → development
   - 파트너십 → partnership

2. **음성학적 변환**
   - 가 → ga
   - 나 → na
   - 한글 → hangeul

3. **특수 처리**
   - 공백 → 하이픈(-)
   - 특수문자 제거
   - 연속 하이픈 정리

### 슬러그 예시

| 한글 제목            | 생성되는 슬러그                        |
| -------------------- | -------------------------------------- |
| "새로운 기능 발표"   | `new-feature-announcement-2025`        |
| "파트너십 체결 소식" | `partnership-news-2025`                |
| "개발자 채용 공고"   | `development-hiring-announcement-2025` |

---

## 🎨 사용 예시

### 예시 1: 뉴스 게시글 생성

```bash
npm run blog:create

# 입력 예시
1. 게시글 제목 (한국어): CrossHub 글로벌 확장 소식
2. 게시글 설명 (한국어): CrossHub가 아시아 시장으로 확장하며 새로운 도약을 시작합니다.
3. 카테고리: news
4. 템플릿 사용: y
5. 썸네일 URL: https://example.com/expansion-news.jpg
6. 슬러그: crosshub-global-expansion-news-2025
7. 게시 날짜: 2025-01-15
```

### 예시 2: 준비된 파일로 이벤트 게시글 생성

```bash
mkdir my-event-post
cd my-event-post

# 4개 언어 파일 작성
echo "---
slug: 'tech-conference-2025'
title: '테크 컨퍼런스 2025 참가 후기'
description: '혁신적인 기술들을 만나볼 수 있었던 테크 컨퍼런스 2025 참가 후기를 공유합니다.'
date: '2025-01-15'
filter: 'event'
thumbnail: 'https://example.com/conference.jpg'
---

# 테크 컨퍼런스 2025 참가 후기

이번 컨퍼런스에서 많은 것을 배웠습니다..." > kor.md

# 영어, 일본어, 베트남어 파일도 비슷하게 작성...

cd ..
npm run blog:create:files
# 폴더 경로 입력: ./my-event-post
```

---

## 📊 게시글 관리

### 게시글 목록 보기

```bash
npm run blog:list
```

**출력 예시:**

```
📝 블로그 게시글 목록
====================

1. CrossHub 글로벌 확장 소식
   📅 2025-01-15 | 🏷️ news | 🔗 crosshub-global-expansion-2025
   📝 CrossHub가 아시아 시장으로 확장하며 새로운 도약을 시작합니다...

2. 새로운 보안 기능 업데이트
   📅 2025-01-14 | 🏷️ development | 🔗 security-update-2025
   📝 사용자 보안 강화를 위한 새로운 기능들을 소개합니다...

총 43개의 게시글이 있습니다.
```

### 게시글 편집

```bash
npm run blog:edit
```

**편집 옵션:**

1. 시스템 기본 편집기로 열기
2. 폴더 경로만 확인하기

### 게시글 삭제

```bash
npm run blog:delete
```

**안전 장치:**

- 게시글 목록에서 선택
- 삭제 확인 프로세스
- 인덱스 자동 업데이트

---

## 🚀 개발 서버 연동

### 자동 실행 옵션

게시글 생성 완료 후 개발 서버를 자동으로 실행할 수 있습니다.

```bash
개발 서버를 실행하시겠습니까? (y/n): y
```

### 수동 실행

```bash
npm run dev
```

개발 서버는 다음 작업을 자동으로 수행합니다:

1. 게시글 인덱스 업데이트
2. Vite 개발 서버 실행
3. 브라우저에서 `http://localhost:5173/blog` 접속 가능

---

## 🔧 고급 기능

### 1. 배치 처리

여러 게시글을 한 번에 생성하려면:

```bash
# 스크립트 작성
for i in {1..5}; do
  npm run blog:create:files
done
```

### 2. 인덱스 수동 업데이트

```bash
npm run build:posts
```

### 3. 템플릿 목록 보기

```bash
npm run blog:create
# 4번에서 "list" 입력
```

### 4. 기존 게시글 덮어쓰기

동일한 슬러그의 게시글이 있을 때 덮어쓰기 옵션을 제공합니다.

---

## 🐛 문제 해결

### 자주 발생하는 문제들

#### 1. 파일 유효성 검사 실패

**오류 메시지:**

```
❌ kor.md 파일 오류: 필수 필드 'slug'가 없습니다.
```

**해결 방법:**

```markdown
---
slug: 'my-post-2025' # 필수 필드 추가
title: '게시글 제목'
description: '게시글 설명'
date: '2025-01-15'
filter: 'news'
thumbnail: 'https://example.com/image.jpg'
---
```

#### 2. 슬러그 불일치 오류

**오류 메시지:**

```
❌ eng.md 파일의 slug가 다릅니다. 모든 파일의 slug는 동일해야 합니다.
```

**해결 방법:** 모든 언어 파일의 `slug` 필드를 동일하게 설정하세요.

#### 3. 날짜 형식 오류

**오류 메시지:**

```
❌ 날짜 형식이 올바르지 않습니다. (YYYY-MM-DD)
```

**해결 방법:**

```yaml
date: '2025-01-15' # 올바른 형식
# date: '2025/01/15'  # 잘못된 형식
```

#### 4. 카테고리 오류

**오류 메시지:**

```
❌ 올바르지 않은 카테고리입니다. 가능한 값: insight, news, event, development, design
```

**해결 방법:**

```yaml
filter: 'news' # 올바른 카테고리
# filter: 'announcement'  # 잘못된 카테고리
```

#### 5. 폴더 경로 오류

**오류 메시지:**

```
❌ 지정된 폴더가 존재하지 않습니다.
```

**해결 방법:**

```bash
# 상대 경로 사용
./my-blog-post

# 절대 경로 사용
C:\Users\username\my-blog-post

# 현재 디렉토리 확인
pwd  # Linux/Mac
cd   # Windows
```

### 디버깅 팁

#### 1. 파일 권한 확인

```bash
# Linux/Mac
ls -la your-folder/

# Windows
dir your-folder
```

#### 2. 파일 내용 확인

```bash
# 메타데이터 확인
head -n 10 kor.md

# 전체 내용 확인
cat kor.md  # Linux/Mac
type kor.md  # Windows
```

#### 3. 슬러그 생성 테스트

```javascript
// Node.js 콘솔에서 테스트
const { createSlug } = require('./src/utils/blog/blogManager.cjs');
console.log(createSlug('새로운 기능 발표'));
// 출력: new-feature-announcement
```

---

## 💡 모범 사례

### 1. 파일 명명 규칙

```bash
# 좋은 예시
2025-01-15-global-expansion/
├── kor.md
├── eng.md
├── jpn.md
└── vnm.md

# 나쁜 예시
random-folder/
├── korean.md
├── english.md
├── japanese.md
└── vietnamese.md
```

### 2. 메타데이터 일관성

```yaml
# 모든 언어 파일에서 동일하게 유지
slug: 'same-slug-2025'
date: '2025-01-15'
filter: 'news'
thumbnail: 'https://same-image.com/image.jpg'

# 언어별로 다르게 작성
title: '각 언어에 맞는 제목'
description: '각 언어에 맞는 설명'
```

### 3. 썸네일 이미지 권장사항

- **크기**: 1200x630px (소셜 미디어 최적화)
- **형식**: JPG, PNG, WebP
- **용량**: 500KB 이하
- **위치**: `public/thumbnail/` 디렉토리 권장

### 4. 카테고리별 최적화

```yaml
# 뉴스 게시글
filter: 'news'
# 권장: 시의성 있는 제목, 간결한 설명

# 인사이트 게시글
filter: 'insight'
# 권장: 분석적 제목, 상세한 설명

# 이벤트 게시글
filter: 'event'
# 권장: 날짜 포함 제목, 참가자 관점 설명
```

---

## 🎯 팁 및 요령

### 1. 효율적인 워크플로우

```bash
# 1. 템플릿 폴더 생성
mkdir blog-templates
cd blog-templates

# 2. 각 카테고리별 템플릿 파일 준비
mkdir news-template insight-template event-template

# 3. 재사용 가능한 템플릿 작성
cp news-template/* my-news-post/
# 내용 수정 후 블로그 매니저 실행
```

### 2. 대량 게시글 관리

```bash
# 게시글 목록 파일로 저장
npm run blog:list > blog-list.txt

# 특정 카테고리만 확인
npm run blog:list | grep "news"

# 날짜 기준 정렬 확인
npm run blog:list | grep "2025-01"
```

### 3. 백업 및 복원

```bash
# 백업 생성
cp -r public/posts/ backup/posts-$(date +%Y%m%d)

# 복원
cp -r backup/posts-20250115/ public/posts/

# 인덱스 재생성
npm run build:posts
```

---

## 🔄 업데이트 및 확장

### 향후 계획

- [ ] 이미지 자동 최적화
- [ ] 다국어 번역 API 연동
- [ ] 게시글 통계 및 분석
- [ ] 자동 SEO 최적화
- [ ] 템플릿 커스터마이징

### 기여 방법

1. 새로운 템플릿 추가
2. 언어 지원 확장
3. 버그 리포트 및 개선 제안
4. 문서 업데이트

---

## 📞 지원 및 문의

### 도움말 명령어

```bash
npm run blog:create help
```

### 문제 해결 우선순위

1. **파일 유효성 검사** - 메타데이터 형식 확인
2. **경로 문제** - 상대/절대 경로 정확성 확인
3. **권한 문제** - 파일 읽기/쓰기 권한 확인
4. **인덱스 업데이트** - 수동으로 인덱스 재생성

### 추가 리소스

- [마크다운 문법 가이드](https://www.markdownguide.org/)
- [Front Matter 형식](https://jekyllrb.com/docs/front-matter/)
- [Vite 개발 서버 문서](https://vitejs.dev/guide/dev-server.html)

---

**🎉 IDBlock 블로그 매니저로 더 쉽고 효율적인 블로그 관리를 경험해보세요!**
