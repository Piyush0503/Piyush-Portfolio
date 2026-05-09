import { NextResponse } from "next/server";
import { sendContactNotification } from "@/lib/mailer";
import type { ContactPayload } from "@/types/contact";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
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

  // 1. Save to MongoDB (optional — skipped if MONGODB_URI is not set)
  if (process.env.MONGODB_URI) {
    try {
      const { getDb } = await import("@/lib/mongodb");
      const db = await getDb();
      await db.collection("contact_messages").insertOne({
        ...trimmed,
        createdAt: new Date(),
      });
    } catch (e) {
      // Log but don't fail the request — email is more important
      console.error("MongoDB insert failed:", e);
    }
  } else {
    console.warn("MONGODB_URI not set — skipping database save.");
  }

  // 2. Send email notification
  try {
    await sendContactNotification(trimmed);
  } catch (e) {
    console.error("Email notification failed:", e);
    return NextResponse.json(
      { ok: false, error: "Message received but email notification failed. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
