import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Echonet",
  description: "Web3 Native. AI Explorer. Writing for Gen Z.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className, "min-h-screen antialiased selection:bg-zinc-200 dark:selection:bg-zinc-800")}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
