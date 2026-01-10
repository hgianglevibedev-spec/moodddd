import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const trips = await prisma.trip.findMany();
    return NextResponse.json(trips, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch trips' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, location, image, author, distance, cities, duration, description } = body;

    const newTrip = await prisma.trip.create({
      data: {
        title,
        location,
        image,
        author,
        distance,
        cities,
        duration,
        description,
      },
    });

    return NextResponse.json(newTrip, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create trip' }, { status: 500 });
  }
}
