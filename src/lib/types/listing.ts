// src/types/listing.ts
export enum EnergyType {
    SOLAR = 'SOLAR',
    WIND = 'WIND',
    HYDRO = 'HYDRO',
    BIOMASS = 'BIOMASS',
    GEOTHERMAL = 'GEOTHERMAL'
  }
  
  export enum DeliveryMethod {
    GRID = 'GRID',
    DIRECT = 'DIRECT',
    HYBRID = 'HYBRID'
  }
  
  export enum SourceType {
    RESIDENTIAL = 'RESIDENTIAL',
    COMMERCIAL = 'COMMERCIAL',
    INDUSTRIAL = 'INDUSTRIAL',
    UTILITY = 'UTILITY'
  }
  
  export interface Listing {
    id: string;
    title: string;
    description?: string;
    energyType: EnergyType;
    location: string;
    state: string;
    pincode: string;
    address: string;
    totalCapacity: number;
    availableUnits: number;
    minPurchase: number;
    maxPurchase: number;
    pricePerUnit: number;
    discount?: number;
    deliveryMethod: DeliveryMethod;
    sourceType: SourceType;
    certification?: string;
    status: string;
    visibility: boolean;
    createdAt: Date;
    updatedAt: Date;
    validUntil?: Date;
  }