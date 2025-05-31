
import { useState } from 'react';
import { Moon, Sun, Menu, X, MapPin, Clock, Users, Heart, Code, Palette, Target, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Careers = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      description: "Join our engineering team to build cutting-edge web applications and scalable solutions for our clients."
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "2-4 years",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research", "Design Systems"],
      description: "Create beautiful and intuitive user experiences that delight our clients and their customers."
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Delhi, India",
      type: "Full-time",
      experience: "3-5 years",
      skills: ["SEO", "SEM", "Social Media", "Content Marketing", "Analytics"],
      description: "Drive digital marketing strategies and campaigns to help our clients achieve their business goals."
    },
    {
      title: "Mobile App Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "3-5 years",
      skills: ["React Native", "Flutter", "iOS", "Android", "API Integration"],
      description: "Develop innovative mobile applications for iOS and Android platforms using cutting-edge technologies."
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "4-6 years",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Monitoring"],
      description: "Build and maintain scalable infrastructure to support our growing portfolio of applications."
    },
    {
      title: "Content Creator",
      department: "Marketing",
      location: "Pune, India",
      type: "Part-time",
      experience: "1-3 years",
      skills: ["Video Editing", "Writing", "Social Media", "SEO", "Analytics"],
      description: "Create engaging content for our tech.brunch platform and client social media channels."
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs"
    },
    {
      icon: Code,
      title: "Learning & Growth",
      description: "Annual learning budget, conference attendance, and skill development programs"
    },
    {
      icon: Users,
      title: "Work-Life Balance",
      description: "Flexible working hours, remote work options, and unlimited PTO"
    },
    {
      icon: Target,
      title: "Performance Rewards",
      description: "Competitive salary, performance bonuses, and equity participation"
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We embrace new technologies and creative solutions to solve complex problems."
    },
    {
      title: "Client Success",
      description: "Our clients' success is our success. We go above and beyond to deliver excellence."
    },
    {
      title: "Team Collaboration",
      description: "We believe in the power of teamwork and open communication."
    },
    {
      title: "Continuous Learning",
      description: "We invest in our team's growth and encourage lifelong learning."
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
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
              Join Our
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              Amazing Team
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Be part of India's leading tech solutions company. We're building the future of digital transformation together.
          </p>
          <Button className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold">
            View Open Positions
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Culture & Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              What makes SprinkleLight a great place to work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl text-orange-500">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why You'll Love Working Here
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Comprehensive benefits and perks for our team members
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="inline-flex p-3 bg-gradient-to-r from-orange-500 to-pink-600 rounded-lg mb-6">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Find your next career opportunity with us
            </p>
          </div>
          
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <CardDescription className="flex flex-wrap gap-4 text-sm">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </span>
                        <span className="text-orange-500 font-semibold">{job.experience}</span>
                      </CardDescription>
                    </div>
                    <Button className="mt-4 md:mt-0 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white">
                      Apply Now
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-full text-sm">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Our Hiring Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Apply", description: "Submit your application and resume" },
              { step: "2", title: "Screen", description: "Initial phone or video screening" },
              { step: "3", title: "Interview", description: "Technical and cultural fit interviews" },
              { step: "4", title: "Offer", description: "Receive offer and join our team" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{process.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Shape the Future?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Don't see the perfect role? We're always looking for exceptional talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 transition-all duration-300 px-8 py-3">
              Send Your Resume
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 transition-all duration-300 px-8 py-3">
              Contact HR Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
