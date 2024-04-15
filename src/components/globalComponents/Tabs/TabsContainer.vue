<script lang="ts">
import './style.scss'
import { defineComponent, ref, watchEffect, type PropType } from 'vue'
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
    },
    changeTab: {
      type: Function as PropType<(label: string) => void>,
      required: true
    },
    initialTab: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const selectedTab = ref(props.initialTab)

    watchEffect(() => {
      selectedTab.value = props.initialTab;
    });

    const handleClick = (label: string) => {
      props.changeTab(label)
      selectedTab.value = label
    }


    return { selectedTab, handleClick }

  }
})
</script>
<template>
  <div class="tabs-container">
    <SubTab v-for="(tab, index) in tabs" :tab="tab" :key="index" :index="index" @handle-click="handleClick" :label="tab.label"
      :is-active="selectedTab === tab.name" />
  </div>
</template>
