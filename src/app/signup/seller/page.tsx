'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function SellerSignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', email: '', businessName: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic, API call, etc.
    router.push('/dashboard/seller');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-6">Seller Sign Up</h1>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />

        <input
          type="text"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          placeholder="Business Name"
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />

        <button type="submit" className="bg-teal-500 text-white px-6 py-2 rounded">
          Sign Up as Seller
        </button>
      </form>
    </div>
  );
}
