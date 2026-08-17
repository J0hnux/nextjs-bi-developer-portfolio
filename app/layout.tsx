import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
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

export const metadata: Metadata = {
  title: "Iverson Doliente | Business Intelligence Developer",
  description:
    "Business intelligence developer specializing in Power BI, SQL, DAX, data modeling, and decision-ready dashboards.",
  keywords: [
    "Business Intelligence Developer",
    "BI Developer",
    "Power BI",
    "Data Analytics",
    "SQL",
    "Dashboard Developer",
    "business intelligence",
    "etl",
    "data analysis",
    "aws",
    "cloud",
    "data cleaning",
    "data transformation",
    "power query",
    "dax",
    "python",
    "visualization",
    "data modeling",
    "data engineering",
    "software engineering",
  ],
  openGraph: {
    title: "Iverson Doliente | Business Intelligence Developer",
    description:
      "Explore my BI projects, dashboards, data analysis work, and technical skills.",
    url: "https://iver-bi-dev.vercel.app/",
    siteName: "Iverson Doliente Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Iverson Doliente Business Intelligence Developer Portfolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
