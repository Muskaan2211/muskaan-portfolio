import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Muskaan Gauba | Software Engineer",
  description: "Backend, data systems and full-stack portfolio of Muskaan Gauba.",
  openGraph: {
    title: "Muskaan Gauba | Software Engineer",
    description: "Backend, data systems and full-stack portfolio.",
    url: "https://muskaan-portfolio-pearl.vercel.app",
    siteName: "Muskaan Portfolio",
    images: [{ url: "/Muskaan_pic.JPG", width: 800, height: 800, alt: "Muskaan Gauba" }],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
