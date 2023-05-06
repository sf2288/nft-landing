import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';

export const metadata = {
  title: 'NFT Marketplace',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
