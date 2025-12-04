import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import React, { ComponentProps } from 'react'

function CustomLink(props: ComponentProps<'a'>) {
  const href = props.href

  if (href && href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href && href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage({ alt, ...props }: ComponentProps<typeof Image>) {
  return <Image alt={alt || ''} {...props} className="rounded-lg" />
}

function slugify(str: string | React.ReactNode): string {
  return String(str)
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: React.ReactNode }) => {
    const slug = slugify(children)
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children,
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
}

export function CustomMDX({ source }: { source: string }) {
  return <MDXRemote source={source} components={components} />
}
