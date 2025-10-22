# 백엔드 API 연동 가이드

## 📋 완료된 작업

### 1. API 유틸리티 생성

- **파일**: `src/utils/api.js`
- **기능**:
  - 공통 API 요청 함수 (`apiRequest`)
  - 뉴스 조회 함수 (`getNews`)
  - POST, PUT, DELETE 헬퍼 함수

### 2. AboutNews 컴포넌트 수정

- **파일**: `src/components/about/AboutNews.jsx`
- **변경사항**:
  - 백엔드 API에서 뉴스 데이터 가져오기
  - 로딩 상태 관리
  - 에러 처리 (fallback으로 정적 데이터 사용)
  - 날짜 포맷 변환 (ISO 8601 → YYYY.MM.DD)
  - **🔄 무한 스크롤 기능 추가**
  - **⏸️ 자동 스크롤 토글 기능**
  - **📍 인디케이터 추가**

### 3. CSS 스타일 추가

- **파일**: `src/style/about/AboutNews.module.css`
  - 로딩 메시지, 빈 데이터 메시지, 에러 메시지 스타일 추가
  - **자동 스크롤 토글 버튼 스타일**
  - **인디케이터 스타일**
  - **반응형 디자인 개선**

## 🚀 사용 방법

### 1. 환경 변수 설정

프로젝트 루트에 `.env` 파일을 생성하고 다음 내용을 추가하세요:

```bash
# API 기본 URL 설정
VITE_API_BASE_URL=https://api.idblock.id
```

**개발 환경**에서는 로컬 서버를 사용할 수 있습니다:

```bash
VITE_API_BASE_URL=http://localhost:3000
```

### 2. 서버 재시작

환경 변수를 추가한 후에는 개발 서버를 재시작해야 합니다:

```bash
npm run dev
```

## 🎯 새로운 기능: 무한 스크롤

### ✨ 주요 기능

1. **자동 스크롤**: 3초마다 자동으로 다음 뉴스로 이동
2. **순환 스크롤**: 마지막 뉴스에서 첫 번째 뉴스로 자동 이동
3. **수동 제어**: 사용자가 버튼을 클릭하면 자동 스크롤 중지
4. **마우스 호버**: 마우스를 올리면 자동 스크롤 일시 정지
5. **토글 버튼**: 자동 스크롤 시작/중지 토글
6. **인디케이터**: 현재 위치를 보여주는 점 표시

### 🎮 사용자 인터랙션

- **▶️ 버튼**: 자동 스크롤 시작
- **⏸️ 버튼**: 자동 스크롤 중지
- **좌우 화살표**: 수동으로 이전/다음 뉴스 이동
- **인디케이터 클릭**: 특정 뉴스로 직접 이동
- **마우스 호버**: 자동 스크롤 일시 정지

### 📱 반응형 동작

- **데스크톱**: 한 번에 2개 뉴스 표시
- **모바일**: 한 번에 1개 뉴스 표시
- **화면 크기 변경**: 자동으로 적절한 표시 개수 조정

## 📊 API 응답 형식

백엔드 API는 다음과 같은 형식으로 응답해야 합니다:

### 요청

```
GET /api/v1/news?page=1&limit=10
```

### 응답

```json
{
  "data": [
    {
      "id": "66",
      "title": "뉴스 제목",
      "content": "뉴스 내용 미리보기",
      "publisher": "발행처",
      "source_url": "https://example.com/news/123",
      "imageKey": "news/news-1761111819539-ej8iim.jpg",
      "imageUrl": "https://d2qilacgdmcy5c.cloudfront.net/news-1761111819539-ej8iim.jpg",
      "publishedAt": "2025-10-22T05:43:28.047Z",
      "createdAt": "2025-10-22T05:43:39.604Z",
      "updatedAt": null
    }
  ]
}
```

## 🔄 데이터 매핑

API 응답 데이터는 컴포넌트에서 사용하는 형식으로 자동 변환됩니다:

