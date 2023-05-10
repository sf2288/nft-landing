'use client';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { gruppo } from './fonts';
import { Providers } from './providers';
import './globals.css';

export const metadata = {
  title: 'NFT Marketplace',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gruppo.className} dark:bg-custom-blue bg-white`}>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
