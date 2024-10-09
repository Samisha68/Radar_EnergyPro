'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation' // Import the router for navigation
import Head from 'next/head'
import { Zap, Wallet, Trash } from 'lucide-react' // Icons from lucide-react

import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';


type AddedItem = {
  units: number
  rate: number
}

export default function SellerDashboard() {
  const router = useRouter() // Initialize router
  const [units, setUnits] = useState<string>('')
  const [rate, setRate] = useState<string>('')
  const [addedItems, setAddedItems] = useState<AddedItem[]>([])

  // Handle adding units and rates
  const handleAddUnits = () => {
    if (units && rate && parseFloat(units) > 0 && parseFloat(rate) > 0) {
      const newItem: AddedItem = {
        units: parseFloat(units),
        rate: parseFloat(rate),
      }
      setAddedItems([...addedItems, newItem])
      setUnits('')
      setRate('')
      alert(`${newItem.units} $BIJLEE added at a rate of ${newItem.rate} per unit`)
    } else {
      alert('Please enter valid units and rate')
    }
  }

  // Handle removing items from the list
  const handleRemoveItem = (index: number) => {
    const updatedItems = addedItems.filter((_, i) => i !== index)
    setAddedItems(updatedItems)
  }
  const { connect, connected, publicKey } = useWallet();
  const { setVisible } = useWalletModal(); // Show wallet selection modal


  // Handle wallet selection
  const handleConnectPhantom = async () => {
    try {
      if (!connected) {
        setVisible(true); // Open the wallet selection modal
        await connect();
        console.log('Connected to Phantom wallet:', publicKey?.toString());
      } else {
        console.log('Already connected to:', publicKey?.toString());
      }
    } catch (e:unknown) {

      console.error('Failed to connect to Phantom wallet:', e);
    }
  };

  // Navigate to homepage on logo click
  const handleLogoClick = () => {
    router.push('/') // Navigate to homepage
  }

  return (
    <>
      <Head>
        <title>EnergyPro - Power Your Future</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-teal-100 p-6">
        {/* Navbar */}
        <header className="bg-white p-4 shadow-md flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
            <Zap size={32} className="text-teal-600 mr-3" /> {/* EnergyPro Logo with click handler */}
            <h1 className="text-3xl font-bold text-blue-900">Seller Dashboard</h1>
          </div>
          <div className="flex items-center">
            <p className="text-lg text-blue-900 mr-4">Welcome!</p>
            <button
              onClick={handleConnectPhantom}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg flex items-center hover:bg-blue-700 transition-colors"
            >
              <Wallet size={20} className="mr-2" /> {/* Wallet icon */}
              Connect Wallet
            </button>
          </div>
        </header>

        {/* Main content */}
        <main className="mt-10">
          <section className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">List Amount of Energy for Sale</h2>

            {/* Input section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <input
                  type="number"
                  value={units}
                  onChange={(e) => setUnits(e.target.value)}
                  className="w-full p-2 border border-teal-300 rounded-lg text-blue-900"
                  placeholder="Enter units to add"
                />
              </div>
              <div className="mb-4">
                <input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  className="w-full p-2 border border-teal-300 rounded-lg text-blue-900"
                  placeholder="Enter rate per unit (Bijlee)"
                />
              </div>
              <button
                onClick={handleAddUnits}
                className="bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors w-full"
              >
                Add Units
              </button>
            </div>

            {/* Added items list */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-blue-900">Listed Energy For sale</h3>
              <ul className="bg-white p-4 rounded-lg shadow-md mt-4">
                {addedItems.length > 0 ? (
                  addedItems.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center text-teal-700 mb-2 bg-teal-50 p-3 rounded-lg"
                    >
                      <span>
                        {item.units} $BIJLEE / {item.rate} per unit
                      </span>
                      <button
                        onClick={() => handleRemoveItem(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash size={20} /> {/* Trash icon for removal */}
                      </button>
                    </li>
                  ))
                ) : (
                  <p className="text-blue-700">Nothing added for sale</p>
                )}
              </ul>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
