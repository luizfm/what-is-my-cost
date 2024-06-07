<script setup lang="ts">
import { onMounted } from 'vue'
import { ref } from 'vue'

defineProps({
  name: {
    type: String,
    required: true
  }
})

const show = ref(false)

onMounted(() => {
  setTimeout(() => {
    show.value = true
  }, 400)
})
</script>

<template>
  <Transition :name="name">
    <slot v-if="show"></slot>
  </Transition>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(100px);
  opacity: 0;
}
</style>
