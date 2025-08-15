import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Createishwari Solutions",
  description: "Tech solutions and Ai services",
};

async function fetchBooleanStatus() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/status`, {
      cache: "no-store", 
    });
    const json = await res.json();
    if (json.success && json.data.length > 0) {
      return json.data[0].isActive; 
    }
    return false;
  } catch (error) {
    console.error("Error fetching status:", error);
    return false;
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isActive = await fetchBooleanStatus();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {isActive ? (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <h1 style={{ color: "red" }}>Site is under maintenance</h1>
          </div>
        ) : (
          <>
            <Navigation />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
