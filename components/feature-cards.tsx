import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

export interface FeatureCard {
  title: string
  description: string
  image: string | StaticImageData
  link: string
}

interface FeatureCardsProps {
  cards: FeatureCard[]
}

export function FeatureCards({ cards }: FeatureCardsProps) {
  return (
    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, index) => (
        <Link key={index} href={card.link} className="group">
          <div className="rounded-fluid-xs relative aspect-video w-full overflow-hidden shadow-lg transition-shadow group-hover:shadow-xl">
            <Image
              src={card.image}
              alt={card.title}
              fill
              unoptimized
              className="bg-white/5 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="rounded-fluid-xs absolute inset-0 inset-ring-1 inset-ring-white/10"></div>
          </div>
          <div className="p-4">
            <h3 className="mb-2 font-serif text-lg font-semibold text-pretty transition-colors group-hover:text-[#BDEFDA]">
              {card.title}
            </h3>
            <p className="text-pretty text-[#BCC8C6]">{card.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
