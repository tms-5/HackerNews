import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import SubTab from './SubTab.vue'

describe('SubTab', () => {
  const tab = {
    label: 'Test Tab',
    name: 'testTab',
    component: { template: '<div>Test Component</div>' }
  }
  const clickMock = vi.fn()
  const index = 0

  it('renders with correct data and active state', () => {
    const wrapper = mount(SubTab, {
      props: { tab, isActive: true, click: clickMock, index, label: tab.label }
    })

    expect(wrapper.text()).toContain('Test Tab')
    expect(wrapper.find('.tab-title').classes()).toContain('active')
  })

  it('calls click function when tab is clicked', async () => {
    const wrapper = mount(SubTab, {
      props: { tab, click: clickMock, index, label: tab.label }
    })

    await wrapper.find('.tab-title').trigger('click')
    expect(clickMock).toHaveBeenCalledTimes(1)
    expect(clickMock).toHaveBeenCalledWith(index)
  })

  it('updates elements number on change-number event', async () => {
    const wrapper = mount(SubTab, {
      props: { tab, click: clickMock, index, label: tab.label }
    })

    wrapper.vm.changeNumber(5)
    expect(wrapper.vm.elementsNumber).toBe(5)
  })
})
