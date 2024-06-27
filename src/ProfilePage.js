import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { TiSocialYoutube, TiSocialTwitter, TiSocialInstagram, TiSocialFacebook } from "react-icons/ti";
import { SlSocialGoogle } from "react-icons/sl";
import { FaPinterest, FaChevronDown } from "react-icons/fa";
import { MdRateReview, MdDarkMode, MdLightMode } from "react-icons/md";

const OttomanMotif = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M50 0 Q75 25 100 25 Q75 50 100 75 Q75 75 50 100 Q25 75 0 75 Q25 50 0 25 Q25 25 50 0" fill="none" stroke="currentColor" strokeWidth="2"/>
    <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M50 0 L50 100 M0 25 L100 75 M0 75 L100 25" fill="none" stroke="currentColor" strokeWidth="1"/>
  </svg>
);

const translations = {
  en: {
    title: "Hafız Mustafa",
    slogan: "A journey of taste from the Ottoman Empire to the present day",
    menuTitle: "Menu",
    ourStory: "Our Story",
    locations: "Locations",
    contactUs: "Contact Us",
    privacyPolicy: "Privacy Policy",
    shareLink: "Share Link",
    copyLink: "Copy Link",
    close: "Close"
  },
  tr: {
    title: "Hafız Mustafa",
    slogan: "Osmanlı'dan günümüze lezzet yolculuğu",
    menuTitle: "Menü",
    ourStory: "Hikayemiz",
    locations: "Şubelerimiz",
    contactUs: "İletişim",
    privacyPolicy: "Gizlilik Politikası",
    shareLink: "Bağlantıyı Paylaş",
    copyLink: "Bağlantıyı Kopyala",
    close: "Kapat"
  },
  ar: {
    title: "حافظ مصطفى",
    slogan: "رحلة المذاق من الإمبراطورية العثمانية إلى يومنا هذا",
    menuTitle: "القائمة",
    ourStory: "قصتنا",
    locations: "مواقعنا",
    contactUs: "اتصل بنا",
    privacyPolicy: "سياسة الخصوصية",
    shareLink: "مشاركة الرابط",
    copyLink: "نسخ الرابط",
    close: "إغلاق"
  },
  ru: {
    title: "Хафыз Мустафа",
    slogan: "Путешествие вкуса от Османской империи до наших дней",
    menuTitle: "Меню",
    ourStory: "Наша История",
    locations: "Расположение",
    contactUs: "Свяжитесь с нами",
    privacyPolicy: "Политика конфиденциальности",
    shareLink: "Поделиться ссылкой",
    copyLink: "Копировать ссылку",
    close: "Закрыть"
  },
  fa: {
    title: "حافظ مصطفی",
    slogan: "سفر طعم از امپراتوری عثمانی تا به امروز",
    menuTitle: "منو",
    ourStory: "داستان ما",
    locations: "مکان‌ها",
    contactUs: "تماس با ما",
    privacyPolicy: "سیاست حفظ حریم خصوصی",
    shareLink: "اشتراک‌گذاری لینک",
    copyLink: "کپی لینک",
    close: "بستن"
  }
};

const ProfilePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [currentLink, setCurrentLink] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const t = translations[language];

  const links = [
    { name: 'Instagram', url: 'https://www.instagram.com/hafizmustafa1864', icon: <TiSocialInstagram /> },
    { name: 'Facebook', url: 'https://www.facebook.com/HafizMustafa1864', icon: <TiSocialFacebook /> },
    { name: 'Twitter', url: 'https://twitter.com/hafizmustafa1864', icon: <TiSocialTwitter /> },
    { name: 'YouTube', url: 'https://www.youtube.com/hafizmustafa1864', icon: <TiSocialYoutube /> },
    { name: 'Pinterest', url: 'https://www.pinterest.com/hafizmustafa1864', icon: <FaPinterest /> },
    { name: 'TripAdvisor Review', url: 'https://www.tripadvisor.com.tr/UserReviewEdit-g293974-d27718952-HafIz_Mustafa_1864_Nisantas-Istanbul.html', icon: <MdRateReview /> },
    { name: 'Google Maps', url: 'https://www.google.com/maps/place/Haf%C4%B1z+Mustafa+1864+Ni%C5%9Fanta%C5%9F%C4%B1/@41.0489608,28.9908803,17z/data=!3m1!4b1!4m6!3m5!1s0x14cab71f57738f2f:0x75f42bd3c25f107!8m2!3d41.0489608!4d28.9934552!16s%2Fg%2F11y3cflt1f?entry=ttu', icon: <SlSocialGoogle /> },
  ];

  const handleShare = (url) => {
    setCurrentLink(url);
    setShowSharePopup(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentLink);
    alert('Link copied to clipboard!');
  };

  return (
    <>
      <Helmet>
        <title>Hafız Mustafa Links</title>
        <link rel="icon" href="/hafiz-mustafa-logo.webp" type="image/webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Scheherazade+New:wght@400;700&display=swap" rel="stylesheet" />
        <style>
          {`
            body {
              font-family: "Amiri", serif;
            }
            .scheherazade-heading {
              font-family: "Scheherazade New", serif;
            }
          `}
        </style>
      </Helmet>
      <div className="min-h-screen bg-[#fefefd] dark:bg-[#0a0807] flex flex-col items-center pt-4 sm:pt-6 px-4 relative overflow-hidden transition-colors duration-300">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#ccb8a9] rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#bd8a3d] rounded-tr-full"></div>
        </div>
        
        {/* Ottoman Motifs */}
        <OttomanMotif className="absolute top-10 left-10 w-20 h-20 text-[#bd8a3d] opacity-20 rotate-45 animate-pulse" />
        <OttomanMotif className="absolute top-1/4 right-10 w-16 h-16 text-[#603f2a] opacity-15 -rotate-12 animate-bounce" />
        <OttomanMotif className="absolute bottom-1/4 left-20 w-24 h-24 text-[#ccb8a9] opacity-25 rotate-90 animate-spin" />
        <OttomanMotif className="absolute bottom-10 right-20 w-20 h-20 text-[#bd8a3d] opacity-20 rotate-180 animate-pulse" />
        
        <div className="w-full max-w-md z-10">
          {/* Top controls */}
          <div className="flex justify-between items-center mb-6">
            <motion.button 
              className="text-[#603f2a] dark:text-[#ccb8a9] text-xl sm:text-2xl bg-opacity-50 bg-[#ccb8a9] dark:bg-opacity-50 dark:bg-[#603f2a] rounded-full p-2"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowMenu(true)}
            >
              •••
            </motion.button>
            <div className="flex items-center space-x-2">
              <motion.div className="relative" whileHover={{ scale: 1.05 }}>
                <select 
                  value={language} 
                  onChange={(e) => setLanguage(e.target.value)}
                  className="appearance-none bg-[#fefefd] dark:bg-[#0a0807] text-[#000000] dark:text-[#fefefd] border-2 border-[#bd8a3d] rounded-lg px-4 py-2 pr-8 font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#bd8a3d]"
                >
                  <option value="en">EN</option>
                  <option value="tr">TR</option>
                  <option value="ar">AR</option>
                  <option value="ru">RU</option>
                  <option value="fa">FA</option>
                </select>
                <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#bd8a3d] pointer-events-none" />
              </motion.div>
              <motion.button
                className="p-2 rounded-full bg-[#ccb8a9] dark:bg-[#603f2a] text-[#000000] dark:text-[#fefefd] focus:outline-none focus:ring-2 focus:ring-[#bd8a3d]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? <MdLightMode /> : <MdDarkMode />}
              </motion.button>
            </div>
          </div>
  
          {/* Hafız Mustafa Logo */}
          <div className="relative w-full flex justify-center items-center mb-4">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 0.8
              }}
              className="w-24 h-24 sm:w-32 sm:h-32 relative z-10"
            >
              <img 
                src={process.env.PUBLIC_URL + '/hafiz-mustafa-logo.webp'} 
                alt="Hafız Mustafa Logo" 
                className="w-full h-full object-contain"
              />
            </motion.div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-36 sm:h-36 bg-[#fefefd] dark:bg-[#0a0807] rounded-full shadow-lg -z-10"></div>
          </div>
          
          <motion.div 
            className="flex flex-col items-center mb-6 sm:mb-8"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold scheherazade-heading text-[#000000] dark:text-[#fefefd] text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#bd8a3d] to-[#603f2a]">
                {t.title}
              </span>
            </h1>
            <p className="text-sm sm:text-base text-[#603f2a] dark:text-[#ccb8a9] text-center mt-2 italic">{t.slogan}</p>
          </motion.div>
  
          <div className="space-y-3 sm:space-y-4">
            {links.map((link, index) => (
              <motion.div 
                key={index} 
                className="bg-[#fefefd] dark:bg-[#603f2a] rounded-lg p-3 sm:p-4 flex justify-between items-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#bd8a3d]"
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(189, 138, 61, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <a href={link.url} className="flex-grow text-base sm:text-lg text-[#000000] dark:text-[#fefefd] flex items-center">
                  <span className="mr-2 text-xl text-[#bd8a3d]">{link.icon}</span>
                  <span>{link.name}</span>
                </a>
                <motion.button
                  className="text-[#bd8a3d] dark:text-[#ccb8a9] p-2 rounded-full hover:bg-[#ccb8a9] hover:dark:bg-[#603f2a] transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleShare(link.url)}
                >
                  •••
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
  
        <AnimatePresence>
          {showMenu && (
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="bg-[#fefefd] dark:bg-[#0a0807] p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-xs sm:max-w-sm border-2 border-[#bd8a3d]"
                initial={{ scale: 0.5, y: -100 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.5, y: -100 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 scheherazade-heading text-[#000000] dark:text-[#fefefd]">{t.menuTitle}</h2>
                <ul className="space-y-4 text-lg sm:text-xl text-[#603f2a] dark:text-[#ccb8a9]">
                  <li className="hover:text-[#bd8a3d] transition-colors duration-300 cursor-pointer">{t.ourStory}</li>
                  <li className="hover:text-[#bd8a3d] transition-colors duration-300 cursor-pointer">{t.locations}</li>
                  <li className="hover:text-[#bd8a3d] transition-colors duration-300 cursor-pointer">{t.contactUs}</li>
                  <li className="hover:text-[#bd8a3d] transition-colors duration-300 cursor-pointer">{t.privacyPolicy}</li>
                </ul>
                <motion.button 
                  className="mt-6 bg-[#bd8a3d] text-[#fefefd] px-6 py-3 rounded-lg w-full text-lg sm:text-xl hover:bg-[#603f2a] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#bd8a3d]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowMenu(false)}
                >
                  {t.close}
                </motion.button>
              </motion.div>
            </motion.div>
          )}
  
          {showSharePopup && (
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="bg-[#fefefd] dark:bg-[#0a0807] p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-xs sm:max-w-sm border-2 border-[#bd8a3d]"
                initial={{ scale: 0.5, y: -100 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.5, y: -100 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 scheherazade-heading text-[#000000] dark:text-[#fefefd]">{t.shareLink}</h2>
                <div className="flex flex-wrap gap-3 mb-6">
                  <motion.button 
                    className="bg-[#bd8a3d] text-[#fefefd] px-4 py-2 rounded-lg text-base sm:text-lg hover:bg-[#603f2a] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#bd8a3d]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Facebook
                  </motion.button>
                  <motion.button 
                    className="bg-[#603f2a] text-[#fefefd] px-4 py-2 rounded-lg text-base sm:text-lg hover:bg-[#bd8a3d] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#603f2a]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Twitter
                  </motion.button>
                  <motion.button 
                    className="bg-[#ccb8a9] text-[#000000] px-4 py-2 rounded-lg text-base sm:text-lg hover:bg-[#603f2a] hover:text-[#fefefd] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#ccb8a9]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    WhatsApp
                  </motion.button>
                </div>
                <motion.button 
                  className="bg-[#603f2a] text-[#fefefd] px-6 py-3 rounded-lg w-full mb-4 text-lg sm:text-xl hover:bg-[#bd8a3d] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#603f2a]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={copyToClipboard}
                >
                  {t.copyLink}
                </motion.button>
                <motion.button 
                  className="bg-[#bd8a3d] text-[#fefefd] px-6 py-3 rounded-lg w-full text-lg sm:text-xl hover:bg-[#603f2a] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#bd8a3d]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowSharePopup(false)}
                >
                  {t.close}
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ProfilePage;