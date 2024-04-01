<script lang="ts">
import { defineComponent } from 'vue'
import TableRow from '../Row/TableRow.vue'
import { type TableHeaderInterface } from '@/types/global'

export default defineComponent({
  name: 'TableBody',
  components: {
    TableRow
  },
  props: {
    rows: {
      type: Array as () => Array<Record<string, unknown>> | undefined,
      default: undefined
    },
    headers: {
      type: Array as () => TableHeaderInterface[],
      required: true
    }
  }
})
</script>
<template>
  <div class="data-table-body">
    <div v-if="!rows" class="c-white">Loading</div>
    <TableRow v-for="(row, index) in rows" :key="index" :row="row" :headers="headers" v-else />
  </div>
</template>
