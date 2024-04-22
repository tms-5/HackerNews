import type { State, StoryHackerNews } from '@/types/tableHackerNews'

export default {
  addToFavorites({ commit, state }: { commit: Function; state: State }, storyId: number) {
    if (!state.favorites.includes(storyId)) {
      commit('ADD_FAVORITES', storyId)
    }
  },
  removeFromFavorites({ commit, state }: { commit: Function; state: State }, storyId: number) {
    if (state.favorites.includes(storyId)) {
      commit('REMOVE_FAVORITES', storyId)
    }
  },

  setStories({ commit }: { commit: Function }, stories: StoryHackerNews[]) {
    commit('SET_STORIES', stories)
  }
}
