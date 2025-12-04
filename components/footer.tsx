export default function Footer() {
  return (
    <footer className="relative z-2 flex flex-col justify-between gap-8 bg-[#282B2A] px-16 py-8 font-medium text-[#BCC8C6] md:flex-row">
      <span className="lg:w-[35%]">
        &copy; {new Date().getFullYear()}{' '}
        <a href="https://frameinteractive.com/" target="_blank">
          Frame Interactive Studio LLC
        </a>
      </span>
      <a
        className="lg:w-[30%] lg:text-center"
        href="https://frameinteractive.com/privacy"
        target="_blank"
      >
        Privacy Policy
      </a>
      <a className="lg:w-[35%] lg:text-right" href="https://simplecreature.us" target="_blank">
        Website by Simple Creature
      </a>
    </footer>
  )
}
