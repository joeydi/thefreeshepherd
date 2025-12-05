import './globals.css'
import { Roboto } from 'next/font/google'
import { Roboto_Mono } from 'next/font/google'
import { Inknut_Antiqua } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-roboto-mono',
})

const inknut_antiqua = Inknut_Antiqua({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inknut',
})

export const metadata = {
  description:
    'The Free Shepherd is an atmospheric adventure where you are a sheepdog in a mystical world, searching for your lost sheep.',
  title: 'The Free Shepherd',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html
      lang="en"
      className={`${roboto.variable} ${roboto_mono.variable} ${inknut_antiqua.variable} scroll-pt-xl`}
    >
      <body className="bg-[#282B2A] text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
