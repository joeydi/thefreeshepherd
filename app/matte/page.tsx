import React from 'react'
import VideoHero from '@/components/video-hero'
import VideoScrollMatte from '@/components/video-scroll-matte'

export default async function Matte() {
  return (
    <main>
      <VideoHero />
      <VideoScrollMatte />
      <div className="h-screen"></div>
      <div className="relative z-1 bg-white h-screen flex items-center justify-center">
        <h1 className="text-2xl">Trailer</h1>
      </div>
    </main>
  )
}
