// src/components/Registration.js

import React, { useState } from 'react';
import api from '../utils/api';

const Registration = () => {
  const [formData, setFormData] = useState({
    ownerName: '',
    rollNo: '',
    companyName: '',
    accessCode: '',
    ownerEmail: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/train/register', formData);
      console.log('Registration successful!', response.data);
      // Store the clientID and clientSecret in your app's state or context
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <div>
      <h2>Register Your Company</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Owner Name:
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Roll No:
            <input
              type="text"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Company Name:
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Access Code:
            <input
              type="text"
              name="accessCode"
              value={formData.accessCode}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Owner Email:
            <input
              type="email"
              name="ownerEmail"
              value={formData.ownerEmail}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
