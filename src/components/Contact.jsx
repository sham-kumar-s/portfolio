import React from 'react';
import { Send } from 'lucide-react';

export default function Contact({ theme, formData, setFormData, formStatus, handleSubmit }) {
  const isDark = theme === 'dark';

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Send className="mr-3 text-blue-500" size={32} />
          <h2 className={`text-4xl font-bold ${
            isDark ? 'text-gray-100' : 'text-gray-900'
          }`}>Get In Touch</h2>
        </div>
        <form 
          onSubmit={handleSubmit}
          className={`rounded-lg p-8 ${
            isDark ? 'bg-gray-900 border border-gray-800' : 'bg-white shadow-lg border border-gray-200'
          }`}
        >
          <div className="mb-6">
            <label className={`block mb-2 font-semibold ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className={`w-full px-4 py-3 rounded-lg ${
                isDark ? 'bg-gray-950 border-gray-700 text-gray-200 placeholder-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
              } border focus:outline-none focus:border-blue-500`}
              placeholder="Your name"
            />
          </div>
          <div className="mb-6">
            <label className={`block mb-2 font-semibold ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className={`w-full px-4 py-3 rounded-lg ${
                isDark ? 'bg-gray-950 border-gray-700 text-gray-200 placeholder-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
              } border focus:outline-none focus:border-blue-500`}
              placeholder="your.email@example.com"
            />
          </div>
          <div className="mb-6">
            <label className={`block mb-2 font-semibold ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows="5"
              className={`w-full px-4 py-3 rounded-lg ${
                isDark ? 'bg-gray-950 border-gray-700 text-gray-200 placeholder-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
              } border focus:outline-none focus:border-blue-500`}
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            disabled={formStatus === 'sending'}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition disabled:opacity-50"
          >
            {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {formStatus === 'success' && (
            <p className="mt-4 text-green-500 text-center">Message sent successfully!</p>
          )}
        </form>
      </div>
    </section>
  );
}

