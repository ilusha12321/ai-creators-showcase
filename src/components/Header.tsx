import { useState } from 'react'
import { Menu, Send, Sparkles, X } from 'lucide-react'
import { TELEGRAM_URL } from '../config'
import Button from './Button'

const links = [
  { href: '#discover', label: 'Discover' },
  { href: '#creators', label: 'Characters' },
  { href: '#how', label: 'How it works' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#discover" className="flex items-center gap-2 text-sm font-bold tracking-tight">
          <Sparkles size={18} className="text-accent" /> Persona
        </a>
        <nav className="hidden items-center gap-8 text-sm text-mute md:flex" aria-label="Main">
          {links.map((l) => <a key={l.href} href={l.href} className="transition hover:text-white">{l.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <Button href={TELEGRAM_URL} size="sm" className="hidden md:inline-flex"><Send size={15} /> Open Telegram</Button>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-lg transition hover:bg-white/5 md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="animate-fade border-t border-line bg-ink px-4 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center border-b border-line text-base text-zinc-200">{l.label}</a>
            ))}
          </nav>
          <Button href={TELEGRAM_URL} full className="mt-4"><Send size={16} /> Open Telegram</Button>
        </div>
      )}
    </header>
  )
}