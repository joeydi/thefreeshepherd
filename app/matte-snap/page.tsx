import VideoHero from '@/components/video-hero'
import VideoScrollMatteSnap from '@/components/video-scroll-matte-snap'
import MailchimpScript from '@/components/mailchimp-script'
import { BlurUp } from '@/components/blur-up'
import { FeatureCards } from '@/components/feature-cards'
import VideoIntro from '@/components/video-intro'

const cards = [
  {
    title: 'Interview with Zoe Keating',
    description:
      'A deep look into the creative process behind the haunting, cello-driven soundscape that shapes the soul of The Free Shepherd.',
    image: '/excerpt-zoe-keating.jpg',
    link: '/feature-one',
  },
  {
    title: 'Your new best friend',
    description:
      'Meet the loyal sheepdog at the heart of the journey—agile, expressive, and ready to lead you through wild terrain and quiet mysteries.',
    image: '/excerpt-shepherd.jpg',
    link: '/feature-two',
  },
  {
    title: 'Dev Log: Winter 2026',
    description:
      'An inside look at new environments, worldbuilding tools, and the evolving systems shaping the next chapter of development.',
    image: '/excerpt-devlog.jpg',
    link: '/feature-two',
  },
]

export default async function Matte() {
  return (
    <main className="bg-[#282B2A] text-white">
      <VideoHero />
      <VideoIntro />
      <VideoScrollMatteSnap />
      <div className="h-screen"></div>
      <div className="bg-[#282B2A] relative z-2 py-48 px-16 flex flex-col gap-48">
        <div id="trailer" className="flex items-center justify-center">
          <BlurUp className="w-[80%] max-w-7xl">
            <iframe
              className="w-full h-auto aspect-video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/PVYIyiqCQqc?si=Shu6SkzmRWNR7kco&rel=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </BlurUp>
        </div>
        <div id="updates" className="flex items-center justify-center">
          <BlurUp className="flex flex-col gap-8 items-center">
            <h2 className="text-2xl font-serif">Latest updates</h2>
            <FeatureCards cards={cards} />
          </BlurUp>
        </div>
        <div id="newsletter" className="w-full max-w-2xl self-center">
          <BlurUp className="flex flex-col gap-8">
            <h2 className="text-2xl font-serif text-center">Newsletter signup</h2>
            <MailchimpScript />
          </BlurUp>
        </div>
      </div>
    </main>
  )
}
