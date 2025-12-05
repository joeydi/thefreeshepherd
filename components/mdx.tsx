import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { ComponentProps } from 'react'
import { cn } from '@/utils/cn'

function Anchor({ href, className, children, ...rest }: ComponentProps<'a'>) {
  const defaultClass = 'text-[#BDEFDA] underline'

  if (href && href.startsWith('/')) {
    return (
      <Link className={cn(defaultClass, className)} href={href} {...rest}>
        {children}
      </Link>
    )
  }

  if (href && href.startsWith('#')) {
    return (
      <a className={cn(defaultClass, className)} href={href} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={cn(defaultClass, className)}
      href={href}
      {...rest}
    >
      {children}
    </a>
  )
}

function Blockquote(props: ComponentProps<'blockquote'>) {
  return (
    <blockquote
      className="pl-xs my-8 bg-linear-to-b from-[#54605B] to-[#54605B]/40 bg-size-[2px] bg-no-repeat text-lg text-white *:text-lg first:mt-0"
      {...props}
    />
  )
}

function Heading1(props: ComponentProps<'h1'>) {
  return <h1 className="mb-2xs mt-sm font-serif text-2xl text-white first:mt-0" {...props} />
}

function Heading2(props: ComponentProps<'h2'>) {
  return <h2 className="mb-2xs mt-sm font-serif text-xl text-white first:mt-0" {...props} />
}

function Heading3(props: ComponentProps<'h3'>) {
  return <h3 className="mb-2xs mt-sm font-serif text-lg text-white first:mt-0" {...props} />
}

function Heading4(props: ComponentProps<'h4'>) {
  return <h4 className="mb-2xs mt-sm font-serif text-white first:mt-0" {...props} />
}

function Heading5(props: ComponentProps<'h5'>) {
  return <h5 className="mb-2xs mt-sm font-serif text-white first:mt-0" {...props} />
}

function Heading6(props: ComponentProps<'h6'>) {
  return <h6 className="mb-2xs mt-sm font-serif text-white first:mt-0" {...props} />
}

function HorizontalRule(props: ComponentProps<'hr'>) {
  return (
    <hr
      className="my-md mx-auto h-0.5 w-[50%] border-0 border-l border-[#54605B] bg-linear-to-r from-[#54605B] to-[#54605B]/40"
      {...props}
    />
  )
}

function StandardImage({ alt, ...props }: ComponentProps<'img'>) {
  return <img className="rounded-fluid-xs" alt={alt || ''} {...props} />
}

function NextImage({ alt, ...props }: ComponentProps<typeof Image>) {
  return <Image className="rounded-fluid-xs" alt={alt || ''} {...props} />
}

function OrderedList(props: ComponentProps<'ol'>) {
  return <ol className="mb-2xs list-decimal pl-5" {...props} />
}

function Paragraph(props: ComponentProps<'p'>) {
  return <p className="mb-2xs" {...props} />
}

function Preformatted(props: ComponentProps<'pre'>) {
  return <pre className="mb-2xs overflow-auto font-serif text-sm first:mt-0" {...props} />
}

function UnorderedList(props: ComponentProps<'ul'>) {
  return <ul className="mb-2xs list-disc pl-5" {...props} />
}

const components = {
  a: Anchor,
  blockquote: Blockquote,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  hr: HorizontalRule,
  img: StandardImage,
  Image: NextImage,
  ol: OrderedList,
  p: Paragraph,
  pre: Preformatted,
  ul: UnorderedList,
}

export function CustomMDX({ source }: { source: string }) {
  return <MDXRemote source={source} components={components} />
}
