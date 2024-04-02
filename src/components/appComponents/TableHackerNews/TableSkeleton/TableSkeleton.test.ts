import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TableSkeleton from '@/components/appComponents/TableHackerNews/TableSkeleton/TableSkeleton.vue'

describe('TableSkeleton', () => {
  it('renders the table with correct headers', () => {
    const wrapper = mount(TableSkeleton, { props: { rows: [] } })
    const headers = wrapper.findAll('.table-header')

    expect(headers).toHaveLength(4)
    expect(headers[0].text()).toBe('Posição ↑↓')
    expect(headers[1].text()).toBe('Título ↑↓')
    expect(headers[2].text()).toBe('Usuário ↑↓')
    expect(headers[3].text()).toBe('Ações')
  })

  it('renders the table with correct number of rows', () => {
    const rows = [
      {
        position: 1,
        title: 'Story 1',
        by: 'User 1',
        descendants: 0,
        id: 123,
        kids: [],
        score: 0,
        url: 'test-url',
        time: 0,
        type: 'story'
      },
      {
        position: 2,
        title: 'Story 2',
        by: 'User 2',
        descendants: 0,
        id: 456,
        kids: [],
        score: 0,
        url: 'test-url',
        time: 0,
        type: 'story'
      },
      {
        position: 3,
        title: 'Story 3',
        by: 'User 3',
        descendants: 0,
        id: 789,
        kids: [],
        score: 0,
        url: 'test-url',
        time: 0,
        type: 'story'
      }
    ]

    const wrapper = mount(TableSkeleton, { props: { rows } })
    const tableRows = wrapper.findAll('.data-table-line')

    expect(tableRows).toHaveLength(rows.length)
  })
})
