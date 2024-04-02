import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import TableHackerNews from './TableHackerNews.vue'

const storiesMock = [
  { id: 1, title: 'Story 1', position: 1, by: 'author' },
  { id: 2, title: 'Story 2', position: 2, by: 'author' }
]

const store = createStore({
  state: {},
  getters: {
    'hackerNews/getAllStories': () => storiesMock,
    'hackerNews/getFavorites': () => [1, 2]
  }
})

describe('TableHackerNews', () => {
  it('computes rows and emits change-number event', async () => {
    const wrapper = mount(TableHackerNews, {
      global: {
        plugins: [store]
      }
    })

    await wrapper.vm.$nextTick()

    expect(wrapper.vm.rows).toHaveLength(storiesMock.length)
    expect(wrapper.vm.rows[0].position).toBe(1)
    expect(wrapper.vm.rows[1].position).toBe(2)
  })
})
