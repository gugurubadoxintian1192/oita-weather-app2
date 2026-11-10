import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '大分県特化型 アグリ・マリン気象ポータル',
  description: '大分県の農業・釣り向け気象データ集約アプリケーション',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-slate-950 text-slate-100 min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
