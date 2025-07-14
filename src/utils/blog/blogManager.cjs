#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { execSync } = require('child_process');
const { getTemplate, getTemplateList, generateTemplateContent } = require('./blogTemplates.cjs');

// 언어별 설정
const LANGUAGES = {
  kor: '한국어',
  eng: '영어',
  jpn: '일본어',
  vnm: '베트남어',
};

// 카테고리 설정
const CATEGORIES = {
  insight: '인사이트',
  news: '뉴스',
  event: '이벤트',
  development: '개발',
  design: '디자인',
};

// 입력 인터페이스 설정
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 프롬프트 함수
function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

// 슬러그 생성 함수 (한글 -> 영문)
function createSlug(title) {
  // 더 정교한 한글 -> 영문 변환
  const korToEng = {
    // 일반적인 단어들
    새: 'new',
    소식: 'news',
    발표: 'announcement',
    개발: 'development',
    디자인: 'design',
    이벤트: 'event',
    인사이트: 'insight',
    업데이트: 'update',
    출시: 'release',
    론칭: 'launch',
    런칭: 'launch',
    서비스: 'service',
    플랫폼: 'platform',
    기능: 'feature',
    보안: 'security',
    블록체인: 'blockchain',
    AI: 'ai',
    인공지능: 'ai',
    머신러닝: 'machine-learning',
    데이터: 'data',
    분석: 'analysis',
    리포트: 'report',
    연구: 'research',
    성과: 'achievement',
    결과: 'result',
    파트너십: 'partnership',
    협력: 'collaboration',
    미팅: 'meeting',
    회의: 'meeting',
    컨퍼런스: 'conference',
    세미나: 'seminar',
    워크숍: 'workshop',
    해커톤: 'hackathon',
    데모: 'demo',
    시연: 'demo',
    테스트: 'test',
    베타: 'beta',
    알파: 'alpha',
    프로토타입: 'prototype',
    MVP: 'mvp',
    팀: 'team',
    직원: 'employee',
    채용: 'hiring',
    모집: 'recruitment',
    입사: 'join',
    문화: 'culture',
    혜택: 'benefit',
    복지: 'welfare',
    성장: 'growth',
    확장: 'expansion',
    글로벌: 'global',
    국제: 'international',
    아시아: 'asia',
    유럽: 'europe',
    미국: 'usa',
    한국: 'korea',
    일본: 'japan',
    중국: 'china',
    투자: 'investment',
    펀딩: 'funding',
    라운드: 'round',
    시리즈: 'series',
    매출: 'revenue',
    이익: 'profit',
    손실: 'loss',
    주식: 'stock',
    상장: 'ipo',
    인수: 'acquisition',
    합병: 'merger',
    // 년도 관련
    2024: '2024',
    2025: '2025',
    2026: '2026',
    // 월 관련
    '1월': 'january',
    '2월': 'february',
    '3월': 'march',
    '4월': 'april',
    '5월': 'may',
    '6월': 'june',
    '7월': 'july',
    '8월': 'august',
    '9월': 'september',
    '10월': 'october',
    '11월': 'november',
    '12월': 'december',
  };

  // 한글 자모 -> 영문 매핑 (음성학적 변환)
  const korChar = {
    가: 'ga',
    나: 'na',
    다: 'da',
    라: 'ra',
    마: 'ma',
    바: 'ba',
    사: 'sa',
    아: 'a',
    자: 'ja',
    차: 'cha',
    카: 'ka',
    타: 'ta',
    파: 'pa',
    하: 'ha',
    거: 'geo',
    너: 'neo',
    더: 'deo',
    러: 'reo',
    머: 'meo',
    버: 'beo',
    서: 'seo',
    어: 'eo',
    저: 'jeo',
    처: 'cheo',
    커: 'keo',
    터: 'teo',
    퍼: 'peo',
    허: 'heo',
    고: 'go',
    노: 'no',
    도: 'do',
    로: 'ro',
    모: 'mo',
    보: 'bo',
    소: 'so',
    오: 'o',
    조: 'jo',
    초: 'cho',
    코: 'ko',
    토: 'to',
    포: 'po',
    호: 'ho',
    구: 'gu',
    누: 'nu',
    두: 'du',
    루: 'ru',
    무: 'mu',
    부: 'bu',
    수: 'su',
    우: 'u',
    주: 'ju',
    추: 'chu',
    쿠: 'ku',
    투: 'tu',
    푸: 'pu',
    후: 'hu',
    그: 'geu',
    느: 'neu',
    드: 'deu',
    르: 'reu',
    므: 'meu',
    브: 'beu',
    스: 'seu',
    으: 'eu',
    즈: 'jeu',
    츠: 'cheu',
    크: 'keu',
    트: 'teu',
    프: 'peu',
    흐: 'heu',
    기: 'gi',
    니: 'ni',
    디: 'di',
    리: 'ri',
    미: 'mi',
    비: 'bi',
    시: 'si',
    이: 'i',
    지: 'ji',
    치: 'chi',
    키: 'ki',
    티: 'ti',
    피: 'pi',
    히: 'hi',
  };

  let result = title.toLowerCase();

  // 1. 긴 단어부터 먼저 변환 (정확도 향상)
  const sortedKorToEng = Object.entries(korToEng).sort((a, b) => b[0].length - a[0].length);
  sortedKorToEng.forEach(([kor, eng]) => {
    result = result.replace(new RegExp(kor, 'g'), eng);
  });

  // 2. 한글 자모 변환
  result = result.replace(/[가-힣]/g, (char) => korChar[char] || char);

  // 3. 공백, 특수문자 정리
  result = result
    .replace(/\s+/g, '-') // 공백을 하이픈으로
    .replace(/[^a-zA-Z0-9-]/g, '') // 영문, 숫자, 하이픈만 남기기
    .replace(/-+/g, '-') // 연속된 하이픈 제거
    .replace(/^-+|-+$/g, ''); // 시작/끝 하이픈 제거

  return result;
}

