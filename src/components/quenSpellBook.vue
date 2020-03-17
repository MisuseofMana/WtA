<template>
  <flipbook class="flipbook" 
  :zooms="[1]"
  :pages="[ null,
  require('@/assets/imgs/books/quen/cover.jpg'),

  require('@/assets/imgs/books/quen/intcover.jpg'),
  require('@/assets/imgs/books/quen/intrightpage1.jpg'),

  require('@/assets/imgs/books/quen/spreadleftgoblin.jpg'),
  require('@/assets/imgs/books/quen/spreadrightgoblins.jpg'),
  
  require('@/assets/imgs/books/quen/blankLeft.jpg'),
  require('@/assets/imgs/books/quen/intbackcover.jpg'),

  ]"
   @flip-left-start="pageSound()"
   @flip-right-start="pageSound()">
  </flipbook>
</template>

<script>
import Flipbook from 'flipbook-vue'

export default {
  name: "quenSpellBook",
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