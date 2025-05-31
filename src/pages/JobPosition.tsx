
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Moon, Sun, Menu, X, ArrowLeft, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Footer from '@/components/Footer';

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  experience: z.string().min(1, { message: "Please select your experience level." }),
  resume: z.any(),
  coverLetter: z.string().min(50, { message: "Cover letter must be at least 50 characters." }),
});

const JobPosition = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      experience: "",
      coverLetter: "",
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const jobDetails = {
    "senior-full-stack-developer": {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "4-6 years",
      skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
      description: "We are looking for a Senior Full Stack Developer to join our dynamic engineering team. You will be responsible for developing and maintaining web applications using modern technologies and best practices.",
      responsibilities: [
        "Design and develop scalable web applications using React and Node.js",
        "Collaborate with cross-functional teams to define and implement new features",
        "Write clean, maintainable, and well-documented code",
        "Optimize applications for maximum speed and scalability",
        "Participate in code reviews and mentor junior developers"
      ],
      requirements: [
        "4-6 years of experience in full-stack development",
        "Strong proficiency in React, Node.js, and TypeScript",
        "Experience with MongoDB and cloud platforms (AWS preferred)",
        "Knowledge of RESTful APIs and microservices architecture",
        "Experience with version control systems (Git)"
      ]
    },
    "ui-ux-designer": {
      title: "UI/UX Designer",
      department: "Design",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "2-4 years",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research", "Design Systems"],
      description: "Join our creative team as a UI/UX Designer and help create beautiful, intuitive user experiences that delight our clients and their customers.",
      responsibilities: [
        "Create user-centered designs by understanding business requirements",
        "Develop wireframes, prototypes, and high-fidelity mockups",
        "Conduct user research and usability testing",
        "Collaborate with developers to ensure design implementation",
        "Maintain and evolve design systems"
      ],
      requirements: [
        "2-4 years of experience in UI/UX design",
        "Proficiency in Figma and Adobe Creative Suite",
        "Strong understanding of user-centered design principles",
        "Experience with prototyping and user testing",
        "Portfolio showcasing design process and outcomes"
      ]
    }
  };

  const job = jobDetails[jobId as keyof typeof jobDetails];

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Job Not Found</h2>
          <Button onClick={() => navigate('/careers')}>Back to Careers</Button>
        </div>
      </div>
    );
  }

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
        <Card className="max-w-md mx-auto text-center">
          <CardHeader>
            <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <CardTitle className="text-2xl text-green-600 dark:text-green-400">Application Submitted!</CardTitle>
            <CardDescription>
              Thank you for your interest in the {job.title} position. We have received your application and will review it shortly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              You will receive a confirmation email within 24 hours. If you are shortlisted, our HR team will contact you within 3-5 business days.
            </p>
            <Button onClick={() => navigate('/careers')} className="w-full">
              Back to Careers
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SL</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
                SprinkleLight
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">Home</a>
              <a href="/pricing" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">Pricing</a>
              <a href="/careers" className="text-orange-500 dark:text-orange-400 font-semibold">Careers</a>
            </div>

            <div className="flex items-center space-x-4">
              <button onClick={toggleDarkMode} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button variant="outline" onClick={() => navigate('/careers')} className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Careers
          </Button>

          {/* Job Details */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-3xl">{job.title}</CardTitle>
              <CardDescription className="text-lg">
                {job.department} • {job.location} • {job.type} • {job.experience}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Job Description</h3>
                <p className="text-gray-600 dark:text-gray-400">{job.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Key Responsibilities</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Requirements</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                  {job.requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Application Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Apply for this Position</CardTitle>
              <CardDescription>Fill out the form below to submit your application</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Years of Experience</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 3-5 years" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="resume"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Resume/CV</FormLabel>
                        <FormControl>
                          <Input type="file" accept=".pdf,.doc,.docx" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="coverLetter"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cover Letter</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us why you're interested in this position and why you'd be a great fit..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white">
                    Submit Application
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default JobPosition;
