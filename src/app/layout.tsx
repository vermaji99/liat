import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import CustomCursor from "@/components/ui/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-display",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "The Grand Estate | Global Retail & Lifestyle Destination",
  description: "A premium interactive sales deck for the world's most prestigious shopping destination.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body
        className={cn(
          inter.variable,
          playfair.variable,
          "min-h-screen bg-background text-foreground font-display antialiased"
        )}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
