<template>
  <html>
    <main class="bg-gray-900">
      <px-header :links="links" />
      <router-view class="container px-5 sm:px-15 py-20 flex justify-center" />
    </main>
  </html>
</template>

<script>
import PxHeader from '@/components/PxHeader.vue'
export default {
  name: 'App',
  components: { PxHeader },

  data() {
    return {
      links: [
        {
          title: 'BTC',
          to: { name: 'coin-detail', params: { id: 'bitcoin' } },
        },
        {
          title: 'ETH',
          to: { name: 'coin-detail', params: { id: 'ethereum' } },
        },
        {
          title: 'USDT',
          to: { name: 'coin-detail', params: { id: 'tether' } },
        },
      ],
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #050505;
  margin-top: 60px;
}
html {
  background-color: #1a202c;
}
</style>
