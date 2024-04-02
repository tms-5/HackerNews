<script lang="ts">
import './style.scss'
import { defineComponent, ref } from 'vue'
import SubTab from './SubTab/SubTab.vue'

export default defineComponent({
  name: 'TabsContainer',
  components: {
    SubTab
  },
  props: {
    tabs: {
      type: Array as () => {
        label: string
        name: string
        component: Object
      }[],
      required: true
    }
  },
  setup() {
    const selectedTab = ref(0)

    const handleClick = (index: number) => {
      selectedTab.value = index
    }

    return { selectedTab, handleClick }
  }
})
</script>
<template>
  <div class="tabs-container">
    <SubTab
      v-for="(tab, index) in tabs"
      :tab="tab"
      :key="index"
      :index="index"
      :click="handleClick"
      :label="tab.label"
      :isActive="selectedTab === index"
    />
  </div>
</template>
