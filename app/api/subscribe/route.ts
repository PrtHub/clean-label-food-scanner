import { NextResponse } from "next/server";

// Basic email regex — good enough for client-side capture.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const { email, source } = await req.json();

    if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
      return NextResponse.json(
        { ok: false, error: "Invalid email" },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanSource = typeof source === "string" ? source : "unknown";

    // TODO: replace this console.log with your real email service integration.
    // Common options:
    //   • Resend audiences:  await resend.contacts.create({ email, audienceId })
    //   • ConvertKit:        POST https://api.convertkit.com/v3/forms/{id}/subscribe
    //   • Mailchimp:         POST https://{dc}.api.mailchimp.com/3.0/lists/{id}/members
    //   • Loops:             POST https://app.loops.so/api/v1/contacts/create
    //   • Simple DB insert:  INSERT INTO subscribers (email, source, created_at) ...
    console.log("[subscribe]", { email: cleanEmail, source: cleanSource });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });
  }
}
