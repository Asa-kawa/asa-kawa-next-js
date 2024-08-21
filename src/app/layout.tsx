import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "next-js",
  description: "これはnext-jsです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body>{children}</body>
    </html>
  );
}
