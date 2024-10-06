import {
    WalletProvider,
    ConnectionProvider,
  } from '@solana/wallet-adapter-react';
  import {
    PhantomWalletAdapter,
  } from '@solana/wallet-adapter-wallets';
  import { clusterApiUrl } from '@solana/web3.js';
  import { useMemo } from 'react';
  
  const network = clusterApiUrl('devnet'); // You can also use 'mainnet-beta'
  
  function MyApp({ Component, pageProps }) {
    const wallets = useMemo(() => [new PhantomWalletAdapter()], []);
  
    return (
      <ConnectionProvider endpoint={network}>
        <WalletProvider wallets={wallets} autoConnect>
          <Component {...pageProps} />
        </WalletProvider>
      </ConnectionProvider>
    );
  }
  
  export default MyApp;
  