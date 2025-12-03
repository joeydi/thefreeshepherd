'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function VideoScrollMatte() {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: panel1.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          onUpdate: (self) => {
            const start = 0
            const end = 0.25

            // Normalize progress into 0–1 inside the 0–0.25 window
            const t = Math.min(Math.max((self.progress - start) / (end - start), 0), 1)

            // Snap t into 32 increments
            const steps = 32
            const snapped = Math.round(t * (steps - 1)) / (steps - 1)

            // Convert to percent for your mask
            const yPosition = snapped * 100

            if (video1.current) {
              video1.current.style.maskPosition = `50% ${yPosition}%`
            }
          },
        },
      })
      .to(
        video1.current,
        {
          currentTime: video1?.current?.duration || 3,
          ease: 'none',
          duration: 1,
        },
        0,
      )
      .to(
        heading1.current,
        {
          y: window.innerHeight,
          ease: 'none',
          duration: 1,
        },
        0,
      )
      .fromTo(
        heading1.current,
        {
          opacity: 0,
          filter: 'blur(20px)',
        },
        {
          opacity: 1,
          filter: 'blur(0px)',
          ease: 'none',
          duration: 0.125,
        },
        0.125,
      )
      .to(
        heading1.current,
        {
          opacity: 0,
          filter: 'blur(20px)',
          ease: 'none',
          duration: 0.125,
        },
        0.5,
      )

    gsap
      .timeline({
        scrollTrigger: {
          trigger: panel2.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          onUpdate: (self) => {
            const start = 0
            const end = 0.25

            // Normalize progress into 0–1 inside the 0–0.25 window
            const t = Math.min(Math.max((self.progress - start) / (end - start), 0), 1)

            // Snap t into 32 increments
            const steps = 32
            const snapped = Math.round(t * (steps - 1)) / (steps - 1)

            // Convert to percent for your mask
            const yPosition = snapped * 100

            if (video2.current) {
              video2.current.style.maskPosition = `50% ${yPosition}%`
            }
          },
        },
      })
      .to(
        video2.current,
        {
          currentTime: video2?.current?.duration || 3,
          ease: 'none',
          duration: 1,
        },
        0,
      )
      .to(
        heading2.current,
        {
          y: window.innerHeight,
          ease: 'none',
          duration: 1,
        },
        0,
      )
      .fromTo(
        heading2.current,
        {
          opacity: 0,
          filter: 'blur(20px)',
        },
        {
          opacity: 1,
          filter: 'blur(0px)',
          ease: 'none',
          duration: 0.125,
        },
        0.125,
      )
      .to(
        heading2.current,
        {
          opacity: 0,
          filter: 'blur(20px)',
          ease: 'none',
          duration: 0.125,
        },
        0.5,
      )

    gsap
      .timeline({
        scrollTrigger: {
          trigger: panel3.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          onUpdate: (self) => {
            const start = 0
            const end = 0.25

            // Normalize progress into 0–1 inside the 0–0.25 window
            const t = Math.min(Math.max((self.progress - start) / (end - start), 0), 1)

            // Snap t into 32 increments
            const steps = 32
            const snapped = Math.round(t * (steps - 1)) / (steps - 1)

            // Convert to percent for your mask
            const yPosition = snapped * 100

            if (video3.current) {
              video3.current.style.maskPosition = `50% ${yPosition}%`
            }
          },
        },
      })
      .to(
        video3.current,
        {
          currentTime: video3?.current?.duration || 3,
          ease: 'none',
          duration: 1,
        },
        0,
      )
      .to(
        heading3.current,
        {
          y: window.innerHeight,
          ease: 'none',
          duration: 1,
        },
        0,
      )
      .fromTo(
        heading3.current,
        {
          opacity: 0,
          filter: 'blur(20px)',
        },
        {
          opacity: 1,
          filter: 'blur(0px)',
          ease: 'none',
          duration: 0.125,
        },
        0.125,
      )
      .to(
        heading3.current,
        {
          opacity: 0,
          filter: 'blur(20px)',
          ease: 'none',
          duration: 0.125,
        },
        0.5,
      )

    gsap
      .timeline({
        scrollTrigger: {
          trigger: panel4.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          onUpdate: (self) => {
            const start = 0
            const end = 0.25

            // Normalize progress into 0–1 inside the 0–0.25 window
            const t = Math.min(Math.max((self.progress - start) / (end - start), 0), 1)

            // Snap t into 32 increments
            const steps = 32
            const snapped = Math.round(t * (steps - 1)) / (steps - 1)

            // Convert to percent for your mask
            const yPosition = snapped * 100

            if (video4.current) {
              video4.current.style.maskPosition = `50% ${yPosition}%`
            }
          },
        },
      })
      .to(
        video4.current,
        {
          currentTime: video4?.current?.duration || 3,
          ease: 'none',
          duration: 1,
        },
        0,
      )
      .to(
        heading4.current,
        {
          y: window.innerHeight,
          ease: 'none',
          duration: 1,
        },
        0,
      )
      .fromTo(
        heading4.current,
        {
          opacity: 0,
          filter: 'blur(20px)',
        },
        {
          opacity: 1,
          filter: 'blur(0px)',
          ease: 'none',
          duration: 0.125,
        },
        0.125,
      )
      .to(
        heading4.current,
        {
          opacity: 0,
          filter: 'blur(20px)',
          ease: 'none',
          duration: 0.125,
        },
        0.5,
      )
  })

  const panel1 = useRef<HTMLDivElement>(null)
  const video1 = useRef<HTMLVideoElement>(null)
  const heading1 = useRef<HTMLHeadingElement>(null)
  const panel2 = useRef<HTMLDivElement>(null)
  const video2 = useRef<HTMLVideoElement>(null)
  const heading2 = useRef<HTMLHeadingElement>(null)
  const panel3 = useRef<HTMLDivElement>(null)
  const video3 = useRef<HTMLVideoElement>(null)
  const heading3 = useRef<HTMLHeadingElement>(null)
  const panel4 = useRef<HTMLDivElement>(null)
  const video4 = useRef<HTMLVideoElement>(null)
  const heading4 = useRef<HTMLHeadingElement>(null)

  return (
    <div className="relative h-[400vh]">
      <div ref={panel1} className="h-screen p-16">
        <h2 ref={heading1} className="relative z-1 font-semibold text-2xl text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
        <video
          style={{
            maskImage: 'url(/ink-matte-invert.jpg)',
            maskMode: 'luminance',
            maskSize: '100% auto',
          }}
          className="fixed inset-0 block w-full h-screen object-cover"
          ref={video1}
          src="https://thefreeshepard.s3.amazonaws.com/static/video/scene1.mp4"
          muted
        ></video>
      </div>
      <div ref={panel2} className="h-screen p-16">
        <h2 ref={heading2} className="relative z-1 font-semibold text-2xl text-white text-right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
        <video
          style={{
            maskImage: 'url(/ink-matte-invert.jpg)',
            maskMode: 'luminance',
            maskSize: '100% auto',
          }}
          className="fixed inset-0 block w-full h-screen object-cover"
          ref={video2}
          src="https://thefreeshepard.s3.amazonaws.com/static/video/scene2.mp4"
          muted
        ></video>
      </div>
      <div ref={panel3} className="h-screen p-16">
        <h2 ref={heading3} className="relative z-1 font-semibold text-2xl text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
        <video
          style={{
            maskImage: 'url(/ink-matte-invert.jpg)',
            maskMode: 'luminance',
            maskSize: '100% auto',
          }}
          className="fixed inset-0 block w-full h-screen object-cover"
          ref={video3}
          src="https://thefreeshepard.s3.amazonaws.com/static/video/scene3.mp4"
          muted
        ></video>
      </div>
      <div ref={panel4} className="h-screen p-16">
        <h2 ref={heading4} className="relative z-1 font-semibold text-2xl text-white text-right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
        <video
          style={{
            maskImage: 'url(/ink-matte-invert.jpg)',
            maskMode: 'luminance',
            maskSize: '100% auto',
          }}
          className="fixed inset-0 block w-full h-screen object-cover"
          ref={video4}
          src="https://thefreeshepard.s3.amazonaws.com/static/video/scene4.mp4"
          muted
        ></video>
      </div>
    </div>
  )
}
