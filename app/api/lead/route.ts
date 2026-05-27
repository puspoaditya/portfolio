import { NextResponse } from "next/server";

type Lead = {
  name?: string;
  business?: string;
  industry?: string;
  message?: string;
  channel?: "whatsapp" | "email";
};

const leads: Lead[] = [];

export async function POST(req: Request) {
  let body: Lead;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.message || body.message.trim().length < 5) {
    return NextResponse.json({ ok: false, error: "Message too short" }, { status: 400 });
  }

  leads.push({ ...body, channel: body.channel ?? "whatsapp" });
  console.log("[lead]", body);

  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json({ count: leads.length });
}
