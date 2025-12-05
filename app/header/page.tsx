import VideoHero from '@/components/video-hero'
import VideoScrollMatteSnap from '@/components/video-scroll-matte-snap'
import Main from '@/components/main'

export default async function Matte() {
  return (
    <Main>
      <VideoHero />
      <VideoScrollMatteSnap />
      <div className="h-screen"></div>
      <div className="relative z-1 flex h-screen items-center justify-center bg-[#282B2A]">
        <h1 className="text-2xl">Trailer</h1>
      </div>
    </Main>
  )
}
