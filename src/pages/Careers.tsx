import { useState } from 'react';
import { Moon, Sun, Menu, X, MapPin, Clock, Users, Heart, Code, Palette, Target, ArrowRight, Star, Award, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';

const Careers = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const jobOpenings = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "4-6 years",
      skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
      description: "Join our engineering team to build cutting-edge web applications and scalable solutions for our clients.",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "2-4 years",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research", "Design Systems"],
      description: "Create beautiful and intuitive user experiences that delight our clients and their customers.",
      color: "from-pink-500 to-violet-600"
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Delhi, India",
      type: "Full-time",
      experience: "3-5 years",
      skills: ["SEO", "SEM", "Social Media", "Content Marketing", "Analytics"],
      description: "Drive digital marketing strategies and campaigns to help our clients achieve their business goals.",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Mobile App Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "3-5 years",
      skills: ["React Native", "Flutter", "iOS", "Android", "API Integration"],
      description: "Develop innovative mobile applications for iOS and Android platforms using cutting-edge technologies.",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "4-6 years",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Monitoring"],
      description: "Build and maintain scalable infrastructure to support our growing portfolio of applications.",
      color: "from-indigo-500 to-blue-600"
    },
    {
      title: "Content Creator",
      department: "Marketing",
      location: "Pune, India",
      type: "Part-time",
      experience: "1-3 years",
      skills: ["Video Editing", "Writing", "Social Media", "SEO", "Analytics"],
      description: "Create engaging content for our tech.brunch platform and client social media channels.",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Code,
      title: "Learning & Growth",
      description: "Annual learning budget, conference attendance, and skill development programs",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Work-Life Balance",
      description: "Flexible working hours, remote work options, and unlimited PTO",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Target,
      title: "Performance Rewards",
      description: "Competitive salary, performance bonuses, and equity participation",
      color: "from-orange-500 to-red-600"
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We embrace new technologies and creative solutions to solve complex problems.",
      icon: Zap,
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Client Success",
      description: "Our clients' success is our success. We go above and beyond to deliver excellence.",
      icon: Star,
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Team Collaboration",
      description: "We believe in the power of teamwork and open communication.",
      icon: Users,
      color: "from-pink-500 to-violet-600"
    },
    {
      title: "Continuous Learning",
      description: "We invest in our team's growth and encourage lifelong learning.",
      icon: Award,
      color: "from-orange-500 to-red-600"
    }
  ];

  const handleApplyNow = (jobTitle: string) => {
    const jobId = jobTitle.toLowerCase().replace(/\s+/g, '-');
    navigate(`/job/${jobId}`);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/10 dark:border-gray-700/10">
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
              <a href="/pricing" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                Pricing
              </a>
              <a href="/careers" className="text-orange-500 dark:text-orange-400 font-semibold">
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
              <a href="/pricing" className="block text-gray-700 dark:text-gray-300 hover:text-orange-500">Pricing</a>
              <a href="/careers" className="block text-orange-500 font-semibold">Careers</a>
              <a href="#contact" className="block text-gray-700 dark:text-gray-300 hover:text-orange-500">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container-modern text-center">
          <div className="space-y-8">
            <h1 className="text-display text-shimmer">
              Join Our
            </h1>
            <h2 className="text-hero text-gray-800 dark:text-gray-200">
              Amazing <span className="text-transparent bg-gradient-saffron bg-clip-text">Team</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Be part of India's leading tech solutions company. We're building the future of digital transformation together.
            </p>
            <Button className="modern-button text-lg px-12 py-6 hover:scale-105 transform transition-all duration-300">
              View Open Positions
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-modern">
          <div className="text-center mb-16">
            <h2 className="text-section text-gray-900 dark:text-white mb-6">
              Our Culture & <span className="text-transparent bg-gradient-primary bg-clip-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              What makes SprinkleLight a great place to work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="modern-card hover:shadow-2xl border-0 group">
                <CardHeader>
                  <div className={`inline-flex p-4 bg-gradient-to-r ${value.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-modern group-hover:bg-clip-text transition-all duration-300">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container-modern">
          <div className="text-center mb-16">
            <h2 className="text-section text-gray-900 dark:text-white mb-6">
              Why You'll Love <span className="text-transparent bg-gradient-primary bg-clip-text">Working Here</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive benefits and perks for our team members
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="modern-card p-8 hover:shadow-2xl h-full">
                  <div className={`inline-flex p-4 bg-gradient-to-r ${benefit.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-modern group-hover:bg-clip-text transition-all duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-modern">
          <div className="text-center mb-16">
            <h2 className="text-section text-gray-900 dark:text-white mb-6">
              Open <span className="text-transparent bg-gradient-primary bg-clip-text">Positions</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Find your next career opportunity with us
            </p>
          </div>
          
          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="modern-card hover:shadow-2xl border-0 group">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${job.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <span className="text-white font-bold text-xl">💼</span>
                        </div>
                        <div>
                          <CardTitle className="text-2xl mb-2 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-modern group-hover:bg-clip-text transition-all duration-300">
                            {job.title}
                          </CardTitle>
                          <CardDescription className="flex flex-wrap gap-4 text-base">
                            <span className="flex items-center">
                              <MapPin className="w-4 h-4 mr-2" />
                              {job.location}
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-2" />
                              {job.type}
                            </span>
                            <span className="text-transparent bg-gradient-modern bg-clip-text font-bold">{job.experience}</span>
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                    <Button 
                      className="modern-button mt-6 lg:mt-0 px-8 py-4 hover:scale-105 transition-all duration-300"
                      onClick={() => handleApplyNow(job.title)}
                    >
                      Apply Now
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">{job.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {job.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container-modern">
          <div className="text-center mb-16">
            <h2 className="text-section text-gray-900 dark:text-white mb-6">
              Our Hiring <span className="text-transparent bg-gradient-primary bg-clip-text">Process</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Apply", description: "Submit your application and resume", color: "from-blue-500 to-purple-600" },
              { step: "2", title: "Screen", description: "Initial phone or video screening", color: "from-green-500 to-teal-600" },
              { step: "3", title: "Interview", description: "Technical and cultural fit interviews", color: "from-orange-500 to-red-600" },
              { step: "4", title: "Offer", description: "Receive offer and join our team", color: "from-pink-500 to-violet-600" }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="modern-card p-8 hover:shadow-2xl h-full">
                  <div className={`w-20 h-20 bg-gradient-to-r ${process.color} rounded-2xl flex items-center justify-center text-white font-black text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-modern group-hover:bg-clip-text transition-all duration-300">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="container-modern text-center">
          <h2 className="text-section mb-6">
            Ready to Shape the <span className="text-transparent bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text">Future?</span>
          </h2>
          <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Don't see the perfect role? We're always looking for exceptional talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-white text-purple-900 hover:bg-gray-100 px-12 py-6 text-lg font-bold hover:scale-105 transition-all duration-300">
              Send Your Resume
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900 px-12 py-6 text-lg hover:scale-105 transition-all duration-300">
              Contact HR Team
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Careers;
