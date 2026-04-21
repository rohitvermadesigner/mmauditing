import nodemailer from "nodemailer";

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch (error) {
    console.error("JSON parsing error:", error);
    return Response.json({ error: "Invalid JSON in request body" }, { status: 400 });
  }

  const {
    firstName,
    lastName,
    email,
    phone,
    subject,
    service,
    message,
  } = body;

  // Validate required fields
  if (!firstName || !lastName || !email || !subject || !message) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Create nodemailer transporter with Gmail
  // Alternative configurations (uncomment and modify as needed):

  // Option 1: Outlook/Hotmail
  // const transporter = nodemailer.createTransport({
  //   service: "outlook",
  //   auth: {
  //     user: "your-email@outlook.com",
  //     pass: "your-password",
  //   },
  // });

  // Option 2: Yahoo
  // const transporter = nodemailer.createTransport({
  //   service: "yahoo",
  //   auth: {
  //     user: "your-email@yahoo.com",
  //     pass: "your-app-password",
  //   },
  // });

  // Option 3: Custom SMTP (SendGrid)
  // const transporter = nodemailer.createTransport({
  //   host: "smtp.sendgrid.net",
  //   port: 587,
  //   secure: false,
  //   auth: {
  //     user: "apikey",
  //     pass: "your-sendgrid-api-key",
  //   },
  // });

  // Option 4: Mailgun
  // const transporter = nodemailer.createTransport({
  //   host: "smtp.mailgun.org",
  //   port: 587,
  //   secure: false,
  //   auth: {
  //     user: "your-mailgun-smtp-username",
  //     pass: "your-mailgun-smtp-password",
  //   },
  // });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    // Additional options for better reliability
    tls: {
      rejectUnauthorized: false,
    },
  });

  // Verify connection before sending
  try {
    await transporter.verify();
    console.log("Email server connection verified");
  } catch (error) {
    console.error("Email server verification failed:", error);
    return Response.json({
      error: "Email service unavailable",
      details: "Unable to connect to email server. Please check credentials and try again.",
      code: error.code
    }, { status: 500 });
  }

  // Send the email
  try {
    const mailOptions = {
      from: `"${firstName} ${lastName}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `Contact Form: ${subject}`,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "Not provided"}
Subject: ${subject}
Service: ${service || "Not specified"}

Message:
${message}

---
This message was sent from the contact form on your website.
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 5px;">
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Service:</strong> ${service || "Not specified"}</p>
          </div>
          <div style="margin-top: 20px; padding: 20px; border-left: 4px solid #007bff; background: #f8f9fa;">
            <h3>Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">This message was sent from the contact form on your website.</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);

  } catch (error) {
    console.error("Email sending failed:", error);
    return Response.json({
      error: "Failed to send email",
      details: error.message,
      code: error.code
    }, { status: 500 });
  }

  return Response.json({ success: true });
}