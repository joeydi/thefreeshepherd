'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function VideoScrollMatteSnap() {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          markers: true,
          trigger: panel1.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          onEnter: () => {
            if (video1.current) {
              video1.current.style.maskPosition = '50% 100%'
            }
          },
          onLeaveBack: () => {
            if (video1.current) {
              video1.current.style.maskPosition = '50% 0%'
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
    // .to(
    //   heading1.current,
    //   {
    //     y: window.innerHeight,
    //     ease: 'none',
    //     duration: 1,
    //   },
    //   0,
    // )
    // .fromTo(
    //   heading1.current,
    //   {
    //     opacity: 0,
    //     filter: 'blur(20px)',
    //   },
    //   {
    //     opacity: 1,
    //     filter: 'blur(0px)',
    //     ease: 'none',
    //     duration: 0.125,
    //   },
    //   0.125,
    // )
    // .to(
    //   heading1.current,
    //   {
    //     opacity: 0,
    //     filter: 'blur(20px)',
    //     ease: 'none',
    //     duration: 0.125,
    //   },
    //   0.5,
    // )

    gsap
      .timeline({
        scrollTrigger: {
          markers: true,
          trigger: panel2.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          onEnter: () => {
            if (video2.current) {
              video2.current.style.maskPosition = '50% 100%'
            }
          },
          onLeaveBack: () => {
            if (video2.current) {
              video2.current.style.maskPosition = '50% 0%'
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
    // .to(
    //   heading2.current,
    //   {
    //     y: window.innerHeight,
    //     ease: 'none',
    //     duration: 1,
    //   },
    //   0,
    // )
    // .fromTo(
    //   heading2.current,
    //   {
    //     opacity: 0,
    //     filter: 'blur(20px)',
    //   },
    //   {
    //     opacity: 1,
    //     filter: 'blur(0px)',
    //     ease: 'none',
    //     duration: 0.125,
    //   },
    //   0.125,
    // )
    // .to(
    //   heading2.current,
    //   {
    //     opacity: 0,
    //     filter: 'blur(20px)',
    //     ease: 'none',
    //     duration: 0.125,
    //   },
    //   0.5,
    // )

    gsap
      .timeline({
        scrollTrigger: {
          trigger: panel3.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          onEnter: () => {
            if (video3.current) {
              video3.current.style.maskPosition = '50% 100%'
            }
          },
          onLeaveBack: () => {
            if (video3.current) {
              video3.current.style.maskPosition = '50% 0%'
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
    // .to(
    //   heading3.current,
    //   {
    //     y: window.innerHeight,
    //     ease: 'none',
    //     duration: 1,
    //   },
    //   0,
    // )
    // .fromTo(
    //   heading3.current,
    //   {
    //     opacity: 0,
    //     filter: 'blur(20px)',
    //   },
    //   {
    //     opacity: 1,
    //     filter: 'blur(0px)',
    //     ease: 'none',
    //     duration: 0.125,
    //   },
    //   0.125,
    // )
    // .to(
    //   heading3.current,
    //   {
    //     opacity: 0,
    //     filter: 'blur(20px)',
    //     ease: 'none',
    //     duration: 0.125,
    //   },
    //   0.5,
    // )

    gsap
      .timeline({
        scrollTrigger: {
          trigger: panel4.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          onEnter: () => {
            if (video4.current) {
              video4.current.style.maskPosition = '50% 100%'
            }
          },
          onLeaveBack: () => {
            if (video4.current) {
              video4.current.style.maskPosition = '50% 0%'
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
    // .to(
    //   heading4.current,
    //   {
    //     y: window.innerHeight,
    //     ease: 'none',
    //     duration: 1,
    //   },
    //   0,
    // )
    // .fromTo(
    //   heading4.current,
    //   {
    //     opacity: 0,
    //     filter: 'blur(20px)',
    //   },
    //   {
    //     opacity: 1,
    //     filter: 'blur(0px)',
    //     ease: 'none',
    //     duration: 0.125,
    //   },
    //   0.125,
    // )
    // .to(
    //   heading4.current,
    //   {
    //     opacity: 0,
    //     filter: 'blur(20px)',
    //     ease: 'none',
    //     duration: 0.125,
    //   },
    //   0.5,
    // )
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
        <h2
          ref={heading1}
          className="relative z-1 max-w-3xl text-balance font-semibold text-2xl text-white"
        >
          A sweeping adventure painted with soft light, shifting weather, and cinematic motion.
          Every run, leap, and tail-wag flows through handcrafted landscapes that feel alive from
          the first step.
        </h2>
        <video
          style={{
            maskImage: 'url(/ink-matte-dither-noise.png)',
            maskMode: 'luminance',
            maskSize: '100% auto',
            transition: 'mask-position 1s steps(32, jump-none)',
          }}
          className="fixed inset-0 block w-full h-screen object-cover"
          ref={video1}
          src="https://thefreeshepard.s3.amazonaws.com/static/video/scene1.mp4"
          muted
        ></video>
      </div>
      <div ref={panel2} className="h-screen flex p-16">
        <h2
          ref={heading2}
          className="relative z-1 max-w-3xl text-balance font-semibold text-2xl text-white ml-auto"
        >
          Drift through open worlds shaped by mood and mystery—wind in the grass, distant bleats,
          rain over stone. The terrain, sound, and lighting wrap you in a quiet spell as you search
          for your flock.
        </h2>
        <video
          style={{
            maskImage: 'url(/ink-matte-dither-noise.png)',
            maskMode: 'luminance',
            maskSize: '100% auto',
            transition: 'mask-position 1s steps(32, jump-none)',
          }}
          className="fixed inset-0 block w-full h-screen object-cover"
          ref={video2}
          src="https://thefreeshepard.s3.amazonaws.com/static/video/scene2.mp4"
          muted
        ></video>
      </div>
      <div ref={panel3} className="h-screen p-16">
        <h2
          ref={heading3}
          className="relative z-1 max-w-3xl text-balance font-semibold text-2xl text-white"
        >
          Control a fully physical, expressive sheepdog built for momentum. Sprint, skid, swim, dig,
          bark, and bound across obstacles as you herd massive flocks and follow the trail toward
          the sheep you’ve sworn to protect.
        </h2>
        <video
          style={{
            maskImage: 'url(/ink-matte-dither-noise.png)',
            maskMode: 'luminance',
            maskSize: '100% auto',
            transition: 'mask-position 1s steps(32, jump-none)',
          }}
          className="fixed inset-0 block w-full h-screen object-cover"
          ref={video3}
          src="https://thefreeshepard.s3.amazonaws.com/static/video/scene3.mp4"
          muted
        ></video>
      </div>
      <div ref={panel4} className="h-screen p-16">
        <h2
          ref={heading4}
          className="relative z-1 max-w-3xl text-balance font-semibold text-2xl text-white ml-auto"
        >
          Beneath the pastoral calm lies something uncanny. Subtle fantastical forces reshape the
          world, turning puzzles, environments, and even the flock itself into surprises that deepen
          the journey.
        </h2>
        <video
          style={{
            maskImage: 'url(/ink-matte-dither-noise.png)',
            maskMode: 'luminance',
            maskSize: '100% auto',
            transition: 'mask-position 1s steps(32, jump-none)',
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
