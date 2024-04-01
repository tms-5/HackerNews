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

    onMounted(() => {
      if (storyId) {
        const hackersNews = HackersNews.getInstance()
        try {
          const storyData = hackersNews.findStoryById(storyId)
          story.value = storyData || null
        } catch (error) {
          console.error('Erro ao buscar a história:', error)
        }
      }
    })

    function goToHome() {
      router.go(-1)
    }

    return {
      story,
      goToHome
    }
  },
  components: {
    ButtonComponent
  }
})
</script>

<template>
  <ButtonComponent buttonLabel="Voltar" @click="goToHome" />
  <div v-if="story" class="c-white">
    <h2>{{ story.title }}</h2>
    <p>Por: {{ story.by }}</p>
    <p>Pontuação: {{ story.score }}</p>
    <div v-html="story.url"></div>
  </div>
  <div v-else>Carregando história...</div>
</template>
