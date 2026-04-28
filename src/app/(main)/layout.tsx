import type { Metadata } from "next";
import { Roboto, Tiro_Bangla } from "next/font/google";
import "../globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ['400', '500', '700']
});

const tiroBangla = Tiro_Bangla({
  variable: "--font-tiro-bangla", 
  subsets: ["bengali"],
  weight: ['400']
});

export const metadata: Metadata = {
  title: "An-Nujum Foundation",
  description: "Helping humanity through technology and care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${tiroBangla.variable} h-full antialiased`}
    >
      <body className={`${roboto.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}