<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { App as CapacitorApp } from '@capacitor/app'
import { onMounted, onBeforeUnmount } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const handleBackButton = () => {
  const currentPath = route.path

  const rootPaths = ['/']

  if (rootPaths.includes(currentPath)) {
    CapacitorApp.exitApp()
  } else {
    router.back()
  }
}

onMounted(() => {
  CapacitorApp.addListener('backButton', handleBackButton)
})

onBeforeUnmount(() => {
  CapacitorApp.removeAllListeners()
})
</script>
