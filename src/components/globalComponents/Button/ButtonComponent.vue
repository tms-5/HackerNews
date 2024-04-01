<script lang="ts">
import { Style } from '@/types/enum'
import './style.scss'
import type { PropType } from 'vue'
export default {
  props: {
    buttonLabel: {
      type: String,
      default: 'Button'
    },
    buttonImage: {
      type: String,
      default: ''
    },
    buttonClass: {
      type: String,
      default: ''
    },
    onClick: {
      type: Function,
      default: () => {}
    },
    style: {
      type: String as PropType<Style>,
      default: Style.Default
    }
  }
}
</script>
<template>
  <button :class="['button-component', 'button--' + style]" @click="onClick()">
    <img v-if="buttonImage" :src="buttonImage" alt="Button Image" />
    <span>{{ buttonLabel }}</span>
  </button>
</template>
