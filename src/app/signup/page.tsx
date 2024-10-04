'use client'

import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SignUp() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-teal-100 flex flex-col items-center justify-center">
      <Head>
        <title>Sign Up - EnergyPro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl font-bold text-blue-900 mb-4">
          Sign Up as a Seller or Buyer
        </h1>
        <p className="text-2xl text-teal-700">
          Choose how you want to power your future with us.
        </p>
      </motion.div>

      {/* Seller & Buyer Options */}
      <div className="flex space-x-8">
        {/* Seller Option */}
        <motion.div
          className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Seller</h2>
          <p className="text-lg text-teal-700 mb-6">
            Join us as a seller and offer your solar solutions to a wider market.
          </p>
          <Link href="/signup/seller">
            <motion.button
              className="bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              Sign Up as Seller
            </motion.button>
          </Link>
        </motion.div>

        {/* Buyer Option */}
        <motion.div
          className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Buyer</h2>
          <p className="text-lg text-teal-700 mb-6">
            Become a buyer and access sustainable energy solutions from our sellers.
          </p>
          <Link href="/signup/buyer">
            <motion.button
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              Sign Up as Buyer
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-12 p-5 text-center text-teal-700">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          © 2024 EnergyPro. All rights reserved.
        </motion.p>
      </footer>
    </div>
  )
}
