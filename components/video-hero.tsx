import Image from "next/image"
import { AlphaVideo } from "./alpha-video"

export default function VideoHero() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <h1 className="text-2xl">The Free Shepard</h1>
      <Image src="/hero-bg.jpg" fill unoptimized alt="" />
      <AlphaVideo src="/hero-clip-1-alpha.mp4" />
    </div>
  )
}
