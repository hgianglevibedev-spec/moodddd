
"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import TripCard from '../components/TripCard';
import NavigationBar from '../components/NavigationBar';
import { FlippingCard } from '../../components/ui/flipping-card';

interface Trip {
  id: string;
  title: string;
  location: string;
  image: string;
  author: string;
  distance: string;
  cities: string;
  duration: string;
  description: string;
}

const LibraryPage = () => {
  const [trips, setTrips] = useState<Trip[]>([]);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await fetch('/api/trips');
        if (response.ok) {
          const data = await response.json();
          setTrips(data);
        } else {
          console.error('Failed to fetch trips');
        }
      } catch (error) {
        console.error('An error occurred while fetching trips:', error);
      }
    };

    fetchTrips();
  }, []);

  const handleDelete = (id: string) => {
    setTrips(trips.filter((trip) => trip.id !== id));
  };

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
          {trips.map((trip) => (
            <FlippingCard
              key={trip.id}
              frontContent={<TripCard trip={trip} onDelete={handleDelete} />}
              backContent={
                <div className="bg-zinc-900 rounded-lg h-full w-full flex items-center justify-center">
                  <p className="text-white text-small">{trip.description}</p>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;
