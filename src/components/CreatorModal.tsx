import { useEffect } from 'react'
import { Send, X } from 'lucide-react'
import type { Creator } from '../types/creator'
import { TELEGRAM_URL } from '../config'
import Button from './Button'
import ChatPreview from './ChatPreview'
import PostPreview from './PostPreview'
import Portrait from './Portrait'

export default function CreatorModal({ creator, onClose }: { creator: Creator; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey) }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-40 flex items-end justify-center md:items-center md:p-6" role="dialog" aria-modal="true" aria-label={`${creator.name} profile`}>
      <div className="absolute inset-0 animate-fade bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative flex max-h-[92dvh] w-full animate-sheet flex-col overflow-hidden rounded-t-2xl border border-line bg-panel md:max-w-3xl md:rounded-xl">
        <button type="button" onClick={onClose} aria-label="Close" className="absolute right-3 top-3 z-10 grid h-11 w-11 place-items-center rounded-full bg-ink/70 backdrop-blur transition hover:bg-ink active:scale-95">
          <X size={20} />
        </button>
        <div className="flex-1 overflow-y-auto overscroll-contain">
          <div className="md:grid md:grid-cols-[2fr_3fr]">
            <Portrait creator={creator} className="aspect-[4/3] w-full md:aspect-auto md:h-full md:min-h-[28rem]" />
            <div className="space-y-6 p-5 md:p-6">
              <div>
                <h3 className="text-2xl font-extrabold">{creator.name}</h3>
                <p className="text-sm text-mute">{creator.username} · {creator.followers} followers</p>
                <p className="mt-2 w-fit rounded border border-line px-2 py-1 text-xs text-accent">{creator.category}</p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-300">{creator.bio}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {creator.traits.map((t) => <li key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300">{t}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="mb-3 text-sm font-bold">Latest posts</h4>
                <ul className="space-y-2.5">{creator.posts.map((p) => <PostPreview key={p.caption} post={p} />)}</ul>
              </div>
              <div>
                <h4 className="mb-3 text-sm font-bold">Chat with {creator.name}</h4>
                <ChatPreview lines={creator.chat} name={creator.name} />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-line bg-panel p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <Button href={TELEGRAM_URL} full><Send size={16} /> Continue in Telegram</Button>
        </div>
      </div>
    </div>
  )
}
