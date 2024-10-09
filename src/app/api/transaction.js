// import { Connection, PublicKey, Transaction, Keypair, LAMPORTS_PER_SOL } from '@solana/web3.js';
// import { Token, TOKEN_PROGRAM_ID } from '@solana/spl-token';
// import dotenv from 'dotenv';

// dotenv.config();

// // Load environment variables
// const connection = new Connection(process.env.SOLANA_RPC_URL, 'confirmed');
// const secret = Uint8Array.from(Buffer.from(process.env.SOLANA_PRIVATE_KEY, 'base64'));
// const feePayer = Keypair.fromSecretKey(secret);
// const bijleeTokenMint = new PublicKey(process.env.BIJLEE_TOKEN_MINT_ADDRESS);

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { buyerPublicKey, units, rate } = req.body;

//     try {
//       const buyer = new PublicKey(buyerPublicKey);
//       const amount = units * rate; // total amount in BIJLEE tokens

//       // Get the buyer's associated token account for the $BIJLEE token
//       const buyerTokenAccount = await Token.getAssociatedTokenAddress(
//         TOKEN_PROGRAM_ID,
//         bijleeTokenMint,
//         buyer
//       );

//       // Fetch the associated token account of the fee payer (your wallet)
//       const feePayerTokenAccount = await Token.getAssociatedTokenAddress(
//         TOKEN_PROGRAM_ID,
//         bijleeTokenMint,
//         feePayer.publicKey
//       );

//       // Create a new transaction
//       const transaction = new Transaction().add(
//         Token.createTransferInstruction(
//           TOKEN_PROGRAM_ID,
//           feePayerTokenAccount,
//           buyerTokenAccount,
//           feePayer.publicKey,
//           [],
//           amount
//         )
//       );

//       // Sign and send the transaction
//       const signature = await connection.sendTransaction(transaction, [feePayer]);
//       await connection.confirmTransaction(signature, 'confirmed');

//       res.status(200).json({ success: true, signature });
//     } catch (error) {
//       res.status(500).json({ success: false, error: error.message });
//     }
//   } else {
//     res.status(405).json({ success: false, error: 'Method not allowed' });
//   }
// }


import { Connection, PublicKey, Transaction, Keypair } from '@solana/web3.js'
import { Token, TOKEN_PROGRAM_ID } from '@solana/spl-token'
import dotenv from 'dotenv'
import { NextResponse } from 'next/server'

dotenv.config()

// Load environment variables
const connection = new Connection(process.env.SOLANA_RPC_URL, 'confirmed')
const secret = Uint8Array.from(Buffer.from(process.env.SOLANA_PRIVATE_KEY, 'base64'))
const feePayer = Keypair.fromSecretKey(secret)
const bijleeTokenMint = new PublicKey(process.env.BIJLEE_TOKEN_MINT_ADDRESS)

export async function POST(req) {
  if (req.method !== 'POST') {
    return NextResponse.json({ success: false, error: 'Method not allowed' }, { status: 405 })
  }

  try {
    const { buyerPublicKey, units, rate } = await req.json()

    // Check if required fields are provided
    if (!buyerPublicKey || !units || !rate) {
      return NextResponse.json({ success: false, error: 'Invalid request data' }, { status: 400 })
    }

    const buyer = new PublicKey(buyerPublicKey)
    const amount = units * rate // Calculate the total amount in $BIJLEE tokens

    // Get the buyer's associated token account for the $BIJLEE token
    const buyerTokenAccount = await Token.getAssociatedTokenAddress(
      TOKEN_PROGRAM_ID,
      bijleeTokenMint,
      buyer
    )

    // Fetch the associated token account of the fee payer (seller)
    const feePayerTokenAccount = await Token.getAssociatedTokenAddress(
      TOKEN_PROGRAM_ID,
      bijleeTokenMint,
      feePayer.publicKey
    )

    // Create a new transaction to transfer the $BIJLEE tokens
    const transaction = new Transaction().add(
      Token.createTransferInstruction(
        TOKEN_PROGRAM_ID,
        feePayerTokenAccount,
        buyerTokenAccount,
        feePayer.publicKey,
        [], // Signers (only the fee payer)
        amount // The amount of tokens to transfer
      )
    )

    // Sign and send the transaction
    const signature = await connection.sendTransaction(transaction, [feePayer])
    await connection.confirmTransaction(signature, 'confirmed')

    // Respond with the transaction signature
    return NextResponse.json({ success: true, signature }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
