<script lang="ts">
import { defineComponent } from 'vue'
import { type StoryHackerNews } from '@/types/tableHackerNews'
import DataTable from '@/components/globalComponents/Table/DataTable.vue'
import { TableColSize } from '@/types/enum'

export default defineComponent({
  setup() {
    const headers = [
      { key: 'position', label: 'Posição', sortable: true, size: TableColSize.XSMALL },
      { key: 'title', label: 'Título', sortable: true, size: TableColSize.LARGE },
      { key: 'by', label: 'Usuário', sortable: true, size: TableColSize.SMALL },
      { key: 'actions', label: 'Ações', sortable: false, size: TableColSize.MEDIUM }
    ]
    return {
      headers
    }
  },
  props: {
    rows: {
      type: Array as () => StoryHackerNews[] | undefined,
      default: undefined
    }
  },

  components: {
    DataTable
  }
})
</script>

<template>
  <DataTable :rows="rows" :headers="headers" />
</template>
