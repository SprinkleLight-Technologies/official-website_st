
import { useState } from 'react';
import { Moon, Sun, Menu, X, Check, Star, ArrowRight, Zap, Shield, Crown } from 'lucide-react';
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
      description: "Professional website solutions that captivate and convert",
      pricing: [
        { 
          tier: "Starter", 
          price: "₹25,000", 
          icon: Zap,
          features: ["5 Page Website", "Responsive Design", "Basic SEO", "1 Month Support", "Contact Forms"],
          color: "from-blue-500 to-purple-600",
          popular: false
        },
        { 
          tier: "Professional", 
          price: "₹50,000", 
          icon: Shield,
          features: ["10 Page Website", "Custom Design", "Advanced SEO", "CMS Integration", "3 Months Support", "Performance Optimization"],
          color: "from-green-500 to-teal-600",
          popular: true
        },
        { 
          tier: "Enterprise", 
          price: "₹1,00,000", 
          icon: Crown,
          features: ["Unlimited Pages", "E-commerce Ready", "Advanced Features", "Performance Optimization", "6 Months Support", "Priority Updates"],
          color: "from-orange-500 to-red-600",
          popular: false
        }
      ]
    },
    {
      name: "Mobile App Development",
      description: "Cutting-edge iOS and Android applications",
      pricing: [
        { 
          tier: "Basic", 
          price: "₹75,000", 
          icon: Zap,
          features: ["Single Platform", "5 Screens", "Basic Features", "App Store Submission", "2 Months Support"],
          color: "from-blue-500 to-purple-600",
          popular: false
        },
        { 
          tier: "Advanced", 
          price: "₹1,50,000", 
          icon: Shield,
          features: ["Cross Platform", "10 Screens", "API Integration", "Push Notifications", "Analytics", "4 Months Support"],
          color: "from-green-500 to-teal-600",
          popular: true
        },
        { 
          tier: "Premium", 
          price: "₹3,00,000", 
          icon: Crown,
          features: ["Advanced Features", "Backend Development", "Real-time Features", "Payment Integration", "Advanced Security", "6 Months Support"],
          color: "from-orange-500 to-red-600",
          popular: false
        }
      ]
    },
    {
      name: "Digital Marketing",
      description: "Comprehensive marketing solutions for growth",
      pricing: [
        { 
          tier: "Starter", 
          price: "₹15,000/month", 
          icon: Zap,
          features: ["Social Media Management", "Content Creation", "Basic Analytics", "Monthly Reports", "Email Support"],
          color: "from-blue-500 to-purple-600",
          popular: false
        },
        { 
          tier: "Growth", 
          price: "₹30,000/month", 
          icon: Shield,
          features: ["Multi-platform Marketing", "Paid Advertising", "Advanced Analytics", "SEO Optimization", "Weekly Reports", "Phone Support"],
          color: "from-green-500 to-teal-600",
          popular: true
        },
        { 
          tier: "Enterprise", 
          price: "₹60,000/month", 
          icon: Crown,
          features: ["Full Marketing Suite", "Dedicated Manager", "Custom Campaigns", "Advanced Automation", "Daily Monitoring", "Priority Support"],
          color: "from-orange-500 to-red-600",
          popular: false
        }
      ]
    },
    {
      name: "UI/UX Design",
      description: "User-centered design solutions that inspire",
      pricing: [
        { 
          tier: "Essential", 
          price: "₹20,000", 
          icon: Zap,
          features: ["5 Screen Designs", "Wireframes", "Basic Prototyping", "2 Revisions", "Design Files"],
          color: "from-blue-500 to-purple-600",
          popular: false
        },
        { 
          tier: "Professional", 
          price: "₹40,000", 
          icon: Shield,
          features: ["10 Screen Designs", "Interactive Prototypes", "User Research", "Design System", "5 Revisions", "Developer Handoff"],
          color: "from-green-500 to-teal-600",
          popular: true
        },
        { 
          tier: "Premium", 
          price: "₹80,000", 
          icon: Crown,
          features: ["Complete Design System", "Advanced Prototyping", "User Testing", "Unlimited Revisions", "Design Handoff", "Post-launch Support"],
          color: "from-orange-500 to-red-600",
          popular: false
        }
      ]
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/10 dark:border-gray-700/10">
        <div className="container-modern">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center animate-pulse-glow">
                <span className="text-white font-black text-lg">SL</span>
              </div>
              <span className="text-2xl font-black text-shimmer">SprinkleLight</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-modern hover:bg-clip-text transition-all duration-300 font-semibold">Home</a>
              <a href="/#about" className="text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-modern hover:bg-clip-text transition-all duration-300 font-semibold">About</a>
              <a href="/#services" className="text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-modern hover:bg-clip-text transition-all duration-300 font-semibold">Services</a>
              <a href="/#tech-brunch" className="text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-modern hover:bg-clip-text transition-all duration-300 font-semibold">tech.brunch</a>
              <a href="/pricing" className="text-transparent bg-gradient-modern bg-clip-text font-bold">Pricing</a>
              <a href="/careers" className="text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-modern hover:bg-clip-text transition-all duration-300 font-semibold">Careers</a>
              <a href="/#contact" className="text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-modern hover:bg-clip-text transition-all duration-300 font-semibold">Contact</a>
            </div>

            {/* Dark Mode Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-3 rounded-2xl glass hover:scale-110 transition-all duration-300"
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
              <a href="/" className="block py-3 text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-modern hover:bg-clip-text transition-all duration-300 font-semibold">Home</a>
              <a href="/#about" className="block py-3 text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-modern hover:bg-clip-text transition-all duration-300 font-semibold">About</a>
              <a href="/#services" className="block py-3 text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-modern hover:bg-clip-text transition-all duration-300 font-semibold">Services</a>
              <a href="/#tech-brunch" className="block py-3 text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-modern hover:bg-clip-text transition-all duration-300 font-semibold">tech.brunch</a>
              <a href="/pricing" className="block py-3 text-transparent bg-gradient-modern bg-clip-text font-bold">Pricing</a>
              <a href="/careers" className="block py-3 text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-modern hover:bg-clip-text transition-all duration-300 font-semibold">Careers</a>
              <a href="/#contact" className="block py-3 text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-modern hover:bg-clip-text transition-all duration-300 font-semibold">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container-modern text-center">
          <div className="space-y-8">
            <h1 className="text-display text-shimmer">
              Transparent
            </h1>
            <h2 className="text-hero text-gray-800 dark:text-gray-200">
              Pricing for <span className="text-transparent bg-gradient-saffron bg-clip-text">Every Need</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan for your business. All packages include world-class support and guaranteed satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Sections */}
      <section className="section-padding">
        <div className="container-modern space-y-24">
          {pricingPlans.map((service, serviceIndex) => (
            <div key={serviceIndex} className="space-y-12">
              <div className="text-center">
                <h2 className="text-section text-gray-900 dark:text-white mb-4">
                  {service.name}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  {service.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {service.pricing.map((plan, planIndex) => (
                  <Card key={planIndex} className={`modern-card relative overflow-hidden hover:shadow-2xl border-0 ${plan.popular ? 'ring-2 ring-purple-500 dark:ring-purple-400 scale-105' : ''}`}>
                    {plan.popular && (
                      <div className="absolute top-0 left-0 right-0 bg-gradient-modern text-white text-center py-3 text-sm font-bold">
                        <Star className="inline w-4 h-4 mr-2" />
                        Most Popular
                      </div>
                    )}
                    <CardHeader className={`text-center ${plan.popular ? 'pt-16' : 'pt-8'}`}>
                      <div className={`inline-flex p-4 bg-gradient-to-r ${plan.color} rounded-2xl mb-4 mx-auto hover:scale-110 transition-transform duration-300`}>
                        <plan.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">{plan.tier}</CardTitle>
                      <CardDescription className="text-center">
                        <span className="text-4xl font-black text-transparent bg-gradient-modern bg-clip-text">{plan.price}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <ul className="space-y-4">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className={`modern-button w-full py-4 hover:scale-105 transition-all duration-300 ${plan.popular ? 'bg-gradient-modern' : 'bg-gradient-to-r ' + plan.color}`}>
                        Get Started
                        <ArrowRight className="ml-2 w-5 h-5" />
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
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container-modern">
          <div className="text-center mb-16">
            <h2 className="text-section text-gray-900 dark:text-white mb-6">
              Additional <span className="text-transparent bg-gradient-primary bg-clip-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Customized solutions for your specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Graphic Design", price: "₹5,000 - ₹25,000", description: "Logo, branding, print materials", color: "from-pink-500 to-violet-600" },
              { name: "Social Media Management", price: "₹10,000/month", description: "Complete social media strategy", color: "from-blue-500 to-cyan-600" },
              { name: "Testing & Automation", price: "₹20,000 - ₹50,000", description: "Quality assurance solutions", color: "from-green-500 to-emerald-600" },
              { name: "Staff Augmentation", price: "₹50,000 - ₹2,00,000/month", description: "Expert talent acquisition", color: "from-orange-500 to-red-600" },
              { name: "Digital Excellence Consulting", price: "₹15,000/hour", description: "Strategic digital guidance", color: "from-purple-500 to-indigo-600" },
              { name: "Support & Maintenance", price: "₹5,000 - ₹20,000/month", description: "Ongoing technical support", color: "from-teal-500 to-blue-600" }
            ].map((service, index) => (
              <Card key={index} className="modern-card hover:shadow-2xl border-0 group">
                <CardHeader>
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold">⚡</span>
                  </div>
                  <CardTitle className="text-xl text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-modern group-hover:bg-clip-text transition-all duration-300">
                    {service.name}
                  </CardTitle>
                  <CardDescription>
                    <span className="text-2xl font-bold text-transparent bg-gradient-modern bg-clip-text">{service.price}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  <Button variant="outline" className="w-full hover:bg-gradient-modern hover:text-white hover:border-transparent transition-all duration-300">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="container-modern text-center">
          <h2 className="text-section mb-6">
            Ready to Get <span className="text-transparent bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text">Started?</span>
          </h2>
          <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Contact us today for a free consultation and custom quote for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="modern-button px-12 py-6 text-lg hover:scale-105 transition-all duration-300">
              Get Free Consultation
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900 px-12 py-6 text-lg hover:scale-105 transition-all duration-300">
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
