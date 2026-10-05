const files = import.meta.glob<string>('../assets/creators/*.webp', { eager: true, query: '?url', import: 'default' })

export const getPortrait = (id: string): string | undefined => files[`../assets/creators/${id}.webp`]
