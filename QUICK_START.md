# 빠른 시작 가이드 (Quick Start)

## 🚀 5분 안에 시작하기

### Step 1: index.html 열기
`index.html` 파일을 텍스트 에디터로 열고 `<script>` 섹션을 찾습니다.

### Step 2: SITE_CONTENT 객체 찾기
파일의 약 450줄 근처에 있는 `const SITE_CONTENT = { ... }` 를 찾습니다.

### Step 3: 콘텐츠 수정

#### 📝 예시 1: 이름 변경
```javascript
// Line ~375
personal: {
  name: "홍길동",  // "Hyungsu Jeon" → "홍길동" 변경
```

#### 📧 예시 2: 이메일 변경
```javascript
email: "myemail@example.com",  // "hyungsu.jeon@example.com" → "myemail@example.com"
```

#### 🎯 예시 3: 프로젝트 추가
```javascript
projects: [
  // ... 기존 3개 프로젝트 ...
  {
    status: { ko: "진행중", en: "In Progress" },
    statusColor: "teal",
    title: { ko: "새 프로젝트", en: "New Project" },
    description: {
      ko: "프로젝트 설명",
      en: "Project description"
    },
    tags: ["AI", "Python"]
  }
]
```

#### 📰 예시 4: 블로그 포스트 추가
```javascript
blog: [
  // ... 기존 3개 포스트 ...
  {
    date: { ko: "2024년 2월 20일", en: "Feb 20, 2024" },
    category: { ko: "새로운 카테고리", en: "New Category" },
    categoryColor: "blue",
    title: { ko: "새 글 제목", en: "New Post Title" },
    summary: {
      ko: "글 요약",
      en: "Post summary"
    },
    link: "https://myblog.com/post"
  }
]
```

### Step 4: 저장 및 새로고침
1. 파일 저장 (Ctrl+S 또는 Cmd+S)
2. 브라우저에서 index.html 새로고침 (F5 또는 Cmd+R)
3. 완료! ✨

---

## 🔧 주요 수정 위치

### personal (개인정보)
- **name:** 이름
- **role:** 직함
- **tagline:** 소개 한 줄
- **email:** 이메일
- **year:** 저작권 연도

### about (소개)
- **bio[0], bio[1]:** 두 문단의 소개 텍스트
- **tags:** 4개의 관심 분야/스킬 태그

### skills (전문 분야)
- 3개의 카드 (icon, title, description)

### projects (프로젝트)
- 배열에 항목 추가/제거로 자동 반영
- status, statusColor, title, description, tags

### blog (블로그)
- 배열에 항목 추가/제거로 자동 반영
- date, category, categoryColor, title, summary, link

### contact (연락처)
- subtitle 메시지

### footer (푸터)
- copyright 문구

---

## 🎨 사용 가능한 색상

**statusColor, categoryColor에 사용 가능:**
- `teal` (청록색) - 추천
- `green` (초록색)
- `purple` (보라색)
- `cyan` (밝은 청색)
- `blue` (파란색)

---

## ⚠️ 자주 하는 실수

### ❌ 실수 1: 쉼표 빠뜨리기
```javascript
// 틀린 예
{ ko: "텍스트1", en: "Text1" }  // ← 마지막 } 뒤에 쉼마 필요!
{ ko: "텍스트2", en: "Text2" }

// 올바른 예
{ ko: "텍스트1", en: "Text1" },  // ← ✓
{ ko: "텍스트2", en: "Text2" }
```

### ❌ 실수 2: 따옴표 미일치
```javascript
// 틀린 예
title: { ko: "제목', en: "Title" }  // ← 시작은 " 인데 끝은 '

// 올바른 예
title: { ko: "제목", en: "Title" }  // ← 모두 " 또는 모두 '
```

### ❌ 실수 3: 배열 끝의 쉼마
```javascript
// 틀린 예
blog: [
  { ... },
  { ... },
  { ... },  // ← 마지막 항목 뒤에 쉼마 있음! 다음 항목이 있으면 필요, 없으면 제거
]

// 올바른 예
blog: [
  { ... },
  { ... },
  { ... }  // ← 마지막 항목이므로 쉼마 없음
]
```

---

## 🧪 테스트 체크리스트

변경 후:

```
□ 브라우저를 새로고침 (Ctrl+F5 또는 Cmd+Shift+R)
□ 개발자 콘솔 확인 (F12) - 에러 없어야 함
□ 모든 콘텐츠가 화면에 표시되는지 확인
□ 한국어 버튼 클릭 → English 버튼 클릭 → 언어 전환 확인
□ 모바일 화면(스마트폰 크기)에서 확인
□ 데스크탑 화면에서 확인
□ 연락하기 폼 작동 확인 (submit 버튼 클릭)
□ 이메일 복사 버튼 작동 확인
```

---

## 📞 문제 해결

### Q: 페이지가 완전히 안 보여요
**A:**
1. 콘솔 확인 (F12 → Console 탭)
2. 빨간 에러 메시지 찾기
3. 보통 따옴표나 쉼마 오류입니다

### Q: 일부만 표시되지 않아요
**A:**
1. 해당 섹션의 SITE_CONTENT 객체 확인
2. 필수 속성이 모두 있는지 확인
3. 한국어/영어 양쪽 모두 입력되어 있는지 확인

### Q: 언어 전환이 안 돼요
**A:**
1. 콘솔에 에러 있는지 확인
2. 페이지 새로고침
3. 브라우저 캐시 비우기 (Ctrl+Shift+Delete)

### Q: 스타일이 이상해요
**A:**
1. 색상명이 정확한지 확인 (타이핑 오류)
2. 지원되는 색상: teal, green, purple, cyan, blue

---

## 💾 자주 수정하는 항목

### 매월 업데이트
```javascript
// 새 블로그 포스트 추가
blog: [
  {
    date: { ko: "2024년 3월 20일", en: "Mar 20, 2024" },
    category: { ko: "연구", en: "Research" },
    categoryColor: "teal",
    title: { ko: "제목", en: "Title" },
    summary: { ko: "요약", en: "Summary" },
    link: "https://blog.com/post"
  },
  // ... 기존 포스트들
]
```

### 분기별 업데이트
```javascript
// 새 프로젝트 추가 또는 상태 변경
projects: [
  {
    status: { ko: "완료", en: "Completed" },  // ← 상태 변경
    // ... 나머지 정보
  }
]
```

### 연도별 업데이트
```javascript
// 저작권 연도 변경
personal: {
  year: 2025  // 2024 → 2025
}
```

---

## 🎓 더 배우기

더 자세한 내용은 **REFACTORING_GUIDE.md** 파일을 참고하세요.

---

## 💡 Pro Tips

1. **온라인 에디터 사용:** VSCode, Sublime Text, Atom 등 사용하면 문법 에러를 더 쉽게 찾을 수 있습니다.

2. **Git 사용:** 변경 전에 `git commit`으로 백업하면 실수했을 때 쉽게 복구할 수 있습니다.

3. **JSON 검증:** https://jsonlint.com/ 에서 SITE_CONTENT 객체의 문법을 검증할 수 있습니다.

4. **개발자 도구:**
   ```
   브라우저 F12 → Console 탭 → SITE_CONTENT 입력
   ```
   실시간으로 현재 데이터를 확인할 수 있습니다.

---

**작은 변경도 큰 결과를 만듭니다! 🚀**
