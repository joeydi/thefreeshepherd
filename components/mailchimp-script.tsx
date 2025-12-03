import { GlowingButton } from './glowing-button'

export default function MailchimpScript() {
  return (
    <div id="mc_embed_signup">
      <form
        action="https://simplecreature.us19.list-manage.com/subscribe/post?u=db1c68bdd53204aa0be63b09b&amp;id=9e4f67d1dc&amp;f_id=002136e7f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="p-8 rounded-fluid-xs flex flex-col gap-4 inset-ring-1 inset-ring-white/10 bg-white/10"
        target="_blank"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="mce-EMAIL" className="font-serif font-light">
            Email Address
          </label>
          <input
            type="email"
            name="EMAIL"
            className="bg-white/10 inset-ring-1 inset-ring-white/5 rounded-sm py-2 px-4"
            id="mce-EMAIL"
            required
            defaultValue=""
          />
        </div>
        <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
          <input
            type="text"
            name="b_db1c68bdd53204aa0be63b09b_9e4f67d1dc"
            tabIndex={-1}
            defaultValue=""
          />
        </div>

        <GlowingButton
          type="submit"
          name="subscribe"
          id="mc-embedded-subscribe"
          value="Subscribe"
          className="relative p-3 mt-2 group cursor-pointer"
        >
          Subscribe
        </GlowingButton>
      </form>
    </div>
  )
}
