import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LoadingComponent from './LoadingComponent.vue'

describe('LoadingComponent', () => {
  it('renders correctly', () => {
    const wrapper = mount(LoadingComponent)
    expect(wrapper.classes()).toContain('loading')
  })

  it('accepts size prop', () => {
    const sizes = ['big', 'medium', 'small']
    sizes.forEach((size) => {
      const wrapper = mount(LoadingComponent, {
        props: { size }
      })
      expect(wrapper.find('.loading-spinner').classes()).toContain(size)
    })
  })
})
