import type { Metadata } from "next";
import { Tomorrow } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";

const ubuntu = Tomorrow({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Gym Site",
  description: "Gym Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
