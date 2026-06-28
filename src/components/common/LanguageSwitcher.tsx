'use client';

import { useEffect, useState } from 'react';
import { Globe } from 'lucide-react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('English');

  useEffect(() => {
    // Add Google Translate script
    const addScript = document.createElement('script');
    addScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    addScript.async = true;
    document.body.appendChild(addScript);

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,hi,te',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    // Cleanup
    return () => {
      document.body.removeChild(addScript);
      delete window.googleTranslateElementInit;
    };
  }, []);

  const changeLanguage = (langCode: string, langName: string) => {
    const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (selectElement) {
      selectElement.value = langCode;
      selectElement.dispatchEvent(new Event('change'));
      setCurrentLang(langName);
      setIsOpen(false);
    }
  };

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी (Hindi)' },
    { code: 'te', name: 'తెలుగు (Telugu)' },
  ];

  return (
    <div className="relative z-50">
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" className="hidden"></div>
      
      {/* Custom Dropdown Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg backdrop-blur-sm transition-all text-sm font-medium"
      >
        <Globe className="w-4 h-4 text-cyan-400" />
        <span className="hidden sm:inline-block">{currentLang}</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-[#0f172a]/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden">
          <div className="p-1 flex flex-col">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code, lang.name)}
                className={`text-left px-4 py-2 text-sm rounded-lg hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors ${
                  currentLang === lang.name ? 'text-cyan-400 bg-cyan-500/10' : 'text-gray-300'
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      )}
      
      <style jsx global>{`
        /* Hide the top Google Translate banner */
        body { top: 0 !important; }
        .skiptranslate > iframe.skiptranslate { display: none !important; visibility: hidden !important; }
        /* Hide google translate tooltips on hover */
        .goog-text-highlight { background-color: transparent !important; box-shadow: none !important; }
      `}</style>
    </div>
  );
}
