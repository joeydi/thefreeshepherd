import Container from './container'

export default function Footer() {
  return (
    <footer>
      <Container className="gap-2xs py-md flex flex-col items-center justify-between font-medium text-[#BCC8C6] md:flex-row">
        <span className="lg:w-[35%]">
          <a href="https://frameinteractive.com/" target="_blank">
            &copy; {new Date().getFullYear()} Frame Interactive Studio LLC
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
      </Container>
    </footer>
  )
}
