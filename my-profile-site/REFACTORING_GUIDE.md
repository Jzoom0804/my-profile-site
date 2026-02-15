# 프로필 웹사이트 콘텐츠 리팩토링 완료

## 📋 개요

프로필 웹사이트의 콘텐츠 관리 시스템을 완전히 개선했습니다. 이제 **HTML 파일 상단의 JavaScript 데이터 객체만 수정하면** 모든 콘텐츠가 자동으로 업데이트됩니다.

---

## ✨ 주요 개선사항

### 이전 (❌ 불편한 방식)
- 모든 콘텐츠가 HTML에 하드코딩됨
- 한국어/영어 양쪽을 각각 찾아서 수정해야 함
- 프로젝트나 블로그 추가 시 HTML 구조를 복제해야 함
- 실수 가능성이 높음

### 지금 (✅ 개선된 방식)
- 모든 콘텐츠가 **`SITE_CONTENT`** 객체에 정리됨
- **JavaScript 파일 상단에서만 편집**하면 됨
- 한국어/영어 번역이 한 곳에서 관리됨
- 배열에 객체만 추가/제거하면 자동으로 반영됨

---

## 🎯 콘텐츠 수정 방법

### 1. 개인 정보 변경

**파일:** `index.html` > `<script>` 섹션

```javascript
const SITE_CONTENT = {
  personal: {
    name: "홍길동",  // ← 이름 변경
    role: { ko: "Senior Research Scientist", en: "Senior Research Scientist" },
    tagline: {
      ko: "새로운 직함 | 새로운 설명",  // ← 한국어 변경
      en: "New Title | New Description"  // ← 영어 변경
    },
    email: "newemail@example.com",  // ← 이메일 변경
    year: 2024
  },
```

---

### 2. About 섹션 수정

**Bio 텍스트 변경:**
```javascript
about: {
  bio: [
    {
      ko: "새로운 한국어 소개 텍스트",
      en: "New English bio text"
    },
    {
      ko: "두 번째 단락 한국어",
      en: "Second paragraph in English"
    }
  ],
```

**태그 추가/변경:**
```javascript
  tags: [
    { ko: "생물의약", en: "Biotech", color: "blue" },
    { ko: "새로운 스킬", en: "New Skill", color: "purple" }  // ← 새 태그 추가
  ]
}
```

**색상 옵션:** `blue`, `teal`, `cyan`, `purple`, `green`

---

### 3. 스킬(Skills) 추가/수정

**스킬 추가:**
```javascript
skills: [
  // ... 기존 스킬들
  {
    icon: "🚀",  // 원하는 이모지로 변경
    title: { ko: "새로운 스킬", en: "New Skill" },
    description: {
      ko: "이 스킬에 대한 설명을 여기에 작성하세요.",
      en: "Write a description of this skill here."
    }
  }
]
```

**스킬 삭제:** 해당 객체를 배열에서 제거하면 됩니다.

---

### 4. 프로젝트(Projects) 추가/수정

**새 프로젝트 추가:**
```javascript
projects: [
  // ... 기존 프로젝트들
  {
    status: { ko: "진행중", en: "In Progress" },
    statusColor: "teal",  // teal, green, purple, cyan, blue
    title: { ko: "새 프로젝트", en: "New Project" },
    description: {
      ko: "프로젝트 설명을 여기에 작성하세요.",
      en: "Write your project description here."
    },
    tags: ["AI", { ko: "생명공학", en: "Biotech" }]  // 태그 추가
  }
]
```

**상태값:** `진행중` (In Progress), `완료` (Completed), 또는 원하는 상태

**색상값:** `teal`, `green`, `purple`, `cyan`, `blue`

---

### 5. 블로그(Blog) 포스트 추가/수정

**새 포스트 추가:**
```javascript
blog: [
  // ... 기존 포스트들
  {
    date: { ko: "2024년 2월 15일", en: "Feb 15, 2024" },
    category: { ko: "연구", en: "Research" },
    categoryColor: "blue",  // teal, purple, cyan, blue
    title: { ko: "새 글 제목", en: "New Post Title" },
    summary: {
      ko: "블로그 포스트 요약을 여기에 작성하세요.",
      en: "Write a summary of your blog post here."
    },
    link: "https://myblog.com/post"  // 블로그 링크
  }
]
```

**주의:** 날짜 형식을 정확하게 유지하세요 (한국어/영어 모두)

---

## 📁 파일 구조

```
index.html
├── <head> (변경 없음)
├── <body>
│   ├── Header & Navigation
│   ├── Hero Section
│   ├── About Section
│   ├── Skills Section (동적 생성)
│   ├── Projects Section (동적 생성)
│   ├── Blog Section (동적 생성)
│   ├── Contact Section
│   └── Footer
└── <script>
    ├── SITE_CONTENT (← 여기서만 콘텐츠 수정!)
    ├── 렌더링 함수들 (자동으로 콘텐츠를 HTML로 변환)
    ├── 언어 전환 로직 (한국어 ⇄ English)
    ├── 이벤트 리스너 (모바일 메뉴, 폼 등)
    └── 초기화 코드 (페이지 로드 시 실행)
```

---

## 🔍 사용 예시

### 예시 1: 이름과 이메일 변경
```javascript
// 변경 전
personal: {
  name: "Hyungsu Jeon",
  email: "hyungsu.jeon@example.com",
}

// 변경 후
personal: {
  name: "김철수",
  email: "kim@example.com",
}
```
→ 페이지를 새로고침하면 모든 곳에서 자동으로 업데이트됩니다!

---

