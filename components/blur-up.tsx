'use client'

import { useEffect, useRef, useState } from 'react'

interface BlurUpProps extends React.ComponentPropsWithoutRef<'div'> {
  reset?: boolean
}

export function BlurUp({ children, reset = true, className = '', ...rest }: BlurUpProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else if (reset) {
          setIsVisible(false)
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [reset])

  return (
    <div
      ref={ref}
      className={`ease-out-sharp transition-[opacity,transform,filter] duration-1000 ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.9)',
        filter: isVisible ? 'blur(0px)' : 'blur(24px)',
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
