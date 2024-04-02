import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import TableHeader from './TableHeader.vue'
import { TableColSize } from '@/types/enum'

describe('TableHeader', () => {
  const headers = [
    { key: 'name', label: 'Name', sortable: true, size: TableColSize.LARGE },
    { key: 'age', label: 'Age', sortable: false, size: TableColSize.MEDIUM }
  ]
  const sortState = { key: 'name', order: 1 }
  const toggleSort = vi.fn()

  it('renders all headers correctly', () => {
    const wrapper = mount(TableHeader, {
      props: { headers, toggleSort, sortState }
    })

    const headerElements = wrapper.findAll('.data-table-col')
    expect(headerElements).toHaveLength(headers.length)
    expect(headerElements[0].text()).toContain('Name')
    expect(headerElements[1].text()).toContain('Age')
  })

  it('applies active-sortable class based on sortState', async () => {
    const wrapper = mount(TableHeader, {
      props: { headers, toggleSort, sortState }
    })

    const firstHeader = wrapper.findAll('.data-table-col')[0]
    await firstHeader.trigger('click')
    const spanInFirstHeader = firstHeader.find('span')
    expect(spanInFirstHeader.classes()).toContain('active-sortable')
  })

  it('displays the correct sort symbol', () => {
    const wrapper = mount(TableHeader, {
      props: { headers, toggleSort, sortState }
    })

    const firstHeader = wrapper.findAll('.table-header-sortable')[0]
    expect(firstHeader.text()).toBe('↑')
  })

  it('calls toggleSort on sortable header click', async () => {
    const wrapper = mount(TableHeader, {
      props: { headers, toggleSort, sortState }
    })

    const firstHeader = wrapper.findAll('.data-table-col')[0]
    await firstHeader.trigger('click')
    expect(toggleSort).toHaveBeenCalled()
  })
})
