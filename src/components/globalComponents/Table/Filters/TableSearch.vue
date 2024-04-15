<script lang="ts">
import './style.scss'
import { defineComponent, ref, watch, type PropType } from 'vue'
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
    },
    onHandleSearch: { type: Function as PropType<(key: string, text: string) => void>, required: true }
  },
  setup(props,) {
    const selectedHeader = ref(props.value.key)
    const searchText = ref(props.value.text)
    const options = props.headers.map((header) => ({ label: header.label, value: header.key }))


    watch([selectedHeader, searchText], ([newSelectedHeader, newSearchText]) => {
      onHandleSearch(newSelectedHeader, newSearchText);
    });

    function onHandleSearch(key: string, text: string) {
      props.onHandleSearch(key, text);
    }

    return {
      selectedHeader,
      searchText,
      search,
      options,
    }
  }
})
</script>
<template>
  <div class="table-search d-flex">
    <SelectComponent :options="options" placeholder="Select a option to filter" v-model="selectedHeader" />
    <form class="p-relative d-flex align-center ml-1r">
      <img :src="search" alt="search" width="13" class="p-absolute pl-1" />
      <input class="search-input b-none" type="text" v-model="searchText" aria-label="Filter projects"
        placeholder="Filter projects..." />
    </form>
  </div>
</template>
