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
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`antialiased bg-gradient-to-br from-body to-cyan-500 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
