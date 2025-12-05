import React from 'react'
import VideoHero from '@/components/video-hero'
import VideoScrollForward from '@/components/video-scroll-forward'
import Main from '@/components/main'

export default async function Forward() {
  return (
    <Main>
      <VideoHero />
      <VideoScrollForward />
      <div className="h-screen"></div>
      <div className="relative z-1 flex h-screen items-center justify-center bg-white">
        <h1 className="text-2xl">Trailer</h1>
      </div>
    </Main>
  )
}
