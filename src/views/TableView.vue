<script lang="ts">
import { defineComponent, computed } from 'vue'
import TabsContainer from '@/components/globalComponents/Tabs/TabsContainer.vue'
import TableHackerNews from '@/components/appComponents/TableHackerNews/TableHackerNews.vue'
import FavoritesHackerNews from '@/components/appComponents/TableHackerNews/Favorites/FavoritesHackerNews.vue'

export default defineComponent({
  components: {
    TabsContainer,
    TableHackerNews: TableHackerNews,
    FavoritesHackerNews: FavoritesHackerNews
  },
  setup() {
    const tabs = computed(() => [
      {
        label: 'All stories',
        name: 'stories',
        component: TableHackerNews
      },
      {
        label: 'Favorites',
        name: 'favorites',
        component: FavoritesHackerNews
      }
    ])

    return {
      tabs
    }
  }
})
</script>

<template>
  <main>
    <TabsContainer :tabs="tabs">
      <template v-for="tab in tabs" :key="tab.name" v-slot:[tab.name]>
        <component :is="tab.component" />
      </template>
    </TabsContainer>
  </main>
</template>
