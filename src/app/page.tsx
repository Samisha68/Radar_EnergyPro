// 'use client'

// import React from 'react'
// import Head from 'next/head'
// import { Zap, User, Wallet, Sun } from 'lucide-react'
// import { motion } from 'framer-motion'
// import Link from 'next/link' // Import Link from next/link

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-teal-100 flex flex-col overflow-hidden">
//       <Head>
//         <title>EnergyPro - Power Your Future</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* Subtle background pattern */}
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiNlZWVlZWUiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-50"></div>

//       {/* Navbar Section */}
//       <motion.header
//         className="p-5 relative z-10"
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <nav className="flex justify-between items-center">
//           <motion.div
//             className="flex items-center space-x-2"
//             whileHover={{ scale: 1.05 }}
//           >
//             <Zap size={32} className="text-teal-600" />
//             <span className="text-2xl font-bold text-blue-900">EnergyPro</span>
//           </motion.div>
//           <div className="flex space-x-4">
//           <Link href={"/signup"}>
//             <motion.button
//               className="bg-teal-500 text-white px-4 py-2 rounded-md flex items-center hover:bg-teal-600 transition-colors"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >

//               <User size={18} className="mr-2" />
 
//               Sign In
 
//             </motion.button>
//             </Link>
            
//             <motion.button
//               className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center hover:bg-blue-600 transition-colors"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Wallet size={18} className="mr-2" />
//               Connect Wallet
//             </motion.button>
//           </div>
//         </nav>
//       </motion.header>

//       {/* Main Content Section */}
//       <main className="flex-grow flex flex-col items-center justify-center px-4 relative z-10">
//         <div className="text-center mb-12">
//           {/* Heading */}
//           <motion.h1
//             className="text-7xl font-bold text-blue-900 mb-6"
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             Revolutionizing Solar Energy Distribution in India
//           </motion.h1>
//           {/* Subheading */}
//           <motion.p
//             className="text-3xl text-teal-700 mb-8"
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             Empowering communities with peer-to-peer solar energy trading.
//             Join the green revolution today!
//           </motion.p>
//         </div>

//         {/* Sun Icon as Get Started Button */}
//         <Link href="/about"> {/* Use Link for navigation */}
//           <motion.button
//             className="group relative flex flex-col items-center justify-center"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//           >
//             <motion.div
//               animate={{
//                 rotate: 360,
//                 scale: [1, 1.1, 1],
//               }}
//               transition={{
//                 duration: 10,
//                 repeat: Infinity,
//                 ease: 'linear',
//               }}
//             >
//               <Sun size={120} className="text-yellow-500 mb-4" />
//             </motion.div>
//             <span className="text-blue-900 text-2xl font-semibold">Get Started</span>
//             <motion.span
//               className="absolute -bottom-8 text-teal-700 opacity-0 group-hover:opacity-100 transition-opacity"
//               initial={{ y: 10 }}
//               animate={{ y: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               Click to begin
//             </motion.span>
//           </motion.button>
//         </Link>

//       </main>

//       {/* Footer */}
//       <footer className="p-5 text-center text-teal-700 relative z-10">
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 1 }}
//         >
//           © 2024 EnergyPro. All rights reserved.
//         </motion.p>
//       </footer>
//     </div>
//   )
// }

'use client'

import React from 'react'
import Head from 'next/head'
import { Zap, User, Wallet, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-teal-100 flex flex-col overflow-hidden">
      <Head>
        <title>EnergyPro - Power Your Future</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
          <div className="flex space-x-4">
            <Link href={"/signup"}>
              <motion.button
                className="bg-teal-500 text-white px-4 py-2 rounded-md flex items-center hover:bg-teal-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <User size={18} className="mr-2" />
                Sign In
              </motion.button>
            </Link>

            <motion.button
              className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Wallet size={18} className="mr-2" />
              Connect Wallet
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Main Content Section */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 relative z-10">
        <div className="text-center mb-12">
          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-blue-900 mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Revolutionizing Solar Energy Distribution in India
          </motion.h1>
          {/* Subheading */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-teal-700 mb-8 px-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Empowering communities with peer-to-peer solar energy trading.
            Join the green revolution today!
          </motion.p>
        </div>

        {/* Sun Icon as Get Started Button */}
        <Link href="/about">
          <motion.button
            className="group relative flex flex-col items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <Sun size={120} className="text-yellow-500 mb-4" />
            </motion.div>
            <span className="text-blue-900 text-2xl font-semibold">Get Started</span>
            <motion.span
              className="absolute -bottom-8 text-teal-700 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Click to begin
            </motion.span>
          </motion.button>
        </Link>
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
