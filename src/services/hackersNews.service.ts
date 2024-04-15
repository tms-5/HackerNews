import type { State } from '@/types/tableHackerNews'
import ServicesAPI from './api.service'
import { Store } from 'vuex'
import type { StoryHackerNews } from '@/types/tableHackerNews'

class HackersNews extends ServicesAPI {
  private static instance: HackersNews
  private static store: Store<State>
  private static active_page: 'stories' | 'favorites' = 'stories'

  private constructor() {
    super()
  }

  static getInstance(store?: Store<State>): HackersNews {
    if (store) {
      HackersNews.store = store
    }
    if (!HackersNews.instance && HackersNews.store) {
      HackersNews.instance = new HackersNews()
    } else if (!HackersNews.store) {
      throw new Error('HackersNews requires a Vuex store')
    }
    return HackersNews.instance
  }

  static initialize(store: Store<State>) {
    HackersNews.store = store
    store.dispatch('hackerNews/fetchTopStories')
  }

  set activePage(page: 'stories' | 'favorites') {
    HackersNews.active_page = page
  }

  get activePage() {
    return HackersNews.active_page
  }

  getTopStories = async () => {
    const { data } = await this.get(`/topstories.json`)
    const stories = data.slice(0, 100)
    return await Promise.all(stories.map(this.getStoryById))
  }

  getStoryById = async (id: number) => {
    const { data } = await this.get(`/item/${id}.json`)
    return data
  }

  addToFavorites(storyId: number) {
    HackersNews.store.dispatch('hackerNews/addToFavorites', storyId)
  }

  removeFromFavorites(storyId: number) {
    HackersNews.store.dispatch('hackerNews/removeFromFavorites', storyId)
  }

  findStoryById(storyId: number): StoryHackerNews | undefined {
    const allStories = HackersNews.store.getters['hackerNews/getAllStories']
    if (!allStories) {
      return
    }

    return allStories.find((s: StoryHackerNews) => s.id === storyId)
  }
}

export default HackersNews
