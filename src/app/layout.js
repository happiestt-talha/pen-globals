import React from "react"
import { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"

export const metadata = {
  title: "Pen Global Solutions - Penova Tech, Pen Tutor, Pen Visa Consultancy",
  description:
    "Pen Global Solutions delivers software, e-learning and visa consultancy services across Pakistan & UAE. Explore Penova Tech, Pen Tutor and Pen Visa Consultancy.",
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={`font-sans`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
