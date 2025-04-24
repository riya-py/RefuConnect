/**
 * Helper functions for language-related functionality
 */

/**
 * Determines if the current language is RTL (Right-to-Left)
 * @param {string} language - The language code
 * @returns {boolean} - True if the language is RTL
 */
export const isRTL = (language) => {
  const rtlLanguages = ['ar', 'he', 'fa', 'ur'];
  return rtlLanguages.includes(language);
};

/**
 * Sets the document direction based on language
 * @param {string} language - The language code
 */
export const setDocumentDirection = (language) => {
  document.documentElement.dir = isRTL(language) ? 'rtl' : 'ltr';
};

/**
 * Gets text alignment based on language direction
 * @param {string} language - The language code
 * @returns {string} - CSS text alignment value
 */
export const getTextAlignment = (language) => {
  return isRTL(language) ? 'text-right' : 'text-left';
};