### 예시 2: 프로젝트 3개를 5개로 늘리기
```javascript
// 기존: 3개 프로젝트
projects: [
  { /* 프로젝트 1 */ },
  { /* 프로젝트 2 */ },
  { /* 프로젝트 3 */ }
]

// 변경 후: 5개 프로젝트
projects: [
  { /* 프로젝트 1 */ },
  { /* 프로젝트 2 */ },
  { /* 프로젝트 3 */ },
  { /* 프로젝트 4 */ },  // ← 새로 추가
  { /* 프로젝트 5 */ }   // ← 새로 추가
]
```
→ 페이지가 자동으로 새 프로젝트 카드를 생성합니다!

---

### 예시 3: 블로그 포스트 제거
```javascript
// 기존: 3개 포스트
blog: [
  { /* 포스트 1 */ },
  { /* 포스트 2 */ },  // 이 포스트를 제거하고 싶다면?
  { /* 포스트 3 */ }
]

// 변경 후: 2개 포스트
blog: [
  { /* 포스트 1 */ },
  { /* 포스트 3 */ }
]
```
→ 두 번째 포스트가 자동으로 사라집니다!

---

## 🌐 언어 전환 동작

- **페이지 로드 시:** 브라우저 저장소(localStorage)에서 마지막 선택한 언어를 기억
- **언어 버튼 클릭:** 즉시 모든 콘텐츠가 한국어 ⇄ English로 전환
- **자동 저장:** 선택한 언어가 저장되어 다음 방문 시 유지

---

## ⚙️ 기술 상세 정보

### SITE_CONTENT 객체 구조
```javascript
const SITE_CONTENT = {
  personal: { ... },      // 개인 정보
  about: { ... },         // About 섹션
  skills: [ ... ],        // Skills 배열
  projects: [ ... ],      // Projects 배열
  blog: [ ... ],          // Blog 배열
  contact: { ... },       // Contact 섹션
  footer: { ... }         // Footer
};
```

### 렌더링 함수들
| 함수 | 용도 |
|-----|------|
| `renderHeader()` | 헤더의 이름 표시 |
| `renderHero()` | Hero 섹션 (이름, 직함, 태그라인) |
| `renderAbout()` | About 섹션 (바이오, 태그) |
| `renderSkills()` | Skills 섹션 (카드 생성) |
| `renderProjects()` | Projects 섹션 (카드 생성) |
| `renderBlog()` | Blog 섹션 (카드 생성) |
| `renderContact()` | Contact 섹션 (폼 레이블) |
| `renderFooter()` | Footer (저작권) |
| `renderAllSections()` | 모든 섹션 한 번에 렌더링 |

### 언어 전환 함수
```javascript
setLanguage(lang)  // 'ko' 또는 'en'으로 언어 설정
```

---

## ✅ 검증 체크리스트

페이지 로드 후 다음을 확인하세요:

- [ ] 모든 섹션이 올바르게 표시됨
- [ ] 이름, 이메일 등 개인정보가 정확함
- [ ] 스킬, 프로젝트, 블로그 카드가 모두 보임
- [ ] 언어 버튼 클릭 시 한국어 ↔ English 전환됨
- [ ] 브라우저를 새로고침해도 선택한 언어가 유지됨
- [ ] 모바일 메뉴가 정상 작동
- [ ] Contact 폼이 작동
- [ ] 이메일 복사 버튼이 작동
- [ ] 콘솔에 에러 메시지 없음 (F12 → Console)

---

## 🐛 문제 해결

### 콘텐츠가 표시되지 않음
1. 브라우저 콘솔 확인 (F12 → Console)
2. JavaScript 문법 오류 확인 (쉼표, 따옴표 등)
3. 페이지 새로고침 시도 (Ctrl+F5 또는 Cmd+Shift+R)

### 특정 섹션만 업데이트 안 됨
1. 해당 `SITE_CONTENT` 객체의 문법 확인
2. 필요한 속성이 모두 있는지 확인
3. 데이터 타입이 올바른지 확인 (문자열은 따옴표로 감싸기)

### 스타일이 이상함
- Tailwind 색상명이 정확한지 확인 (typo 체크)
- 지원되는 색상: `teal`, `green`, `purple`, `cyan`, `blue`

---

## 💡 팁

1. **한 번에 한 가지만 수정:** 여러 항목을 동시에 수정하면 실수하기 쉬우니 하나씩 수정하세요.

2. **백업 만들기:** 큰 수정을 하기 전에 파일을 백업하세요.

3. **JSON 검증 사용:** https://jsonlint.com/ 에서 SITE_CONTENT 객체의 문법을 검증할 수 있습니다.

4. **개발자 도구 사용:** 브라우저 F12를 열어 Console 탭에서 `SITE_CONTENT` 를 직접 확인할 수 있습니다.

5. **정기적으로 테스트:** 모바일, 태블릿, 데스크탑에서 모두 테스트하세요.

---

## 📊 비교표

| 항목 | 이전 | 현재 |
|-----|-----|------|
| 콘텐츠 위치 | HTML 전체에 산재 | SITE_CONTENT 객체 |
| 편집 위치 | 여러 곳 | JavaScript 상단 한 곳 |
| 언어 관리 | data-lang-* 속성 | 한 객체에서 관리 |
| 아이템 추가 | HTML 카드 복제 | 배열에 객체 추가 |
| 실수 가능성 | 높음 | 낮음 |
| 유지보수성 | 어려움 | 쉬움 |

---

## 🎉 완료!

리팩토링이 완료되었습니다. 이제 `index.html` 파일의 상단 JavaScript에서 `SITE_CONTENT` 객체만 수정하면 모든 콘텐츠가 자동으로 업데이트됩니다.

**행운을 빕니다! 🚀**
