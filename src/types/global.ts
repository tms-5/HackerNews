import type { TableColSize } from './enum'

export interface TableHeaderInterface {
  key: string
  label: string
  sortable: boolean
  size: TableColSize
}

export interface SelectOptionInterface {
  value: string
  label: string
}
