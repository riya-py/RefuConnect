import React from 'react';
import { useTranslation } from 'react-i18next';

const MatchCard = ({ match }) => {
  const { t } = useTranslation('common');
  
  // Determine card color based on match type
  const cardColors = {
    job: 'border-blue-500',
    housing: 'border-green-500',
    service: 'border-purple-500'
  };
  
  const cardColor = cardColors[match.type] || 'border-gray-300';
  
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 border-l-4 ${cardColor} hover:shadow-lg transition-shadow`}>
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold">{match.title}</h3>
        <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
          {match.matchScore || '95'}% {t('matches.matchScore')}
        </div>
      </div>
      
      <p className="text-gray-600 mt-2">{match.description}</p>
      
      <div className="mt-3 text-sm text-gray-500">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {match.location}
        </div>
      </div>
      
      <div className="mt-4 flex space-x-2">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm">
          {t('matches.apply')}
        </button>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded text-sm">
          {t('matches.contact')}
        </button>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded text-sm">
          {t('matches.save')}
        </button>
      </div>
    </div>
  );
};

export default MatchCard;