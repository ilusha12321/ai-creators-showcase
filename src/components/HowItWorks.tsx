import { MessagesSquare, Send, UserRound } from 'lucide-react'
import Button from './Button'
import { TELEGRAM_URL } from '../config'
import { creators } from '../data/creators'

const steps = [
  { icon: UserRound, title: 'Choose a character', text: `Browse ${creators.length} AI personalities, each with their own style and topics.` },
  { icon: MessagesSquare, title: 'See their world', text: 'Read posts and preview a conversation before you commit.' },
  { icon: Send, title: 'Continue in Telegram', text: 'Open the bot and keep talking in your own private chat.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">How it works</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }) => (
            <li key={title} className="rounded-xl border border-line bg-panel p-5">
              <Icon size={20} className="text-accent" />
              <h3 className="mt-4 font-bold">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-mute">{text}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10"><Button href={TELEGRAM_URL} variant="accent" className="w-full md:w-auto"><Send size={16} /> Open Telegram</Button></div>
      </div>
      <footer className="border-t border-line py-6 text-center text-xs text-mute">All characters are AI-generated virtual personalities.</footer>
    </section>
  )
}