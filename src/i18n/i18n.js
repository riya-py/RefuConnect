import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        common: require('../../public/locales/en/common.json')
      },
      ar: {
        common: require('../../public/locales/ar/common.json')
      }
    },
    defaultNS: 'common'
  });

export default i18n;