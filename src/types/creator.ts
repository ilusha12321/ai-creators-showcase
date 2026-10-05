export interface Post { caption: string; place: string; likes: string }
export interface ChatLine { from: 'user' | 'creator'; text: string }
export interface Creator {
  id: string
  name: string
  username: string
  gender: 'male' | 'female'
  category: string
  tagline: string
  bio: string
  followers: string
  online: boolean
  traits: string[]
  posts: Post[]
  chat: ChatLine[]
}
