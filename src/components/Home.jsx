import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Home({ theme, scrollToSection }) {
  const isDark = theme === 'dark';

  return (
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
              Sham Kumar
            </span>
          </h1>
          <p className={`text-xl md:text-2xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Full Stack Developer | Version Control Enthusiast
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
          <a href="https://github.com/sham-kumar-s" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition transform hover:scale-110">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/sham-kumar-s" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition transform hover:scale-110">
            <Linkedin size={28} />
          </a>
          <a href="mailto:shamuvel2002@gmail.com" className="hover:text-blue-500 transition transform hover:scale-110">
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}