// 날짜 포맷 함수
function formatDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// 기본 마크다운 템플릿 생성
function createMarkdownTemplate(slug, title, description, category, date, thumbnail, useTemplate) {
  const frontMatter = `---
slug: '${slug}'
title: '${title}'
description: '${description}'
date: '${date}'
filter: '${category}'
thumbnail: '${thumbnail}'
---

`;

  let content = `# ${title}

${description}

`;

  if (useTemplate) {
    const template = getTemplate(category);
    if (template) {
      content += generateTemplateContent(template);
    }
  }

  return frontMatter + content;
}

// 마크다운 파일 유효성 검사
function validateMarkdownFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matter = require('gray-matter');
    const { data } = matter(content);

    // 필수 필드 확인
    const requiredFields = ['slug', 'title', 'description', 'date', 'filter'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return { valid: false, error: `필수 필드 '${field}'가 없습니다.` };
      }
    }

    // 날짜 형식 확인
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(data.date)) {
      return { valid: false, error: '날짜 형식이 올바르지 않습니다. (YYYY-MM-DD)' };
    }

    // 카테고리 확인
    if (!Object.keys(CATEGORIES).includes(data.filter)) {
      return {
        valid: false,
        error: `올바르지 않은 카테고리입니다. 가능한 값: ${Object.keys(CATEGORIES).join(', ')}`,
      };
    }

    return { valid: true, data };
  } catch (error) {
    return { valid: false, error: `파일 읽기 오류: ${error.message}` };
  }
}

