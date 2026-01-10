
import Link from 'next/link';
import React from 'react';
import TripCard from '../components/TripCard';
import NavigationBar from '../components/NavigationBar';
import { FlippingCard } from '../../components/ui/flipping-card';

const mockTrip = {
  id: 1,
  title: 'Embercrest Ridge',
  location: 'Silverpine Mountains',
  image: '/assets/guiding-pic-2.png',
  author: 'Gina Le',
  distance: '12.4km',
  cities: '3',
  duration: '10 days',
  description: 'A 10-day trip can not forget'
};

const LibraryPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavigationBar />
      <div className="container mx-auto px-4 pt-24 pb-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Trips</h1>
          <Link href="/trip/create">
            <button className="btn-primary">Create trip</button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FlippingCard
            frontContent={<TripCard trip={mockTrip} />}
            backContent={
              <div className="bg-zinc-900 rounded-lg h-full w-full flex items-center justify-center">
                <p className="text-white text-small">{mockTrip.description}</p>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;
