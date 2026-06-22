import BusinessInfo from "@/cms/business Info/businessInfo";
import { Resend } from "resend";
const resend = new Resend("re_5gHCZphq_GtR88EKumXWyGVhPsA1yc5xA");
const resendVerifedEmail = "info@pickenspcrepair.com";


// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !phone || !message) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Invalid email address. Please check and try again." },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: `${name} <${resendVerifedEmail}>`, // Update this with your verified domain
      to: [email],
      cc: [BusinessInfo.Email],
      subject: `Repair Request from ${name}`,
      html: `
        <h2>Repair Request from ${name}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return Response.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}