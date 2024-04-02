<script lang="ts">
import { useStore } from 'vuex'
import { defineComponent, computed, watch } from 'vue'
import { type StoryHackerNews } from '@/types/tableHackerNews'
import TableSkeleton from '@/components/appComponents/TableHackerNews/TableSkeleton/TableSkeleton.vue'
import TableHackerNewsActions from '../Actions/TableHackerNewsActions.vue'

export default defineComponent({
  emits: ['change-number'],
  setup(props, { emit }) {
    const store = useStore()

    const stories = computed(() => store.getters['hackerNews/getAllStories'])
    const favoritesIds = computed(() => store.getters['hackerNews/getFavorites'])

    const rows = computed(
      () =>
        stories.value
          ?.filter((story: StoryHackerNews) => favoritesIds.value.includes(story.id))
          .map((story: StoryHackerNews) => ({
            ...story,
            actions: {
              component: TableHackerNewsActions,
              props: { story }
            }
          })) ?? []
    )

    watch(rows, (newRows) => {
      emit('change-number', newRows.length)
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
