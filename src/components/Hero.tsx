import { ArrowDown, Send } from 'lucide-react'
import Button from './Button'
import Portrait from './Portrait'
import { TELEGRAM_URL } from '../config'
import { creators } from '../data/creators'

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-14 pt-10 md:px-6 md:pb-24 md:pt-20">
      <div className="grid items-center gap-10 md:grid-cols-[1.1fr_1fr]">
        <div className="animate-rise">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs text-mute">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> AI creators online now
          </p>
          <h1 className="text-[2.5rem] font-extrabold leading-[1.05] tracking-tight min-[400px]:text-5xl md:text-6xl">Meet your AI creators</h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-mute md:text-lg">
            Get to know virtual bloggers, open their personal spaces and keep the conversation going in Telegram.
          </p>
          <div className="mt-8 flex flex-col gap-3 min-[480px]:flex-row">
            <Button href={TELEGRAM_URL}><Send size={16} /> Перейти в Telegram</Button>
            <Button href="#creators" variant="secondary"><ArrowDown size={16} /> Explore creators</Button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 md:grid-cols-2 md:gap-3" aria-hidden>
          {creators.map((c, i) => (
            <Portrait key={c.id} creator={c} className={`aspect-[3/5] animate-rise rounded-md border border-line md:aspect-[4/5] ${i % 2 ? 'md:translate-y-6' : ''}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
