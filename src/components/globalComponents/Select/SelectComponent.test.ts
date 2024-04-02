import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SelectComponent from './SelectComponent.vue'

describe('SelectComponent', () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
  ]

  it('renders the placeholder when no value is selected', () => {
    const wrapper = mount(SelectComponent, {
      props: { options }
    })
    expect(wrapper.text()).toContain('Select an option')
  })

  it('toggles the options list on click', async () => {
    const wrapper = mount(SelectComponent, {
      props: { options }
    })
    await wrapper.find('.select-input').trigger('click')
    expect(wrapper.vm.showOptions).toBe(true)
  })

  it('updates the selected value and label when an option is clicked', async () => {
    const wrapper = mount(SelectComponent, {
      props: { options }
    })
    await wrapper.find('.select-input').trigger('click')
    await wrapper.findAll('.select-option')[1].trigger('click') // Select 'Option 2'
    expect(wrapper.vm.selectedValue).toBe('2')
    expect(wrapper.text()).toContain('Option 2')
    expect(wrapper.emitted()).toHaveProperty('onChange')
    expect(wrapper.emitted().onChange[0]).toEqual(['2'])
  })
})