// 준비된 파일들로 게시글 생성
async function createPostFromFiles() {
  console.log('\n📁 준비된 파일들로 게시글 생성');
  console.log('===============================\n');

  console.log('📋 사용 방법:');
  console.log('1. 작업 디렉토리에 임시 폴더를 생성하고 4개의 언어 파일을 준비하세요.');
  console.log('2. 파일명: kor.md, eng.md, jpn.md, vnm.md');
  console.log('3. 각 파일은 올바른 Front Matter를 포함해야 합니다.');
  console.log('4. 모든 파일의 slug는 동일해야 합니다.\n');

  const tempDir = await prompt('준비된 파일들이 있는 폴더 경로를 입력하세요: ');

  if (!tempDir) {
    console.log('❌ 폴더 경로를 입력해주세요.');
    return;
  }

  const tempDirPath = path.resolve(tempDir);

  if (!fs.existsSync(tempDirPath)) {
    console.log('❌ 지정된 폴더가 존재하지 않습니다.');
    return;
  }

  console.log(`\n📂 폴더 경로: ${tempDirPath}`);
  console.log('\n🔍 파일 확인 중...');

  const languageFiles = {};
  const requiredFiles = ['kor.md', 'eng.md', 'jpn.md', 'vnm.md'];
  let allValid = true;
  let slug = null;

  for (const fileName of requiredFiles) {
    const filePath = path.join(tempDirPath, fileName);
    const lang = fileName.replace('.md', '');

    if (!fs.existsSync(filePath)) {
      console.log(`❌ ${fileName} 파일이 없습니다.`);
      allValid = false;
      continue;
    }

    const validation = validateMarkdownFile(filePath);
    if (!validation.valid) {
      console.log(`❌ ${fileName} 파일 오류: ${validation.error}`);
      allValid = false;
      continue;
    }

    languageFiles[lang] = {
      path: filePath,
      data: validation.data,
    };

    // 첫 번째 파일의 slug를 기준으로 설정
    if (!slug) {
      slug = validation.data.slug;
    } else if (slug !== validation.data.slug) {
      console.log(`❌ ${fileName} 파일의 slug가 다릅니다. 모든 파일의 slug는 동일해야 합니다.`);
      allValid = false;
    }

    console.log(`✅ ${fileName} - 제목: ${validation.data.title}`);
  }

  if (!allValid) {
    console.log('\n❌ 파일 검증에 실패했습니다. 오류를 수정한 후 다시 시도하세요.');
    return;
  }

  console.log(`\n✅ 모든 파일이 유효합니다!`);
  console.log(`📝 슬러그: ${slug}`);
  console.log(`🏷️ 카테고리: ${languageFiles.kor.data.filter}`);
  console.log(`📅 날짜: ${languageFiles.kor.data.date}`);

  // 기존 게시글 확인
  const postsDir = path.join(process.cwd(), 'public', 'posts');
  const postDir = path.join(postsDir, slug);

  if (fs.existsSync(postDir)) {
    console.log(`\n⚠️ 동일한 슬러그의 게시글이 이미 존재합니다: ${slug}`);
    const overwrite = await prompt('덮어쓰시겠습니까? (y/n): ');
    if (overwrite.toLowerCase() !== 'y' && overwrite.toLowerCase() !== 'yes') {
      console.log('❌ 취소되었습니다.');
      return;
    }
  }

  const confirm = await prompt('\n위 내용으로 게시글을 생성하시겠습니까? (y/n): ');
  if (confirm.toLowerCase() !== 'y' && confirm.toLowerCase() !== 'yes') {
    console.log('❌ 취소되었습니다.');
    return;
  }

  // 게시글 폴더 생성
  if (!fs.existsSync(postDir)) {
    fs.mkdirSync(postDir, { recursive: true });
  }

  // 파일 복사
  console.log('\n📝 파일 복사 중...');
  for (const [lang, fileInfo] of Object.entries(languageFiles)) {
    const targetPath = path.join(postDir, `${lang}.md`);
    fs.copyFileSync(fileInfo.path, targetPath);
    console.log(`✅ ${lang}.md 복사 완료`);
  }

  console.log(`\n✅ 게시글이 생성되었습니다: ${postDir}`);

  // 인덱스 업데이트
  updatePostIndex();

  console.log('\n🎉 게시글 생성이 완료되었습니다!');
  console.log(`📁 경로: public/posts/${slug}/`);
  console.log('\n다음 단계:');
  console.log('1. 개발 서버에서 결과를 확인하세요');
  console.log('2. 필요한 경우 파일을 수정하세요');

  // 개발 서버 실행 여부 확인
  await askDevServer();
}

// 다국어 템플릿 생성
function createMultiLanguageTemplates(slug, postData) {
  const templates = {};

  templates.kor = createMarkdownTemplate(
    slug,
    postData.title.kor,
    postData.description.kor,
    postData.category,
    postData.date,
    postData.thumbnail,
    postData.useTemplate,
  );

  templates.eng = createMarkdownTemplate(
    slug,
    postData.title.eng || postData.title.kor + ' (English)',
    postData.description.eng || postData.description.kor + ' (English)',
    postData.category,
    postData.date,
    postData.thumbnail,
    postData.useTemplate,
  );

  templates.jpn = createMarkdownTemplate(
    slug,
    postData.title.jpn || postData.title.kor + ' (Japanese)',
    postData.description.jpn || postData.description.kor + ' (Japanese)',
    postData.category,
    postData.date,
    postData.thumbnail,
    postData.useTemplate,
  );

  templates.vnm = createMarkdownTemplate(
    slug,
    postData.title.vnm || postData.title.kor + ' (Vietnamese)',
    postData.description.vnm || postData.description.kor + ' (Vietnamese)',
    postData.category,
    postData.date,
    postData.thumbnail,
    postData.useTemplate,
  );

  return templates;
}

