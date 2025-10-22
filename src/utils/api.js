/**
 * API 기본 설정 및 유틸리티 함수
 */

// API 기본 URL (환경 변수로 관리 권장)
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://idblock-test.site/';

/**
 * API 요청을 위한 공통 fetch 함수
 * @param {string} endpoint - API 엔드포인트 (예: '/api/v1/news')
 * @param {Object} options - fetch 옵션
 * @returns {Promise<Object>} - API 응답 데이터
 */
export async function apiRequest(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;

  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, defaultOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API 요청 실패:', error);
    throw error;
  }
}

/**
 * 뉴스 목록을 가져오는 함수
 * @param {number} page - 페이지 번호
 * @param {number} limit - 가져올 뉴스 개수
 * @param {string} language - 언어 코드 (ko, en, ja, vi)
 * @returns {Promise<Object>} - 뉴스 데이터
 */
export async function getNews(page = 1, limit = 10, language = 'ko') {
  return apiRequest(`/api/v1/news?page=${page}&limit=${limit}&lang=${language}`);
}

/**
 * POST 요청을 위한 헬퍼 함수
 * @param {string} endpoint - API 엔드포인트
 * @param {Object} data - 전송할 데이터
 * @returns {Promise<Object>} - API 응답 데이터
 */
export async function apiPost(endpoint, data) {
  return apiRequest(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/**
 * PUT 요청을 위한 헬퍼 함수
 * @param {string} endpoint - API 엔드포인트
 * @param {Object} data - 전송할 데이터
 * @returns {Promise<Object>} - API 응답 데이터
 */
export async function apiPut(endpoint, data) {
  return apiRequest(endpoint, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

/**
 * DELETE 요청을 위한 헬퍼 함수
 * @param {string} endpoint - API 엔드포인트
 * @returns {Promise<Object>} - API 응답 데이터
 */
export async function apiDelete(endpoint) {
  return apiRequest(endpoint, {
    method: 'DELETE',
  });
}
