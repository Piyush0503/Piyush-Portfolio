import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Piyush — Full-Stack web Developer",
  description:
    "Portfolio of a full-stack developer specializing in Next js, React js, Express js, Node.js, Spring Boot, PostgreSQL, and MongoDB.",
  keywords: [
    "Next.js",
    "React",
    "Node.js",
    "Spring Boot",
    "PostgreSQL",
    "MongoDB",
    "full-stack developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrains.variable} min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