// 게시글 폴더 및 파일 생성
function createPostFiles(slug, templates) {
  const postDir = path.join(process.cwd(), 'public', 'posts', slug);

  // 폴더 생성
  if (!fs.existsSync(postDir)) {
    fs.mkdirSync(postDir, { recursive: true });
  }

  // 각 언어별 파일 생성
  Object.keys(templates).forEach((lang) => {
    const filePath = path.join(postDir, `${lang}.md`);
    fs.writeFileSync(filePath, templates[lang]);
  });

  console.log(`\n✅ 게시글 파일이 생성되었습니다: ${postDir}`);
}

// 인덱스 업데이트
function updatePostIndex() {
  try {
    console.log('\n🔄 게시글 인덱스를 업데이트 중...');
    execSync('node src/utils/blog/generatePostIndex.cjs', { stdio: 'inherit' });
    console.log('✅ 인덱스 업데이트 완료!');
  } catch (error) {
    console.error('❌ 인덱스 업데이트 실패:', error.message);
  }
}

// 개발 서버 실행 여부 확인
async function askDevServer() {
  const answer = await prompt('\n개발 서버를 실행하시겠습니까? (y/n): ');
  if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
    try {
      console.log('\n🚀 개발 서버를 실행 중...');
      execSync('npm run dev', { stdio: 'inherit' });
    } catch (error) {
      console.error('❌ 개발 서버 실행 실패:', error.message);
    }
  }
}

