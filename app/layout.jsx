/** @format */

import Link from "next/link";
import "./globals.css";
import Navbar from "../components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='flex flex-col min-h-screen px-40 py-10 bg-cyan-500'>
        <header>
          <Navbar />
        </header>
        <main className='mt-2 grow '>{children}</main>
        <footer className='text-center'>&copy; Sahal Nurdin</footer>
      </body>
    </html>
  );
}
