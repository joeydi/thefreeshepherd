'use client'

import { useRef } from 'react'
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
  const logoRef = useRef<HTMLImageElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

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
        <h1 className="text-2xl">The Free Shepard</h1>
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
        <AlphaVideo src="/hero-clip-1-alpha.mp4" />
        <div className="absolute bottom-0 left-0 h-[20vh] w-full bg-linear-to-b from-[#282B2A]/0 to-[#282B2A]"></div>
        <div className="absolute bottom-0 left-0 h-[10vh] w-full bg-linear-to-b from-[#282B2A]/0 to-[#282B2A]"></div>
      </div>
      <div className="absolute top-full left-0 h-[20vh] w-full bg-linear-to-t from-[#282B2A]/0 to-[#282B2A]"></div>
      <div className="absolute top-full left-0 h-[10vh] w-full bg-linear-to-t from-[#282B2A]/0 to-[#282B2A]"></div>
    </div>
  )
}
