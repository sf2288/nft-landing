import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { gruppo } from './fonts';
import './globals.css';

export const metadata = {
  title: 'NFT Marketplace',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gruppo.className}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
