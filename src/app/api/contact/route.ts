// app/api/contact/route.ts

import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  try {
    const emailmsg = `Sender name: ${name}, Sender Email: ${email}\n${message}`;
    const data = await resend.emails.send({
      from: 'Your Portfolio <onboarding@resend.dev>',
      to: ['developwithbhagirathsinh@gmail.com'], // your actual email
      subject: `New Contact Message from ${name}`,
      replyTo: email,
      text: emailmsg,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
