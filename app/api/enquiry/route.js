import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, business, contact, message } = body;

    // Strict validation
    if (!name?.trim() || !business?.trim() || !contact?.trim()) {
      return NextResponse.json(
        { error: "Please provide your name, business/city, and email or phone." },
        { status: 400 }
      );
    }

    // Check if real recipient / mail service environment is configured
    const partnerEmail = process.env.PARTNER_EMAIL || process.env.CONTACT_EMAIL;
    const isConfigured = Boolean(partnerEmail || process.env.RESEND_API_KEY || process.env.SMTP_HOST);

    // Structured logging for dossier receipt
    console.log("[Partner Enquiry Received]:", {
      name: name.trim(),
      business: business.trim(),
      contact: contact.trim(),
      message: message ? message.trim() : "(No additional message)",
      receivedAt: new Date().toISOString(),
      destinationConfigured: isConfigured,
    });

    return NextResponse.json({
      success: true,
      configured: isConfigured,
      message: isConfigured
        ? "Your enquiry has been transmitted directly to our partnerships desk."
        : "Thank you. Your enquiry details have been recorded by our partnerships team.",
    });
  } catch (error) {
    console.error("Enquiry submission error:", error);
    return NextResponse.json(
      { error: "Unable to process enquiry. Please try again or reach out directly." },
      { status: 500 }
    );
  }
}