| API 필드      | 컴포넌트 필드 | 설명                              |
| ------------- | ------------- | --------------------------------- |
| `title`       | `title`       | 뉴스 제목                         |
| `source_url`  | `link`        | 뉴스 원문 링크                    |
| `publisher`   | `source`      | 발행처                            |
| `imageUrl`    | `image`       | 이미지 URL                        |
| `content`     | `preview`     | 미리보기 텍스트                   |
| `publishedAt` | `date`        | 발행일 (YYYY.MM.DD 형식으로 변환) |

## 🛡️ 에러 처리

API 호출이 실패할 경우:

1. 콘솔에 에러 로그 출력
2. 사용자에게 에러 메시지 표시
3. **자동으로 기존 정적 데이터(locales)로 fallback**

이를 통해 백엔드 서버가 다운되어도 웹사이트는 정상 작동합니다.

## 📝 다른 컴포넌트에 API 적용하기

다른 컴포넌트에서도 동일한 방식으로 API를 사용할 수 있습니다:

```javascript
import { apiRequest } from '@/utils/api';

// 예시: 새로운 API 엔드포인트 호출
const fetchData = async () => {
  try {
    const response = await apiRequest('/api/v1/your-endpoint');
    // 데이터 처리
  } catch (error) {
    console.error('데이터 로드 실패:', error);
  }
};
```

## 🔧 추가 API 함수 확장

`src/utils/api.js`에 새로운 API 함수를 추가할 수 있습니다:

```javascript
// 예시: 특정 뉴스 조회
export async function getNewsById(id) {
  return apiRequest(`/api/v1/news/${id}`);
}

// 예시: 카테고리별 뉴스 조회
export async function getNewsByCategory(category, page = 1, limit = 10) {
  return apiRequest(`/api/v1/news/category/${category}?page=${page}&limit=${limit}`);
}
```

## 🧪 테스트

### 기본 기능 테스트

1. **로딩 상태**: 페이지를 새로고침하면 "뉴스를 불러오는 중..." 메시지가 표시됩니다
2. **정상 로드**: API가 정상 작동하면 뉴스 목록이 표시됩니다
3. **에러 처리**: API URL을 잘못 설정하면 에러 메시지와 함께 기존 정적 데이터가 표시됩니다

### 무한 스크롤 기능 테스트

1. **자동 스크롤**: 페이지 로드 후 3초마다 자동으로 다음 뉴스로 이동
2. **순환 기능**: 마지막 뉴스에서 첫 번째 뉴스로 자동 이동
3. **토글 버튼**: ▶️/⏸️ 버튼으로 자동 스크롤 시작/중지
4. **수동 제어**: 화살표 버튼 클릭 시 자동 스크롤 중지
5. **마우스 호버**: 뉴스 영역에 마우스 올리면 자동 스크롤 일시 정지
6. **인디케이터**: 현재 위치를 나타내는 점이 활성화됨
7. **반응형**: 화면 크기에 따라 표시되는 뉴스 개수 변경

## 📦 추가 설치 필요 사항

현재 네이티브 `fetch` API를 사용하므로 **추가 패키지 설치가 필요하지 않습니다**.

만약 `axios`를 사용하고 싶다면:

```bash
npm install axios
```

그리고 `src/utils/api.js`를 axios 방식으로 수정할 수 있습니다.

## ⚠️ 주의사항

1. **CORS 설정**: 백엔드 서버에서 CORS를 허용해야 합니다
2. **환경 변수**: `.env` 파일은 Git에 커밋하지 마세요
3. **서버 재시작**: 환경 변수 변경 후 반드시 개발 서버를 재시작하세요
4. **API URL**: `VITE_API_BASE_URL`에는 끝에 슬래시(`/`)를 붙이지 마세요

## 🎯 다음 단계

1. 백엔드 서버가 준비되면 `.env` 파일에 실제 API URL 설정
2. 페이지네이션 구현 (필요시)
3. 검색 기능 추가 (필요시)
4. 캐싱 전략 구현 (필요시)
