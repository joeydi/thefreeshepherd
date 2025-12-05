'use client'

import backgroundImage from '@/images/newsletter-bg.jpg'
import Image from 'next/image'
import { useRef } from 'react'
import { GlowingButton } from './glowing-button'

export default function NewsletterSignup() {
  const emailInput = useRef<HTMLInputElement>(null)

  return (
    <div className="rounded-fluid-xs relative mx-auto w-full max-w-7xl overflow-hidden bg-white/5 bg-linear-180 shadow-lg inset-ring-1 inset-ring-white/10">
      <Image
        className="top-0 right-0 object-cover md:absolute md:h-full md:w-full"
        src={backgroundImage}
        unoptimized
        alt=""
      />
      <div className="rounded-fluid-xs absolute inset-0 hidden bg-[linear-gradient(to_right,#191C17cc,transparent_75%),linear-gradient(to_right,#191C17cc_25%,transparent_65%)] inset-ring inset-ring-white/10 md:block"></div>
      <div className="p-md relative flex flex-col gap-8">
        <div className="flex flex-col gap-4 md:w-[50%]">
          <h2 className="font-serif text-xl font-semibold tracking-tight text-balance text-white md:text-balance">
            Sign up for updates on our evolving world
          </h2>
          <p className="text-[#BCC8C6] md:text-balance">
            Exclusive interviews, behind-the-scenes insights, and early glimpses into the story and
            its faithful sheepdog guide.
          </p>
        </div>
        <form
          onSubmit={() => {
            setTimeout(() => {
              if (emailInput.current) {
                emailInput.current.value = ''
              }
            })
          }}
          action="https://frameinteractive.us17.list-manage.com/subscribe/post?u=b9e140e94bbc0b1a691021dcd&amp;id=89bef8ceb9&amp;f_id=00507de0f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="flex flex-col gap-4 md:flex-row md:items-end"
          target="_blank"
        >
          <div className="min-w-[280px]">
            <div className="flex flex-col gap-2">
              <label htmlFor="mce-EMAIL" className="font-serif font-light">
                Email Address
              </label>
              <input
                ref={emailInput}
                type="email"
                name="EMAIL"
                className="rounded-sm bg-white/10 px-4 py-3 inset-ring-1 inset-ring-white/5"
                id="mce-EMAIL"
                required
                defaultValue=""
              />
            </div>
            <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
              <input
                type="text"
                name="b_b9e140e94bbc0b1a691021dcd_89bef8ceb9"
                tabIndex={-1}
                defaultValue=""
              />
            </div>
          </div>

          <GlowingButton
            particles={true}
            type="submit"
            name="subscribe"
            id="mc-embedded-subscribe"
            value="Subscribe"
          >
            Subscribe
          </GlowingButton>
        </form>
      </div>
    </div>
  )
}
