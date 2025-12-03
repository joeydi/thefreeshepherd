import { BlurUp } from '@/components/blur-up'
import { GlowingButton } from '@/components/glowing-button'

export default async function Contact() {
  return (
    <main className="bg-[#282B2A] text-white relative z-1 h-screen min-h-fit flex items-center justify-center pt-48 pb-32 px-16">
      <BlurUp className="w-full flex flex-col items-center gap-8">
        <h1 className="text-2xl font-serif text-center">Get in touch</h1>
        <form
          action="https://formspree.io/f/mwpgbrwp"
          method="POST"
          className="w-full max-w-2xl p-8 rounded-fluid-xs flex flex-col gap-4 inset-ring-1 inset-ring-white/10 bg-white/10"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-serif font-light">
              Your email
            </label>
            <input
              className="bg-white/10 inset-ring-1 inset-ring-white/5 rounded-sm py-2 px-4"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-serif font-light">
              Your message
            </label>
            <textarea
              className="bg-white/10 inset-ring-1 inset-ring-white/5 rounded-sm py-2 px-4"
              name="message"
              id="message"
              rows={4}
            ></textarea>
          </div>
          <GlowingButton>Send</GlowingButton>
        </form>
      </BlurUp>
    </main>
  )
}
