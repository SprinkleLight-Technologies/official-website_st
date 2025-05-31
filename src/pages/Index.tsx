
import { useState } from 'react';
import { Moon, Sun, Menu, X, ArrowRight, Play, Instagram, Youtube, Star, Globe, Smartphone, TrendingUp, Palette, Target, Users, Headphones, Bug, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Stunning, responsive websites that captivate and convert",
      gradient: "from-orange-400 to-pink-600"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Robust mobile applications for iOS and Android platforms",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Digital Excellence Consulting",
      description: "Strategic digital transformation guidance for modern businesses",
      gradient: "from-green-400 to-blue-500"
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Creative visual solutions that make your brand stand out",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that deliver results",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: Users,
      title: "UI/UX Design",
      description: "User-centered design that creates exceptional experiences",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      icon: Headphones,
      title: "Social Media Management",
      description: "Comprehensive social media strategies and management",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Bug,
      title: "Testing & Automation",
      description: "Quality assurance and automated testing solutions",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: UserPlus,
      title: "Staff Augmentation",
      description: "Expert talent acquisition and team scaling solutions",
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  const features = [
    {
      title: "10+ Years Experience",
      description: "Delivering excellence since our inception"
    },
    {
      title: "500+ Projects Completed",
      description: "Successfully delivered across various industries"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance for our clients"
    },
    {
      title: "100% Client Satisfaction",
      description: "Committed to exceeding expectations"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SL</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
                SprinkleLight
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                About
              </a>
              <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                Services
              </a>
              <a href="#tech-brunch" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                tech.brunch
              </a>
              <a href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                Pricing
              </a>
              <a href="#careers" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                Careers
              </a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                Contact
              </a>
            </div>

            {/* Dark Mode Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button
                className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="px-4 py-4 space-y-3">
              <a href="#home" className="block text-gray-700 dark:text-gray-300 hover:text-orange-500">Home</a>
              <a href="#about" className="block text-gray-700 dark:text-gray-300 hover:text-orange-500">About</a>
              <a href="#services" className="block text-gray-700 dark:text-gray-300 hover:text-orange-500">Services</a>
              <a href="#tech-brunch" className="block text-gray-700 dark:text-gray-300 hover:text-orange-500">tech.brunch</a>
              <a href="#pricing" className="block text-gray-700 dark:text-gray-300 hover:text-orange-500">Pricing</a>
              <a href="#careers" className="block text-gray-700 dark:text-gray-300 hover:text-orange-500">Careers</a>
              <a href="#contact" className="block text-gray-700 dark:text-gray-300 hover:text-orange-500">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Digital Excellence
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">
                  Redefined
                </span>
              </h1>
              
              {/* Indian-inspired decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-orange-400 to-pink-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Empowering businesses across India and beyond with cutting-edge technology solutions, 
              innovative design, and strategic digital transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-2 border-gray-300 dark:border-gray-600 hover:border-orange-500 dark:hover:border-orange-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-center mb-4">
                  <Star className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 hover:border-transparent overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className={`inline-flex p-3 bg-gradient-to-r ${service.gradient} rounded-lg mb-6`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                
                <button className={`inline-flex items-center text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent hover:underline`}>
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* tech.brunch Section */}
      <section id="tech-brunch" className="py-20 bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">tech.brunch</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Stay ahead of the curve with the latest tech news, insights, and innovations. 
              Your daily dose of technology updates, served fresh!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <Youtube className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">YouTube Channel</h3>
              <p className="opacity-90 mb-4">Weekly tech reviews, tutorials, and industry insights</p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 transition-all duration-300">
                <Play className="mr-2 w-4 h-4" />
                Subscribe Now
              </Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <Instagram className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">Instagram</h3>
              <p className="opacity-90 mb-4">Daily tech facts, quick tips, and behind-the-scenes content</p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 transition-all duration-300">
                <Instagram className="mr-2 w-4 h-4" />
                Follow Us
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Latest Tech Updates</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">AI Revolution 2024</h4>
                <p className="text-sm opacity-90">Exploring the latest developments in artificial intelligence</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Web3 Innovation</h4>
                <p className="text-sm opacity-90">Decentralized technologies shaping the future</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Mobile Tech Trends</h4>
                <p className="text-sm opacity-90">Latest mobile app development frameworks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                About <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">SprinkleLight</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Based in the heart of India, SprinkleLight Technologies has been at the forefront of digital innovation, 
                helping businesses transform their digital presence and achieve extraordinary growth.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Our team of passionate developers, designers, and strategists work collaboratively to deliver 
                solutions that not only meet but exceed expectations, combining global best practices with 
                deep understanding of the Indian market.
              </p>
              <Button className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold">
                Learn More About Us
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg opacity-90 mb-6">
                  To empower businesses with innovative technology solutions that drive growth, 
                  enhance user experiences, and create lasting digital impact.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm opacity-90">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-sm opacity-90">Team Members</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Let's <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Ready to transform your digital presence? Get in touch with our experts today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <textarea 
                    rows={5} 
                    placeholder="Your Message" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white py-3 rounded-lg font-semibold">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Office Address</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  123 Tech Hub, Innovation District<br />
                  Bangalore, Karnataka 560001<br />
                  India
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Contact Info</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Email: hello@sprinklelight.tech
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Phone: +91 98765 43210
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                    <Instagram className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                    <Youtube className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SL</span>
                </div>
                <span className="text-xl font-bold">SprinkleLight</span>
              </div>
              <p className="text-gray-400">
                Transforming businesses through innovative technology solutions and exceptional digital experiences.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Mobile Apps</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Digital Marketing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">tech.brunch</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <p className="text-gray-400 mb-2">hello@sprinklelight.tech</p>
              <p className="text-gray-400 mb-4">+91 98765 43210</p>
              <div className="flex space-x-3">
                <Button variant="outline" size="sm" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                  <Youtube className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SprinkleLight Technologies. All rights reserved. Made with ❤️ in India.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
