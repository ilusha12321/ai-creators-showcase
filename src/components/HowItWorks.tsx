import { MessagesSquare, Send, UserRound } from 'lucide-react'
import Button from './Button'
import { TELEGRAM_URL } from '../config'

const steps = [
  { icon: UserRound, title: 'Choose a creator', text: 'Browse four AI personalities with their own style and topics.' },
  { icon: MessagesSquare, title: 'See their world', text: 'Read posts and try a sample conversation before you commit.' },
  { icon: Send, title: 'Continue in Telegram', text: 'Open the bot and keep talking in your own private chat.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">How it works</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }) => (
            <li key={title} className="rounded-lg border border-line bg-panel p-5">
              <Icon size={20} className="text-accent" />
              <h3 className="mt-4 font-bold">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-mute">{text}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10"><Button href={TELEGRAM_URL} className="w-full md:w-auto"><Send size={16} /> Перейти в Telegram</Button></div>
      </div>
      <footer className="border-t border-line py-6 text-center text-xs text-mute">All creators are AI-generated virtual characters.</footer>
    </section>
  )
}
