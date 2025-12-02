import React from 'react'
import VideoHero from '@/components/video-hero'
import VideoScrollMatteSnap from '@/components/video-scroll-matte-snap'

export default async function Matte() {
  return (
    <main className="bg-[#65776C] text-white">
      <VideoHero />
      <VideoScrollMatteSnap />
      <div className="h-screen"></div>
      <div className="relative z-1 bg-white h-screen flex items-center justify-center">
        <h1 className="text-2xl text-black">Trailer</h1>
      </div>
    </main>
  )
}
