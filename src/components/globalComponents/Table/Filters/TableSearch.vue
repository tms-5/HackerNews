<script lang="ts">
import './style.scss'
import { defineComponent, ref } from 'vue'
import SelectComponent from '@/components/globalComponents/Select/SelectComponent.vue'
import type { TableHeaderInterface } from '@/types/global'
import search from '@/assets/icons/search.svg'

export default defineComponent({
  name: 'TableSearch',
  components: {
    SelectComponent
  },
  props: {
    value: {
      type: Object,
      default: () => ({ key: '', text: '' })
    },
    headers: {
      type: Array as () => TableHeaderInterface[],
      required: true
    }
  },
  emits: ['update:value'],
  setup(props, { emit }) {
    const selectedHeader = ref(props.value.key)
    const searchText = ref(props.value.text)
    const options = props.headers.map((header) => ({ label: header.label, value: header.key }))

    const updateValue = () => {
      emit('update:value', { key: selectedHeader.value, text: searchText.value })
    }

    return {
      selectedHeader,
      searchText,
      updateValue,
      search,
      options
    }
  }
})
</script>
<template>
  <div class="table-search d-flex">
    <SelectComponent :options="options" placeholder="Select a option to filter" />
    <form class="p-relative d-flex align-center ml-1r">
      <img :src="search" alt="search" width="13" class="p-absolute pl-1" />
      <input
        class="search-input b-none"
        type="text"
        v-model="searchText"
        @input="$emit('update:value', { key: selectedHeader, text: searchText })"
        aria-label="Filter projects"
        placeholder="Filter projects..."
      />
    </form>
  </div>
</template>
