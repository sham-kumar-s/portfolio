import React, { useState, useEffect } from 'react';
import { Mail, GitHub, Linkedin, Menu, X, Sun, Moon, Code, Briefcase, User, Send } from 'lucide-react';

export default function Portfolio() {
  const [theme, setTheme] = useState('dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'technologies', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate email sending (replace with your actual email service)
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    }, 1500);
  };

  const technologies = [
    { name: 'React', level: 90, color: '#61DAFB' },
    { name: 'JavaScript', level: 85, color: '#F7DF1E' },
    { name: 'Node.js', level: 80, color: '#339933' },
    { name: 'Python', level: 75, color: '#3776AB' },
    { name: 'CSS/Tailwind', level: 88, color: '#06B6D4' },
    { name: 'MongoDB', level: 70, color: '#47A248' }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack shopping platform with payment integration and admin dashboard',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: '🛒',
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates',
      tech: ['React', 'Firebase', 'Tailwind'],
      image: '📋',
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather forecasting with interactive maps and charts',
      tech: ['React', 'API Integration', 'Charts.js'],
      image: '🌤️',
      link: '#'
    }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? isDark ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'technologies', 'projects', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item
                      ? 'text-blue-500'
                      : isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${
                  isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button onClick={toggleTheme} className="p-2">
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className={`md:hidden py-4 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
              {['home', 'about', 'technologies', 'projects', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 capitalize hover:bg-blue-500/10"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-700"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="mb-8 animate-fade-in">
            <div className={`w-32 h-32 mx-auto rounded-full mb-6 ${
              isDark ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gradient-to-r from-blue-400 to-purple-500'
            } flex items-center justify-center text-5xl`}>
              👨‍💻
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
              Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Your Name
              </span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Full Stack Developer | Creative Problem Solver
            </p>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition"
              >
                Get In Touch
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className={`px-8 py-3 rounded-full border-2 ${
                  isDark ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'
                } transition`}
              >
                View Work
              </button>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mt-12">
            <a href="#" className="hover:text-blue-500 transition transform hover:scale-110">
              <GitHub size={28} />
            </a>
            <a href="#" className="hover:text-blue-500 transition transform hover:scale-110">
              <Linkedin size={28} />
            </a>
            <a href="#" className="hover:text-blue-500 transition transform hover:scale-110">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <User className="mr-3 text-blue-500" size={32} />
            <h2 className="text-4xl font-bold">About Me</h2>
          </div>
          <div className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <p className="mb-4">
              I'm a passionate full-stack developer with a love for creating elegant solutions to complex problems. 
              With expertise in modern web technologies, I build responsive and user-friendly applications.
            </p>
            <p className="mb-4">
              My journey in tech started with curiosity and has evolved into a career driven by continuous learning 
              and innovation. I specialize in React, Node.js, and modern JavaScript frameworks.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <Code className="mr-3 text-blue-500" size={32} />
            <h2 className="text-4xl font-bold">Technologies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className={`p-6 rounded-lg ${
                  isDark ? 'bg-gray-800' : 'bg-white shadow-lg'
                } transform hover:scale-105 transition`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{tech.name}</span>
                  <span className="text-blue-500">{tech.level}%</span>
                </div>
                <div className={`h-3 rounded-full overflow-hidden ${
                  isDark ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${tech.level}%`,
                      backgroundColor: tech.color
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <Briefcase className="mr-3 text-blue-500" size={32} />
            <h2 className="text-4xl font-bold">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`rounded-lg overflow-hidden ${
                  isDark ? 'bg-gray-900' : 'bg-gray-50 shadow-lg'
                } transform hover:scale-105 transition`}
              >
                <div className="text-6xl p-8 text-center bg-gradient-to-r from-blue-500 to-purple-600">
                  {project.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(t => (
                      <span
                        key={t}
                        className={`text-xs px-3 py-1 rounded-full ${
                          isDark ? 'bg-gray-800 text-blue-400' : 'bg-blue-100 text-blue-600'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="text-blue-500 hover:text-blue-600 font-semibold"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <Send className="mr-3 text-blue-500" size={32} />
            <h2 className="text-4xl font-bold">Get In Touch</h2>
          </div>
          <div className={`rounded-lg p-8 ${
            isDark ? 'bg-gray-800' : 'bg-white shadow-lg'
          }`}>
            <div className="mb-6">
              <label className="block mb-2 font-semibold">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={`w-full px-4 py-3 rounded-lg ${
                  isDark ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-300'
                } border focus:outline-none focus:border-blue-500`}
                placeholder="Your name"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-semibold">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={`w-full px-4 py-3 rounded-lg ${
                  isDark ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-300'
                } border focus:outline-none focus:border-blue-500`}
                placeholder="your.email@example.com"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-semibold">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows="5"
                className={`w-full px-4 py-3 rounded-lg ${
                  isDark ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-300'
                } border focus:outline-none focus:border-blue-500`}
                placeholder="Your message..."
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={formStatus === 'sending'}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition disabled:opacity-50"
            >
              {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {formStatus === 'success' && (
              <p className="mt-4 text-green-500 text-center">Message sent successfully!</p>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            © 2024 Your Name. Built with React and ❤️
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .delay-700 {
          animation-delay: 700ms;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}