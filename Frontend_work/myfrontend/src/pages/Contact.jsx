import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  // Added state to capture form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business_type: '',
    message: '',
    wants_ai_automation: false
  });

  // Added handler to send data to your Django API
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/consultation/', formData);
      alert("Consultation request sent successfully!");
      // Reset form
      setFormData({ name: '', email: '', business_type: '', message: '', wants_ai_automation: false });
    } catch (error) {
      console.error("There was an error sending the request!", error);
      alert("Failed to send request. Ensure the backend is running.");
    }
  };

  return (
    <div className="contact-container p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-900">Request a Consultation</h1>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            className="w-full p-2 border border-gray-300 rounded" 
            placeholder="Your Name" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            className="w-full p-2 border border-gray-300 rounded" 
            placeholder="Your Email" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="business_type">Business Type</label>
          <input 
            type="text" 
            id="business_type" 
            className="w-full p-2 border border-gray-300 rounded" 
            placeholder="e.g., E-commerce, Healthcare" 
            value={formData.business_type}
            onChange={(e) => setFormData({...formData, business_type: e.target.value})}
            required 
          />
        </div>
        <div className="mb-4 flex items-center">
          <input 
            type="checkbox" 
            id="ai_automation" 
            className="mr-2" 
            checked={formData.wants_ai_automation}
            onChange={(e) => setFormData({...formData, wants_ai_automation: e.target.checked})}
          />
          <label className="text-gray-700 font-bold" htmlFor="ai_automation">Interested in AI Automation?</label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Message</label>
          <textarea 
            id="message" 
            className="w-full p-2 border border-gray-300 rounded" 
            placeholder="Tell us about your needs" 
            rows="4"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-900 text-white font-bold py-2 rounded hover:bg-blue-800 transition">
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default Contact;