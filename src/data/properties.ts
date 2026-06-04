/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Property {
  id: string;
  name: string;
  location: string;
  price: string;
  size: string;
  beds: number;
  baths: number;
  balconies: number;
  floor: string;
  facing: string;
  status: 'Ready' | 'Handover Soon';
  features: string[];
  imageUrl: string;
  images?: string[];
  googleMapsUrl: string;
}

export const properties: Property[] = [
  {
    id: 'prop-1',
    name: 'Joydebpur Elite Heights',
    location: 'Ok Tower Area, Joydebpur, Gazipur',
    price: 'BDT 65,00,000',
    size: '1450 sqft',
    beds: 3,
    baths: 3,
    balconies: 2,
    floor: '5th Floor',
    facing: 'South-Facing',
    status: 'Ready',
    features: ['2 Lifts', 'Generator', '24/7 Security', 'Car Parking', 'Substation'],
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
    googleMapsUrl: 'https://maps.google.com/?q=Joydebpur+Gazipur',
  },
  {
    id: 'prop-2',
    name: 'Gazipur Garden View',
    location: 'Chowrasta, Gazipur',
    price: 'BDT 52,00,000',
    size: '1280 sqft',
    beds: 3,
    baths: 3,
    balconies: 1,
    floor: '3rd Floor',
    facing: 'North-Facing',
    status: 'Ready',
    features: ['Gas Connection', 'Generator', 'Security', 'Market Nearby'],
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    googleMapsUrl: 'https://maps.google.com/?q=Gazipur+Chowrasta',
  },
  {
    id: 'prop-3',
    name: 'Board Bazar Residency',
    location: 'Board Bazar, Gazipur',
    price: 'BDT 48,00,000',
    size: '1150 sqft',
    beds: 2,
    baths: 3,
    balconies: 1,
    floor: '7th Floor',
    facing: 'East-Facing',
    status: 'Ready',
    features: ['2 Lifts', 'RO Water', 'Parking', 'CCTV', 'Substation'],
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    googleMapsUrl: 'https://maps.google.com/?q=Board+Bazar+Gazipur',
  },
];
