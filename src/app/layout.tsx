import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ProjectQueryProvider from '@/utils/project-query-provider'
import ContextProvider from "@/utils/context-provider";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <ContextProvider>
            <ProjectQueryProvider>
                {children}
            </ProjectQueryProvider>
          </ContextProvider>
      </body>
    </html>
  );
}
