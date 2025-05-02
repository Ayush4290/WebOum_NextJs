import '../app/globals.css';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

export const metadata = {
  title: 'Weboum ',
  description: 'Innovative software solutions for your business.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://stage.weboum.com/wp-content/uploads/2024/10/icon-weboum.png" type="image/x-icon" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}