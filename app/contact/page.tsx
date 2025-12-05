import { BlurUp } from '@/components/blur-up'
import Container from '@/components/container'
import { GlowingButton } from '@/components/glowing-button'
import Main from '@/components/main'

export default async function Contact() {
  return (
    <Main className="flex items-center justify-center">
      <Container className="w-full">
        <BlurUp className="gap-xs flex w-full flex-col items-center">
          <h1 className="text-center font-serif text-2xl">Get in touch</h1>
          <form
            action="https://formspree.io/f/mwpgbrwp"
            method="POST"
            className="rounded-fluid-xs flex w-full max-w-5xl flex-col gap-4 bg-white/10 p-8 inset-ring-1 inset-ring-white/10"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-serif font-light">
                Your email
              </label>
              <input
                className="rounded-sm bg-white/10 px-4 py-2 inset-ring-1 inset-ring-white/5"
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
                className="rounded-sm bg-white/10 px-4 py-2 inset-ring-1 inset-ring-white/5"
                name="message"
                id="message"
                rows={4}
              ></textarea>
            </div>
            <GlowingButton>Send</GlowingButton>
          </form>
        </BlurUp>
      </Container>
    </Main>
  )
}
