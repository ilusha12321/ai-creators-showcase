import { useState } from 'react'
import type { Creator } from '../types/creator'
import { getPortrait } from '../data/images'

const tint: Record<string, string> = { alex: '#2a3347', noah: '#26343a', mia: '#3a2b33', emma: '#2b3a31' }

interface Props { creator: Creator; className?: string; priority?: boolean }

export default function Portrait({ creator, className = '', priority }: Props) {
  const src = getPortrait(creator.id)
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ backgroundColor: tint[creator.id] }}>
      {src && !failed ? (
        <img
          src={src}
          alt={`AI portrait of ${creator.name}`}
          loading={priority ? 'eager' : 'lazy'}
          {...(priority ? { fetchPriority: 'high' as const } : {})}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover object-top transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      ) : (
        <span className="absolute inset-0 grid place-items-center text-6xl font-extrabold text-white/20">{creator.name[0]}</span>
      )}
    </div>
  )
}