import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import SplashScreen from "./_components/SplashScreen";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const merr = Merriweather({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saad Ksioui — Software Engineer",
  description:
    "A modern, data-driven portfolio for Saad Ksioui focused on thoughtful digital experiences and polished web engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${merr.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
