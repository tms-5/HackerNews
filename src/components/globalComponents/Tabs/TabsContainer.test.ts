import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TabsContainer from './TabsContainer.vue'
import SubTab from './SubTab/SubTab.vue'

describe('TabsContainer', () => {
  const tabs = [
    { label: 'Tab 1', name: 'tab1', component: {} },
    { label: 'Tab 2', name: 'tab2', component: {} }
  ]

  it('renders with the first tab selected by default', () => {
    const wrapper = mount(TabsContainer, {
      props: { tabs }
    })

    const firstTab = wrapper.findAllComponents(SubTab)[0]
    expect(firstTab.props('isActive')).toBe(true)
  })

  it('changes selected tab on click', async () => {
    const wrapper = mount(TabsContainer, {
      props: { tabs }
    })

    const secondTab = wrapper.findAllComponents(SubTab)[1]
    await secondTab.vm.click(1)

    expect(wrapper.vm.selectedTab).toBe(1)
    expect(secondTab.props('isActive')).toBe(true)
  })
})
