import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body?.name || !body?.school || !body?.email || !body?.phone) {
      return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
    }
    // Production: connect this endpoint to Resend, Formspree, Supabase, Airtable or a CRM.
    console.log("STEMEnabled enquiry:", body);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
