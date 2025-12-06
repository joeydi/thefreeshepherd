'use client'

import { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BlurUp } from './blur-up'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function VideoScrollMatteSnap() {
  const [maskActive1, setMaskActive1] = useState<boolean | null>(null)
  const [maskActive2, setMaskActive2] = useState<boolean | null>(null)
  const [maskActive3, setMaskActive3] = useState<boolean | null>(null)
  const [maskActive4, setMaskActive4] = useState<boolean | null>(null)

  const panel1 = useRef<HTMLDivElement>(null)
  const video1 = useRef<HTMLVideoElement>(null)
  const heading1 = useRef<HTMLDivElement>(null)
  const panel2 = useRef<HTMLDivElement>(null)
  const video2 = useRef<HTMLVideoElement>(null)
  const heading2 = useRef<HTMLHeadingElement>(null)
  const panel3 = useRef<HTMLDivElement>(null)
  const video3 = useRef<HTMLVideoElement>(null)
  const heading3 = useRef<HTMLHeadingElement>(null)
  const panel4 = useRef<HTMLDivElement>(null)
  const video4 = useRef<HTMLVideoElement>(null)
  const heading4 = useRef<HTMLHeadingElement>(null)
  const panel5 = useRef<HTMLDivElement>(null)
  const panel5Overlay = useRef<HTMLDivElement>(null)

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

    gsap.timeline({
      scrollTrigger: {
        trigger: panel5.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          const y = gsap.utils.snap(1 / 31, self.progress)
          if (panel5Overlay.current) {
            panel5Overlay.current.style.maskPosition = `50% ${y * 100}%`
          }
        },
      },
    })
  }, [])

  return (
    <div className="relative">
      <div ref={panel1} className="p-sm h-screen">
        <div ref={heading1} className="relative z-1 max-w-6xl">
          <BlurUp className="flex flex-col gap-4">
            <h2 className="font-serif text-xl leading-tight font-semibold text-balance text-white">
              A sweeping adventure painted with soft light, shifting weather, and cinematic motion.
            </h2>
            <p className="text-balance text-white">
              Every run, leap, and tail-wag flows through handcrafted landscapes that feel alive
              from the first step.
            </p>
          </BlurUp>
        </div>
        <video
          style={{
            maskImage: 'url(/ink-matte-flat-bottom.jpg)',
            maskMode: 'luminance',
            maskSize: '100% 3200%',
            maskPosition: '50% 0%',
          }}
          className={`fixed inset-0 block h-screen w-full object-cover ${
            maskActive1 === null ? 'mask-initial' : maskActive1 ? 'mask-reveal' : 'mask-hide'
          }`}
          ref={video1}
          src="https://thefreeshepard.s3.amazonaws.com/static/video/scene1.mp4"
          muted
        ></video>
      </div>
      <div ref={panel2} className="p-sm flex h-screen">
        <div ref={heading2} className="relative z-1 ml-auto max-w-5xl">
          <BlurUp className="flex flex-col gap-4">
            <h2 className="font-serif text-xl leading-tight font-semibold text-balance text-white">
              Drift through open worlds shaped by mood and mystery.
            </h2>
            <p className="text-balance text-white">
              Wind in the grass, distant bleats, rain over stone. The terrain, sound, and lighting
              wrap you in a quiet spell as you search for your flock.
            </p>
          </BlurUp>
        </div>
        <video
          style={{
            maskImage: 'url(/ink-matte-flat-bottom.jpg)',
            maskMode: 'luminance',
            maskSize: '100% 3200%',
          }}
          className={`fixed inset-0 block h-screen w-full object-cover ${
            maskActive2 === null ? 'mask-initial' : maskActive2 ? 'mask-reveal' : 'mask-hide'
          }`}
          ref={video2}
          src="https://thefreeshepard.s3.amazonaws.com/static/video/scene2.mp4"
          muted
        ></video>
      </div>
      <div ref={panel3} className="p-sm h-screen">
        <div ref={heading3} className="relative z-1 max-w-6xl">
          <BlurUp className="flex flex-col gap-4">
            <h2 className="font-serif text-xl leading-tight font-semibold text-balance text-white">
              Control a fully physical, expressive sheepdog built for momentum.
            </h2>
            <p className="text-balance text-white">
              Sprint, skid, swim, dig, bark, and bound across obstacles as you herd massive flocks
              and follow the trail toward the sheep you’ve sworn to protect.
            </p>
          </BlurUp>
        </div>
        <video
          style={{
            maskImage: 'url(/ink-matte-flat-bottom.jpg)',
            maskMode: 'luminance',
            maskSize: '100% 3200%',
          }}
          className={`fixed inset-0 block h-screen w-full object-cover ${
            maskActive3 === null ? 'mask-initial' : maskActive3 ? 'mask-reveal' : 'mask-hide'
          }`}
          ref={video3}
          src="https://thefreeshepard.s3.amazonaws.com/static/video/scene3.mp4"
          muted
        ></video>
      </div>
      <div ref={panel4} className="p-sm h-screen">
        <div ref={heading4} className="relative z-1 ml-auto max-w-5xl">
          <BlurUp className="flex flex-col gap-4">
            <h2 className="font-serif text-xl leading-tight font-semibold text-balance text-white">
              Beneath the pastoral calm lies something uncanny.
            </h2>
            <p className="text-balance text-white">
              Subtle fantastical forces reshape the world, turning puzzles, environments, and even
              the flock itself into surprises that deepen the journey.
            </p>
          </BlurUp>
        </div>
        <video
          style={{
            maskImage: 'url(/ink-matte-flat-bottom.jpg)',
            maskMode: 'luminance',
            maskSize: '100% 3200%',
          }}
          className={`fixed inset-0 block h-screen w-full object-cover ${
            maskActive4 === null ? 'mask-initial' : maskActive4 ? 'mask-reveal' : 'mask-hide'
          }`}
          ref={video4}
          src="https://thefreeshepard.s3.amazonaws.com/static/video/scene4.mp4"
          muted
        ></video>
      </div>
      <div ref={panel5} className="h-screen">
        <div
          ref={panel5Overlay}
          style={{
            maskImage: 'url(/ink-matte-flat-bottom.jpg)',
            maskMode: 'luminance',
            maskSize: '100% 3200%',
          }}
          className={`fixed inset-0 block h-screen w-full bg-[#282B2A] object-cover`}
        ></div>
      </div>
    </div>
  )
}
