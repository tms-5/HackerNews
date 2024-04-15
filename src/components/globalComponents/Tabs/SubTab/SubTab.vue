<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true
    },
    isActive: {
      type: Boolean,
      default: false
    },
    tab: {
      type: Object as () => {
        label: string
        name: string
        component: Object
      },
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  emits: ['handle-click'],
  setup(props, { emit }) {
    const elementsNumber = ref(0)

    const changeNumber = (index: number) => {
      elementsNumber.value = index
    }

    const changeTab = (name: string) => {
      emit('handle-click', name);
    }


    return { changeNumber, elementsNumber, changeTab }
  }
})
</script>
<template>
  <div :class="['tab-title d-flex', isActive ? 'active' : '']" @click="changeTab(tab.name)">
    {{ tab.label }}
    <div class="rows-quantity">
      {{ elementsNumber }}
    </div>
  </div>
  <div :class="['tab-content', isActive ? 'active' : '']">
    <component :is="tab.component" @change-number="changeNumber" />
  </div>
</template>
