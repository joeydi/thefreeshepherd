import React from 'react'
import VideoHero from '@/components/video-hero'
import VideoScrollForward from '@/components/video-scroll-forward'

export default async function Forward() {
  return (
    <main>
      <VideoHero />
      <VideoScrollForward />
      <div className="h-screen"></div>
      <div className="relative z-1 bg-white h-screen flex items-center justify-center">
        <h1 className="text-2xl">Trailer</h1>
      </div>
    </main>
  )
}
