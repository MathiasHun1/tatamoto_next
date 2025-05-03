import connectToDb from '@/lib/mongodb';
import Day from '@/models/Day';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectToDb();
    const days = await Day.find({});
    return NextResponse.json(days, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
