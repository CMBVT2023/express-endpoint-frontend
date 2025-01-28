import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ProjectQueryProvider from "@/utils/project-query-provider";
import URLContextProvider from "@/utils/url-context-provider";
import LoginCheck from "@/utils/login-check";

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
    <html lang="en" className="h-full w-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoginCheck>
          <URLContextProvider>
            <ProjectQueryProvider>
              <div className="h-dvh">{children}</div>
            </ProjectQueryProvider>
          </URLContextProvider>
        </LoginCheck>
      </body>
    </html>
  );
}
