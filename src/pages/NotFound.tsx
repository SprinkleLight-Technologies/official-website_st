import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">404</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">Oops! Page not found</p>
            <a href="/" className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-lg hover:from-orange-600 hover:to-pink-700 transition-all">
              Return to Home
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default NotFound;
