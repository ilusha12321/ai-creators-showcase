import { Heart, MapPin } from 'lucide-react'
import type { Post } from '../types/creator'

export default function PostPreview({ post }: { post: Post }) {
  return (
    <li className="rounded-lg border border-line bg-ink/40 p-4">
      <p className="text-sm leading-relaxed text-zinc-200">{post.caption}</p>
      <div className="mt-3 flex items-center justify-between text-xs text-mute">
        <span className="inline-flex items-center gap-1"><MapPin size={13} />{post.place}</span>
        <span className="inline-flex items-center gap-1"><Heart size={13} />{post.likes}</span>
      </div>
    </li>
  )
}
