<script lang="ts">
import { defineComponent } from 'vue'
import type { TableHeaderInterface } from '@/types/global'

export default defineComponent({
  name: 'TableRow',
  props: {
    row: {
      type: Object as () => Record<string, any>,
      required: true
    },
    headers: {
      type: Array as () => TableHeaderInterface[],
      required: true
    }
  },
  methods: {
    isComponent(value: any) {
      return value && typeof value === 'object' && value.component
    }
  }
})
</script>
<template>
  <div class="data-table-line d-flex">
    <div
      v-for="header in headers"
      :key="header.key"
      :class="['data-table-col', 'size-' + header.size]"
    >
      <template v-if="isComponent(row[header.key])">
        <component :is="row[header.key].component" v-bind="row[header.key].props" />
      </template>
      <template v-else>
        <span :title="row[header.key]">{{
          row[header.key] !== undefined ? row[header.key] : ''
        }}</span>
      </template>
    </div>
  </div>
</template>
