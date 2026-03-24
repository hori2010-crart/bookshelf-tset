export const metadata = {
  title: "맞춤 책장",
  description: "사이즈 맞춤 제작 서비스",
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