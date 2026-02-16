import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-2xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            Next.js 15 Starter
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            미니멀하고 확장 가능한 스타터킷
          </p>
        </div>

        <Card className="p-6 space-y-4">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
            포함된 기능
          </h2>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>Next.js 15 (App Router)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>TypeScript</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>TailwindCSS v4</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>shadcn/ui</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>다크모드 지원</span>
            </li>
          </ul>
        </Card>

        <Card className="p-6 space-y-4">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
            시작하기
          </h2>
          <p className="text-slate-700 dark:text-slate-300">
            프로젝트가 준비되었습니다. 아래의 단계를 따르세요:
          </p>
          <ol className="space-y-2 text-slate-700 dark:text-slate-300 list-decimal list-inside">
            <li>필요한 컴포넌트를 추가합니다</li>
            <li>페이지를 만들고 라우트를 설정합니다</li>
            <li>API 라우트를 구현합니다 (필요시)</li>
          </ol>
        </Card>

        <div className="flex gap-4 justify-center">
          <Button variant="default">시작하기</Button>
          <Button variant="outline">문서</Button>
        </div>
      </div>
    </main>
  );
}
