import React from 'react'
import Header from '@/components/header'
import VideoHero from '@/components/video-hero'
import VideoScrollMatteSnap from '@/components/video-scroll-matte-snap'

export default async function Matte() {
  return (
    <main className="bg-[#282B2A] text-white">
      {/* <Header /> */}
      <VideoHero />
      <VideoScrollMatteSnap />
      <div className="h-screen"></div>
      <div className="bg-[#282B2A] relative z-1 h-screen flex items-center justify-center">
        <h1 className="text-2xl">Trailer</h1>
      </div>
    </main>
  )
}
