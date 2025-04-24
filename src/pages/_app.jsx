import React, { useEffect } from 'react';
import { UserProvider } from '../context/UserContext';
import '../styles/globals.css';
import '../i18n/i18n';
import { useTranslation } from 'react-i18next';
import { setDocumentDirection } from '../utils/languageHelper';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  const { i18n } = useTranslation();

  // Set document direction based on language
  useEffect(() => {
    setDocumentDirection(i18n.language);
  }, [i18n.language]);

  return (
    <UserProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </UserProvider>
  );
}

export default MyApp;