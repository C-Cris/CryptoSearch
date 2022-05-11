<template>
  <header class="shadow w-screen">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-black p-5">
        <div class="flex items-center flex-shrink-0 text-green-300 mr-6">
          <px-icon class="mr-1 p-2 w-20 h-20" />
          <router-link
            :to="{ name: 'home' }"
            class="font-semibold text-xl tracking-tight p-1 m-2"
            >CryptoSearch</router-link
          >
        </div>
        <div
          class="hidden sm:block w-full blok flex-grow lg:flex lg:items-center lg:wauto"
        >
          <div class="text-sm lg:flex-grow">
            <router-link
              v-for="l in links"
              :key="l.title"
              :to="l.to"
              class="text-red block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-5"
              >{{ l.title }}</router-link
            >
          </div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script lang="ts">
import PxIcon from '@/components/PxIcon.vue'
export default {
  name: 'PxHeader',
  components: { PxIcon },

  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
