import React from 'react'
import './globals.css'

export const metadata = {
  description:
    'The Free Shepherd is an atmospheric adventure where you are a sheepdog in a mystical world, searching for your lost sheep.',
  title: 'The Free Shepherd',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
