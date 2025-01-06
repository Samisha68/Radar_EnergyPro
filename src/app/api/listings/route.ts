// src/app/api/listings/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod'; // Recommended for robust validation

// Input validation schema
const ListingSchema = z.object({
  sellerId: z.string().min(1, "Seller ID is required"),
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  energyType: z.enum(['SOLAR', 'WIND', 'HYDRO', 'BIOMASS']), // Assuming these are your energy types
  location: z.string().min(1, "Location is required"),
  state: z.string().min(1, "State is required"),
  pincode: z.string().min(6, "Pincode must be at least 6 characters"),
  address: z.string().min(1, "Address is required"),
  totalCapacity: z.number().positive("Total capacity must be positive"),
  availableUnits: z.number().nonnegative("Available units cannot be negative"),
  minPurchase: z.number().positive("Minimum purchase must be positive"),
  maxPurchase: z.number().positive("Maximum purchase must be positive"),
  pricePerUnit: z.number().positive("Price per unit must be positive"),
  deliveryMethod: z.enum(['GRID', 'DIRECT', 'HYBRID']), // Assuming these are your delivery methods
  sourceType: z.enum(['RESIDENTIAL', 'COMMERCIAL', 'INDUSTRIAL']), // Assuming these are your source types
  certification: z.string().optional(),
  discount: z.number().optional().nullable()
});

export async function GET() {
  try {
    const listings = await prisma.energyListing.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    return NextResponse.json(listings);
  } catch (error) {
    console.error('Failed to fetch listings:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch listings',
        details: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate the input
    const validatedData = ListingSchema.parse(body);

    // Create the listing with validated and parsed data
    const listing = await prisma.energyListing.create({
      data: {
        ...validatedData,
        // Explicitly convert numeric fields to ensure correct type
        totalCapacity: Number(validatedData.totalCapacity),
        availableUnits: Number(validatedData.availableUnits),
        minPurchase: Number(validatedData.minPurchase),
        maxPurchase: Number(validatedData.maxPurchase),
        pricePerUnit: Number(validatedData.pricePerUnit),
        discount: validatedData.discount ? Number(validatedData.discount) : null,
      },
    });

    return NextResponse.json(listing, { status: 201 });
  } catch (error) {
    // More comprehensive error handling
    if (error instanceof z.ZodError) {
      // Validation errors
      return NextResponse.json(
        { 
          error: 'Validation failed',
          details: error.errors 
        }, 
        { status: 400 }
      );
    }

    console.error('Failed to create listing:', error);
    return NextResponse.json(
      { 
        error: 'Failed to create listing',
        details: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();

    // Validate the input, but make all fields optional for updates
    const UpdateSchema = ListingSchema.partial();
    const validatedData = UpdateSchema.parse(body);

    // Ensure ID is present for update
    if (!body.id) {
      return NextResponse.json(
        { error: 'Listing ID is required for update' }, 
        { status: 400 }
      );
    }

    const updated = await prisma.energyListing.update({
      where: { id: body.id },
      data: {
        ...validatedData,
        // Explicitly convert numeric fields to ensure correct type
        ...(validatedData.totalCapacity !== undefined && { 
          totalCapacity: Number(validatedData.totalCapacity) 
        }),
        ...(validatedData.availableUnits !== undefined && { 
          availableUnits: Number(validatedData.availableUnits) 
        }),
        ...(validatedData.minPurchase !== undefined && { 
          minPurchase: Number(validatedData.minPurchase) 
        }),
        ...(validatedData.maxPurchase !== undefined && { 
          maxPurchase: Number(validatedData.maxPurchase) 
        }),
        ...(validatedData.pricePerUnit !== undefined && { 
          pricePerUnit: Number(validatedData.pricePerUnit) 
        }),
        ...(validatedData.discount !== undefined && { 
          discount: validatedData.discount ? Number(validatedData.discount) : null 
        }),
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    // Similar comprehensive error handling as POST method
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: 'Validation failed',
          details: error.errors 
        }, 
        { status: 400 }
      );
    }

    console.error('Failed to update listing:', error);
    return NextResponse.json(
      { 
        error: 'Failed to update listing',
        details: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Listing ID is required' }, 
        { status: 400 }
      );
    }

    await prisma.energyListing.delete({
      where: { id },
    });

    return NextResponse.json({ 
      success: true,
      message: 'Listing deleted successfully' 
    });
  } catch (error) {
    console.error('Failed to delete listing:', error);
    return NextResponse.json(
      { 
        error: 'Failed to delete listing',
        details: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    );
  }
}