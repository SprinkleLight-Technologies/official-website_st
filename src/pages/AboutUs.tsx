import { useState } from 'react';
import { Moon, Sun, Menu, X, Users, Clock, Target, Award, TrendingUp, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const AboutUs = () => {
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
                <a href="/about-us" className="text-orange-500 dark:text-orange-400 px-3 py-2 text-sm font-medium">
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

              {/* Dark Mode Toggle & Mobile Menu Button */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                >
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                  Home
                </a>
                <a href="/about-us" className="block px-3 py-2 rounded-md text-base font-medium text-orange-500 dark:text-orange-400 bg-gray-100 dark:bg-gray-800">
                  About
                </a>
                <a href="/#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                  Services
                </a>
                <a href="/pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                  Pricing
                </a>
                <a href="/careers" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                  Careers
                </a>
              </div>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-orange-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              <span className="block">About</span>
              <span className="block bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">SprinkleLight Technologies</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              Transforming ideas into digital reality with innovation, expertise, and passion.
            </p>
          </div>
        </div>

        {/* Who Are We Section */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-orange-500 dark:text-orange-400 font-semibold tracking-wide uppercase">Our Identity</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Who Are We?
              </p>
              <div className="mt-8 lg:mx-auto lg:max-w-3xl">
                <div className="bg-gradient-to-r from-orange-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl shadow-sm">
                  <div className="flex items-center justify-center mb-6">
                    <div className="p-3 rounded-full bg-orange-100 dark:bg-gray-700">
                      <Users className="h-8 w-8 text-orange-500 dark:text-orange-400" />
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    SprinkleLight Technologies is a forward-thinking digital solutions company dedicated to helping businesses thrive in the digital era. We are a team of passionate technologists, designers, and strategists who believe in the power of technology to transform businesses and enhance lives.
                  </p>
                  <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Our expertise spans across web development, mobile applications, UI/UX design, and digital strategy. We combine technical excellence with creative thinking to deliver solutions that are not just functional but also beautiful and user-friendly.
                  </p>
                  <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    At SprinkleLight, we don't just build products; we build relationships. We work closely with our clients to understand their unique challenges and goals, ensuring that every solution we deliver is tailored to their specific needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-orange-500 dark:text-orange-400 font-semibold tracking-wide uppercase">Our Journey</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Our Story
              </p>
              <div className="mt-8 lg:mx-auto lg:max-w-3xl">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm">
                  <div className="flex items-center justify-center mb-6">
                    <div className="p-3 rounded-full bg-orange-100 dark:bg-gray-700">
                      <Clock className="h-8 w-8 text-orange-500 dark:text-orange-400" />
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    SprinkleLight Technologies was founded in 2018 by a group of tech enthusiasts who shared a common vision: to make cutting-edge technology accessible to businesses of all sizes. What started as a small team working out of a modest office has now grown into a thriving company with a global presence.
                  </p>
                  <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Our journey began with a focus on web development, but as we grew and evolved, so did our service offerings. We expanded into mobile app development, UI/UX design, and digital strategy consulting, always staying at the forefront of technological advancements.
                  </p>
                  <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Throughout our journey, we've remained committed to our core values of innovation, quality, and client satisfaction. These values have guided our decisions and helped us build a reputation for excellence in the industry.
                  </p>
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-3">
                        <Target className="h-6 w-6 text-orange-500 dark:text-orange-400" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">2018</h3>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Founded with a mission to democratize technology</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-3">
                        <Award className="h-6 w-6 text-orange-500 dark:text-orange-400" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">2020</h3>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Expanded services and won our first industry award</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-3">
                        <Zap className="h-6 w-6 text-orange-500 dark:text-orange-400" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">2022</h3>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Launched our innovative digital solutions platform</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Growth Section */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-orange-500 dark:text-orange-400 font-semibold tracking-wide uppercase">Our Progress</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Our Growth
              </p>
              <div className="mt-8 lg:mx-auto lg:max-w-3xl">
                <div className="bg-gradient-to-r from-orange-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl shadow-sm">
                  <div className="flex items-center justify-center mb-6">
                    <div className="p-3 rounded-full bg-orange-100 dark:bg-gray-700">
                      <TrendingUp className="h-8 w-8 text-orange-500 dark:text-orange-400" />
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Over the years, SprinkleLight Technologies has experienced remarkable growth, both in terms of our team size and our project portfolio. We've expanded from a small local operation to a company with clients across multiple countries and industries.
                  </p>
                  <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Our team has grown from the original 5 founders to over 50 talented professionals, each bringing unique skills and perspectives to our work. This diversity of thought and expertise has been a key driver of our innovation and success.
                  </p>
                  <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    We've completed more than 200 projects for clients ranging from startups to Fortune 500 companies, across sectors including healthcare, finance, education, and retail. Each project has added to our knowledge base and refined our approach, making us better equipped to tackle new challenges.
                  </p>
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center">
                      <p className="text-3xl font-bold text-orange-500 dark:text-orange-400">50+</p>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Team Members</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center">
                      <p className="text-3xl font-bold text-orange-500 dark:text-orange-400">200+</p>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Projects Completed</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center">
                      <p className="text-3xl font-bold text-orange-500 dark:text-orange-400">15+</p>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Countries Served</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;