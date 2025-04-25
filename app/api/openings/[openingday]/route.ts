import { NextRequest, NextResponse } from 'next/server';
import Day from '@/models/Day';
import connectToDb from '@/lib/mongodb';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ openingday: string }> }
) {
  try {
    await connectToDb();
    const { openingday } = await params;
    const body = await request.json();
    const { open, close } = body;

    if (open !== null && !open) {
      return NextResponse.json(
        { error: 'Invalid or missing properties' },
        { status: 400 }
      );
    }

    if (close !== null && !close) {
      return NextResponse.json(
        { error: 'Invalid or missing properties' },
        { status: 400 }
      );
    }

    const updatedDay = await Day.findOneAndUpdate(
      { day: openingday },
      { open: open, close: close },
      { new: true, runValidators: true, context: 'query' }
    );

    if (updatedDay) {
      return NextResponse.json(updatedDay, { status: 201 });
    }
  } catch (error) {
    console.log(error);
  }
}
