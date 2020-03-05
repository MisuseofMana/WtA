<template>
  <flipbook class="flipbook" 
  :pages="[ null, require('@/assets/imgs/books/1.jpg'),require('@/assets/imgs/books/2.jpg'),require('@/assets/imgs/books/3.jpg'),require('@/assets/imgs/books/4.jpg')]">
  </flipbook>
</template>

<script>
import Flipbook from 'flipbook-vue'

export default {
  name: "YdnaSongbook",
  components: { Flipbook },
  propsData: {
    zooms: 1,
    startPage: 1,
  }
}
</script>

<style>
.flipbook {
  width:50vw;
  height:50vh;
}
</style>