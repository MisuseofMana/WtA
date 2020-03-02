<template>
  <div id="app">
      <transition name="fade" mode="out-in">
      <section key="intro" class="centerflex" v-if="!interaction">
        <img class="rings" @click.prevent="playSound()" src="@/assets/imgs/rings.gif" alt="">
      </section>
      
      <div key="main" v-else>
            <section class="gridCont">

              <header class="headerText">
                <h1>
                  WELCOME TO AMARA
                </h1>
              </header>

              <section class="aboutAmara">

                  <img class="headerImg" src="@/assets/imgs/og-image.jpg" alt="">
      
                <h2>A Dungeon World Dramatic Performance Podcast</h2>
                  
                  <hr class="amaraHR">

                    <p>
                    “Welcome to Amara” is a high production dramatic retelling podcast of a play by post Dungeon World campaign. We are <strong><em>Sean and Andy</em></strong>, a GM/Player duo exploring the unique high fantasy world of Amara.
                    </p>

                      <img class="imageSize floatL desktopFloatR" src="@/assets/imgs/amaranmap.png"/>

                    <p>
                    Amara is a sword and sorcery realm with carefully crafted lore to uncover, featuring a growing cast of diverse characters of beasts and fast friends.
                    </p>

                    <p>
                      <img class="imageSize mobileHide desktopFloatL floatR" src="@/assets/imgs/banditspink.jpg"/>
                    The storyline follows the main character Ydna, a traveling bard caught up in a flurry of proving grounds quests from his captain, Orric. Ydna is a curious drifter, who’s joined Eyien’s co-op militia, “The Coterie”.
                    Above all else he's on a bardic journey to honor his grandfather, hoping to meet exemplary figures and experience all the realm of Amara 
                    has to offer recording most, but not all, in his <em>songbook.</em>
                    </p>

                    <img class="floatL desktopFloatR imageSize" src="@/assets/imgs/goblinspink.jpg"/>

                    <p>
                    Along the way we discover much about Amara and the city of Eyien, uncover secrets that threaten the kingdom, and piece together the mysterious forces surrounding this grand city of opportunity and potential.
                    </p>

                      <img class="tabletHide clearB imageSize centerImg mobileHide" src="@/assets/imgs/arri.png"/>

                      <br>

                      <h2>Season 1 Arriving Mid 2020</h2>
              </section>

              <section class="clearB discordLink"> 
                <a href="https://discord.gg/82GpmYD">
                  <img src="@/assets/imgs/discord.png" alt="discord icon - click to join our discord">
                </a>

                <section>
                <p>
                  Click the icon to join our growing discord server for early access. 
                </p>
                <p>
                  Listen to the podcast before it airs, and help us shape the future of "Welcome to Amara".
                </p>
                </section>
              </section>

              <footer class="footer">
                  <section class="socialWrap">
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
                  </section>
              </footer>

              <section class="legal">
                  "Welcome to Amara" is a product of "Misuse of Mana LLC" &copy; | No portion of this website or the content it represents may be reproduced in any 
                  manner whatsoever without the express permission from the authors, except in the case of short excerpts used for review. 
                  | <a href="http://www.seanyager.com" target="_blank"> seanyager.com </a> | Site Updated Feb 2020 
                  <br>
                  <br>
                    Special thank you to freesound.org user <a href="https://freesound.org/people/alanmcki/" target="_blank">alanmcki</a> and the website <a href="https://www.purple-planet.com/" target="_blank">purple-planet.com</a> for providing audio.
                </section>

                <section class="footerRings">
                  <img class="runish" src="@/assets/imgs/runish.png" alt="a message from beyond the veil">
                  <img class="smallRings" src="@/assets/imgs/rings.gif" alt="rings that mark a criminal of Eyien">
                </section>
              
            </section>
        
        <section class="witchMagic"></section>
      </div>
      </transition>
  </div>
</template>

<script>

import "@/assets/styles/global.css";

import "@/assets/styles/default.css";
import "@/assets/styles/mobileport.css";
import "@/assets/styles/tablet.css";
import "@/assets/styles/desktop.css";

import "@/assets/styles/transitions.css";



export default {
  name: 'welcomeToAmara',
  title: 'Welcome To Amara',
  components: {
  },
  data() {
    return {
      interaction: false,
    }
  },
  methods: {
    playSound() {
        this.interaction = !this.interaction;
          var waveaudio = new Audio(require('@/assets/audio/magicPortal.mp3'));
          waveaudio.play();
          this.playMusic();
    },
    playMusic(){
      setTimeout(function(){
        var audio = new Audio(require('@/assets/audio/introspection.mp3'));
        audio.loop = true;
        audio.play();
      }, 5000 );
    }
  }
}
</script>
