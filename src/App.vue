<script setup lang="ts">
import { RouterView } from 'vue-router'
import { LOCAL_STORAGE_KEYS } from './constants/local-storage-keys'
import router from './router'
import { onMounted } from 'vue'

function redirect() {
  const username = localStorage.getItem(LOCAL_STORAGE_KEYS.EMAIL)

  if (window.location.pathname === '/') {
    if (username) {
      router.push('/home')
      return
    }

    router.push('/login')
  }
}

onMounted(() => {
  redirect()
})
</script>

<template>
  <RouterView />
</template>
