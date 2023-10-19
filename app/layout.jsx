/** @format */

import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='flex flex-col min-h-screen px-40 py-10 '>
        <header>
          <nav>
            <ul className='flex gap-2 '>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li className='ml-auto'>
                <Link href='/reviews'>Reviews</Link>
              </li>
              <li>
                <Link href='/about'>About</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className='mt-2'>{children}</main>
        <footer>Sahal Nurdin</footer>
      </body>
    </html>
  );
}
