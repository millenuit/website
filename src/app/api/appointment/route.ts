import AppointmentEmail from '@/emails/AppointmentEmail';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { firstName, lastName, email, phone, date, slot, service, message } =
      data;

    await resend.emails.send({
      from: 'Appointments <onboarding@resend.dev>',
      to: ['milles.et.une.nuit.spa@gmail.com'],
      replyTo: email,
      subject: `New Appointment – ${firstName} ${lastName}`,
      react: AppointmentEmail({
        firstName,
        lastName,
        email,
        phone,
        date,
        slot,
        service,
        message,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
