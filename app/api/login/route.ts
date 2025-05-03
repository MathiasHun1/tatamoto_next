import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { password } = body;

  if (!password || password !== process.env.LOGINPASS) {
    return NextResponse.json(
      {
        error: 'invalid or missing password',
      },
      { status: 401 }
    );
  }

  try {
    const token = jwt.sign({}, process.env.SECRET as string);
    return NextResponse.json({ success: true, token }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'internal server error' },
      { status: 500 }
    );
  }
}
