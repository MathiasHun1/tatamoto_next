import { NextResponse } from 'next/server';
import Promotion from '@/models/Promotion';
import connectToDb from '@/lib/mongodb';
import jwt from 'jsonwebtoken';
import { getTokenFrom } from '@/app/utils/helpers';

// get the promo data
export async function GET() {
  try {
    await connectToDb();
    const promotion = await Promotion.findOne({});

    return NextResponse.json(promotion, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}

// create a new promo (rewrite existing, only 1 allowed)
export async function POST(request: Request) {
  const body = await request.json();

  const { onPromotion, text } = body;
  if (onPromotion === undefined || text === undefined) {
    return NextResponse.json({ error: 'missing credentials' }, { status: 400 });
  }

  const token = getTokenFrom(request);
  if (!token) {
    return NextResponse.json({ error: 'missing token' }, { status: 401 });
  }

  try {
    jwt.verify(token, process.env.SECRET!);

    await connectToDb();

    await Promotion.deleteMany({});
    const createdPromoObj = new Promotion({ onPromotion, text });
    const result = await createdPromoObj.save();

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
