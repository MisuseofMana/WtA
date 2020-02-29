<template>
  <div id="app">
      <transition name="fade" mode="out-in">
      <section v-if="!interaction">
        <img @click="interaction = !interaction" src="@/assets/imgs/rings.gif" alt="">
      </section>
      
      <main v-else>
        HELLOW!

        <section class="witchMagic">

        </section>
      </main>
      </transition>
  </div>
</template>

<script>

import "@/assets/styles/globals.css";

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      interaction: false,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  height:100vh;
  width:100vw;
  justify-content: center;
  align-items: center;
}

#app img {
  height:100px;
  width:100px;
  cursor: pointer;
}
</style>
