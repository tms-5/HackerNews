<script lang="ts">
import './styles.scss'
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { type StoryHackerNews } from '@/types/tableHackerNews'
import FilledHeart from './Heart/FilledHeart.vue'
import OutlinedHeart from './Heart/OutlinedHeart.vue'
import arrow from '@/assets/icons/right-arrow.svg'

export default defineComponent({
  name: 'TableHackerNewsActions',
  components: {
    FilledHeart,
    OutlinedHeart
  },
  props: {
    story: {
      type: Object as () => StoryHackerNews,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    const router = useRouter()
    const favorites = computed(() => store.getters['hackerNews/getFavorites'])

    const favoritedStory = computed(() => favorites.value.includes(props.story.id))

    function navigateToStory(id: number) {
      router && router.push({ name: 'story', params: { id } })
    }

    function toggleFavorite(story: StoryHackerNews) {
      if (favoritedStory.value) {
        store.dispatch('hackerNews/removeFromFavorites', story.id)
      } else {
        store.dispatch('hackerNews/addToFavorites', story.id)
      }
    }

    return {
      navigateToStory,
      toggleFavorite,
      favoritedStory,
      arrow
    }
  }
})
</script>

<template>
  <div class="actions d-flex align-center gap-1">
    <div class="heart" @click="toggleFavorite(story)">
      <FilledHeart v-if="favoritedStory" />
      <OutlinedHeart v-else />
    </div>

    <button @click="navigateToStory(story.id)"
      class="b-none bg-transparent c-pointer data-table-button-details d-flex align-center justify-content-center">
      Details <img :src="arrow" alt="Right arrow" width="8" />
    </button>
  </div>
</template>
