import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "RunForCure Marathon 2025 - Pune",
    description: "Join us for the inspiring RunForCure Marathon 2025 – a 10 km race in Pune filled with energetic vibes, stunning views, and amazing rewards for all participants. Sign up today!",
    keywords: "RunForCure Marathon, Run for Cure Marathon, run for cure marathon, 10 km race, 10 km Marathon, Marathon Pune, marathon in Pune, Pune running event, Pune marathon, Pune marathon 2025, RunForCure Marathon 2025, RunForCure Marathon Pune, RunForCure Marathon 2025 Pune, RunForCure Marathon 2025 in Pune, Maharastra marathon, marathon in Maharastra, RunForCure Marathon 2025 in Maharastra, marathon registration, Pune events, running event Pune, fun run Pune",
    author: "Rotaract Club of D.Y. Patil College of Engineering",
    robots: "index, follow",
    canonical: "https://www.rotaractdypcoe.org/marathon/",
    openGraph: {
        title: "RunForCure Marathon 2025 - Pune",
        description: "Join us for the inspiring RunForCure Marathon 2025 – a 10 km race in Pune filled with energetic vibes,stunning views, and amazing rewards for all participants. Sign up today!",
        url: "https://www.rotaractdypcoe.org/marathon/",
        siteName: "RunForCure Marathon 2025",
        images: [
            {
                url: "https://www.rotaractdypcoe.org/marathon/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "RunForCure Marathon 2025",
            },
        ],
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "RunForCure Marathon 2025 - Pune",
        description: "Join us for the inspiring RunForCure Marathon 2025 in Pune filled with energetic vibes...",
        image: "https://www.rotaractdypcoe.org/marathon/opengraph-image.png",
    }
};

import { ScrollProvider } from "@/context/scrollContext";

export default function MarathonLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
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
