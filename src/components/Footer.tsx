
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/ST White Logo.png" 
                alt="SprinkleLight Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Leading tech solutions provider in India, delivering innovative digital experiences and cutting-edge technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-400 hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-orange-400 transition-colors">Services</a></li>
              <li><a href="/pricing" className="text-gray-400 hover:text-orange-400 transition-colors">Pricing</a></li>
              <li><a href="/careers" className="text-gray-400 hover:text-orange-400 transition-colors">Careers</a></li>
              <li><a href="#tech-brunch" className="text-gray-400 hover:text-orange-400 transition-colors">tech.brunch</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-400">Website Development</span></li>
              <li><span className="text-gray-400">Mobile App Development</span></li>
              <li><span className="text-gray-400">UI/UX Design</span></li>
              <li><span className="text-gray-400">Digital Marketing</span></li>
              <li><span className="text-gray-400">Graphic Design</span></li>
              <li><span className="text-gray-400">Staff Augmentation</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Near Prozone Mall, Saravanampatty<br />
                  Coimbatore, Tamil Nadu 641035<br />
                  India
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span className="text-gray-400">+91 868 202 8606</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span className="text-gray-400">sprinklelight@outlook.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 SprinkleLight Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="/privacy-policy" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-orange-400 transition-colors">Terms of Service</a>
            <a href="/cookie-policy" className="hover:text-orange-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
