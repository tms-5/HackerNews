import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ButtonComponent from './ButtonComponent.vue'

describe('ButtonComponent', () => {
  it('renders correctly', () => {
    const buttonLabel = 'Click me'
    const wrapper = mount(ButtonComponent, {
      props: { buttonLabel }
    })

    expect(wrapper.text()).toContain(buttonLabel)
    expect(wrapper.classes()).toContain('button-component')
  })

  it('click event', async () => {
    const onClick = vi.fn()
    const wrapper = mount(ButtonComponent, {
      props: { onClick }
    })

    await wrapper.trigger('click')
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
