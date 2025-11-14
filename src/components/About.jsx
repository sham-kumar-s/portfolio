import React from 'react';
import { User } from 'lucide-react';

export default function About({ theme }) {
  const isDark = theme === 'dark';

  return (
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
  );
}

