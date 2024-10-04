'use client'

import React from 'react'
import Image from 'next/image'
import { Zap, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link' // Import Link

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
          {/* Use Link for navigation */}
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
              className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Replace placeholders with actual images when available */}
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.2)' }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/image1.jpeg"
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
                  src="/images/solar-panels.jpg"
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
                  src="/images/team.jpg"
                  alt="EnergyPro Team"
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
              <section>
                <h2 className="text-2xl font-semibold text-blue-800 mb-3">Our Beginning</h2>
                <p className="text-lg text-teal-700">
                  EnergyPro was born in 2020 out of a vision to revolutionize the way we harness and utilize solar energy. Founded by a group of passionate engineers and environmental advocates, our mission has always been clear: to make sustainable energy accessible to everyone.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-800 mb-3">Innovation Journey</h2>
                <p className="text-lg text-teal-700">
                  We started in a small garage, developing innovative solar technologies that could be easily integrated into everyday life. Our breakthrough came with the development of ultra-efficient, flexible solar panels that could be applied to various surfaces, from rooftops to vehicles.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-800 mb-3">Our Values</h2>
                <p className="text-lg text-teal-700">
                  As we grew, we never lost sight of our core values: sustainability, innovation, and community. Today, EnergyPro is at the forefront of the renewable energy revolution, constantly pushing the boundaries of what's possible in solar technology.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-800 mb-3">Join Our Mission</h2>
                <p className="text-lg text-teal-700">
                  Join us in our mission to create a cleaner, brighter future powered by the sun. Together, we can make a difference, one solar panel at a time.
                </p>
              </section>
            </motion.div>
          </div>

          {/* Call to Action Section */}
          <section className="text-center mt-8">
            <h2 className="text-2xl font-bold text-blue-900">Ready to Make a Change?</h2>
            <p className="text-lg text-teal-700 mb-4">Discover how EnergyPro can help you harness the power of the sun.</p>
            <Link href="/services" passHref>
              <motion.button
                className="bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Services
              </motion.button>
            </Link>
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
