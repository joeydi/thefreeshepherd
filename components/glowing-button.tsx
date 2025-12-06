'use client'

import { cn } from '@/utils/cn'
import Particles from './particles'

interface GlowingButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  particles?: boolean
}

export function GlowingButton({
  particles = false,
  children = 'Submit',
  className,
  ...rest
}: GlowingButtonProps) {
  return (
    <button
      type="submit"
      className={cn('group relative cursor-pointer rounded-sm bg-[#666] px-6 py-3', className)}
      {...rest}
    >
      <span className="relative z-2 flex items-center justify-center gap-4 font-serif font-bold text-white">
        {children}
      </span>
      <div className="absolute inset-0 z-1 rounded-sm bg-linear-to-b from-white/50 to-white/20 inset-ring-1 inset-ring-white/20 backdrop-blur-md" />
      <div className="group-hover:duration:250 opacity-0 transition-opacity duration-1000 group-hover:opacity-100">
        {particles && <Particles />}
      </div>
      {/* Outer glow layers */}
      <div className="absolute inset-0 scale-y-120 animate-pulse rounded-sm bg-[#5dede3]/40 blur-xl" />
      <div
        className="absolute inset-0 scale-y-110 animate-pulse rounded-sm bg-[#5dede3]/30 blur-xl"
        style={{ animationDelay: '1.33s' }}
      />
      <div
        className="absolute inset-0 scale-y-100 animate-pulse rounded-sm bg-[#5dede3]/30 blur-xl transition-colors group-hover:bg-[#5dede3]"
        style={{ animationDelay: '2.66s' }}
      />
    </button>
  )
}
