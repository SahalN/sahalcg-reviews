/** @format */

import "./globals.css";
import Navbar from "../components/Navbar";
import { inter, mplusrounded1c } from "./fonts";

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${inter.variable} ${mplusrounded1c.variable} `}>
      <body className='flex flex-col min-h-screen px-40 py-10 bg-[#45474B] text-white'>
        <header>
          <Navbar />
        </header>
        <main className='mt-2 grow'>{children}</main>
        <footer className='text-center'>
          &copy; Sahal Nurdin | Copyright 2023
        </footer>
      </body>
    </html>
  );
}
