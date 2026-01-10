import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FlippingCard } from '@/components/ui/flipping-card';

interface Trip {
  id: string;
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
  onDelete: (id: string) => void;
}

const TripCard: React.FC<TripCardProps> = ({ trip, onDelete }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/trips/${trip.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        onDelete(trip.id);
      } else {
        console.error('Failed to delete trip');
      }
    } catch (error) {
      console.error('An error occurred while deleting the trip:', error);
    }
  };

  const frontContent = (
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

  const backContent = (
    <div className="bg-zinc-800 rounded-lg h-full flex flex-col justify-center items-center">
      <Link href={`/trip/edit/${trip.id}`} passHref>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
          Edit
        </button>
      </Link>
      <button
        onClick={handleDelete}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Delete
      </button>
    </div>
  );

  return <FlippingCard frontContent={frontContent} backContent={backContent} />;
};

export default TripCard;
