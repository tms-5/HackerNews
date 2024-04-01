import { test, expect } from '@playwright/test'
import { mount } from '@vue/test-utils'
import Vuex from 'vuex'
import MyComponent from '@/path/to/MyComponent.vue'
import type { StoryHackerNews } from '@/types/tableHackerNews'

test.describe('MyComponent tests', () => {
  let actions: any
  let state: any
  let store: any

  test.beforeEach(() => {
    actions = {
      // Defina suas ações aqui se necessário
    }
    state = {
      hackerNews: {
        getAllStories: [
          { id: 1, title: 'Story 1' },
          { id: 2, title: 'Story 2' }
        ] as StoryHackerNews[]
      }
    }
    store = new Vuex.Store({
      state,
      actions,
      getters: {
        'hackerNews/getAllStories': (state: { hackerNews: { getAllStories: any } }) =>
          state.hackerNews.getAllStories
      }
    })
  })

  test('should render rows correctly and emit change-number event', async () => {
    const wrapper = mount(MyComponent, {
      global: {
        plugins: [store]
      }
    })

    const rows = wrapper.vm.rows
    expect(rows).toHaveLength(2)
    expect(wrapper.emitted()['change-number']).toBeTruthy()
    expect(wrapper.emitted()['change-number'][0]).toEqual([2])
  })
})
