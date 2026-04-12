import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import type { ContactPayload } from "@/types/contact";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  if (!process.env.MONGODB_URI) {
    return NextResponse.json(
      { ok: false, error: "Contact form is not configured (missing MONGODB_URI)." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const { name, email, message } = body as Partial<ContactPayload>;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return NextResponse.json(
      { ok: false, error: "name, email, and message are required." },
      { status: 400 },
    );
  }

  const trimmed = {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
  };

  if (!trimmed.name || trimmed.name.length > 120) {
    return NextResponse.json({ ok: false, error: "Invalid name." }, { status: 400 });
  }
  if (!trimmed.email || !isValidEmail(trimmed.email) || trimmed.email.length > 254) {
    return NextResponse.json({ ok: false, error: "Invalid email." }, { status: 400 });
  }
  if (!trimmed.message || trimmed.message.length > 5000) {
    return NextResponse.json({ ok: false, error: "Invalid message." }, { status: 400 });
  }

  try {
    const db = await getDb();
    await db.collection("contact_messages").insertOne({
      ...trimmed,
      createdAt: new Date(),
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("contact insert error", e);
    return NextResponse.json(
      { ok: false, error: "Could not save your message. Try again later." },
      { status: 500 },
    );
  }
}
