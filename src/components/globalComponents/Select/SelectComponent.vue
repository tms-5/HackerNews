<script lang="ts">
import './style.scss'
import arrow from '@/assets/icons/arrow.svg'
import { defineComponent, ref } from 'vue'
import type { SelectOptionInterface } from '@/types/global'

export default defineComponent({
  name: 'SelectComponent',
  props: {
    label: {
      type: String,
      required: false
    },
    options: {
      type: Array as () => SelectOptionInterface[],
      required: true
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Select an option'
    }
  },
  emits: ['update:value'],
  setup(props, { emit }) {
    const showOptions = ref(false)
    const selectedValue = ref(props.value)
    const selectedLabel = ref(props.placeholder)

    const updateValue = (option: string, label: string) => {
      selectedValue.value = option
      selectedLabel.value = label
      emit('update:value', option)
    }

    const toggleOptions = () => {
      showOptions.value = !showOptions.value
    }

    return {
      selectedValue,
      updateValue,
      showOptions,
      toggleOptions,
      selectedLabel,
      arrow
    }
  }
})
</script>
<template>
  <div class="select-component d-flex align-center">
    <span for="select" class="mr-1">{{ label }}</span>
    <div class="p-relative select-input c-pointer" @click="toggleOptions">
      <div :class="['d-flex justify-s-b', selectedValue === '' ? 'placeholder' : '']">
        <div class="select-field">
          {{ selectedLabel }}
        </div>
        <img :src="arrow" alt="arrow" width="12" class="p-absolute" />
      </div>
      <div class="select-options p-absolute w-100">
        <div
          v-show="showOptions"
          v-for="option in options"
          :key="option.value"
          :value="option.value"
          class="select-option d-grid"
          @click="updateValue(option.value, option.label)"
        >
          {{ option.label }}
        </div>
      </div>
    </div>
  </div>
</template>
