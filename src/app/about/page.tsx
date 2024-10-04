'use client'

import React from 'react'
import Image from 'next/image'
import { Zap, ArrowLeft, Sun, Users, Leaf, Lightbulb } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-teal-100 flex flex-col overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiNlZWVlZWUiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-50"></div>

      {/* Navbar Section */}
      <motion.header
        className="p-5 relative z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="flex justify-between items-center">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Zap size={32} className="text-teal-600" />
            <span className="text-2xl font-bold text-blue-900">EnergyPro</span>
          </motion.div>
          <Link href="/" passHref>
            <motion.button
              className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Home
            </motion.button>
          </Link>
        </nav>
      </motion.header>

      {/* Main Content Section */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-8 relative z-10">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">The EnergyPro Story</h1>
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Image Column */}
            <motion.div
              className="lg:w-1/2 grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Image blocks */}
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.2)' }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/1.jpg"
                  alt="EnergyPro Founders"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.2)' }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/2.jpg"
                  alt="EnergyPro Solar Panels"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.2)' }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/3.jpg"
                  alt="EnergyPro Team"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.2)' }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/4.jpg"
                  alt="EnergyPro Sustainability"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </motion.div>
            </motion.div>

            {/* Text Column */}
            <motion.div
              className="lg:w-1/2 space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <section className="bg-white bg-opacity-70 rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-blue-800 mb-3 flex items-center">
                  <Sun className="mr-2 text-teal-600" size={24} />
                  Our Beginning
                </h2>
                <p className="text-lg text-teal-700">
                  Energy Pro was born from a simple idea: what if we could make solar energy work better for everyone in India? We saw a system where solar panel owners were forced to sell energy at low rates and buy it back at high prices. We knew there had to be a better way.
                </p>
              </section>

              <section className="bg-white bg-opacity-70 rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-blue-800 mb-3 flex items-center">
                  <Users className="mr-2 text-teal-600" size={24} />
                  Join Our Mission
                </h2>
                <p className="text-lg text-teal-700">
                Imagine a world where your rooftop solar panels not only power your home but also benefit your neighbors! 
                We&apos;re building a decentralized energy marketplace that empowers communities, encourages sustainable living, 
                and accelerates India&apos;s transition to clean, renewable energy.
                </p>
              </section>

              <section className="bg-white bg-opacity-70 rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-blue-800 mb-3 flex items-center">
                  <Lightbulb className="mr-2 text-teal-600" size={24} />
                  Our Vision
                </h2>
                <p className="text-lg text-teal-700">
                  We envision a future where neighborhoods in India harness solar energy through efficient micro-grids, integrating technology to create self-sufficient communities. This transformation will empower residents to produce, share, and manage their energy needs sustainably.
                </p>
              </section>

              <section className="bg-white bg-opacity-70 rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-blue-800 mb-3 flex items-center">
                  <Leaf className="mr-2 text-teal-600" size={24} />
                  Our Impact
                </h2>
                <p className="text-lg text-teal-700">
                  At the heart of our mission lies a commitment to fostering a sustainable future. By promoting solar adoption, we aim to significantly reduce carbon emissions, contributing to a cleaner and healthier planet.
                </p>
              </section>
            </motion.div>
          </div>

          {/* Call to Action Section */}
          <section className="relative mt-12 bg-teal-500 text-white p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-center">Ready to Make a Change?</h2>
            <p className="text-lg text-center mb-4">Discover how EnergyPro can help you harness the power of the sun.</p>
            <div className="text-center">
              <Link href="/services" passHref>
                <motion.button
                  className="bg-white text-teal-500 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Our Services
                </motion.button>
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-5 text-center text-teal-700 relative z-10">
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