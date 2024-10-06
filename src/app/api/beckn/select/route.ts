import { NextRequest, NextResponse } from 'next/server';
import { BecknContextBuilder } from '@/lib/beckn/contextBuilder';
import { createOrderQuote } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const context = new BecknContextBuilder()
      .setAction("select")
      .setTransactionId(body.context.transaction_id)
      .setMessageId()
      .build();

    const orderQuote = await createOrderQuote(body.message);

    return NextResponse.json({
      context,
      message: {
        order: orderQuote
      }
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: {
          message: 'Internal Server Error',
          details: error instanceof Error ? error.message : 'Unknown error'
        }
      },
      { status: 500 }
    );
  }
}