'use client'

import type React from 'react'
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

export function GlowingButton({ children = 'Enter' }: { children?: React.ReactNode }) {
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
    <div ref={containerRef} className="relative flex items-center py-4 px-8">
      <div className="absolute z-1 inset-0 rounded-full bg-white/30 backdrop-blur-md" />
      {/* Outer glow layers */}
      <div className="absolute inset-0 scale-120 rounded-full bg-emerald-500/20 blur-3xl animate-pulse" />
      <div
        className="absolute inset-0 scale-110 rounded-full bg-teal-400/20 blur-2xl animate-pulse"
        style={{ animationDelay: '0.6s' }}
      />
      <div
        className="absolute inset-0 rounded-full bg-white/20 blur-2xl animate-pulse"
        style={{ animationDelay: '1.3s' }}
      />

      <div className="absolute inset-0 overflow-visible pointer-events-none">
        {particles.map((particle) => {
          const startXPx = (particle.startXPercent / 100) * containerWidth - containerWidth / 2
          return (
            <div
              key={particle.id}
              className="absolute left-1/2 top-1/2 rounded-full bg-white"
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

      <div className="relative z-1">
        <h1 className="font-medium">The Free Shepherd</h1>
      </div>

      <style jsx>{`
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
  )
}
