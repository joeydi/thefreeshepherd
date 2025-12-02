'use client'

import { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function VideoScrollMatteSnap() {
  const [maskActive1, setMaskActive1] = useState<boolean | null>(null)
  const [maskActive2, setMaskActive2] = useState<boolean | null>(null)
  const [maskActive3, setMaskActive3] = useState<boolean | null>(null)
  const [maskActive4, setMaskActive4] = useState<boolean | null>(null)

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

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: panel1.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          onEnter: () => {
            setMaskActive1(true)
          },
          onLeaveBack: () => {
            console.log('onLeaveBack')

            setMaskActive1(false)
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

    gsap
      .timeline({
        scrollTrigger: {
          trigger: panel2.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          onEnter: () => {
            setMaskActive2(true)
          },
          onLeaveBack: () => {
            setMaskActive2(false)
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

    gsap
      .timeline({
        scrollTrigger: {
          trigger: panel3.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          onEnter: () => {
            setMaskActive3(true)
          },
          onLeaveBack: () => {
            setMaskActive3(false)
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

    gsap
      .timeline({
        scrollTrigger: {
          trigger: panel4.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          onEnter: () => {
            setMaskActive4(true)
          },
          onLeaveBack: () => {
            setMaskActive4(false)
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
  }, [])

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
            maskImage: 'url(/ink-matte-flat-bottom.jpg)',
            maskMode: 'luminance',
            maskSize: '100% 3200%',
            maskPosition: '50% 0%',
          }}
          className={`fixed inset-0 block w-full h-screen object-cover ${maskActive1 === null ? 'mask-initial' : maskActive1 ? 'mask-reveal' : 'mask-hide'}`}
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
            maskImage: 'url(/ink-matte-flat-bottom.jpg)',
            maskMode: 'luminance',
            maskSize: '100% 3200%',
          }}
          className={`fixed inset-0 block w-full h-screen object-cover ${maskActive2 === null ? 'mask-initial' : maskActive2 ? 'mask-reveal' : 'mask-hide'}`}
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
            maskImage: 'url(/ink-matte-flat-bottom.jpg)',
            maskMode: 'luminance',
            maskSize: '100% 3200%',
          }}
          className={`fixed inset-0 block w-full h-screen object-cover ${maskActive3 === null ? 'mask-initial' : maskActive3 ? 'mask-reveal' : 'mask-hide'}`}
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
            maskImage: 'url(/ink-matte-flat-bottom.jpg)',
            maskMode: 'luminance',
            maskSize: '100% 3200%',
          }}
          className={`fixed inset-0 block w-full h-screen object-cover ${maskActive4 === null ? 'mask-initial' : maskActive4 ? 'mask-reveal' : 'mask-hide'}`}
          ref={video4}
          src="https://thefreeshepard.s3.amazonaws.com/static/video/scene4.mp4"
          muted
        ></video>
      </div>
    </div>
  )
}
