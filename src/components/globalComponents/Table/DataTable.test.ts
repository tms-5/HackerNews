import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DataTable from './DataTable.vue'
import { TableColSize } from '@/types/enum'

describe('DataTable', () => {
  const headers = [
    { key: 'name', label: 'Name', sortable: true, size: TableColSize.MEDIUM },
    { key: 'age', label: 'Age', sortable: true, size: TableColSize.MEDIUM }
  ]
  const rows = [
    { name: 'John Doe', age: 30 },
    { name: 'Jane Doe', age: 25 }
  ]

  it('sorts rows based on sort state', async () => {
    const wrapper = mount(DataTable, {
      props: { headers, rows }
    })
    wrapper.vm.toggleSort('age')

    expect(wrapper.vm.sortedAndFilteredRows).toEqual([
      { name: 'Jane Doe', age: 25 },
      { name: 'John Doe', age: 30 }
    ])
    wrapper.vm.toggleSort('age')
    expect(wrapper.vm.sortedAndFilteredRows).toEqual([
      { name: 'John Doe', age: 30 },
      { name: 'Jane Doe', age: 25 }
    ])
  })

  it('filters rows based on search text', async () => {
    const wrapper = mount(DataTable, {
      props: { headers, rows }
    })
    wrapper.vm.handleSearch({ key: 'name', text: 'Jane' })

    expect(wrapper.vm.sortedAndFilteredRows).toHaveLength(1)
    expect(wrapper.vm.sortedAndFilteredRows![0]).toEqual({ name: 'Jane Doe', age: 25 })
  })
})
