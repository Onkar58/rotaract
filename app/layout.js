import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rotaract Club of DYPCOE",
  description: "Empowering youth, serving communities, and building a better tomorrow.Join us in our mission to foster leadership, service, and fellowship.Together, we create meaningful impact through innovative projects and collaborative efforts.",
  keywords: "Rotaract Club of DYPCOE, Rotaract Club of DYP, DYPCOE, D.Y. Patil College of Engineering, Rotaract Club of D.Y. Patil College of Engineering, Rotaract Club of D.Y. Patil, Rotaract Club of D.Y. Patil College, Club of DYPCOE",
  author: "Rotaract Club of D.Y. Patil College of Engineering",
  robots: "index, follow",
  canonical: "https://www.rotaractdypcoe.org/",
  openGraph: {
    title: "Rotaract Club of DYPCOE",
    description: "Empowering youth, serving communities, and building a better tomorrow.Join us in our mission to foster leadership, service, and fellowship.Together, we create meaningful impact through innovative projects and collaborative efforts.",
    url: "https://www.rotaractdypcoe.org/",
    siteName: "Rotaract Club of DYPCOE",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.rotaractdypcoe.org/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Rotaract Club of DYPCOE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rotaract Club of DYPCOE",
    description: "Empowering youth, serving communities, and building a better tomorrow.Join us in our mission to foster leadership, service, and fellowship.Together, we create meaningful impact through innovative projects and collaborative efforts.",
    image: "https://www.rotaractdypcoe.org/opengraph-image.png",
  }
};


import { ScrollProvider } from "@/context/scrollContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollProvider>
          {children}
        </ScrollProvider>
      </body>
    </html>
  );
}
