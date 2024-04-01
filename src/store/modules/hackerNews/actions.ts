import HackersNews from '@/services/hackersNews.service'

export default {
  addToFavorites({ commit, state }: { commit: Function; state: any }, storyId: number) {
    if (!state.favorites.includes(storyId)) {
      commit('ADD_FAVORITES', storyId)
    }
  },
  removeFromFavorites({ commit, state }: { commit: Function; state: any }, storyId: number) {
    if (state.favorites.includes(storyId)) {
      commit('REMOVE_FAVORITES', storyId)
    }
  },

  async fetchTopStories({ commit }: { commit: Function }) {
    const hackersNews = HackersNews.getInstance()
    const stories = await hackersNews.getTopStories()
    const storiesWithIndex = stories.map((story: any, index) => {
      return { ...story, position: index + 1 }
    })
    commit('SET_STORIES', storiesWithIndex)
  }
}
