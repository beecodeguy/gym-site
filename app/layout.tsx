import { Tomorrow } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { OG_IMAGE } from "@/consts";

const ubuntu = Tomorrow({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: {
    template: "%s | Gym Site",
    default: "Gym Site",
  },
  description: "Gym Site",
  other: {
    "color-scheme": "dark only",
    "twitter:image": OG_IMAGE,
    "twitter:card": "summary_large_image",
    "og:url": "GYM",
    "og:image": OG_IMAGE,
    "og:type": "website",
    robots: "index",
  },
  applicationName: "GYM",
  creator: "BeecodeGuy",
  publisher: "BeecodeGuy",
  keywords: [
    "GYM",
    "FITNESS",
    "HEALTH and FITNESS",
    "FIT WORLD",
    "EXERCISES",
    "YOGA",
  ],
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
