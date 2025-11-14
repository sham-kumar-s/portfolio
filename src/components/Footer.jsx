import React from 'react';

export default function Footer({ theme }) {
  const isDark = theme === 'dark';

  return (
    <footer className={`py-8 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
          © 2024 Your Name. Built with React and ❤️
        </p>
      </div>
    </footer>
  );
}

