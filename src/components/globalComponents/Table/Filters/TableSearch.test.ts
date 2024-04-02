import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TableSearch from './TableSearch.vue'
import SelectComponent from '@/components/globalComponents/Select/SelectComponent.vue'
import { TableColSize } from '@/types/enum'

describe('TableSearch', () => {
  const headers = [
    { key: 'name', label: 'Name', sortable: true, size: TableColSize.SMALL },
    { key: 'age', label: 'Age', sortable: true, size: TableColSize.SMALL }
  ]

  it('renders correctly with default props', () => {
    const wrapper = mount(TableSearch, {
      props: { headers }
    })

    expect(wrapper.findComponent(SelectComponent).exists()).toBe(true)
    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('emits update:value when the search text changes', async () => {
    const wrapper = mount(TableSearch, {
      props: { headers }
    })

    const input = wrapper.find('input')
    await input.setValue('test')
    expect(wrapper.emitted()['update:value']).toBeTruthy()
    expect(wrapper.emitted()['update:value'][0][0]).toEqual({ key: '', text: 'test' })
  })

  it('updates selectedHeader when an option is selected', async () => {
    const wrapper = mount(TableSearch, {
      props: { headers }
    })

    await wrapper.vm.changeHeader('age')
    expect(wrapper.vm.selectedHeader).toBe('age')
  })
})
