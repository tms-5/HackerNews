import type { StoryHackerNews } from '@/types/tableHackerNews'

export default {
  getAllStories: (state: {
    stories: StoryHackerNews[] | undefined
  }): StoryHackerNews[] | undefined => state.stories,
  getFavorites: (state: { favorites: number[] }): number[] => state.favorites
}
