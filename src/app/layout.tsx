import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Wealth Builders Conference",
  description:
    "A free day of practical money conversations on saving, investing and growing your income.",
  icons: {
    icon: [
      { url: "/logo1.png" },
      { url: "/icon.png" },
    ],
    shortcut: "/logo1.png",
    apple: "/logo1.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} font-sans antialiased`}
    >
      <body className="min-h-screen bg-[#0E4547] text-white font-sans antialiased selection:bg-[#f8c860] selection:text-[#0E4547]">
        {children}
      </body>
    </html>
  );
}
