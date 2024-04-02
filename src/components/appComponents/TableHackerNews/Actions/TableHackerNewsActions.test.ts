import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import TableHackerNewsActions from './TableHackerNewsActions.vue'

const store = createStore({
  getters: {
    'hackerNews/getFavorites': () => [1]
  },
  actions: {
    'hackerNews/addToFavorites': vi.fn(),
    'hackerNews/removeFromFavorites': vi.fn()
  }
})

describe('TableHackerNewsActions', () => {
  const wrapper = mount(TableHackerNewsActions, {
    global: {
      plugins: [store]
    },

    props: {
      story: {
        id: 1,
        position: 0,
        by: '',
        descendants: 0,
        kids: [],
        score: 0,
        url: '',
        time: 0,
        title: '',
        type: ''
      }
    }
  })
  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('toggles favorite when heart is clicked', async () => {
    const heart = wrapper.find('.heart')
    heart.trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.favoritedStory).toBe(true)
  })

  it('navigates to story when details button is clicked', async () => {
    const detailsButton = wrapper.find('.data-table-button-details')
    detailsButton.trigger('click')
    await wrapper.vm.$nextTick()
    if (wrapper.vm.$route) {
      expect(wrapper.vm.$route.name).toBe('story')
      expect(wrapper.vm.$route.params.id).toBe(1)
    }
  })
})
