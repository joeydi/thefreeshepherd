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
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <Link
          key={index}
          href={card.link}
          className="group relative overflow-hidden rounded-fluid-xs shadow-lg hover:shadow-xl transition-shadow duration-300 inset-ring-1 inset-ring-white/10 bg-white/5"
        >
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl text-pretty font-semibold font-serif mb-2 group-hover:text-[#BDEFDA] transition-colors">
              {card.title}
            </h3>
            <p className="text-[#B5C0C4] text-pretty">{card.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
