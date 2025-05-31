import { useState } from 'react';
import { Moon, Sun, Menu, X, Check, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Footer from '@/components/Footer';

const Pricing = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const pricingPlans = [
    {
      name: "Website Development",
      description: "Professional website solutions",
      pricing: [
        { tier: "Basic", price: "₹25,000", features: ["5 Page Website", "Responsive Design", "Basic SEO", "1 Month Support"] },
        { tier: "Standard", price: "₹50,000", features: ["10 Page Website", "Custom Design", "Advanced SEO", "CMS Integration", "3 Months Support"] },
        { tier: "Premium", price: "₹1,00,000", features: ["Unlimited Pages", "E-commerce Ready", "Advanced Features", "Performance Optimization", "6 Months Support"] }
      ]
    },
    {
      name: "Mobile App Development",
      description: "iOS and Android applications",
      pricing: [
        { tier: "Basic", price: "₹75,000", features: ["Single Platform", "5 Screens", "Basic Features", "App Store Submission"] },
        { tier: "Standard", price: "₹1,50,000", features: ["Cross Platform", "10 Screens", "API Integration", "Push Notifications", "Analytics"] },
        { tier: "Premium", price: "₹3,00,000", features: ["Advanced Features", "Backend Development", "Real-time Features", "Payment Integration", "Advanced Security"] }
      ]
    },
    {
      name: "Digital Marketing",
      description: "Comprehensive marketing solutions",
      pricing: [
        { tier: "Starter", price: "₹15,000/month", features: ["Social Media Management", "Content Creation", "Basic Analytics", "Monthly Reports"] },
        { tier: "Growth", price: "₹30,000/month", features: ["Multi-platform Marketing", "Paid Advertising", "Advanced Analytics", "SEO Optimization", "Weekly Reports"] },
        { tier: "Enterprise", price: "₹60,000/month", features: ["Full Marketing Suite", "Dedicated Manager", "Custom Campaigns", "Advanced Automation", "Daily Monitoring"] }
      ]
    },
    {
      name: "UI/UX Design",
      description: "User-centered design solutions",
      pricing: [
        { tier: "Basic", price: "₹20,000", features: ["5 Screen Designs", "Wireframes", "Basic Prototyping", "2 Revisions"] },
        { tier: "Standard", price: "₹40,000", features: ["10 Screen Designs", "Interactive Prototypes", "User Research", "Design System", "5 Revisions"] },
        { tier: "Premium", price: "₹80,000", features: ["Complete Design System", "Advanced Prototyping", "User Testing", "Unlimited Revisions", "Design Handoff"] }
      ]
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
              <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
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
              <a href="/pricing" className="text-orange-500 dark:text-orange-400 font-semibold">
                Pricing
              </a>
              <a href="/careers" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
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
              <a href="/" className="block text-gray-700 dark:text-gray-300 hover:text-orange-500">Home</a>
              <a href="#about" className="block text-gray-700 dark:text-gray-300 hover:text-orange-500">About</a>
              <a href="#services" className="block text-gray-700 dark:text-gray-300 hover:text-orange-500">Services</a>
              <a href="#tech-brunch" className="block text-gray-700 dark:text-gray-300 hover:text-orange-500">tech.brunch</a>
              <a href="/pricing" className="block text-orange-500 font-semibold">Pricing</a>
              <a href="/careers" className="block text-gray-700 dark:text-gray-300 hover:text-orange-500">Careers</a>
              <a href="#contact" className="block text-gray-700 dark:text-gray-300 hover:text-orange-500">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
              Transparent
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All our packages include world-class support and guaranteed satisfaction.
          </p>
        </div>
      </section>

      {/* Pricing Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {pricingPlans.map((service, serviceIndex) => (
            <div key={serviceIndex} className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.name}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {service.pricing.map((plan, planIndex) => (
                  <Card key={planIndex} className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${planIndex === 1 ? 'border-2 border-orange-500 dark:border-orange-400' : ''}`}>
                    {planIndex === 1 && (
                      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-pink-600 text-white text-center py-2 text-sm font-semibold">
                        Most Popular
                      </div>
                    )}
                    <CardHeader className={planIndex === 1 ? 'pt-12' : ''}>
                      <CardTitle className="text-2xl font-bold text-center">{plan.tier}</CardTitle>
                      <CardDescription className="text-center">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className={`w-full ${planIndex === 1 ? 'bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white' : 'border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'}`} variant={planIndex === 1 ? 'default' : 'outline'}>
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Customized solutions for your specific needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Graphic Design", price: "₹5,000 - ₹25,000", description: "Logo, branding, print materials" },
              { name: "Social Media Management", price: "₹10,000/month", description: "Complete social media strategy" },
              { name: "Testing & Automation", price: "₹20,000 - ₹50,000", description: "Quality assurance solutions" },
              { name: "Staff Augmentation", price: "₹50,000 - ₹2,00,000/month", description: "Expert talent acquisition" },
              { name: "Digital Excellence Consulting", price: "₹15,000/hour", description: "Strategic digital guidance" },
              { name: "Support & Maintenance", price: "₹5,000 - ₹20,000/month", description: "Ongoing technical support" }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <CardDescription>
                    <span className="text-xl font-bold text-orange-500">{service.price}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                  <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Contact us today for a free consultation and custom quote for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold">
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Pricing;
