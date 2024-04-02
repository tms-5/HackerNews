import type { StoryHackerNews } from '@/types/tableHackerNews'

export default {
  ADD_FAVORITES(state: { favorites: number[] }, payload: number) {
    state.favorites.push(payload)
  },
  REMOVE_FAVORITES(state: { favorites: number[] }, payload: number) {
    const index = state.favorites.findIndex((fav) => fav === payload)
    if (index !== -1) {
      state.favorites.splice(index, 1)
    }
  },

  SET_STORIES(state: { stories: StoryHackerNews[] | undefined }, payload: StoryHackerNews[]) {
    state.stories = payload
  }
}