// 대화형 게시글 생성 (기존 방식)
async function createPostInteractive() {
  console.log('\n📝 대화형 게시글 생성');
  console.log('====================\n');

  try {
    // 기본 정보 입력
    const title = await prompt('1. 게시글 제목 (한국어): ');
    if (!title) {
      console.log('❌ 제목을 입력해주세요.');
      return;
    }

    const description = await prompt('2. 게시글 설명 (한국어): ');
    if (!description) {
      console.log('❌ 설명을 입력해주세요.');
      return;
    }

    // 카테고리 선택
    console.log('\n📂 카테고리 선택:');
    Object.entries(CATEGORIES).forEach(([key, value]) => {
      console.log(`  ${key}: ${value}`);
    });

    const category = await prompt('3. 카테고리 (예: news, insight, event): ');
    if (!Object.keys(CATEGORIES).includes(category)) {
      console.log('❌ 올바른 카테고리를 선택해주세요.');
      return;
    }

    // 템플릿 사용 여부 선택
    console.log('\n📝 템플릿 사용 옵션:');
    console.log('선택한 카테고리에 맞는 전문 템플릿을 사용하시겠습니까?');
    console.log('- y (예): 카테고리별 전문 템플릿 사용');
    console.log('- n (아니오): 기본 템플릿 사용');
    console.log('- list (목록): 사용 가능한 모든 템플릿 보기');

    const useTemplateInput = (await prompt('4. 템플릿 사용 (y/n/list, 기본값: y): ')) || 'y';

    let useTemplate = false;

    if (useTemplateInput.toLowerCase() === 'list') {
      console.log('\n📋 사용 가능한 템플릿 목록:');
      const templates = getTemplateList();
      templates.forEach((template, index) => {
        console.log(`${index + 1}. ${template.key}: ${template.title}`);
        console.log(`   ${template.description}`);
      });

      const retryInput = (await prompt('\n템플릿을 사용하시겠습니까? (y/n, 기본값: y): ')) || 'y';
      useTemplate = retryInput.toLowerCase() === 'y' || retryInput.toLowerCase() === 'yes';
    } else {
      useTemplate =
        useTemplateInput.toLowerCase() === 'y' || useTemplateInput.toLowerCase() === 'yes';
    }

    if (useTemplate) {
      const template = getTemplate(category);
      console.log(`✅ "${template.title}" 템플릿이 적용됩니다.`);
      console.log(`📝 ${template.description}`);
    }

    // 썸네일 URL
    const thumbnail =
      (await prompt('5. 썸네일 URL (선택사항): ')) || 'https://via.placeholder.com/1200x630';

    // 슬러그 생성
    const defaultSlug = createSlug(title) + '-' + formatDate().slice(0, 4);
    const slug = (await prompt(`6. 슬러그 (기본값: ${defaultSlug}): `)) || defaultSlug;

    // 게시 날짜
    const defaultDate = formatDate();
    const date =
      (await prompt(`7. 게시 날짜 (YYYY-MM-DD, 기본값: ${defaultDate}): `)) || defaultDate;

    // 데이터 준비
    const postData = {
      title: {
        kor: title,
        eng: '',
        jpn: '',
        vnm: '',
      },
      description: {
        kor: description,
        eng: '',
        jpn: '',
        vnm: '',
      },
      category,
      date,
      thumbnail,
      useTemplate,
    };

    // 확인
    console.log('\n📋 입력 내용 확인:');
    console.log(`제목: ${title}`);
    console.log(`설명: ${description}`);
    console.log(`카테고리: ${category}`);
    console.log(`슬러그: ${slug}`);
    console.log(`날짜: ${date}`);
    console.log(`썸네일: ${thumbnail}`);

    const confirm = await prompt('\n위 내용이 맞습니까? (y/n): ');
    if (confirm.toLowerCase() !== 'y' && confirm.toLowerCase() !== 'yes') {
      console.log('❌ 취소되었습니다.');
      return;
    }

    // 게시글 생성
    console.log('\n📝 게시글 생성 중...');
    const templates = createMultiLanguageTemplates(slug, postData);
    createPostFiles(slug, templates);

    // 인덱스 업데이트
    updatePostIndex();

    // 완료 메시지
    console.log('\n🎉 게시글이 성공적으로 생성되었습니다!');
    console.log(`📁 경로: public/posts/${slug}/`);
    console.log('\n다음 단계:');
    console.log('1. 각 언어별 마크다운 파일을 편집하세요');
    console.log('2. 필요한 경우 이미지를 추가하세요');
    console.log('3. 개발 서버에서 결과를 확인하세요');

    // 개발 서버 실행 여부 확인
    await askDevServer();
  } catch (error) {
    console.error('❌ 오류가 발생했습니다:', error.message);
  }
}

// 게시글 목록 보기
async function listPosts() {
  console.log('\n📝 블로그 게시글 목록');
  console.log('====================\n');

  try {
    const postsDir = path.join(process.cwd(), 'public', 'posts');
    const folders = fs.readdirSync(postsDir).filter((item) => {
      return fs.statSync(path.join(postsDir, item)).isDirectory();
    });

    if (folders.length === 0) {
      console.log('게시글이 없습니다.');
      return;
    }

    // 각 폴더의 한국어 메타데이터 읽기
    const posts = [];
    folders.forEach((folder) => {
      const korMdPath = path.join(postsDir, folder, 'kor.md');
      if (fs.existsSync(korMdPath)) {
        const content = fs.readFileSync(korMdPath, 'utf-8');
        const matter = require('gray-matter');
        const { data } = matter(content);
        posts.push({
          slug: folder,
          title: data.title,
          description: data.description,
          date: data.date,
          category: data.filter,
        });
      }
    });

    // 날짜순 정렬
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    posts.forEach((post, index) => {
      console.log(`${index + 1}. ${post.title}`);
      console.log(`   📅 ${post.date} | 🏷️ ${post.category} | 🔗 ${post.slug}`);
      console.log(
        `   📝 ${post.description.substring(0, 100)}${post.description.length > 100 ? '...' : ''}`,
      );
      console.log('');
    });

    console.log(`총 ${posts.length}개의 게시글이 있습니다.`);
  } catch (error) {
    console.error('❌ 게시글 목록을 불러오는 중 오류가 발생했습니다:', error.message);
  }
}

