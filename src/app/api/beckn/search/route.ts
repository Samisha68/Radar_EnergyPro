import { NextRequest, NextResponse } from 'next/server';
import { BecknContextBuilder } from '@/lib/beckn/contextBuilder';
import { getEnergyProviders } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const context = new BecknContextBuilder()
      .setAction("search")
      .setTransactionId()
      .setMessageId()
      .build();

    const energyProviders = await getEnergyProviders(body.message?.criteria);

    return NextResponse.json({
      context,
      message: {
        catalog: {
          providers: energyProviders
        }
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