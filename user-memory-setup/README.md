# 카운터 앱

간단한 카운터 컴포넌트를 구현한 Next.js 프로젝트입니다.

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

개발 서버가 시작되면 [http://localhost:3000](http://localhost:3000)에서 애플리케이션을 확인할 수 있습니다.

## 프로젝트 구조

```
src/
├── app/
│   ├── page.tsx          # 메인 페이지
│   ├── layout.tsx        # 루트 레이아웃
│   └── globals.css       # 전역 스타일
├── components/
│   └── Counter.tsx       # 카운터 컴포넌트
```

## 기술 스택

- **React 18** - UI 라이브러리
- **Next.js 14** - React 프레임워크
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 유틸리티 CSS

## 기능

- ✅ 숫자 증가 (+ 버튼)
- ✅ 숫자 감소 (- 버튼)
- ✅ 숫자 초기화 (초기화 버튼)
- ✅ 반응형 UI 디자인

## 빌드 및 배포

```bash
# 프로젝트 빌드
npm run build

# 프로덕션 서버 실행
npm start
```
