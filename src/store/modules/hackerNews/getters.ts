import type { State, StoryHackerNews } from '@/types/tableHackerNews'

export default {
  getAllStories: (state: State): StoryHackerNews[] | undefined => state.stories,
  getFavorites: (state: State): number[] => state.favorites
}
