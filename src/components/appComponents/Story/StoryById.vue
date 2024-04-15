<script lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { defineComponent, onMounted, ref } from 'vue'
import type { StoryHackerNews } from '@/types/tableHackerNews'
import HackersNews from '@/services/hackersNews.service'
import ButtonComponent from '@/components/globalComponents/Button/ButtonComponent.vue'

export default defineComponent({
  setup() {
    const story = ref<StoryHackerNews | null>(null)
    const route = useRoute()
    const router = useRouter()
    const storyId = parseInt(route.params.id as string)

    function fetchStory() {
      const hackersNews = HackersNews.getInstance();
      return hackersNews.findStoryById(storyId);
    }

    onMounted(async () => {
      try {
        const storyData = await fetchStory();
        if (storyData) {
          story.value = storyData;
        } else {
          goBack();
        }
      } catch (error) {
        goBack();
      }
    });

    function goBack() {
      router.go(-1)
    }

    return {
      story,
      goBack
    }
  },
  components: {
    ButtonComponent
  }
})
</script>

<template>
  <ButtonComponent buttonLabel="Voltar" @click="goBack" />
  <div v-if="story" class="c-white">
    <h2>{{ story.title }}</h2>
    <p>Por: {{ story.by }}</p>
    <p>Pontuação: {{ story.score }}</p>
    <div v-html="story.url"></div>
  </div>
  <div v-else>Carregando história...</div>
</template>
