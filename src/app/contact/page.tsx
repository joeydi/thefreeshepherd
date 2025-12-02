export default async function Contact() {
  return (
    <main className="bg-[#282B2A] text-white">
      <div className="bg-[#282B2A] relative z-1 h-screen flex flex-col gap-8 items-center justify-center">
        <h1 className="text-2xl font-serif">Get in touch</h1>
        <form
          action="https://formspree.io/f/mwpgbrwp"
          method="POST"
          className="w-xl p-8 rounded-lg flex flex-col gap-4 inset-ring-1 inset-ring-white/10 bg-white/10"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-serif font-light">
              Your email
            </label>
            <input
              className="bg-white/10 inset-ring-1 inset-ring-white/5 rounded-sm py-2 px-4"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-serif font-light">
              Your message
            </label>
            <textarea
              className="bg-white/10 inset-ring-1 inset-ring-white/5 rounded-sm py-2 px-4"
              name="message"
              id="message"
              rows={4}
            ></textarea>
          </div>
          <button type="submit" className="relative p-3 mt-2 group cursor-pointer">
            <span className="block relative z-2">Send</span>
            <div className="absolute z-1 inset-0 rounded-sm bg-linear-to-b from-white/50 to-white/20 backdrop-blur-md inset-ring-1 inset-ring-white/20" />
            {/* Outer glow layers */}
            <div className="absolute inset-0 scale-120 rounded-sm bg-[#5dede3]/30 blur-3xl animate-pulse" />
            <div
              className="absolute inset-0 scale-110 rounded-sm bg-[#5dede3]/20 blur-2xl animate-pulse"
              style={{ animationDelay: '1.33s' }}
            />
            <div
              className="absolute inset-0 scale-100 rounded-sm bg-[#5dede3]/10 blur-lg animate-pulse group-hover:bg-[#5dede3]/50 transition-colors"
              style={{ animationDelay: '2.66s' }}
            />
          </button>
        </form>
      </div>
    </main>
  )
}
