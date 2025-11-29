import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Satvik's Robotics - A 4-Hour Hands-On Adventure for Teens",
  description: "A 4-hour hands-on robotics adventure for curious teens (Ages 14–16). Build, play, explore — no computers required.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}


