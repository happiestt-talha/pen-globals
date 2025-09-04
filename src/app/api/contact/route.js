// app/api/contact/route.js
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const RECIPIENT = process.env.CONTACT_RECIPIENT || "mtalhamanzoor1930@gmail.com";

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, company = "", service = "", message = "", website = "" } = body || {};

        // Honeypot check
        if (website && website.trim() !== "") {
            // assume spam — pretend OK so bot doesn't retry aggressively
            return NextResponse.json({ ok: true, message: "Message sent." }, { status: 200 });
        }

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
        }

        if (!validateEmail(email)) {
            return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
        }

        // Create transporter from env vars
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT || 587),
            secure: String(process.env.SMTP_SECURE) === "true" || Number(process.env.SMTP_PORT) === 465, // true for 465
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // verify connection (optional) — comment out if you don't want this on every request
        // await transporter.verify();

        const subject = `New contact request from ${name} (${service || "No service selected"})`;
        const html = `
      <h2>New contact request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
    `;

        await transporter.sendMail({
            from: `"Website Contact" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
            to: RECIPIENT,
            subject,
            html,
            replyTo: email,
        });

        return NextResponse.json({ ok: true, message: "Message sent successfully." }, { status: 200 });
    } catch (err) {
        console.error("Error in /api/contact:", err);
        return NextResponse.json({ error: "Server error, could not send message." }, { status: 500 });
    }
}
