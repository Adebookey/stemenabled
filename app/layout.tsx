import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://stemenabled.ng"),
  title: { default: "STEMEnabled | STEM Transformation Partner for Schools", template: "%s | STEMEnabled" },
  description: "STEM labs, teacher training, student programmes and STEM consulting for future-ready schools in Nigeria.",
  keywords: ["STEM education Nigeria","STEM lab setup Nigeria","robotics training for schools Nigeria","teacher STEM training Nigeria","AI education for schools Nigeria","STEM education Lagos"],
  openGraph: { title: "STEMEnabled | Build a School That Prepares Students for the Future", description: "STEM labs, teacher capability and practical technology programmes for schools.", type: "website", locale: "en_NG" }
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body><Header />{children}<Footer /></body></html>;
}
