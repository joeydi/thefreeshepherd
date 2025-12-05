import { notFound } from 'next/navigation'
import { formatDate, getBlogPost, getBlogPosts } from '@/utils/blog'
import { CustomMDX } from '@/components/mdx'
import Image from 'next/image'
import { BlurUp } from '@/components/blur-up'
import Container from '@/components/container'
// import { baseUrl } from 'app/sitemap'

export async function generateStaticParams() {
  const posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return
  }

  const { title, date: publishedTime, description, thumbnail } = post.metadata
  // const ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `/updates/${post.slug}`,
      images: [
        {
          url: thumbnail,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [thumbnail],
    },
  }
}

export default async function Blog({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="py-xl h-screen min-h-fit">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.date,
            dateModified: post.metadata.date,
            description: post.metadata.description,
            image: post.metadata.thumbnail,
            url: `/updates/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <Container className="flex flex-col items-center text-[#BCC8C6]">
        <div className="mb-8 w-full max-w-6xl">
          <p className="mb-2 text-[#85998F]">{formatDate(post.metadata.date)}</p>
          <h1 className="mb-4 font-serif text-2xl font-semibold tracking-tight text-white">
            {post.metadata.title}
          </h1>
          <p className="text-lg text-balance">{post.metadata.description}</p>
        </div>
        {post.metadata.thumbnail && (
          <BlurUp className="relative aspect-video w-full max-w-7xl lg:col-span-2">
            <Image
              src={post.metadata.thumbnail}
              alt={post.metadata.title}
              fill
              unoptimized
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="rounded-fluid-xs object-cover"
            />
          </BlurUp>
        )}
        <div className="mt-16 w-full max-w-6xl">
          <CustomMDX source={post.content} />
        </div>
      </Container>
    </main>
  )
}
