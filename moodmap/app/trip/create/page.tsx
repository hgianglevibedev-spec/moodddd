
"use client";
import React from 'react';
import NavigationBar from '../../components/NavigationBar';
import { Typewriter } from '../../../components/ui/typewriter-text';

const CreateTripPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavigationBar />
      <div className="container mx-auto px-4 pt-24 pb-8">
        <h2 className="text-xl font-regular mb-8 text-center">
          <Typewriter text="Create your new trip..." />
        </h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-6 flex items-center">
            <label htmlFor="title" className="w-32 pr-4 text-right text-sm font-medium">Title</label>
            <input type="text" id="title" name="title" className="form-input flex-1" />
          </div>
          <div className="mb-6 flex items-center">
            <label htmlFor="location" className="w-32 pr-4 text-right text-sm font-medium">Location</label>
            <input type="text" id="location" name="location" className="form-input flex-1" />
          </div>
          <div className="mb-6 flex items-center">
            <label htmlFor="image" className="w-32 pr-4 text-right text-sm font-medium">Image URL</label>
            <input type="text" id="image" name="image" className="form-input flex-1" />
          </div>
          <div className="mb-6 flex items-center">
            <label htmlFor="author" className="w-32 pr-4 text-right text-sm font-medium">Author</label>
            <input type="text" id="author" name="author" className="form-input flex-1" />
          </div>
          <div className="mb-6 flex items-center">
            <label htmlFor="distance" className="w-32 pr-4 text-right text-sm font-medium">Distance</label>
            <input type="text" id="distance" name="distance" className="form-input flex-1" />
          </div>
          <div className="mb-6 flex items-center">
            <label htmlFor="cities" className="w-32 pr-4 text-right text-sm font-medium">Cities</label>
            <input type="text" id="cities" name="cities" className="form-input flex-1" />
          </div>
          <div className="mb-6 flex items-center">
            <label htmlFor="duration" className="w-32 pr-4 text-right text-sm font-medium">Duration</label>
            <input type="text" id="duration" name="duration" className="form-input flex-1" />
          </div>
          <div className="mb-6 flex items-start">
            <label htmlFor="description" className="w-32 pr-4 text-right text-sm font-medium pt-2">Description</label>
            <textarea id="description" name="description" rows={4} className="form-input flex-1" />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="btn-primary">Create Trip</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTripPage;
