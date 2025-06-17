import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { ThemeProvider } from "./context/themeProvider";
import { ModelProvider } from "./context/modelProvider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Git View",
    description: "View your github contribution in 3d",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <link rel="icon" href="/favicon.png" sizes="any" />

            <body
                className={`${geistSans.variable} ${geistMono.variable} dark:bg-black antialiased mt-0`}
            >
                <ModelProvider>{children}</ModelProvider>
                {/* sidebar */}
            </body>
        </html>
    );
}
