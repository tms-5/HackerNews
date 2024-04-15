<script lang="ts">
import { defineComponent, computed, onMounted, ref } from 'vue'
import TabsContainer from '@/components/globalComponents/Tabs/TabsContainer.vue'
import TableHackerNews from '@/components/appComponents/TableHackerNews/TableHackerNews.vue'
import FavoritesHackerNews from '@/components/appComponents/TableHackerNews/Favorites/FavoritesHackerNews.vue'
import HackersNews from '@/services/hackersNews.service'

export default defineComponent({
  components: {
    TabsContainer,
    TableHackerNews: TableHackerNews,
    FavoritesHackerNews: FavoritesHackerNews
  },
  setup() {
    const hackersNewsInstance = HackersNews.getInstance();
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
    let initialTab = ref<string>("stories")

    function changeTab(type: string) {
      hackersNewsInstance.activePage = type as "stories" | "favorites";
    }

    onMounted(() => {
      initialTab.value = hackersNewsInstance?.activePage
    })


    return {
      tabs,
      changeTab,
      initialTab
    }
  }
})
</script>

<template>
  <main>
    <TabsContainer :tabs="tabs" :changeTab="changeTab" :initialTab="initialTab">
      <template v-for="tab in tabs" :key="tab.name" v-slot:[tab.name]>
        <component :is="tab.component" />
      </template>
    </TabsContainer>
  </main>
</template>
