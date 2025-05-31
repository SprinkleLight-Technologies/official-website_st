import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Moon, Sun, Menu, X, User, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import Footer from '@/components/Footer';

const Login = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userType, setUserType] = useState('employee');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just redirect to NotFound page as specified
    navigate('/not-found');
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
                  <img 
                    src={darkMode ? "/ST White Logo.png" : "/ST Main Logo.png"} 
                    alt="SprinkleLight Logo" 
                    className="h-10 w-auto transition-all duration-300"
                  />
                </a>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 px-3 py-2 text-sm font-medium">
                  Home
                </a>
                <a href="/about-us" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 px-3 py-2 text-sm font-medium">
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
                <a href="/about-us" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
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

        {/* Login Section */}
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-gradient-to-r from-orange-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 py-12">
          <Card className="w-full max-w-md mx-4 shadow-lg border-0 dark:bg-gray-900 dark:border-gray-800">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
                Welcome Back
              </CardTitle>
              <CardDescription className="text-center text-gray-600 dark:text-gray-400">
                Please sign in to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <Tabs defaultValue="employee" className="w-full" onValueChange={setUserType}>
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="employee" className="flex items-center justify-center gap-2">
                      <User size={16} />
                      <span>Employee</span>
                    </TabsTrigger>
                    <TabsTrigger value="client" className="flex items-center justify-center gap-2">
                      <Building size={16} />
                      <span>Client</span>
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="employee" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="employee-email">Employee Email</Label>
                      <Input 
                        id="employee-email" 
                        type="email" 
                        placeholder="name@sprinklelight.com" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employee-password">Password</Label>
                      <Input 
                        id="employee-password" 
                        type="password" 
                        placeholder="••••••••" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="client" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="client-id">Client ID</Label>
                      <Input 
                        id="client-id" 
                        type="text" 
                        placeholder="Your client ID" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="client-password">Password</Label>
                      <Input 
                        id="client-password" 
                        type="password" 
                        placeholder="••••••••" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </TabsContent>
                </Tabs>
                
                <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white">
                  Sign In
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Login;