import { ArrowDown, Send } from 'lucide-react'
import Button from './Button'
import Portrait from './Portrait'
import { TELEGRAM_URL } from '../config'
import { creators } from '../data/creators'

export default function Hero() {
  return (
    <section id="discover" className="relative mx-auto max-w-6xl px-4 pb-12 pt-10 md:px-6 md:pb-20 md:pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(169,184,255,.10),transparent)]" />
      <div className="grid items-center gap-10 md:grid-cols-[1.1fr_1fr]">
        <div className="animate-rise">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs text-mute">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> AI companions
          </p>
          <h1 className="text-[2.25rem] font-extrabold leading-[1.08] tracking-tight min-[400px]:text-5xl md:text-6xl">
            Meet characters you'll want to talk to.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-mute md:text-lg">
            Discover unique AI personalities, start a conversation and find your perfect companion.
          </p>
          <div className="mt-8 flex flex-col gap-3 min-[480px]:flex-row">
            <Button href="#creators" variant="accent"><ArrowDown size={16} /> Explore characters</Button>
            <Button href={TELEGRAM_URL} variant="secondary"><Send size={16} /> Open Telegram</Button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 md:grid-cols-2 md:gap-3" aria-hidden>
          {creators.map((c, i) => (
            <Portrait
              key={c.id}
              creator={c}
              priority
              className={`aspect-[3/5] animate-rise rounded-lg border border-line md:aspect-[4/5] ${i % 2 ? 'md:translate-y-6' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}