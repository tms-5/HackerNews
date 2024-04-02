<script lang="ts">
import { useStore } from 'vuex'
import { defineComponent, computed, watch } from 'vue'
import { type StoryHackerNews } from '@/types/tableHackerNews'
import TableSkeleton from '@/components/appComponents/TableHackerNews/TableSkeleton/TableSkeleton.vue'
import TableHackerNewsActions from './Actions/TableHackerNewsActions.vue'

export default defineComponent({
  emits: ['change-number'],
  setup(props, { emit }) {
    const store = useStore()

    const stories = computed(() => store.getters['hackerNews/getAllStories'])

    const rows = computed(
      () =>
        stories.value?.map((story: StoryHackerNews, index: number) => ({
          ...story,
          position: index + 1,
          actions: {
            component: TableHackerNewsActions,
            props: { story }
          }
        })) ?? undefined
    )

    watch(rows, (newRows) => {
      emit('change-number', newRows.length ?? 0)
    })

    return {
      rows
    }
  },

  components: {
    TableSkeleton
  }
})
</script>

<template>
  <TableSkeleton :rows="rows" />
</template>
