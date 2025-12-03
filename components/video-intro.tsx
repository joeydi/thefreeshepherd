'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger)

export default function VideoIntro() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    const split = new SplitText(headingRef.current, { type: 'words' })

    const splitTween = gsap.fromTo(
      split.words,
      {
        opacity: 0,
        filter: 'blur(30px)',
      },
      {
        opacity: 1,
        filter: 'blur(0px)',
        ease: 'expo.out',
        duration: 1,
        stagger: 0.05,
        paused: true,
      },
    )

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        onEnter: () => {
          console.log('onEnter')
          splitTween.play()
        },
        onEnterBack: () => {
          console.log('onEnterBack')
          splitTween.play()
        },
        onLeave: () => {
          console.log('onLeave')
          splitTween.pause().progress(0)
        },
        onLeaveBack: () => {
          console.log('onLeaveBack')
          splitTween.pause().progress(0)
        },
      },
    })

    tl.to(headingRef.current, {
      y: '100vh',
      ease: 'none',
    })
  }, [])

  return (
    <div ref={sectionRef} className="h-screen flex justify-center mb-[50vh]">
      <h1
        ref={headingRef}
        className="text-4xl font-serif font-medium text-center text-balance leading-normal"
      >
        The Free Shepherd is an atmospheric adventure where you are a sheepdog in a mystical world,
        searching for your lost sheep.
      </h1>
    </div>
  )
}
