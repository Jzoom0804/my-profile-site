import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '카운터 앱',
  description: '간단한 카운터 컴포넌트',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
