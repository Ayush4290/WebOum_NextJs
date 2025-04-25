import '../app/globals.css';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

export const metadata = {
  title: 'Weboum Technology',
  description: 'Innovative software solutions for your business.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}