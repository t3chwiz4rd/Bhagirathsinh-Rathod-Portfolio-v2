import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/common/theme-provider";

const spaceMono = Space_Mono({
  weight: ["400","700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhagirathsinh Rathod",
  description: "Portfolio of Bhagirathsinh Rathod, a passionate frontend developer based in Vadodara, Gujarat, India. Explore projects, skills, and contact information.",
  keywords: [
    "Bhagirathsinh Rathod",
    "Frontend Developer",
    "Backend Developer",
    "Python Developer",
    "Fullstack Developer",
    "Full Stack Developer",
    "Vadodara Developer",
    "Portfolio",
    "Web Developer India",
  ],
  authors: [{ name: "Bhagirathsinh Rathod", url: "https://yourdomain.com" }],
  creator: "Bhagirathsinh Rathod",
  publisher: "Bhagirathsinh Rathod",
  openGraph: {
    title: "Bhagirathsinh Rathod — Frontend Developer",
    description: "Portfolio of Bhagirathsinh Rathod based in Gujarat, India.",
    url: "https://yourdomain.com",
    siteName: "Bhagirathsinh Rathod Portfolio",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bhagirathsinh Rathod Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceMono.variable} min-h-screen antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
