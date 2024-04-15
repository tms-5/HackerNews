<script lang="ts">
import './style.scss'
import { defineComponent, reactive, computed, ref, watch } from 'vue'
import type { TableHeaderInterface } from '@/types/global'
import TableHeader from './Header/TableHeader.vue'
import TableBody from './Body/TableBody.vue'
import TableSearch from './Filters/TableSearch.vue'
import { debounce } from 'lodash';

export default defineComponent({
  name: 'DataTable',
  components: {
    TableSearch,
    TableHeader,
    TableBody
  },
  props: {
    rows: {
      type: Array as () => Record<string, any>[] | undefined,
      default: undefined
    },
    headers: {
      type: Array as () => TableHeaderInterface[],
      required: true
    }
  },
  setup(props) {
    const sortState = reactive({
      key: '',
      order: 0 // 0: none, 1: ascending, -1: descending
    })

    const searchValue = ref({ key: '', text: '' })
    const debouncedText = ref(searchValue.value.text);

    const updateDebouncedText = debounce(() => {
      debouncedText.value = searchValue.value.text;
    }, 300);

    watch(() => searchValue.value.text, () => {
      updateDebouncedText();
    });

    const sortedAndFilteredRows = computed(() => {
      if (!props.rows) return undefined;
      let processedRows = [...props.rows];

      if (sortState.order !== 0 && sortState.key) {
        processedRows.sort((a, b) => {
          if (a[sortState.key] < b[sortState.key]) return sortState.order * -1;
          if (a[sortState.key] > b[sortState.key]) return sortState.order;
          return 0;
        });
      }

      if (debouncedText.value.trim() && searchValue.value.key) {
        processedRows = processedRows.filter((row) =>
          row[searchValue.value.key]
            ?.toString()
            .toLowerCase()
            .includes(debouncedText.value.toLowerCase())
        );
      }

      return processedRows;
    });


    function toggleSort(key: string) {
      if (sortState.key === key) {
        sortState.order = sortState.order === 1 ? -1 : sortState.order === -1 ? 0 : 1
      } else {
        sortState.key = key
        sortState.order = 1
      }
    }

    const handleSearch = (key: string, text: string) => {
      searchValue.value = { key, text };
    };

    return { toggleSort, sortedAndFilteredRows, sortState, searchValue, handleSearch }
  }
})
</script>
<template>
  <TableSearch :value="searchValue" :headers="headers" @handle-search="handleSearch" />
  <div class="mt-1r data-table w-100">
    <TableHeader :headers="headers" :sort-state="sortState" :toggle-sort="toggleSort" />
    <TableBody :rows="sortedAndFilteredRows" :headers="headers" />
  </div>
</template>
