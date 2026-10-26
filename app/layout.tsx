import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trusted Advisers Realty Group",
  description: "Trusted real estate solutions, home valuations, and property advice.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
