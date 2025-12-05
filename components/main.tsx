import { cn } from '@/utils/cn'

export default function Main({ className, ...rest }: React.ComponentProps<'main'>) {
  return <main className={cn('py-xl h-screen min-h-fit', className)} {...rest} />
}
