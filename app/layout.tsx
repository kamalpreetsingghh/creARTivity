import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import AppThemeProvider from "@/components/shared/AppThemeProvider";

const poppins = Poppins({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CreARTivity",
  description: "AI powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ variables: { colorPrimary: "#ED640D" } }}>
      <html lang="en">
        <body className={poppins.className}>
          <AppThemeProvider>{children}</AppThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
