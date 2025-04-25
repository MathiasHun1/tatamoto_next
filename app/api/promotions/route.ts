import { NextResponse } from 'next/server';
import Promotion from '@/models/Promotion';
import connectToDb from '@/lib/mongodb';

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

  try {
    await connectToDb();

    await Promotion.deleteMany({});
    const createdPromoObj = new Promotion({ onPromotion, text });
    const result = await createdPromoObj.save();

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}
