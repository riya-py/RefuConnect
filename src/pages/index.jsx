import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { getTextAlignment } from '../utils/languageHelper';

export default function Home() {
  const { t, i18n } = useTranslation('common');
  const textAlignClass = getTextAlignment(i18n.language);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className={`container mx-auto px-4 py-16 ${textAlignClass}`}>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
            {t('landing.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {t('landing.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/upload-profile" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-colors">
              {t('landing.createProfile')}
            </Link>
            <Link href="#features" className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-6 rounded-lg shadow-md border border-blue-200 transition-colors">
              {t('landing.learnMore')}
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <h2 className={`text-3xl font-bold text-center mb-12 ${textAlignClass}`}>How It Works</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mb-4">1</div>
            <h3 className={`text-xl font-semibold mb-3 ${textAlignClass}`}>Create Your Profile</h3>
            <p className={`text-gray-600 ${textAlignClass}`}>Tell us about your skills, experience, language abilities, and what you're looking for.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mb-4">2</div>
            <h3 className={`text-xl font-semibold mb-3 ${textAlignClass}`}>AI-Powered Matching</h3>
            <p className={`text-gray-600 ${textAlignClass}`}>Our intelligent system finds the best opportunities that match your unique profile.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mb-4">3</div>
            <h3 className={`text-xl font-semibold mb-3 ${textAlignClass}`}>Connect & Thrive</h3>
            <p className={`text-gray-600 ${textAlignClass}`}>Apply for jobs, find housing, and access essential services to help you succeed.</p>
          </div>
        </div>
      </section>
    </div>
  );
}