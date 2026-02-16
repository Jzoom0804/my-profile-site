# Next.js 15 Starter Kit

미니멀하고 확장 가능한 Next.js 15 스타터킷입니다. 최신 기술 스택을 사용하여 빠르게 웹 개발을 시작할 수 있습니다.

## 🎨 기술 스택

- **Next.js 15**: App Router를 사용한 최신 React 프레임워크
- **TypeScript**: 타입 안정성을 위한 정적 타입 언어
- **TailwindCSS v4**: 최신 CSS 프레임워크 (CSS 파일 기반 설정)
- **shadcn/ui**: 재사용 가능한 UI 컴포넌트
- **lucide-react**: 고품질 아이콘 라이브러리
- **next-themes**: 다크모드 지원

## 🚀 빠른 시작

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

http://localhost:3000 에서 앱을 확인할 수 있습니다.

### 프로덕션 빌드

```bash
npm run build
npm start
```

## 📁 프로젝트 구조

```
├── app/
│   ├── (routes)/           # 페이지 라우트 그룹
│   ├── api/                # API 라우트 (추후 추가)
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 홈페이지
│   └── globals.css         # 전역 스타일
├── components/
│   ├── ui/                 # shadcn/ui 컴포넌트
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── theme-provider.tsx  # 테마 프로바이더
│   └── theme-toggle.tsx    # 다크모드 토글
├── lib/
│   └── utils.ts            # 유틸리티 함수
├── public/                 # 정적 파일
├── components.json         # shadcn/ui 설정
├── next.config.ts          # Next.js 설정
├── postcss.config.mjs      # PostCSS 설정
├── tailwind.config.ts      # TailwindCSS 설정 (선택사항)
└── tsconfig.json           # TypeScript 설정
```

## 🎯 주요 기능

### 다크모드 지원
`next-themes`를 사용하여 라이트/다크 모드를 쉽게 전환할 수 있습니다. 우측 상단의 토글 버튼을 클릭하여 테마를 변경합니다.

### shadcn/ui 컴포넌트
버튼, 카드 등 shadcn/ui의 다양한 컴포넌트를 사용할 수 있습니다.

```bash
# 컴포넌트 추가
npx shadcn@latest add [component-name]
```

## 📚 추가 기능 통합 가이드

### 1. 인증 추가 (NextAuth.js)

```bash
npm install next-auth @auth/core
```

[NextAuth.js 문서](https://next-auth.js.org)를 참고하세요.

### 2. 폼 검증 (React Hook Form + Zod)

```bash
npm install react-hook-form zod
```

```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export default function LoginForm() {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* 폼 필드 */}
    </form>
  );
}
```

### 3. API 라우트

```typescript
// app/api/example/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: "Hello, World!" });
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  return NextResponse.json({ received: data });
}
```

### 4. 데이터베이스 연동

#### Prisma ORM 설정

```bash
npm install @prisma/client
npx prisma init
```

### 5. 환경 변수

`.env.local` 파일에 환경 변수를 설정합니다.

```
NEXT_PUBLIC_API_URL=http://localhost:3000
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
```

## 🛠️ 커스텀 스크립트

### 타입 체크

```bash
npm run type-check
```

TypeScript 타입 오류를 확인합니다.

### 린트

```bash
npm run lint
```

ESLint로 코드를 검사합니다.

## 📝 개발 팁

### Tailwind CSS v4 특징

TailwindCSS v4는 단일 `@import` 문으로 모든 기능을 포함합니다:

```css
@import "tailwindcss";
```

커스텀 테마 변수를 추가할 수 있습니다:

```css
@import "tailwindcss";

@theme {
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
}
```

### 다크모드 클래스

```typescript
// 컴포넌트에서 다크모드 클래스 사용
<div className="bg-white dark:bg-slate-950">
  다크모드가 자동으로 적용됩니다
</div>
```

## 📦 패키지 관리

### 의존성 업데이트

```bash
npm update
npm outdated
```

### 새 의존성 추가

```bash
npm install [package-name]
```

## 🚀 배포

### Vercel에 배포

```bash
npm install -g vercel
vercel
```

### Docker 배포

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📚 유용한 리소스

- [Next.js 공식 문서](https://nextjs.org/docs)
- [TypeScript 핸드북](https://www.typescriptlang.org/docs)
- [TailwindCSS 문서](https://tailwindcss.com/docs)
- [shadcn/ui 문서](https://ui.shadcn.com)
- [Vercel 배포 가이드](https://vercel.com/docs)

## 📄 라이선스

MIT

## 🤝 기여

개선 사항이나 버그 리포트는 이슈를 통해 알려주세요.
