import { cn } from '@/utils/cn'

export default function Container({ className, ...rest }: React.ComponentProps<'div'>) {
  return <div className={cn('px-sm max-w-9xl mx-auto', className)} {...rest} />
}
