'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Head from 'next/head'
import { Zap, Wallet, Trash, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';


type AddedItem = {
  units: number
  rate: number
}

type Seller = {
  id: number
  name: string
  energyOffers: AddedItem[]
}

const sellersData: Seller[] = [
  {
    id: 1,
    name: 'Seller A',
    energyOffers: [
      { units: 10, rate: 5 },
      { units: 20, rate: 4 },
    ],
  },
  {
    id: 2,
    name: 'Seller B',
    energyOffers: [
      { units: 15, rate: 3 },
      { units: 30, rate: 2.5 },
    ],
  },
]

export default function BuyersDashboard() {
  const router = useRouter()
  const [addedItems, setAddedItems] = useState<AddedItem[]>([])
  const [totalAmount, setTotalAmount] = useState<number>(0)
  const [smartMeterAddress, setSmartMeterAddress] = useState<string>('')

  // Handle adding items to the list
  const handleAddItem = (item: AddedItem) => {
    setAddedItems([...addedItems, item])
    setTotalAmount((prev) => prev + item.units * item.rate) // Calculate total amount
  }

  // Handle deleting items from the list
  const handleDeleteItem = (index: number) => {
    const updatedItems = addedItems.filter((_, i) => i !== index)
    setAddedItems(updatedItems)
    const deletedItem = addedItems[index]
    setTotalAmount((prev) => prev - deletedItem.units * deletedItem.rate)
  }

  // Handle wallet selection
  const { connect, connected, publicKey } = useWallet();
  const { setVisible } = useWalletModal(); // Show wallet selection modal

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

  // Handle the transaction process
  const handleTransaction = async () => {
    const response = await fetch('/api/transaction', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        buyerPublicKey: smartMeterAddress, // User's smart meter address
        units: addedItems.reduce((acc, item) => acc + item.units, 0), // Total units
        rate: addedItems.reduce((acc, item) => acc + item.rate, 0) / addedItems.length, // Average rate
      }),
    })

    const result = await response.json()

    if (result.success) {
      alert(`Transaction successful! Signature: ${result.signature}`)
    } else {
      alert(`Transaction failed: ${result.error}`)
    }
  }

  // Navigate to homepage on logo click
  const handleLogoClick = () => {
    router.push('/') // Navigate to homepage
  }

  return (
    <>
      <Head>
        <title>EnergyPro - Buyer Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-teal-100 p-6">
        {/* Navbar */}
        <header className="bg-white p-4 shadow-md flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
            <Zap size={32} className="text-teal-600 mr-3" />
            <h1 className="text-3xl font-bold text-blue-900">Buyer Dashboard</h1>
          </div>
          <div className="flex items-center">
            <p className="text-lg text-blue-900 mr-4">Welcome!</p>
            <button
              onClick={handleConnectPhantom}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg flex items-center hover:bg-blue-700 transition-colors"
            >
              <Wallet size={20} className="mr-2" />
              Connect Wallet
            </button>
          </div>
        </header>

        {/* Main content */}
        <main className="mt-10 grid grid-cols-3 gap-4">
          <section className="col-span-2 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">Available Energy Offers</h2>

            {/* Sellers List */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              {sellersData.map((seller) => (
                <div key={seller.id} className="mb-4">
                  <h3 className="text-xl font-semibold text-teal-700">{seller.name}</h3>
                  <div className="mt-2">
                    {seller.energyOffers.map((offer, index) => (
                      <motion.div
                        key={index}
                        className="flex justify-between items-center mb-2 p-4 border-b border-teal-300 cursor-pointer hover:bg-teal-50"
                        onClick={() => handleAddItem(offer)} // Add item on click
                      >
                        <span className="text-blue-800">
                          {offer.units} $BIJLEE / {offer.rate} per unit
                        </span>
                        <CheckCircle className="text-green-500" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bills and Transaction Section */}
          <section className="col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-900">Your Bills</h3>

              {/* List of added items */}
              {addedItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center mt-4 p-2 border-b border-gray-300">
                  <span className="text-teal-700">
                    {item.units} units @ {item.rate} per unit
                  </span>
                  <button onClick={() => handleDeleteItem(index)} className="text-red-500">
                    <Trash />
                  </button>
                </div>
              ))}

              {/* Total Purchase */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-blue-900">Total Purchase:</h4>
                <p className="text-2xl text-teal-600 mt-2">${totalAmount.toFixed(2)}</p>
              </div>

              {/* Input for smart meter address */}
              <div className="mt-4">
                <input
                  type="text"
                  value={smartMeterAddress}
                  onChange={(e) => setSmartMeterAddress(e.target.value)}
                  placeholder="Enter your Smart Meter Address"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>

              {/* Do Transaction button */}
              <div className="mt-6">
                <button
                  onClick={handleTransaction}
                  className="w-full bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Do Transaction
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
