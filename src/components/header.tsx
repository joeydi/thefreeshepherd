'use client'

import Link from 'next/link'
import { useEffect, useState, useRef, useCallback } from 'react'

interface Particle {
  id: number
  angle: number
  size: number
  duration: number
  delay: number
  distance: number
  startXPercent: number // store as percentage instead of pixels
}

export default function Header() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [containerWidth, setContainerWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const generateParticles = useCallback(() => {
    const newParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      angle: Math.random() * 360,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 2 + 1.5,
      delay: Math.random() * 2,
      distance: Math.random() * 40 + 60,
      startXPercent: Math.random() * 100,
    }))
    setParticles(newParticles)
  }, [])

  useEffect(() => {
    generateParticles()

    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [generateParticles])

  return (
    <div className="z-10 fixed w-full left-0 top-0 p-8">
      <div ref={containerRef} className="relative py-4 px-8">
        <div className="absolute z-1 inset-0 rounded-fluid-xs bg-linear-to-b from-white/50 to-white/20 backdrop-blur-md inset-ring-1 inset-ring-white/20" />
        {/* Outer glow layers */}
        <div className="absolute inset-0 scale-120 rounded-fluid-xs bg-[#5dede3]/30 blur-3xl animate-pulse" />
        <div
          className="absolute inset-0 scale-110 rounded-fluid-xs bg-[#5dede3]/20 blur-2xl animate-pulse"
          style={{ animationDelay: '1.33s' }}
        />
        <div
          className="absolute inset-0 scale-100 rounded-fluid-xs bg-[#5dede3]/10 blur-lg animate-pulse"
          style={{ animationDelay: '2.66s' }}
        />

        <div className="absolute inset-0 overflow-visible pointer-events-none">
          {particles.map((particle) => {
            const startXPx = (particle.startXPercent / 100) * containerWidth - containerWidth / 2
            return (
              <div
                key={particle.id}
                className="absolute left-1/2 top-1/2 rounded-fluid-xs bg-white"
                style={{
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  boxShadow: `0 0 ${particle.size * 2}px ${particle.size}px rgba(255, 255, 255, 0.6)`,
                  transform: `translate(calc(-50% + ${startXPx}px), -50%)`,
                  animation: `radial-float-${particle.id} ${particle.duration}s ease-out infinite`,
                  animationDelay: `${particle.delay}s`,
                }}
              />
            )
          })}
        </div>

        <div className="relative z-1 flex justify-between gap-8 items-center text-[#282B2A] font-serif">
          <Link href="/matte-snap" className="w-[25%] font-semibold">
            The Free Shepherd
          </Link>
          <ul className="w-[50%] flex justify-center gap-4 font-light">
            <li>
              <Link href="/matte-snap#trailer">Trailer</Link>
            </li>
            <li>
              <Link href="/matte-snap#newsletter">Newsletter</Link>
            </li>
            <li>
              <Link href="/updates">Updates</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <ul className="w-[25%] flex justify-end gap-8">
            <li>
              <a href="">
                <img src="/icons/x.svg" width="22" height="20" alt="Frame Interactive on X" />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="/icons/instagram.svg"
                  width="22"
                  height="22"
                  alt="Frame Interactive on Instagram"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="/icons/twitch.svg"
                  width="22"
                  height="24"
                  alt="Frame Interactive on Twitch"
                />
              </a>
            </li>
          </ul>
        </div>

        <style>{`
          ${particles
            .map((particle) => {
              const startXPx = (particle.startXPercent / 100) * containerWidth - containerWidth / 2
              const angleRad = (particle.angle * Math.PI) / 180
              const endX = Math.cos(angleRad) * particle.distance
              const endY = Math.sin(angleRad) * particle.distance
              return `
              @keyframes radial-float-${particle.id} {
                0% {
                  opacity: 0;
                  transform: translate(calc(-50% + ${startXPx}px), -50%) translate(0, 0) scale(0);
                }
                15% {
                  opacity: 1;
                  transform: translate(calc(-50% + ${startXPx}px), -50%) translate(${endX * 0.1}px, ${endY * 0.1}px) scale(1);
                }
                100% {
                  opacity: 0;
                  transform: translate(calc(-50% + ${startXPx}px), -50%) translate(${endX}px, ${endY}px) scale(0.3);
                }
              }
            `
            })
            .join('')}
        `}</style>
      </div>
    </div>
  )
}
