import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
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
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Privacy Policy</h1>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">Last Updated: June 1, 2024</p>
            
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              At SprinkleLight Technologies, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">2. Information We Collect</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We may collect several types of information from and about users of our website, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>Personal identifiers such as name, email address, phone number, and company name</li>
              <li>Information provided when filling out forms on our website</li>
              <li>Records of correspondence if you contact us</li>
              <li>Details of transactions you carry out through our website</li>
              <li>Usage details, IP addresses, browser type, and other technology information</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We use the information we collect about you for various purposes, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>Providing and improving our website and services</li>
              <li>Processing transactions and sending related information</li>
              <li>Responding to your comments, questions, and requests</li>
              <li>Sending information about our services, special offers, and promotions</li>
              <li>Analyzing usage patterns to enhance user experience</li>
              <li>Protecting our rights, property, or safety</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">4. Disclosure of Your Information</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We may disclose personal information that we collect or you provide:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>To our subsidiaries and affiliates</li>
              <li>To contractors, service providers, and other third parties we use to support our business</li>
              <li>To comply with any court order, law, or legal process</li>
              <li>To enforce our website terms of use</li>
              <li>If we believe disclosure is necessary to protect the rights, property, or safety of SprinkleLight Technologies, our customers, or others</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">5. Data Security</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">6. Your Rights</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>The right to access your personal information</li>
              <li>The right to rectify inaccurate personal information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to restrict processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to object to processing of your personal information</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">7. Changes to Our Privacy Policy</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We may update our Privacy Policy from time to time. Any changes will be posted on this page with a revised "Last Updated" date. We encourage you to review this Privacy Policy periodically.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">8. Contact Information</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              If you have any questions or concerns about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;