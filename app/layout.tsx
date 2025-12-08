import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vuyela Group',
  description: 'Logistics Solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
