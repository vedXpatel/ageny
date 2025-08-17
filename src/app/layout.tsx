import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agency - Web Development & Digital Solutions",
  description: "Professional web development agency specializing in custom web applications, mobile apps, and digital solutions. Transform your ideas into powerful web experiences.",
  keywords: ["web development", "agency", "digital solutions", "custom web apps", "mobile development"],
  authors: [{ name: "Agency" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
