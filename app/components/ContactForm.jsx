'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    type: 'collaboration'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6 p-6 bg-white/5 backdrop-blur-lg rounded-xl">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg focus:ring-accent focus:border-accent text-white"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg focus:ring-accent focus:border-accent text-white"
          required
        />
      </div>

      <div>
        <label htmlFor="type" className="block text-sm font-medium text-white mb-2">
          Inquiry Type
        </label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg focus:ring-accent focus:border-accent text-white"
        >
          <option value="collaboration">Collaboration</option>
          <option value="booking">Booking</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg focus:ring-accent focus:border-accent text-white"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 bg-accent hover:bg-secondary text-white font-medium rounded-lg transition-colors duration-300"
      >
        Send Message
      </button>
    </form>
  );
} 