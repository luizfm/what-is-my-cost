<script setup lang="ts">
import type { PropType } from 'vue'

type ButtonTypes = 'button' | 'submit' | 'reset' | undefined

const props = defineProps({
  class: {
    type: String
  },
  title: {
    type: String,
    required: true
  },
  type: {
    type: String as PropType<ButtonTypes>,
    defaultValue: 'button'
  }
})
</script>

<template>
  <button :class="['button', props.class]" :type="type" :name="title" :title="title">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  border: 0;
  padding: 0;
  cursor: pointer;
  border-radius: 56px;
  background-color: var(--primary);
  color: white;
  font-weight: 700;
  transition: all 0.6s;
  width: 100%;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
