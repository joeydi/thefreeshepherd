'use client'

import { useRef } from 'react'
import { GlowingButton } from './glowing-button'

export default function MailchimpForm() {
  const emailInput = useRef<HTMLInputElement>(null)

  return (
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
      className="p-8 rounded-fluid-xs flex flex-col gap-4 inset-ring-1 inset-ring-white/10 bg-white/10"
      target="_blank"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="mce-EMAIL" className="font-serif font-light">
          Email Address
        </label>
        <input
          ref={emailInput}
          type="email"
          name="EMAIL"
          className="bg-white/10 inset-ring-1 inset-ring-white/5 rounded-sm py-2 px-4"
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

      <GlowingButton
        type="submit"
        name="subscribe"
        id="mc-embedded-subscribe"
        value="Subscribe"
        className="relative p-3 mt-2 group cursor-pointer"
      >
        Subscribe
      </GlowingButton>
    </form>
  )
}
