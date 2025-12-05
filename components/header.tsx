'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, useTransition } from 'react'

interface Particle {
  id: number
  angle: number
  size: number
  duration: number
  delay: number
  distance: number
  startXPercent: number
}

const createParticles = (): Particle[] =>
  Array.from({ length: 30 }, (_, i) => ({
    id: i,
    angle: Math.random() * 360,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 2 + 1.5,
    delay: Math.random() * 2,
    distance: Math.random() * 40 + 60,
    startXPercent: Math.random() * 100,
  }))

export default function Header() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [, startTransition] = useTransition()

  // Generate particles only on the client, after hydration
  useEffect(() => {
    startTransition(() => {
      setParticles(createParticles())
    })
  }, [startTransition])

  const hasParticles = particles.length > 0

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

        {/* Particles */}
        <div className="pointer-events-none absolute inset-0 overflow-visible">
          {hasParticles &&
            particles.map((particle) => {
              return (
                <div
                  key={particle.id}
                  className="rounded-fluid-xs absolute top-1/2 bg-white"
                  style={{
                    left: `${particle.startXPercent}%`,
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    boxShadow: `0 0 ${particle.size * 2}px ${
                      particle.size
                    }px rgba(255, 255, 255, 0.6)`,
                    // transform comes from keyframes; let animation own it
                    animation: `radial-float-${particle.id} ${particle.duration}s ease-out infinite`,
                    animationDelay: `${particle.delay}s`,
                  }}
                />
              )
            })}
        </div>

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

        {/* Keyframes only once particles exist, client-side */}
        {hasParticles && (
          <style>{`
            ${particles
              .map((particle) => {
                const angleRad = (particle.angle * Math.PI) / 180
                const endX = Math.cos(angleRad) * particle.distance
                const endY = Math.sin(angleRad) * particle.distance

                return `
                  @keyframes radial-float-${particle.id} {
                    0% {
                      opacity: 0;
                      transform: translate(-50%, -50%) translate(0, 0) scale(0);
                    }
                    15% {
                      opacity: 1;
                      transform: translate(-50%, -50%) translate(${endX * 0.1}px, ${
                        endY * 0.1
                      }px) scale(1);
                    }
                    100% {
                      opacity: 0;
                      transform: translate(-50%, -50%) translate(${endX}px, ${endY}px) scale(0.3);
                    }
                  }
                `
              })
              .join('')}
          `}</style>
        )}
      </div>
    </div>
  )
}
