import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Wisetech Electroservices Ltd | Electrical & Mechanical Engineering Kenya",
  description: "Premier electrical and mechanical engineering services in Kenya. Specialized in power panel fabrication, motor rewinding, installations, and commissioning. Based in Kitengela.",
  keywords: "electrical installation Kenya, power panel fabrication Kitengela, motor rewinding Kenya, control panels, electrical engineering services, power house construction",
  authors: [{ name: "Wisetech Electroservices Ltd" }],
  openGraph: {
    title: "Wisetech Electroservices Ltd | Electrical & Mechanical Engineering Kenya",
    description: "Specialists in Mechanical and Electrical Engineering Works - Kitengela, Kenya",
    type: "website",
    locale: "en_KE",
    siteName: "Wisetech Electroservices Ltd",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wisetech Electroservices Ltd",
    description: "Specialists in Mechanical and Electrical Engineering Works",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

