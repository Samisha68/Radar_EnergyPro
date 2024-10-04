'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Zap, Sun, Wind, Droplet, Battery, Home, Factory, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0])

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-blue-50 to-teal-100 overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 shadow-md">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Zap size={32} className="text-teal-600" />
            <span className="text-2xl font-bold text-blue-900">EnergyPro</span>
          </Link>
          <div className="space-x-4">
            <Link href="/about" className="text-blue-900 hover:text-teal-600 transition-colors">About</Link>
            <Link href="/services" className="text-blue-900 hover:text-teal-600 transition-colors">Services</Link>
            <Link href="#contact" className="text-blue-900 hover:text-teal-600 transition-colors">Contact</Link>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center text-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <h1 className="text-6xl font-bold text-blue-900 mb-6">Our Services</h1>
            <p className="text-2xl text-teal-700 mb-8">Powering a sustainable future, one solution at a time</p>
          </motion.div>
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ opacity }}
          >
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-teal-400 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </motion.div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Our Innovative Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Sun, title: "Solar Panel Installation", description: "State-of-the-art solar panels for maximum energy efficiency" },
                { icon: Wind, title: "Wind Energy Solutions", description: "Harnessing the power of wind for sustainable electricity" },
                { icon: Droplet, title: "Hydroelectric Systems", description: "Clean energy from flowing water sources" },
                { icon: Battery, title: "Energy Storage", description: "Advanced battery solutions for reliable power supply" },
                { icon: Home, title: "Smart Home Integration", description: "Seamlessly integrate renewable energy into your home" },
                { icon: Factory, title: "Industrial Energy Management", description: "Comprehensive energy solutions for businesses" },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-blue-50 p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <service.icon size={48} className="text-teal-600 mb-4" />
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{service.title}</h3>
                  <p className="text-teal-700">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Steps */}
        <section className="py-20 bg-teal-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">How to Get Started</h2>
            <div className="max-w-3xl mx-auto">
              {[
                "Fill out our online registration form",
                "Schedule a free consultation with our experts",
                "Receive a customized energy plan",
                "Approve the proposal and schedule installation",
                "Enjoy clean, renewable energy!",
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-center mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    {index + 1}
                  </div>
                  <p className="text-lg text-blue-900">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <Phone size={20} className="mr-4" />
                    +1 (555) 123-4567
                  </p>
                  <p className="flex items-center">
                    <Mail size={20} className="mr-4" />
                    info@energypro.com
                  </p>
                  <p className="flex items-center">
                    <MapPin size={20} className="mr-4" />
                    123 Green Street, Eco City, EC 12345
                  </p>
                </div>
              </motion.div>
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 rounded-md text-blue-900"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 rounded-md text-blue-900"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-2 rounded-md text-blue-900"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 transition-colors flex items-center"
                >
                  Send Message
                  <ArrowRight size={20} className="ml-2" />
                </button>
              </motion.form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 EnergyPro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}