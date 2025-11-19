import React from 'react';

export default function Footer({ theme }) {
  const isDark = theme === 'dark';
 
  return (
    <footer className={`py-8 border-t ${
      isDark ? 'bg-gray-950 border-gray-800' : 'bg-gray-50 border-gray-200'
    }`}>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className={isDark ? 'text-gray-500' : 'text-gray-600'}>
          © 2024 Your Name. Built with React and ❤️
        </p>
      </div>
    </footer>
  );
}

