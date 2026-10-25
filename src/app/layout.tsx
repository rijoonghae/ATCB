import type { Metadata } from "next";
import { EB_Garamond, Handjet, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const handjet = Handjet({
  variable: "--font-handjet-face",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "All the Cities Burned",
  description: "A personal archive of work, thoughts, and observations.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("antialiased", garamond.variable, jetBrainsMono.variable, handjet.variable, "font-sans", inter.variable)}
    >
      <body>{children}</body>
    </html>
  );
}
