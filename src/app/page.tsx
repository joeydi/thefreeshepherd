import React from 'react'
import VideoHero from '@/components/video-hero'
import VideoScroll from '@/components/video-scroll'

export default async function Home() {
  return (
    <main>
      <VideoHero />
      <VideoScroll />
      <div className="h-screen"></div>
      <div className="relative z-1 bg-white h-screen flex items-center justify-center">
        <h1 className="text-2xl">Trailer</h1>
      </div>
    </main>
  )
}
