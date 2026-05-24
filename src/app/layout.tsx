import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { JetBrains_Mono, Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Vicky's Cuisine",
  description: "Order your favourite Nigerian dishes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("font-mono", jetbrainsMono.variable, montserrat.variable)}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans antialiased">
        <Providers>
          {children}

          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "#1a1208",
                color: "#f5f0e8",
                border: "1px solid #3d2b10",
                fontFamily: "DM Sans, sans-serif",
                fontSize: "14px",
              },
              success: {
                iconTheme: { primary: "#21c55e", secondary: "#1a1208" },
              },
              error: {
                iconTheme: { primary: "#ef4444", secondary: "#1a1208" },
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
