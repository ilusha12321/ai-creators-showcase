import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'accent'
interface Props { href?: string; onClick?: () => void; variant?: Variant; size?: 'md' | 'sm'; children: ReactNode; className?: string; full?: boolean }

const styles: Record<Variant, string> = {
  primary: 'bg-zinc-100 text-ink hover:bg-white',
  secondary: 'border border-line text-zinc-100 hover:bg-white/5',
  accent: 'bg-accent text-ink hover:brightness-110',
}
const sizes = { md: 'min-h-12 px-5', sm: 'min-h-10 px-3.5' }

export default function Button({ href, onClick, variant = 'primary', size = 'md', children, className = '', full }: Props) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold transition active:scale-[.98] ${sizes[size]} ${styles[variant]} ${full ? 'w-full' : ''} ${className}`
  return href ? (
    <a href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className={cls}>{children}</a>
  ) : (
    <button type="button" onClick={onClick} className={cls}>{children}</button>
  )
}