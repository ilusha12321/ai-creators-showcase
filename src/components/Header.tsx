import { Send, Sparkles } from 'lucide-react'
import { TELEGRAM_URL } from '../config'

const links = [{ href: '#creators', label: 'Creators' }, { href: '#how', label: 'How it works' }]

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2 text-sm font-bold tracking-tight">
          <Sparkles size={18} className="text-accent" /> Persona
        </a>
        <nav className="hidden items-center gap-8 text-sm text-mute md:flex">
          {links.map((l) => <a key={l.href} href={l.href} className="transition hover:text-white">{l.label}</a>)}
        </nav>
        <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center gap-2 rounded-lg bg-zinc-100 px-3.5 text-sm font-semibold text-ink transition hover:bg-white active:scale-[.98]">
          <Send size={15} />
          <span className="hidden min-[380px]:inline">Перейти в Telegram</span>
          <span className="min-[380px]:hidden">Telegram</span>
        </a>
      </div>
    </header>
  )
}
