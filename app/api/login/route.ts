import { NextRequest, NextResponse } from 'next/server';

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
  } else {
    return NextResponse.json({ success: true }, { status: 200 });
  }
}
