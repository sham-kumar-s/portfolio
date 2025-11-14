import React from 'react';
import { Code } from 'lucide-react';

export default function Technologies({ theme }) {
  const isDark = theme === 'dark';

  const technologies = [
    { name: 'React', level: 90, color: '#61DAFB' },
    { name: 'JavaScript', level: 85, color: '#F7DF1E' },
    { name: 'Node.js', level: 80, color: '#339933' },
    { name: 'Python', level: 75, color: '#3776AB' },
    { name: 'CSS/Tailwind', level: 88, color: '#06B6D4' },
    { name: 'MongoDB', level: 70, color: '#47A248' }
  ];

  return (
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
  );
}

