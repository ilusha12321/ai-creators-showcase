import { useCallback, useState } from 'react'
import type { Creator } from './types/creator'
import CreatorGrid from './components/CreatorGrid'
import CreatorModal from './components/CreatorModal'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'

export default function App() {
  const [active, setActive] = useState<Creator | null>(null)
  const close = useCallback(() => setActive(null), [])
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CreatorGrid onOpen={setActive} />
        <HowItWorks />
      </main>
      {active && <CreatorModal creator={active} onClose={close} />}
    </>
  )
}
