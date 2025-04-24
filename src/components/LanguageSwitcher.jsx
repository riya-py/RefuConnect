import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation('common');
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 bg-blue-700 px-3 py-1 rounded hover:bg-blue-800"
      >
        <span>{t('language.select')}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <div className="py-1">
            <button
              onClick={() => changeLanguage('en')}
              className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-100"
            >
              {t('language.en')}
            </button>
            <button
              onClick={() => changeLanguage('ar')}
              className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-100"
            >
              {t('language.ar')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;