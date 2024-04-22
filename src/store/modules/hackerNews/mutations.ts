import type { State, StoryHackerNews } from '@/types/tableHackerNews'

export default {
  ADD_FAVORITES(state: State, payload: number) {
    state.favorites.push(payload)
  },

  REMOVE_FAVORITES(state: State, payload: number) {
    const index = state.favorites.findIndex((fav) => fav === payload)
    if (index !== -1) {
      state.favorites.splice(index, 1)
    }
  },

  SET_STORIES(state: State, payload: StoryHackerNews[]) {
    state.stories = payload
  }
}
