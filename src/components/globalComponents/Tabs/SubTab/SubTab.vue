<template>
  <div :class="['tab-title d-flex', isActive ? 'active' : '']" @click="click(index)">
    {{ tab.label }}
    <div class="rows-quantity">
      {{ elementsNumber }}
    </div>
  </div>
  <div :class="['tab-content', isActive ? 'active' : '']">
    <component :is="tab.component" @change-number="changeNumber" />
  </div>
</template>

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
    click: {
      type: Function,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  setup() {
    const elementsNumber = ref(0)

    const changeNumber = (index: number) => {
      elementsNumber.value = index
    }

    return { changeNumber, elementsNumber }
  }
})
</script>
