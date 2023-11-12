import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<any> {
  const data = await req.formData();
  return NextResponse.json({ data: [...data.entries()] });
}
