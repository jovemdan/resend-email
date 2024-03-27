import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function GET() {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    const { data } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "danilogdev@gmail.com",
      subject: "Olá jovensdevs",
      html: "<p>É ótimo te ver aqui!</p>"
    })

    return NextResponse.json({ message: "Email sent", data })
  } catch (err) {
    return NextResponse.json({ err })
  }
}
