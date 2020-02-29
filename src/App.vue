<template>
  <div id="app">
      <transition name="fade" mode="out-in">
      <section key="intro" class="fullScreenCenter flexCenter" v-if="!interaction">
        <img class="rings" @click.prevent="playSound()" src="@/assets/imgs/rings.gif" alt="">
      </section>
      
      <div key="main" v-else>
        <section class="flex fullScreen">
            <section class="gridCont">

              <header class="gridHeader">WELCOME TO AMARA</header>

              <section class="aboutAmara">

                <h1>A Dungeon World Dramatic Performance Podcast</h1>

               <p>
“Welcome to Amara” is a high production dramatic retelling of a play by post campaign. We are Sean and Andy, a GM/Player duo exploring the unique world of Amara. Amara is a sword and sorcery realm with carefully crafted lore to uncover, and a growing cast of diverse characters.
</p>
<p>
The storyline follows the main character Ydna, a traveling bard caught up in a flurry of proving grounds quests from his Coterie captain, Orric. Ydna is a curious drifter, who’s joined Eyien’s co-op militia, “The Coterie”.
</p>
<p>
Along the way we discover much about Amara and the city of Eyien, uncover secrets that threaten the kingdom, and piece together the mysterious forces surrounding Eyien.
</p>

<h2>Season 1 Arriving Mid 2020</h2>
              </section>

              <section class="discordLink"> 
                <p class="center">
                  Join our discord server for early access. Listen to the podcast before it airs, and help us shape the future of "Welcome to Amara"
                </p>
                <a href="https://discord.gg/82GpmYD">
                  <img src="@/assets/imgs/discord.png" alt="discord icon - click to join our discord">
                </a>
              </section>

              <aside class="aside">
                <img src="@/assets/imgs/wta-icon.jpg" alt="">
              </aside>

              <footer class="footer">
                <a href="http://www.twitter.com/misuseofmana" target="_blank">
                  <img src="@/assets/imgs/twitter.png" alt="twitter icon">
                </a>
                <a target="_blank" href="http://www.instagram.com/misuseofmana">
                    <img src="@/assets/imgs/instagram.png" alt="instagram icon">
                </a>
                <a target="_blank" href="mailto:seanyagerart@gmail.com">
                  <img src="@/assets/imgs/email.png" alt="email icon">
                </a>
                <a target="_blank" href="https://discord.gg/82GpmYD">
                  <img src="@/assets/imgs/discord.png" alt="discord icon - click to join our discord">
                </a>
              
                
                
              </footer>
              
            </section>
        </section>

        <section class="witchMagic">
          <!-- <img src="@/assets/imgs/witchcraft.gif" alt=""> -->
        </section>
      </div>
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
      interaction: true,
    }
  },
  methods: {
    playSound() {
        this.interaction = !this.interaction;
          var waveaudio = new Audio(require('@/assets/audio/wave.wav'));
          waveaudio.play();
          this.playMusic();
    },
    playMusic(){
      setTimeout(function(){
        var audio = new Audio(require('@/assets/audio/introspection.wav'));
        audio.loop = true;
        audio.play();
      }, 4000 );
    }
  }
}
</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity 4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
