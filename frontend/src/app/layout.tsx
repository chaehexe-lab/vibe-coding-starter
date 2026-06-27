import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "이채희 | 산업공학도",
  description: "부산대학교 산업공학과 이채희의 자기소개 페이지",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
