
import React from 'react';
import Image from 'next/image';

interface Trip {
  id: number;
  title: string;
  location: string;
  image: string;
  author: string;
  distance: string;
  cities: string;
  duration: string;
}

interface TripCardProps {
  trip: Trip;
}

const TripCard: React.FC<TripCardProps> = ({ trip }) => {
  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden">
      <div className="relative h-64">
        <Image src={trip.image} alt={trip.title} layout="fill" objectFit="cover" />
        <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
          <h2 className="text-2xl font-bold">{trip.title}</h2>
          <p className="text-gray-400">{trip.location}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold">{trip.author}</p>
          </div>
        </div>
        <div className="flex justify-between mt-4 text-center">
          <div>
            <p className="font-bold">{trip.distance}</p>
            <p className="text-sm text-gray-400">Distance</p>
          </div>
          <div>
            <p className="font-bold">{trip.cities}</p>
            <p className="text-sm text-gray-400">Cities</p>
          </div>
          <div>
            <p className="font-bold">{trip.duration}</p>
            <p className="text-sm text-gray-400">Duration</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
