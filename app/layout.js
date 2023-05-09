'use client';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { gruppo } from './fonts';
import './globals.css';
// import { ThemeProvider } from 'next-themes';
import { Providers } from './providers';

export const metadata = {
  title: 'NFT Marketplace',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gruppo.className}`}>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
