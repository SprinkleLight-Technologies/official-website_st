import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-950">
        {/* Header/Navigation */}
        <header className="bg-white dark:bg-gray-950 sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center">
                <a href="/" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">SL</span>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
                    SprinkleLight
                  </span>
                </a>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 px-3 py-2 text-sm font-medium">
                  Home
                </a>
                <a href="/#about" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 px-3 py-2 text-sm font-medium">
                  About
                </a>
                <a href="/#services" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 px-3 py-2 text-sm font-medium">
                  Services
                </a>
                <a href="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 px-3 py-2 text-sm font-medium">
                  Pricing
                </a>
                <a href="/careers" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 px-3 py-2 text-sm font-medium">
                  Careers
                </a>
              </nav>

              {/* Right side buttons */}
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleDarkMode}
                  className="text-gray-600 dark:text-gray-300"
                >
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
                <Button className="hidden md:flex bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white">
                  Contact Us
                </Button>
                <button
                  className="md:hidden text-gray-600 dark:text-gray-300"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg rounded-b-lg">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="/" className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400">
                  Home
                </a>
                <a href="/#about" className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400">
                  About
                </a>
                <a href="/#services" className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400">
                  Services
                </a>
                <a href="/pricing" className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400">
                  Pricing
                </a>
                <a href="/careers" className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400">
                  Careers
                </a>
                <div className="pt-4">
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose dark:prose-invert max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Cookie Policy</h1>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">Last Updated: June 1, 2024</p>
            
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This Cookie Policy explains how SprinkleLight Technologies uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">2. What Are Cookies?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Cookies set by the website owner (in this case, SprinkleLight Technologies) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">3. Types of Cookies We Use</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We use the following types of cookies:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>
                <strong>Essential Cookies:</strong> These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.
              </li>
              <li>
                <strong>Performance Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
              </li>
              <li>
                <strong>Targeting Cookies:</strong> These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.
              </li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">4. How to Control Cookies</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser's help menu for more information.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit <a href="http://www.aboutads.info/choices/" className="text-orange-500 hover:text-orange-600">http://www.aboutads.info/choices/</a> or <a href="http://www.youronlinechoices.com" className="text-orange-500 hover:text-orange-600">http://www.youronlinechoices.com</a>.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">5. Cookies We Use</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The specific cookies we use may include:
            </p>
            <table className="w-full border-collapse text-gray-600 dark:text-gray-300 mb-4">
              <thead>
                <tr className="border-b border-gray-300 dark:border-gray-700">
                  <th className="text-left py-2 px-4">Cookie Name</th>
                  <th className="text-left py-2 px-4">Purpose</th>
                  <th className="text-left py-2 px-4">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300 dark:border-gray-700">
                  <td className="py-2 px-4">_ga</td>
                  <td className="py-2 px-4">Used by Google Analytics to distinguish users</td>
                  <td className="py-2 px-4">2 years</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-700">
                  <td className="py-2 px-4">_gid</td>
                  <td className="py-2 px-4">Used by Google Analytics to distinguish users</td>
                  <td className="py-2 px-4">24 hours</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-700">
                  <td className="py-2 px-4">_gat</td>
                  <td className="py-2 px-4">Used by Google Analytics to throttle request rate</td>
                  <td className="py-2 px-4">1 minute</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-700">
                  <td className="py-2 px-4">cookieconsent_status</td>
                  <td className="py-2 px-4">Used to remember your cookie consent choice</td>
                  <td className="py-2 px-4">1 year</td>
                </tr>
              </tbody>
            </table>
            
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">6. Updates to This Cookie Policy</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The date at the top of this Cookie Policy indicates when it was last updated.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">7. Contact Information</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              If you have any questions about our use of cookies or other technologies, please contact us at:
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              SprinkleLight Technologies<br />
              123 Tech Park, Electronic City<br />
              Bangalore, Karnataka 560100<br />
              India<br />
              Email: privacy@sprinklelight.com<br />
              Phone: +91 80 1234 5678
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default CookiePolicy;