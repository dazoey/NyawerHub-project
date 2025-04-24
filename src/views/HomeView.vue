<script>
import { onMounted } from 'vue'
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import BodyComponent from '@/components/body/BodyComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    BodyComponent
  },
  setup() {
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

    return {}
  }
}
</script>
<template>
  <div>
    <HeaderComponent/>
    <main>
      <BodyComponent/>
    </main>
  </div>
</template>


