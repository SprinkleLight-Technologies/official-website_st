
import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, ArrowRight, Play, Star, Users, Award, Zap, Globe, Shield, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Stunning, responsive websites that captivate and convert",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Zap,
      title: "Mobile App Development", 
      description: "Robust iOS & Android apps with cutting-edge features",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Shield,
      title: "Digital Excellence Consulting",
      description: "Strategic guidance for digital transformation success",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Star,
      title: "UI/UX Design",
      description: "User-centered designs that create memorable experiences",
      color: "from-pink-500 to-violet-600"
    },
    {
      icon: Award,
      title: "Digital Marketing",
      description: "Comprehensive strategies to amplify your brand presence",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: Users,
      title: "Staff Augmentation",
      description: "Expert talent acquisition for your growing business",
      color: "from-indigo-500 to-blue-600"
    }
  ];

  const clients = [
    { name: "TechCorp", logo: "TC", color: "bg-gradient-to-r from-blue-600 to-purple-600" },
    { name: "InnovateLabs", logo: "IL", color: "bg-gradient-to-r from-green-600 to-teal-600" },
    { name: "FutureVision", logo: "FV", color: "bg-gradient-to-r from-orange-600 to-red-600" },
    { name: "DigitalFlow", logo: "DF", color: "bg-gradient-to-r from-pink-600 to-violet-600" },
    { name: "CloudSync", logo: "CS", color: "bg-gradient-to-r from-yellow-600 to-orange-600" },
    { name: "DataDrive", logo: "DD", color: "bg-gradient-to-r from-indigo-600 to-blue-600" },
    { name: "SmartSolutions", logo: "SS", color: "bg-gradient-to-r from-emerald-600 to-green-600" },
    { name: "NextGen", logo: "NG", color: "bg-gradient-to-r from-purple-600 to-pink-600" }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: Award },
    { number: "200+", label: "Happy Clients", icon: Users },
    { number: "50+", label: "Team Members", icon: Star },
    { number: "5+", label: "Years Experience", icon: Globe }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark' : ''}`}>
      {/* Custom Cursor */}
      <div 
        className={`custom-cursor ${isHovering ? 'cursor-hover' : ''}`}
        style={{ left: cursorPosition.x, top: cursorPosition.y }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/10 dark:border-gray-700/10">
        <div className="container-modern">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center animate-pulse-glow">
                <span className="text-white font-black text-lg">SL</span>
              </div>
              <span className="text-2xl font-black text-shimmer">
                SprinkleLight
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-modern hover:bg-clip-text transition-all duration-300 font-semibold">Home</a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-modern hover:bg-clip-text transition-all duration-300 font-semibold">About</a>
              <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-modern hover:bg-clip-text transition-all duration-300 font-semibold">Services</a>
              <a href="#tech-brunch" className="text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-modern hover:bg-clip-text transition-all duration-300 font-semibold">tech.brunch</a>
              <a href="/pricing" className="text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-modern hover:bg-clip-text transition-all duration-300 font-semibold">Pricing</a>
              <a href="/careers" className="text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-modern hover:bg-clip-text transition-all duration-300 font-semibold">Careers</a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-modern hover:bg-clip-text transition-all duration-300 font-semibold">Contact</a>
            </div>

            {/* Dark Mode & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-3 rounded-2xl glass hover:scale-110 transition-all duration-300"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button
                className="lg:hidden p-3 rounded-2xl glass hover:scale-110 transition-all duration-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass border-t border-white/10 dark:border-gray-700/10">
            <div className="container-modern py-6 space-y-4">
              <a href="#home" className="block py-3 text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-modern hover:bg-clip-text transition-all duration-300 font-semibold">Home</a>
              <a href="#about" className="block py-3 text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-modern hover:bg-clip-text transition-all duration-300 font-semibold">About</a>
              <a href="#services" className="block py-3 text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-modern hover:bg-clip-text transition-all duration-300 font-semibold">Services</a>
              <a href="#tech-brunch" className="block py-3 text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-modern hover:bg-clip-text transition-all duration-300 font-semibold">tech.brunch</a>
              <a href="/pricing" className="block py-3 text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-modern hover:bg-clip-text transition-all duration-300 font-semibold">Pricing</a>
              <a href="/careers" className="block py-3 text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-modern hover:bg-clip-text transition-all duration-300 font-semibold">Careers</a>
              <a href="#contact" className="block py-3 text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-modern hover:bg-clip-text transition-all duration-300 font-semibold">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Animated Background */}
        <div className="absolute inset-0 gradient-primary opacity-5 animate-gradient-shift"></div>
        
        <div className="container-modern text-center relative z-10 pt-20">
          <div className="space-y-8 lg:space-y-12">
            <div className="space-y-6">
              <h1 className="text-display text-shimmer">
                Digital Excellence
              </h1>
              <h2 className="text-hero text-gray-800 dark:text-gray-200">
                Redefined for <span className="text-transparent bg-gradient-saffron bg-clip-text">India</span>
              </h2>
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
                We craft cutting-edge digital solutions that transform businesses and create extraordinary user experiences across the digital landscape.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                className="modern-button text-lg px-12 py-6 hover:scale-105 transform transition-all duration-300"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Start Your Journey
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button 
                variant="outline" 
                className="modern-card border-2 px-12 py-6 text-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <Play className="mr-3 w-6 h-6" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 gradient-saffron rounded-full opacity-20 float-animation"></div>
        <div className="absolute bottom-1/4 right-10 w-16 h-16 gradient-emerald rounded-full opacity-20 float-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 gradient-royal rounded-full opacity-20 float-animation" style={{animationDelay: '4s'}}></div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-modern">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="modern-card p-8 hover:shadow-2xl">
                  <div className="inline-flex p-4 gradient-modern rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-2">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-400 font-semibold">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container-modern">
          <div className="text-center mb-16">
            <h2 className="text-section text-gray-900 dark:text-white mb-6">
              Pioneering <span className="text-transparent bg-gradient-primary bg-clip-text">Innovation</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              SprinkleLight Technologies stands at the forefront of digital transformation, blending cutting-edge technology with authentic Indian creativity to deliver world-class solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  To empower businesses across India and beyond with innovative digital solutions that drive growth, enhance user experiences, and create lasting impact in the digital realm.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="modern-card p-6">
                  <div className="text-2xl font-bold text-transparent bg-gradient-saffron bg-clip-text mb-2">500+</div>
                  <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
                <div className="modern-card p-6">
                  <div className="text-2xl font-bold text-transparent bg-gradient-emerald bg-clip-text mb-2">98%</div>
                  <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="modern-card p-8 hover:shadow-2xl">
              <div className="aspect-video rounded-2xl gradient-primary flex items-center justify-center">
                <Play className="w-16 h-16 text-white hover:scale-110 transition-transform duration-300 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-white dark:bg-gray-900">
        <div className="container-modern">
          <div className="text-center mb-16">
            <h2 className="text-section text-gray-900 dark:text-white mb-6">
              Our <span className="text-transparent bg-gradient-primary bg-clip-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to elevate your business and create exceptional user experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="modern-card hover:shadow-2xl group border-0">
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex p-4 bg-gradient-to-r ${service.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-modern group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button variant="outline" className="mt-6 hover:bg-gradient-modern hover:text-white hover:border-transparent transition-all duration-300">
                    Learn More
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container-modern">
          <div className="text-center mb-16">
            <h2 className="text-section text-gray-900 dark:text-white mb-6">
              Trusted by <span className="text-transparent bg-gradient-primary bg-clip-text">Leading Brands</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We're proud to partner with innovative companies that share our vision for digital excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="text-center group">
                <div className="modern-card p-8 hover:shadow-2xl mb-4">
                  <div className={`w-16 h-16 mx-auto ${client.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {client.logo}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-modern group-hover:bg-clip-text transition-all duration-300">
                    {client.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* tech.brunch Section */}
      <section id="tech-brunch" className="section-padding bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 gradient-primary opacity-10 animate-gradient-shift"></div>
        
        <div className="container-modern relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-section mb-6">
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text">tech.brunch</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the curve with the latest tech insights, trends, and industry updates from our expert team.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">Latest Tech News & Insights</h3>
                <p className="text-lg opacity-80 leading-relaxed">
                  From breakthrough innovations to industry analysis, tech.brunch delivers curated content that keeps you informed and inspired in the rapidly evolving world of technology.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-red-600 hover:bg-red-700 px-8 py-4 hover:scale-105 transition-all duration-300">
                  <ExternalLink className="mr-3 w-5 h-5" />
                  YouTube Channel
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 hover:scale-105 transition-all duration-300">
                  <ExternalLink className="mr-3 w-5 h-5" />
                  Instagram
                </Button>
              </div>
            </div>

            <div className="modern-card hover:shadow-2xl bg-white/10 backdrop-blur-lg border-white/20">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 gradient-primary opacity-30 animate-gradient-shift"></div>
                <Play className="w-20 h-20 text-white hover:scale-110 transition-transform duration-300 cursor-pointer relative z-10" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">Latest Episode</h4>
                <p className="opacity-80">The Future of AI in Web Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white dark:bg-gray-900">
        <div className="container-modern">
          <div className="text-center mb-16">
            <h2 className="text-section text-gray-900 dark:text-white mb-6">
              Let's Create Something <span className="text-transparent bg-gradient-primary bg-clip-text">Amazing</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Ready to transform your digital presence? Get in touch with our team and let's bring your vision to life.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="modern-card p-12 hover:shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Get Started Today</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Whether you need a stunning website, powerful mobile app, or comprehensive digital strategy, we're here to help you achieve your goals.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 gradient-modern rounded-2xl flex items-center justify-center">
                        <span className="text-white font-bold">📧</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Email Us</div>
                        <div className="text-gray-600 dark:text-gray-400">hello@sprinklelight.com</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 gradient-modern rounded-2xl flex items-center justify-center">
                        <span className="text-white font-bold">📱</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Call Us</div>
                        <div className="text-gray-600 dark:text-gray-400">+91 80 1234 5678</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full p-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                  />
                  <textarea 
                    placeholder="Tell us about your project" 
                    rows={4}
                    className="w-full p-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none"
                  />
                  <Button className="modern-button w-full py-4 text-lg hover:scale-105 transition-all duration-300">
                    Send Message
                    <ArrowRight className="ml-3 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-16">
        <div className="container-modern">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center">
                  <span className="text-white font-black text-lg">SL</span>
                </div>
                <span className="text-2xl font-black text-shimmer">SprinkleLight</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Pioneering digital excellence across India with innovative solutions and cutting-edge technology.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold">Quick Links</h3>
              <div className="space-y-3">
                <a href="#home" className="block text-gray-400 hover:text-white transition-colors">Home</a>
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About</a>
                <a href="#services" className="block text-gray-400 hover:text-white transition-colors">Services</a>
                <a href="/pricing" className="block text-gray-400 hover:text-white transition-colors">Pricing</a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold">Services</h3>
              <div className="space-y-3">
                <div className="text-gray-400">Website Development</div>
                <div className="text-gray-400">Mobile Apps</div>
                <div className="text-gray-400">UI/UX Design</div>
                <div className="text-gray-400">Digital Marketing</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contact</h3>
              <div className="space-y-3">
                <div className="text-gray-400">📧 hello@sprinklelight.com</div>
                <div className="text-gray-400">📱 +91 80 1234 5678</div>
                <div className="text-gray-400">📍 Bangalore, India</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2025 SprinkleLight Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
