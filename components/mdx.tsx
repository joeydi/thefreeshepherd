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
      className="text-fluid-lg *:text-fluid-lg my-8 border-l-4 border-l-[#54605B] pl-4 text-white first:mt-0"
      {...props}
    />
  )
}

function Heading1(props: ComponentProps<'h1'>) {
  return <h1 className="text-fluid-2xl mt-8 mb-4 font-serif text-white first:mt-0" {...props} />
}

function Heading2(props: ComponentProps<'h2'>) {
  return <h2 className="text-fluid-xl mt-8 mb-4 font-serif text-white first:mt-0" {...props} />
}

function Heading3(props: ComponentProps<'h3'>) {
  return <h3 className="text-fluid-lg mt-8 mb-4 font-serif text-white first:mt-0" {...props} />
}

function Heading4(props: ComponentProps<'h4'>) {
  return <h4 className="text-fluid-md mt-8 mb-4 font-serif text-white first:mt-0" {...props} />
}

function Heading5(props: ComponentProps<'h5'>) {
  return <h5 className="text-fluid-md mt-8 mb-4 font-serif text-white first:mt-0" {...props} />
}

function Heading6(props: ComponentProps<'h6'>) {
  return <h6 className="text-fluid-md mt-8 mb-4 font-serif text-white first:mt-0" {...props} />
}

function HorizontalRule(props: ComponentProps<'hr'>) {
  return <hr className="mx-auto my-12 w-[50%] border-t border-[#54605B]" {...props} />
}

function StandardImage({ alt, ...props }: ComponentProps<'img'>) {
  return <img className="rounded-fluid-xs" alt={alt || ''} {...props} />
}

function NextImage({ alt, ...props }: ComponentProps<typeof Image>) {
  return <Image className="rounded-fluid-xs" alt={alt || ''} {...props} />
}

function OrderedList(props: ComponentProps<'ol'>) {
  return <ol className="mb-4 list-decimal pl-5" {...props} />
}

function Paragraph(props: ComponentProps<'p'>) {
  return <p className="text-fluid-md mb-4" {...props} />
}

function Preformatted(props: ComponentProps<'pre'>) {
  return <pre className="mb-4 font-serif text-base first:mt-0" {...props} />
}

function UnorderedList(props: ComponentProps<'ul'>) {
  return <ul className="mb-4 list-disc pl-5" {...props} />
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
