import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Projects({ theme }) {
  const isDark = theme === 'dark';

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

  return (
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
  );
}

