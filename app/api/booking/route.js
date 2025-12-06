import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_KEY);

export async function POST(request) {
  try {
    const {
      name, phone, email, service, date, address, notes
    } = await request.json();
    
    if (!name || !phone || !email || !service || !date || !address) {
      return Response.json(
        { error: "Please fill all required fields." },
        { status: 400 }
      );
    }

    const html = `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
      <h2 style="margin-bottom: 10px;">New Booking Request</h2>

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Address:</strong> ${address}</p>

      <h3 style="margin-top: 20px;">Notes:</h3>
      <p style="white-space: pre-wrap; line-height: 1.5;">
        ${notes || "No additional notes."}
      </p>

      <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;" />

      <p style="font-size: 12px; color: #888;">
        This booking request was sent from your website.
      </p>
    </div>
    `;

    const sent = await resend.emails.send({
      from: "Booking Form <onboarding@resend.dev>",
      to: process.env.MAIL_TO,
      subject: name || "New message from contact form",
      html: html,
    });

    return Response.json(
      { success: true, id: sent.id },
      { status: 200 }
    );

  } catch (error) {
    console.error("BOOKING API ERROR:", error);
    return Response.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}