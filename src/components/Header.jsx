import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation('common');

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          {t('app.name')}
        </Link>
        
        <nav className="flex items-center space-x-6">
          <Link href="/" className="hover:text-blue-200">
            {t('nav.home')}
          </Link>
          <Link href="/upload-profile" className="hover:text-blue-200">
            {t('nav.profile')}
          </Link>
          <Link href="/matches" className="hover:text-blue-200">
            {t('nav.matches')}
          </Link>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
};

export default Header;