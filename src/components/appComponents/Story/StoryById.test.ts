import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import StoryView from './StoryById.vue'

vi.mock('@/services/hackersNews.service', () => ({
  default: {
    getInstance: () => ({
      findStoryById: vi.fn().mockReturnValue({
        title: 'Test Story',
        by: 'author',
        score: 10,
        url: 'test-url',
        id: 1,
        position: 1
      })
    })
  }
}))

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/story/:id', component: StoryView }]
})

vi.spyOn(router, 'go')

describe('StoryView', () => {
  it('loads and displays the story data', async () => {
    router.push('/story/1')
    await router.isReady()

    const wrapper = mount(StoryView, {
      global: {
        plugins: [router]
      }
    })

    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toContain('Test Story')
    expect(wrapper.text()).toContain('author')
    expect(wrapper.text()).toContain('10')
  })

  it('navigates to home on button click', async () => {
    const wrapper = mount(StoryView, {
      global: {
        plugins: [router]
      }
    })
    await wrapper.vm.$nextTick()

    const backButton = wrapper.findComponent({ name: 'ButtonComponent' })
    await backButton.trigger('click')

    expect(router.go).toHaveBeenCalledWith(-1)
  })
})
