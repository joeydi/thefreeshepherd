import VideoHero from '@/components/video-hero'
import VideoScrollMatte from '@/components/video-scroll-matte'
import Main from '@/components/main'

export default async function Matte() {
  return (
    <Main>
      <VideoHero />
      <VideoScrollMatte />
      <div className="h-screen"></div>
      <div className="relative z-1 flex h-screen items-center justify-center bg-white">
        <h1 className="text-2xl">Trailer</h1>
      </div>
    </Main>
  )
}
