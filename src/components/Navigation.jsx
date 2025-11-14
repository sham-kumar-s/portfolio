import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navigation({ theme, scrolled, activeSection, menuOpen, setMenuOpen, toggleTheme, scrollToSection }) {
  const isDark = theme === 'dark';

  return (
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
  );
}