// 게시글 삭제
async function deletePost() {
  console.log('\n🗑️ 블로그 게시글 삭제');
  console.log('====================\n');

  try {
    const postsDir = path.join(process.cwd(), 'public', 'posts');
    const folders = fs.readdirSync(postsDir).filter((item) => {
      return fs.statSync(path.join(postsDir, item)).isDirectory();
    });

    if (folders.length === 0) {
      console.log('삭제할 게시글이 없습니다.');
      return;
    }

    // 게시글 목록 보기
    console.log('삭제할 게시글을 선택하세요:\n');
    folders.forEach((folder, index) => {
      const korMdPath = path.join(postsDir, folder, 'kor.md');
      if (fs.existsSync(korMdPath)) {
        const content = fs.readFileSync(korMdPath, 'utf-8');
        const matter = require('gray-matter');
        const { data } = matter(content);
        console.log(`${index + 1}. ${data.title} (${folder})`);
      }
    });

    const selection = await prompt('\n삭제할 게시글 번호를 입력하세요: ');
    const index = parseInt(selection) - 1;

    if (index < 0 || index >= folders.length) {
      console.log('❌ 올바른 번호를 입력해주세요.');
      return;
    }

    const folderToDelete = folders[index];
    const postPath = path.join(postsDir, folderToDelete);

    // 확인
    console.log(`\n⚠️ 다음 게시글을 삭제하시겠습니까?`);
    console.log(`폴더: ${folderToDelete}`);
    console.log(`경로: ${postPath}`);

    const confirm = await prompt('\n정말로 삭제하시겠습니까? (y/n): ');
    if (confirm.toLowerCase() !== 'y' && confirm.toLowerCase() !== 'yes') {
      console.log('❌ 취소되었습니다.');
      return;
    }

    // 폴더 삭제
    fs.rmSync(postPath, { recursive: true, force: true });
    console.log(`✅ 게시글이 삭제되었습니다: ${folderToDelete}`);

    // 인덱스 업데이트
    updatePostIndex();
  } catch (error) {
    console.error('❌ 게시글 삭제 중 오류가 발생했습니다:', error.message);
  }
}

// 게시글 편집
async function editPost() {
  console.log('\n✏️ 블로그 게시글 편집');
  console.log('====================\n');

  try {
    const postsDir = path.join(process.cwd(), 'public', 'posts');
    const folders = fs.readdirSync(postsDir).filter((item) => {
      return fs.statSync(path.join(postsDir, item)).isDirectory();
    });

    if (folders.length === 0) {
      console.log('편집할 게시글이 없습니다.');
      return;
    }

    // 게시글 목록 보기
    console.log('편집할 게시글을 선택하세요:\n');
    folders.forEach((folder, index) => {
      const korMdPath = path.join(postsDir, folder, 'kor.md');
      if (fs.existsSync(korMdPath)) {
        const content = fs.readFileSync(korMdPath, 'utf-8');
        const matter = require('gray-matter');
        const { data } = matter(content);
        console.log(`${index + 1}. ${data.title} (${folder})`);
      }
    });

    const selection = await prompt('\n편집할 게시글 번호를 입력하세요: ');
    const index = parseInt(selection) - 1;

    if (index < 0 || index >= folders.length) {
      console.log('❌ 올바른 번호를 입력해주세요.');
      return;
    }

    const folderToEdit = folders[index];
    const postPath = path.join(postsDir, folderToEdit);

    console.log(`\n📝 게시글 편집: ${folderToEdit}`);
    console.log(`경로: ${postPath}`);

    console.log('\n📝 편집 옵션:');
    console.log('1. 시스템 기본 편집기로 열기');
    console.log('2. 폴더 경로만 확인하기');

    const editOption = await prompt('\n선택하세요 (1/2): ');

    if (editOption === '1') {
      // 시스템 기본 편집기로 열기
      try {
        const os = require('os');
        const platform = os.platform();
        let command;

        if (platform === 'win32') {
          command = `start "" "${postPath}"`;
        } else if (platform === 'darwin') {
          command = `open "${postPath}"`;
        } else {
          command = `xdg-open "${postPath}"`;
        }

        execSync(command);
        console.log('✅ 폴더가 열렸습니다. 편집을 완료한 후 인덱스를 업데이트하세요.');
      } catch (error) {
        console.error('❌ 폴더 열기 실패:', error.message);
        console.log(`📁 수동으로 다음 경로를 열어주세요: ${postPath}`);
      }
    } else if (editOption === '2') {
      console.log(`\n📁 게시글 경로: ${postPath}`);
      console.log('\n파일 목록:');
      const files = fs.readdirSync(postPath);
      files.forEach((file) => {
        console.log(`  - ${file}`);
      });
    }

    const updateIndex = await prompt('\n편집 완료 후 인덱스를 업데이트하시겠습니까? (y/n): ');
    if (updateIndex.toLowerCase() === 'y' || updateIndex.toLowerCase() === 'yes') {
      updatePostIndex();
    }
  } catch (error) {
    console.error('❌ 게시글 편집 중 오류가 발생했습니다:', error.message);
  }
}

