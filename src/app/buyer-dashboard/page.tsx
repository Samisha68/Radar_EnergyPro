'use client';

import React, { useState, useEffect } from 'react';
import { Wallet, Search, Package, MapPin, Star } from 'lucide-react';
import { string } from 'zod';

interface Offer {
  id: number;
  seller: string;
  energyType: string;
  location: string;
  distance: string;
  pricePerUnit: number;
  availableUnits: number;
  rating: number;
}

export default function BuyerDashboard() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);
  const [quantity, setQuantity] = useState<number>(0);
  const [walletProvider, setWalletProvider] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    checkWalletConnection();
  }, []);

  const checkWalletConnection = async () => {
    try {
      // Check for different wallet providers
      const solanaProvider = (window as any)?.solana;
      const phantomProvider = (window as any)?.phantom?.solana;
      const backpackProvider = (window as any)?.backpack?.solana;
      const selectedProvider = solanaProvider || phantomProvider || backpackProvider;

      if (selectedProvider) {
        setWalletProvider(selectedProvider);
        if (selectedProvider.isConnected) {
          const resp = await selectedProvider.connect({ onlyIfTrusted: true });
          setPublicKey(resp.publicKey.toString());
          setIsWalletConnected(true);
        }
      }
    } catch (error) {
      console.error('Error checking wallet connection:', error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!walletProvider) {
        const wallets = [];
        if ((window as any)?.phantom?.solana) wallets.push("Phantom");
        if ((window as any)?.solana) wallets.push("Solana");
        if ((window as any)?.backpack?.solana) wallets.push("Backpack");

        if (wallets.length === 0) {
          alert('Please install a Solana wallet (Phantom, Solana, or Backpack)!');
          window.open('https://phantom.app/', '_blank');
          return;
        }

        if (wallets.length > 1) {
          const walletChoice = window.confirm(
            `Multiple wallets detected. Click OK to use ${wallets[0]} or Cancel to use ${wallets[1]}`
          );
          setWalletProvider(walletChoice ? 
            (window as any)?.phantom?.solana : 
            (window as any)?.solana || (window as any)?.backpack?.solana
          );
        } else {
          setWalletProvider((window as any)?.phantom?.solana || 
                          (window as any)?.solana || 
                          (window as any)?.backpack?.solana);
        }
      }

      if (walletProvider) {
        const resp = await walletProvider.connect();
        setPublicKey(resp.publicKey.toString());
        setIsWalletConnected(true);
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
      alert('Failed to connect wallet. Please try again.');
    }
  };

  const handlePurchase = async () => {
    if (!isWalletConnected || !selectedOffer || !quantity) {
      alert('Please connect wallet and select quantity first');
      return;
    }

    try {
      // Request approval for the transaction
      const response = await fetch('/api/purchase-energy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          buyerPublicKey: publicKey,
          units: quantity,
          rate: selectedOffer.pricePerUnit,
          totalAmount: (parseFloat(calculateTotal()) + 0.5).toFixed(2)
        }),
      });

      const data = await response.json();

      if (data.success) {
        try {
          const signature = await walletProvider.signAndSendTransaction(data.transaction);
          alert(`Transaction successful! Signature: ${signature}`);
          setQuantity(0);
        } catch (err) {
          throw new Error('Transaction signing failed');
        }
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error('Purchase failed:', error);
      alert('Energy purchase failed. Please try again.');
    }
  };

  const formatPublicKey = (key: string | null) => {
    if (!key) return '';
    return `${key.slice(0, 4)}...${key.slice(-4)}`;
  };

  const availableOffers: Offer[] = [
    {
      id: 1,
      seller: "SolarMax Energy",
      energyType: "Solar",
      location: "California, USA",
      distance: "5 miles",
      pricePerUnit: 0.12,
      availableUnits: 1000,
      rating: 4.8
    },
    {
      id: 2,
      seller: "WindPower Co",
      energyType: "Wind",
      location: "Texas, USA",
      distance: "8 miles",
      pricePerUnit: 0.15,
      availableUnits: 500,
      rating: 4.5
    },
    {
      id: 3,
      seller: "GreenEnergy Ltd",
      energyType: "Solar",
      location: "Nevada, USA",
      distance: "12 miles",
      pricePerUnit: 0.11,
      availableUnits: 750,
      rating: 4.9
    }
  ];

  const handleOfferSelect = (offer: Offer) => {
    setSelectedOffer(offer);
    setQuantity(0);
  };

  const calculateTotal = () => {
    if (!selectedOffer || !quantity) return 0;
    return (selectedOffer.pricePerUnit * quantity).toFixed(2);
  };

  const filteredOffers = availableOffers.filter(offer =>
    offer.seller.toLowerCase().includes(searchTerm.toLowerCase()) ||
    offer.energyType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    offer.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      <nav className="fixed top-0 left-0 right-0 bg-black/60 backdrop-blur-md z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Bijlee</span>
            </a>
            
            <button
              onClick={connectWallet}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                isWalletConnected 
                  ? 'bg-green-600/20 text-green-300 hover:bg-green-600/40' 
                  : 'bg-blue-600/20 text-blue-300 hover:bg-blue-600/40'
              }`}
            >
              <Wallet className="w-5 h-5" />
              <span>
                {isWalletConnected ? formatPublicKey(publicKey) : 'Connect Wallet'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-20 px-4 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 rounded-xl p-6 shadow-lg">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
                <h2 className="text-2xl font-bold text-white">Available Energy Offers</h2>
                <div className="relative w-full md:w-auto">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search offers..."
                    className="w-full md:w-64 bg-gray-700/50 text-gray-200 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
                </div>
              </div>

              <div className="space-y-4">
                {filteredOffers.map((offer) => (
                  <div
                    key={offer.id}
                    onClick={() => handleOfferSelect(offer)}
                    className={`bg-gray-700/50 rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedOffer?.id === offer.id ? 'ring-2 ring-blue-500' : 'hover:bg-gray-600'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{offer.seller}</h3>
                        <div className="mt-2 space-y-1">
                          <div className="flex items-center text-gray-300">
                            <Package className="w-4 h-4 mr-2 text-blue-400" />
                            <span>{offer.energyType} Energy - {offer.availableUnits} kWh available</span>
                          </div>
                          <div className="flex items-center text-gray-300">
                            <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                            <span>{offer.location} ({offer.distance})</span>
                          </div>
                          <div className="flex items-center text-gray-300">
                            <Star className="w-4 h-4 mr-2 text-yellow-400" />
                            <span>{offer.rating} / 5.0</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-blue-400">${offer.pricePerUnit}/kWh</div>
                        <div className="text-sm text-gray-400">BIJLEE tokens required</div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {filteredOffers.length === 0 && (
                  <div className="text-center py-8 text-gray-400">
                    No offers found matching your search.
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 rounded-xl p-6 sticky top-24 shadow-lg">
              <h2 className="text-xl font-bold text-white mb-6">Purchase Energy</h2>
              {selectedOffer ? (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">Selected Provider</label>
                    <div className="text-lg font-semibold text-white">{selectedOffer.seller}</div>
                    <div className="text-blue-400">${selectedOffer.pricePerUnit}/kWh</div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">Quantity (kWh)</label>
                    <input
                      type="number"
                      value={quantity || ''}
                      onChange={(e) => setQuantity(Math.max(0, Math.min(selectedOffer.availableUnits, parseInt(e.target.value) || 0)))}
                      className="w-full bg-gray-700/50 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter quantity..."
                    />
                    <div className="text-sm text-gray-400">Max available: {selectedOffer.availableUnits} kWh</div>
                  </div>

                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Subtotal</span>
                      <span className="text-white">{calculateTotal()} BIJLEE</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-300">Network Fee</span>
                      <span className="text-white">0.5 BIJLEE</span>
                    </div>
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span className="text-gray-300">Total BIJLEE Required</span>
                      <span className="text-white">{(parseFloat(calculateTotal()) + 0.5).toFixed(2)} BIJLEE</span>
                    </div>
                  </div>

                  <button
                    onClick={handlePurchase}
                    disabled={!isWalletConnected || quantity === 0}
                    className="w-full bg-blue-600 text-white rounded-lg py-3 font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
                  >
                    {isWalletConnected ? 'Purchase with BIJLEE Tokens' : 'Connect Wallet to Purchase'}
                  </button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-gray-400">Select an offer to get started</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}