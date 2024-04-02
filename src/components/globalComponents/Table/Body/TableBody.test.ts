import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TableBody from './TableBody.vue'
import TableRow from '../Row/TableRow.vue'
import Loading from '@/components/globalComponents/Loading/LoadingComponent.vue'
import { TableColSize } from '@/types/enum'

describe('TableBody', () => {
  it('renders Loading when rows is undefined', () => {
    const wrapper = mount(TableBody, {
      props: {
        headers: []
      }
    })

    expect(wrapper.findComponent(Loading).exists()).toBe(true)
    expect(wrapper.findComponent(TableRow).exists()).toBe(false)
  })

  it('renders TableRow for each row when rows is defined', () => {
    const rows = [{ id: 1 }, { id: 2 }]
    const headers = [{ key: 'id', label: 'ID', sortable: true, size: TableColSize.SMALL }]

    const wrapper = mount(TableBody, {
      props: {
        rows,
        headers
      }
    })

    expect(wrapper.findComponent(Loading).exists()).toBe(false)
    const tableRows = wrapper.findAllComponents(TableRow)
    expect(tableRows).toHaveLength(rows.length)
    tableRows.forEach((row, index) => {
      expect(row.props('row')).toStrictEqual(rows[index])
      expect(row.props('headers')).toStrictEqual(headers)
    })
  })
})
