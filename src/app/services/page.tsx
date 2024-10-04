'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Zap, DollarSign, Tag, BarChart, Globe, ShoppingCart, TrendingUp, Heart, Grid, LifeBuoy, Map, Lock, Code, Phone, Mail, MapPin } from 'lucide-react'
import { Coins } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0])

  const [windowWidth, setWindowWidth] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    // Update state with window dimensions only on client-side
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)

    // Optional: Add event listener for resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

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
                  x: Math.random() * windowWidth,
                  y: Math.random() * windowHeight,
                }}
                animate={{
                  x: Math.random() * windowWidth,
                  y: Math.random() * windowHeight,
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
              {[ // Services array remains the same
                { icon: DollarSign, title: "Energy Trading Platform", description: "Sell your excess solar energy directly to neighbors at competitive rates." },
                { icon: Zap, title: "Smart Meter Integration", description: "IoT-enabled smart meters for accurate energy production tracking." },
                { icon: Tag, title: "Flexible Pricing", description: "Set your own selling price within market-competitive ranges." },
                { icon: BarChart, title: "Real-time Analytics", description: "Monitor your energy production, sales, and earnings in real-time." },
                { icon: Globe, title: "Access to Clean Energy", description: "Purchase locally-produced solar energy at rates lower than grid prices." },
                { icon: ShoppingCart, title: "Flexible Buying Options", description: "Buy energy as needed or set up automatic purchases." },
                { icon: TrendingUp, title: "Energy Usage Insights", description: "Track your consumption patterns and optimize your energy use." },
                { icon: Heart, title: "Support Local Producers", description: "Contribute to your community's sustainability by supporting local solar energy producers." },
                { icon: Grid, title: "Micro-grid Development", description: "We help communities set up and manage local energy micro-grids." },
                { icon: LifeBuoy, title: "Energy Independence Consulting", description: "Guidance on reducing dependence on the central grid." },
                { icon: Map, title: "Community Energy Planning", description: "Assist in creating sustainable energy plans for neighborhoods and towns." },
                { icon: Lock, title: "Blockchain-based Transactions", description: "Secure, transparent, and efficient energy trading using blockchain technology." },
                { icon: Coins, title: "Energy Pro Token (EPT) System", description: "Our digital token system simplifies energy transactions (100 EPT = 1 unit of electricity)." },
                { icon: Code, title: "API Integration", description: "Businesses can integrate seamlessly with our energy trading platform." }
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
                "Enjoy clean, renewable energy!"
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
                <p className="mb-4"><Phone className="inline mr-2" />+1 234 567 890</p>
                <p className="mb-4"><Mail className="inline mr-2" />info@energypro.com</p>
                <p><MapPin className="inline mr-2" />123 Energy Lane, Green City, CA</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <Link href="#" className="text-white hover:text-teal-600 transition-colors">Facebook</Link>
                  <Link href="#" className="text-white hover:text-teal-600 transition-colors">Twitter</Link>
                  <Link href="#" className="text-white hover:text-teal-600 transition-colors">LinkedIn</Link>
                  <Link href="#" className="text-white hover:text-teal-600 transition-colors">Instagram</Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
