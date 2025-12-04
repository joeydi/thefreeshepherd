import { cn } from '@/utils/cn'

export function GlowingButton({
  children = 'Submit',
  className,
  ...rest
}: React.ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      type="submit"
      className={cn('relative py-3 px-5 group cursor-pointer', className)}
      {...rest}
    >
      <span className="flex items-center justify-center gap-4 relative z-2 font-bold font-serif text-white">
        {children}
      </span>
      <div className="absolute z-1 inset-0 rounded-sm bg-linear-to-b from-white/50 to-white/20 backdrop-blur-md inset-ring-1 inset-ring-white/20" />
      {/* Outer glow layers */}
      <div className="absolute inset-0 scale-120 rounded-sm bg-[#5dede3]/30 blur-3xl animate-pulse" />
      <div
        className="absolute inset-0 scale-110 rounded-sm bg-[#5dede3]/20 blur-2xl animate-pulse"
        style={{ animationDelay: '1.33s' }}
      />
      <div
        className="absolute inset-0 scale-100 rounded-sm bg-[#5dede3]/50 blur-lg animate-pulse group-hover:bg-[#5dede3] transition-colors"
        style={{ animationDelay: '2.66s' }}
      />
    </button>
  )
}