// 도움말 표시
function showHelp() {
  console.log('\n🔧 IDBlock 블로그 매니저 도움말');
  console.log('================================\n');

  console.log('📝 사용법:');
  console.log('  npm run blog:create        - 새 게시글 생성');
  console.log('  npm run blog:create files  - 준비된 파일로 게시글 생성');
  console.log('  npm run blog:list          - 게시글 목록 보기');
  console.log('  npm run blog:edit          - 게시글 편집');
  console.log('  npm run blog:delete        - 게시글 삭제\n');

  console.log('🎯 주요 기능:');
  console.log('  • 대화형 게시글 생성');
  console.log('  • 준비된 4개 언어 파일 적용');
  console.log('  • 카테고리별 전문 템플릿 제공');
  console.log('  • 자동 슬러그 생성 (한글 → 영문)');
  console.log('  • 게시글 인덱스 자동 업데이트');
  console.log('  • 마크다운 파일 유효성 검사\n');

  console.log('📁 파일 구조:');
  console.log('  public/posts/{slug}/');
  console.log('  ├── kor.md  (한국어)');
  console.log('  ├── eng.md  (영어)');
  console.log('  ├── jpn.md  (일본어)');
  console.log('  └── vnm.md  (베트남어)\n');

  console.log('🏷️ 지원 카테고리:');
  Object.entries(CATEGORIES).forEach(([key, value]) => {
    console.log(`  • ${key}: ${value}`);
  });

  console.log('\n💡 팁:');
  console.log('  • 준비된 파일 사용시 모든 파일의 slug가 동일해야 합니다.');
  console.log('  • Front Matter 형식을 정확히 작성해주세요.');
  console.log('  • 날짜 형식은 YYYY-MM-DD 형식을 사용하세요.');
  console.log('  • 썸네일 이미지는 1200x630px 크기를 권장합니다.');
}

// 메인 실행 함수
async function main() {
  console.log('\n🚀 IDBlock 블로그 매니저');
  console.log('========================\n');

  try {
    const args = process.argv.slice(2);
    const command = args[0];
    const subCommand = args[1];

    switch (command) {
      case 'list':
        await listPosts();
        break;
      case 'edit':
        await editPost();
        break;
      case 'delete':
        await deletePost();
        break;
      case 'help':
        showHelp();
        break;
      case 'files':
        await createPostFromFiles();
        break;
      default:
        if (command === 'create' && subCommand === 'files') {
          await createPostFromFiles();
        } else {
          // 기본 대화형 생성 또는 메뉴 선택
          console.log('🎯 작업을 선택하세요:');
          console.log('1. 대화형 게시글 생성');
          console.log('2. 준비된 파일로 게시글 생성');
          console.log('3. 게시글 목록 보기');
          console.log('4. 게시글 편집');
          console.log('5. 게시글 삭제');
          console.log('6. 도움말');

          const choice = await prompt('\n선택하세요 (1-6): ');

          switch (choice) {
            case '1':
              await createPostInteractive();
              break;
            case '2':
              await createPostFromFiles();
              break;
            case '3':
              await listPosts();
              break;
            case '4':
              await editPost();
              break;
            case '5':
              await deletePost();
              break;
            case '6':
              showHelp();
              break;
            default:
              console.log('❌ 올바른 번호를 선택해주세요.');
          }
        }
        break;
    }
  } catch (error) {
    console.error('❌ 오류가 발생했습니다:', error.message);
  } finally {
    rl.close();
  }
}

// 메인 함수 실행
if (require.main === module) {
  main();
}

module.exports = {
  createSlug,
  validateMarkdownFile,
  createPostFromFiles,
  createPostInteractive,
  listPosts,
  editPost,
  deletePost,
  showHelp,
};
