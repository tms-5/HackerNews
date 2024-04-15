export interface State {
  stories?: StoryHackerNews[]
  favorites: number[]
}

export interface StoryHackerNews {
  position: number
  by: string
  descendants: number
  id: number
  kids: number[]
  score: number
  url: string
  time: number
  title: string
  type: string
}
