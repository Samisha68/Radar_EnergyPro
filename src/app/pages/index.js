import { useWallet } from '@solana/wallet-adapter-react';
import {useState } from 'react';

export default function Home() {
  const [ethAccount, setEthAccount] = useState(null);
  const { connect, publicKey } = useWallet();
  const [solAccount, setSolAccount] = useState(null);

  const connectMetaMask = async () => {
    const provider = await detectEthereumProvider();

    if (provider) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setEthAccount(accounts[0]);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log('MetaMask not detected');
    }
  };

  const connectPhantom = async () => {
    try {
      await connect();
      setSolAccount(publicKey.toString());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Connect Wallet</h1>
      <button onClick={connectMetaMask}>
        Connect Ethereum Wallet
      </button>
      {ethAccount && <p>Connected to: {ethAccount}</p>}

      <button onClick={connectPhantom}>
        Connect Solana Wallet
      </button>
      {solAccount && <p>Connected to: {solAccount}</p>}
    </div>
  );
}
