export default function Footer() {
  return (
    <footer className="bg-[#282B2A] relative z-2 py-8 px-16 flex flex-col gap-8 md:flex-row justify-between text-[#B5C0C4] font-medium">
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
