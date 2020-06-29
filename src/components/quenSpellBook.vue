<template>
  <flipbook class="flipbook" 
  :zooms="[1]"
  :pages="[ null,
  require('@/assets/imgs/books/quen/QuensBook.jpg'),

  require('@/assets/imgs/books/quen/QuensBook2.jpg'),
  require('@/assets/imgs/books/quen/QuensBook3.jpg'),

  require('@/assets/imgs/books/quen/QuensBook4.jpg'),
  require('@/assets/imgs/books/quen/QuensBook5.jpg'),

  require('@/assets/imgs/books/quen/QuensBook6.jpg'),
  require('@/assets/imgs/books/quen/QuensBook7.jpg'),
  
  require('@/assets/imgs/books/quen/QuensBook8.jpg'),
  require('@/assets/imgs/books/quen/QuensBook9.jpg'),
  
  require('@/assets/imgs/books/quen/QuensBook10.jpg'),
  require('@/assets/imgs/books/quen/QuensBook11.jpg'),
  
  require('@/assets/imgs/books/quen/QuensBook12.jpg'),
  require('@/assets/imgs/books/quen/QuensBook13.jpg'),
  
  require('@/assets/imgs/books/quen/QuensBook14.jpg'),
  require('@/assets/imgs/books/quen/QuensBook15.jpg'),

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