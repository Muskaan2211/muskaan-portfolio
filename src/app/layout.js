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
  
  title: "Muskaan | Software Engineer",
  description:
    "Portfolio of Muskaan  — Backend, Data, and Full-Stack Engineer",

  openGraph: {
    title: "Muskaan | Software Engineer",
    description:
      "Portfolio of Muskaan — Backend, Data, and Full-Stack Engineer",
    url: "https://muskaan-portfolio-pearl.vercel.app",
    siteName: "Muskaan Portfolio",
    images: [
      {
        url: "/Muskaan_pic.JPG", // must be in /public
        width: 800,
        height: 800,
        alt: "Muskaan",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Muskaan | Software Engineer",
    description:
      "Backend • Data • Full-Stack | Portfolio",
    images: ["/Muskaan_pic.JPG"],
  },


};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
