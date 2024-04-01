<script setup lang="ts">
import '@/assets/styles/global.scss'
import { RouterView } from 'vue-router'
import SidebarComponent from './components/globalComponents/Sidebar/SidebarComponent.vue'
</script>

<template>
  <div class="d-flex">
    <SidebarComponent />
    <div class="p-2 ml-5r w-100 o-hidden">
      <RouterView />
    </div>
  </div>
</template>
