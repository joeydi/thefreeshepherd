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

export default function Particles() {
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
    <div className="pointer-events-none absolute inset-0 overflow-visible">
      {hasParticles &&
        particles.map((particle) => {
          return (
            <div
              key={particle.id}
              className="absolute top-1/2 rounded-full bg-white"
              style={{
                left: `${particle.startXPercent}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                boxShadow: `0 0 ${particle.size * 2}px ${particle.size}px rgba(255, 255, 255, 0.6)`,
                animationName: `radial-float-${particle.id}`,
                animationDuration: `${particle.duration}s`,
                animationTimingFunction: 'ease-out',
                animationIterationCount: 'infinite',
                animationDelay: `${particle.delay}s`,
              }}
            />
          )
        })}

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
  )
}
