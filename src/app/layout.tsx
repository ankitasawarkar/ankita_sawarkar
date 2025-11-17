import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ankita Sawarkar | Technical Expert - Full Stack Developer & AI Engineer",
  description: "Passionate Technical Expert specializing in Full Stack Development, Data Science & AI, and Cloud Services. Experienced in Java, Spring, React, Python, Machine Learning, and AWS.",
  keywords: ["Ankita Sawarkar", "Full Stack Developer", "AI Engineer", "Data Science", "Machine Learning", "Java", "Spring Boot", "React", "Python", "AWS"],
  authors: [{ name: "Ankita Sawarkar" }],
  openGraph: {
    title: "Ankita Sawarkar | Technical Expert",
    description: "Full Stack Developer & AI Engineer with expertise in Java, Python, and Cloud Technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
