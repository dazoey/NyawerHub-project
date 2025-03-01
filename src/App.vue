<script setup>
import { onMounted } from 'vue'
import HeaderComponent from './components/header/HeaderComponent.vue'
import BodyComponent from './components/body/BodyComponent.vue'

onMounted(() => {
  document.title = 'NyawerHub'
  let link = document.querySelector("link[rel~='icon']")
  if (!link) {
    link = document.createElement('link')
    link.rel = 'icon'
    document.head.appendChild(link)
  }
  link.href = 'https://imgur.com/aQrDZCJ.png'
})
</script>

<template>
  
  <header>
  <HeaderComponent>
  </HeaderComponent>
  </header >

  <main>
    <div>
      <BodyComponent></BodyComponent>
    </div>
  </main>
</template>


