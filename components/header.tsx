'use client'

import Image from 'next/image'
import Link from 'next/link'
import Particles from './particles'

export default function Header() {
  return (
    <div className="p-2xs fixed top-0 left-0 z-10 w-full">
      <div className="px-xs relative py-4">
        {/* Glass + border */}
        <div className="rounded-fluid-xs absolute inset-0 z-1 bg-linear-to-b from-white/50 to-white/20 inset-ring-1 inset-ring-white/20 backdrop-blur-md" />

        {/* Outer glow layers */}
        <div className="rounded-fluid-xs absolute inset-0 scale-120 animate-pulse bg-[#5dede3]/30 blur-3xl" />
        <div
          className="rounded-fluid-xs absolute inset-0 scale-110 animate-pulse bg-[#5dede3]/20 blur-2xl"
          style={{ animationDelay: '1.33s' }}
        />
        <div
          className="rounded-fluid-xs absolute inset-0 scale-100 animate-pulse bg-[#5dede3]/10 blur-lg"
          style={{ animationDelay: '2.66s' }}
        />

        <Particles />

        {/* Content */}
        <div className="relative z-1 flex items-center justify-between gap-8 font-serif text-[#282B2A]">
          <Link href="/" className="w-[25%] font-semibold">
            The Free Shepherd
          </Link>

          <ul className="flex w-[50%] justify-center gap-4 font-light">
            <li>
              <Link href="/#trailer">Trailer</Link>
            </li>
            <li>
              <Link href="/#updates">Updates</Link>
            </li>
            <li>
              <Link href="/#newsletter">Newsletter</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

          <ul className="flex w-[25%] justify-end gap-8">
            <li>
              <a href="">
                <Image src="/icons/x.svg" width={22} height={20} alt="Frame Interactive on X" />
              </a>
            </li>
            <li>
              <a href="">
                <Image
                  src="/icons/instagram.svg"
                  width={22}
                  height={22}
                  alt="Frame Interactive on Instagram"
                />
              </a>
            </li>
            <li>
              <a href="">
                <Image
                  src="/icons/twitch.svg"
                  width={22}
                  height={24}
                  alt="Frame Interactive on Twitch"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
