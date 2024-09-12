import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Portofolio",
  description: "Portofolio Hilman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-body text-text`}
      >
        {children}
      </body>
    </html>
  );
}
