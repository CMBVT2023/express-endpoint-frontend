import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ProjectQueryProvider from '@/utils/project-query-provider'
import Link from "next/link";
import URLContextProvider from "@/utils/url-context-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Express Endpoint Practice Project",
  description: "Front end for an express endpoint practice project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-dvh">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <header className="flex gap-4">
            <Link href={'/'}>Home</Link>
            <Link href={'add-car'}>Add</Link>
            <Link href={'log-in'}>Login</Link>
          </header>

          <URLContextProvider>
            <ProjectQueryProvider>
                {children}
            </ProjectQueryProvider>
          </URLContextProvider>
      </body>
    </html>
  );
}
