import VideoHero from '@/components/video-hero'
import VideoScrollMatteSnap from '@/components/video-scroll-matte-snap'
import MailchimpScript from '@/components/mailchimp-script'

export default async function Matte() {
  return (
    <main className="bg-[#282B2A] text-white">
      <VideoHero />
      <VideoScrollMatteSnap />
      <div className="h-screen"></div>
      <div
        id="trailer"
        className="bg-[#282B2A] relative z-2 h-screen flex items-center justify-center"
      >
        <iframe
          className="w-[80%] max-w-[960px] h-auto aspect-video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PVYIyiqCQqc?si=Shu6SkzmRWNR7kco&rel=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div
        id="newsletter"
        className="bg-[#282B2A] relative z-2 h-screen flex flex-col gap-8 items-center justify-center"
      >
        <h2 className="text-2xl font-serif">Newsletter signup</h2>
        <MailchimpScript />
      </div>
    </main>
  )
}
