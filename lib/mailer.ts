import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST ?? "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: false, // true for 465, false for 587 (STARTTLS)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface ContactEmail {
  name: string;
  email: string;
  message: string;
}

/**
 * Send a notification email when someone submits the contact form.
 * The email is sent TO the portfolio owner with a nicely formatted body.
 */
export async function sendContactNotification({ name, email, message }: ContactEmail) {
  const to = process.env.NOTIFY_EMAIL;

  if (!to || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("Email not configured — skipping notification.");
    return;
  }

  const htmlBody = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; border-radius: 16px; overflow: hidden; border: 1px solid #1e293b;">
      <div style="background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%); padding: 28px 32px;">
        <h1 style="margin: 0; color: #fff; font-size: 22px; font-weight: 700;">📬 New Contact Form Submission</h1>
        <p style="margin: 6px 0 0; color: rgba(255,255,255,0.85); font-size: 14px;">Someone reached out via your portfolio!</p>
      </div>
      <div style="padding: 28px 32px; color: #e2e8f0;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 13px; width: 90px; vertical-align: top;">Name</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; font-size: 15px; font-weight: 600;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 13px; vertical-align: top;">Email</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; font-size: 15px;">
              <a href="mailto:${escapeHtml(email)}" style="color: #38bdf8; text-decoration: none;">${escapeHtml(email)}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #94a3b8; font-size: 13px; vertical-align: top;">Message</td>
            <td style="padding: 12px 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</td>
          </tr>
        </table>
      </div>
      <div style="padding: 16px 32px; background: #0b1120; text-align: center;">
        <p style="margin: 0; color: #475569; font-size: 12px;">Sent from your Portfolio Contact Form · ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
    to,
    subject: `New message from ${name}`,
    html: htmlBody,
    replyTo: email,
  });
}

/** Prevent XSS in email HTML */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
