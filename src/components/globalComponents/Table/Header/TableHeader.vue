<script lang="ts">
import { defineComponent } from 'vue'
import type { TableHeaderInterface } from '@/types/global'

export default defineComponent({
  name: 'TableHeader',
  props: {
    headers: {
      type: Array as () => TableHeaderInterface[],
      required: true
    },
    toggleSort: {
      type: Function,
      required: true
    },
    sortState: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const sortClass = (header: TableHeaderInterface) => {
      return props.sortState.key === header.key && props.sortState.order !== 0
        ? 'active-sortable'
        : ''
    }
    const sortSymbol = (header: TableHeaderInterface) => {
      if (props.sortState.key === header.key) {
        return props.sortState.order === 1 ? '↑' : props.sortState.order === -1 ? '↓' : '↑↓'
      }
      return '↑↓'
    }
    return {
      sortClass,
      sortSymbol
    }
  }
})
</script>

<template>
  <div class="d-flex data-table-header">
    <div
      v-for="header in headers"
      :key="header.key"
      @click="header.sortable ? toggleSort(header.key) : null"
      :class="['table-header d-flex align-center data-table-col', 'size-' + header.size]"
    >
      {{ header.label }}
      <span :class="['ml-1 table-header-sortable', sortClass(header)]" v-if="header.sortable">
        {{ sortSymbol(header) }}
      </span>
    </div>
  </div>
</template>
