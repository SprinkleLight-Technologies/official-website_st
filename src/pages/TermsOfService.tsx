import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const TermsOfService = () => {
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
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Terms of Service</h1>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">Last Updated: June 1, 2024</p>
            
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              By accessing or using the SprinkleLight Technologies website and services, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, you must not access or use our services.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">2. Description of Services</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              SprinkleLight Technologies provides various digital services including but not limited to website development, mobile app development, UI/UX design, digital marketing, graphic design, and staff augmentation. The specific details of each service will be outlined in separate agreements or statements of work.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">3. User Accounts</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Some of our services may require you to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>Provide accurate and complete information when creating your account</li>
              <li>Update your information to keep it current</li>
              <li>Protect your account credentials and not share them with others</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">4. Intellectual Property Rights</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Unless otherwise specified in a separate agreement:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>All content on our website, including text, graphics, logos, images, and software, is the property of SprinkleLight Technologies and is protected by copyright and other intellectual property laws</li>
              <li>Upon full payment for our services, clients will receive ownership rights to the deliverables as specified in the project agreement</li>
              <li>SprinkleLight Technologies retains the right to use and display completed work in our portfolio unless otherwise agreed upon</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">5. Payment Terms</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Payment terms will be specified in individual service agreements. Generally:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>Payments are due according to the schedule outlined in your agreement</li>
              <li>Late payments may incur additional fees</li>
              <li>All fees are non-refundable unless otherwise specified</li>
              <li>Prices are subject to change with notice for ongoing services</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              To the maximum extent permitted by law, SprinkleLight Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>Your use or inability to use our services</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              <li>Any interruption or cessation of transmission to or from our services</li>
              <li>Any bugs, viruses, or the like that may be transmitted to or through our services</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">7. Termination</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms of Service. Upon termination, your right to use our services will immediately cease.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">8. Governing Law</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Bangalore, Karnataka, India.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">9. Changes to Terms</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We reserve the right to modify or replace these Terms at any time. It is your responsibility to review these Terms periodically for changes. Your continued use of our services following the posting of any changes constitutes acceptance of those changes.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">10. Contact Information</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              SprinkleLight Technologies<br />
              123 Tech Park, Electronic City<br />
              Bangalore, Karnataka 560100<br />
              India<br />
              Email: legal@sprinklelight.com<br />
              Phone: +91 80 1234 5678
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default TermsOfService;