import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const trip = await prisma.trip.findUnique({
      where: { id },
    });
    if (!trip) {
      return NextResponse.json({ error: 'Trip not found' }, { status: 404 });
    }
    return NextResponse.json(trip, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch trip' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const body = await req.json();
    const { title, location, image, author, distance, cities, duration, description } = body;

    const updatedTrip = await prisma.trip.update({
      where: { id },
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

    return NextResponse.json(updatedTrip, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update trip' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    await prisma.trip.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Trip deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete trip' }, { status: 500 });
  }
}
