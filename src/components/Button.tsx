import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary'
interface Props { href?: string; onClick?: () => void; variant?: Variant; children: ReactNode; className?: string; full?: boolean }

const styles: Record<Variant, string> = {
  primary: 'bg-zinc-100 text-ink hover:bg-white',
  secondary: 'border border-line text-zinc-100 hover:bg-white/5',
}

export default function Button({ href, onClick, variant = 'primary', children, className = '', full }: Props) {
  const cls = `inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition active:scale-[.98] ${styles[variant]} ${full ? 'w-full' : ''} ${className}`
  return href ? (
    <a href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className={cls}>{children}</a>
  ) : (
    <button type="button" onClick={onClick} className={cls}>{children}</button>
  )
}
