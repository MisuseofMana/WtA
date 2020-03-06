<template>
  <flipbook class="flipbook" 
  :zooms="[1]"
  :pages="[ null,
  require('@/assets/imgs/books/1.jpg'),
  require('@/assets/imgs/books/2.jpg'),
  require('@/assets/imgs/books/3.jpg'),
  require('@/assets/imgs/books/4.jpg'),
  require('@/assets/imgs/books/5.jpg'),
  require('@/assets/imgs/books/6.jpg'),
  require('@/assets/imgs/books/7.jpg'),
  require('@/assets/imgs/books/8.jpg'),
  require('@/assets/imgs/books/backinterior.jpg'),
  ]"
   @flip-left-start="pageSound()"
   @flip-right-start="pageSound()">
  </flipbook>
</template>

<script>
import Flipbook from 'flipbook-vue'

export default {
  name: "YdnaSongbook",
  components: { Flipbook },
  methods: {
    pageSound(){
        var number = Math.floor(Math.random() * 3) + 1;
        var pageturn = new Audio(require('@/assets/audio/pageTurn' + number + '.mp3'));
        pageturn.play();
    }
  }
}
</script>

<style>

</style>