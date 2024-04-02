import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TableRow from './TableRow.vue'
import { TableColSize } from '@/types/enum'
import ButtonComponent from '../../Button/ButtonComponent.vue'

describe('TableRow', () => {
  const headers = [
    { key: 'name', label: 'Name', sortable: false, size: TableColSize.MEDIUM },
    { key: 'action', label: 'Action', sortable: false, size: TableColSize.MEDIUM }
  ]
  const row = {
    name: 'John Doe',
    action: { component: ButtonComponent, props: { buttonLabel: 'Click me' } }
  }

  it('renders row data as text', () => {
    const wrapper = mount(TableRow, {
      props: {
        row: { name: 'John Doe' },
        headers: [{ key: 'name', label: 'Name', sortable: false, size: TableColSize.MEDIUM }]
      }
    })

    const cell = wrapper.find('.data-table-col span')
    expect(cell.text()).toBe('John Doe')
  })

  it('renders row data as component', () => {
    const wrapper = mount(TableRow, {
      props: { row, headers }
    })

    const customComponent = wrapper.findComponent(ButtonComponent)
    expect(customComponent.exists()).toBe(true)
    expect(customComponent.text()).toBe('Click me')
  })
})
