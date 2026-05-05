import { Roboto, Tiro_Bangla } from "next/font/google";
import "../globals.css";
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

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

export const metadata = {
  title: "An-Nujum Foundation",
  description: "Helping humanity through technology and care",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme='light'
      className={`${roboto.variable} ${tiroBangla.variable} h-full antialiased`}
    >
      <body className={`${roboto.className} min-h-full flex flex-col`}>
        <Navbar />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}