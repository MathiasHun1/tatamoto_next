import connectToDb from '@/lib/mongodb';
import Vacation from '@/models/Vacation';
import { NextResponse } from 'next/server';
import { getTokenFrom } from '@/app/utils/helpers';
import jwt from 'jsonwebtoken';

export async function GET() {
  try {
    await connectToDb();
    const current = await Vacation.findOne({});

    return NextResponse.json(current, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}

// create a new vacation object (rewrite existing, only 1 allowed)
export async function POST(request: Request) {
  const body = await request.json();
  const { onVacation, text } = body;

  if (onVacation === undefined || text === undefined) {
    return NextResponse.json({ error: 'missing credentials' }, { status: 400 });
  }

  const token = getTokenFrom(request);

  if (!token) {
    return NextResponse.json(
      { error: 'missing or invalid token' },
      { status: 401 }
    );
  }

  try {
    jwt.verify(token, process.env.SECRET!);
    await connectToDb();

    await Vacation.deleteMany({});
    const createdObj = new Vacation({ onVacation, text });
    const result = await createdObj.save();

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
