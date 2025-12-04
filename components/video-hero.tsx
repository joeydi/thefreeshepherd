'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { AlphaVideo } from './alpha-video'
import { BlurUp } from './blur-up'
import { GlowingButton } from './glowing-button'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function VideoHero() {
  const sectionRef = useRef<HTMLImageElement>(null)
  const bg1Ref = useRef<HTMLImageElement>(null)
  const bg2Ref = useRef<HTMLImageElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLImageElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const section = sectionRef.current

    gsap.set([bg1Ref.current, bg2Ref.current, videoRef.current], { scale: 1.1 })

    const mousemoveHandler = (e: MouseEvent) => {
      const xPercent = gsap.utils.mapRange(0, window.innerWidth, 5, -5, e.clientX)
      const yPercent = gsap.utils.mapRange(0, window.innerHeight, 5, -5, e.clientY)

      gsap.to(bg1Ref.current, {
        xPercent: xPercent * 0.5,
        yPercent: yPercent * 0.5,
        duration: 0.5,
        ease: 'power2.out',
      })
      gsap.to(bg2Ref.current, {
        xPercent: xPercent * 0.75,
        yPercent: yPercent * 0.75,
        duration: 0.5,
        ease: 'power2.out',
      })
      gsap.to(videoRef.current, {
        xPercent,
        yPercent,
        duration: 0.5,
        ease: 'power2.out',
      })
    }

    section.addEventListener('mousemove', mousemoveHandler)

    return () => {
      section.removeEventListener('mousemove', mousemoveHandler)
    }
  }, [])

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    tl.to(
      bg1Ref.current,
      {
        yPercent: 50,
        ease: 'none',
        duration: 1,
      },
      0,
    )

    tl.to(
      bg2Ref.current,
      {
        yPercent: 25,
        ease: 'none',
        duration: 1,
      },
      0,
    )

    tl.to(
      logoRef.current,
      {
        y: '15vh',
        ease: 'none',
        duration: 1,
      },
      0,
    )

    tl.to(
      ctaRef.current,
      {
        y: '15vh',
        ease: 'none',
        duration: 1,
      },
      0,
    )
  }, [])

  return (
    <div className="relative z-1">
      <div
        ref={sectionRef}
        className="relative flex h-screen items-center justify-center overflow-hidden"
      >
        <Image className="object-cover" ref={bg1Ref} src="/hero-bg.jpg" fill unoptimized alt="" />
        <Image className="object-cover" ref={bg2Ref} src="/hero-bg.png" fill unoptimized alt="" />
        <div className="absolute top-[34%] left-[32%] flex w-[36%] flex-col gap-8">
          <div ref={logoRef}>
            <BlurUp className="h-auto w-[50%]">
              <Image
                className="h-auto w-full"
                src="/logo.svg"
                width="343"
                height="230"
                unoptimized
                alt=""
              />
            </BlurUp>
          </div>
          <div ref={ctaRef} className="z-1">
            <BlurUp className="rounded-fluid-xs flex items-center gap-4 bg-black/10 p-4 pl-8 inset-ring-1 inset-ring-white/10 backdrop-blur-md">
              <span className="mr-auto text-lg font-semibold text-white">Coming Spring 2027</span>
              <GlowingButton className="min-w-52">
                <Image
                  className="size-8"
                  src="/icons/playstation.svg"
                  width="93"
                  height="72"
                  unoptimized
                  alt=""
                />
                <span className="text-lg font-semibold">PlayStation</span>
              </GlowingButton>
              <GlowingButton className="min-w-52">
                <Image
                  className="size-8"
                  src="/icons/steam.svg"
                  width="72"
                  height="72"
                  unoptimized
                  alt=""
                />
                <span className="text-lg font-semibold">Steam</span>
              </GlowingButton>
            </BlurUp>
          </div>
        </div>
        <div ref={videoRef} className="absolute bottom-0 left-0 aspect-video w-full">
          <AlphaVideo src="/hero-clip-1-alpha.mp4" />
        </div>
        <div className="absolute bottom-0 left-0 h-[20vh] w-full bg-linear-to-b from-[#282B2A]/0 to-[#282B2A]"></div>
        <div className="absolute bottom-0 left-0 h-[10vh] w-full bg-linear-to-b from-[#282B2A]/0 to-[#282B2A]"></div>
      </div>
      <div className="absolute top-full left-0 h-[20vh] w-full bg-linear-to-t from-[#282B2A]/0 to-[#282B2A]"></div>
      <div className="absolute top-full left-0 h-[10vh] w-full bg-linear-to-t from-[#282B2A]/0 to-[#282B2A]"></div>
    </div>
  )
}
