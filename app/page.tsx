import VideoHero from '@/components/video-hero'
import VideoScrollMatteSnap from '@/components/video-scroll-matte-snap'
import { BlurUp } from '@/components/blur-up'
import { FeatureCards } from '@/components/feature-cards'
import VideoIntro from '@/components/video-intro'
import NewsletterSignup from '@/components/newsletter-signup'
import Container from '@/components/container'
import Main from '@/components/main'

const cards = [
  {
    title: 'Interview with Zoe Keating',
    description:
      'A deep look into the creative process behind the haunting, cello-driven soundscape that shapes the soul of The Free Shepherd.',
    image: '/excerpt-zoe-keating.jpg',
    link: '/updates/interview-with-zoe-keating',
  },
  {
    title: 'Your new best friend',
    description:
      'Meet the loyal sheepdog at the heart of the journey—agile, expressive, and ready to lead you through wild terrain and quiet mysteries.',
    image: '/excerpt-shepherd.jpg',
    link: '/updates/your-new-best-friend',
  },
  {
    title: 'Dev Log: Winter 2026',
    description:
      'An inside look at new environments, worldbuilding tools, and the evolving systems shaping the next chapter of development.',
    image: '/excerpt-devlog.jpg',
    link: '/updates/dev-log-winter-2026',
  },
]

export default async function Home() {
  return (
    <Main className="pt-0">
      <VideoHero />
      <VideoIntro />
      <VideoScrollMatteSnap />
      <Container className="gap-xl relative z-2 flex flex-col">
        <div id="trailer" className="flex items-center justify-center">
          <BlurUp className="w-full max-w-7xl">
            <iframe
              className="rounded-fluid-xs aspect-video h-auto w-full shadow-lg"
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
          <BlurUp className="flex flex-col items-center gap-8">
            <h2 className="font-serif text-xl">Latest updates</h2>
            <FeatureCards cards={cards} />
          </BlurUp>
        </div>
        <BlurUp id="newsletter">
          <NewsletterSignup />
        </BlurUp>
      </Container>
    </Main>
  )
}
