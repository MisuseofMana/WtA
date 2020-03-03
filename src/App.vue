<template>
  <div id="app">
      <transition name="fade" mode="out-in">
      <section key="intro" class="centerflex" v-if="!interaction">
        <img class="rings" @click.prevent="playSound()" src="@/assets/imgs/rings.gif" alt="">
      </section>
      
      <div key="main" class="main" v-else>
        <section class="gridCont">

              <header class="headerText">
                <h1>
                  WELCOME TO AMARA
                </h1>
              </header>

              <!-- Main Content of Site - About Amara, and images -->
              <main class="aboutAmara">
                  
                  <img class="headerImg" src="@/assets/imgs/wta-icon.jpg" alt="">

                <section class="podcastDescription">
        
                  <hr>

                  <h2>A Dungeon World Dramatic Performance Podcast</h2>
                    
                  <hr>
                  

                  <p>
                  “Welcome to Amara” is a high production dramatic retelling podcast of a play by post Dungeon World campaign. We are <strong><em>Sean and Andy</em></strong>, a GM/Player duo exploring the unique high fantasy world of Amara.
                  </p>
                    
                  <img class="imageSize floatR" src="@/assets/imgs/amaranmap.png"/>

                  <p>
                  Amara is a sword and sorcery realm with carefully crafted lore to uncover, featuring a growing cast of diverse characters of beasts and fast friends.
                  In Amara, there are humans, living among other humanoids scattered across the realm in settlements and villages and unstable camps.
                  <img class="imageSize floatL" src="@/assets/imgs/banditspink.jpg"/>
                  At the neck of a prominent peninsula sits <strong>Eyien</strong> (pronounced YEE-in), it’s the city of cities, home to the <em>Ember King of Amara, King Rense.</em>
                  The title has been held by countless women and men before him. The Ember King's Rule is just and fair, leading Eyien into its immense prosperity.
                  </p>

                  <img class="floatR imageSize" src="@/assets/imgs/swordsman.png"/>

                  <p>
                  Eyien is where <strong>“Welcome to Amara”</strong> begins, it’s the place to be for security and for power in Amara.
                  Within Eyien resides a group of soldiers and mages known as “The Coterie”.
                  They’re a group sworn to Loyalty under King Rense, and magically bound to the city.
                  The Coterie is tasked with defending and supporting their home.
                  They defend Eyien with impunity, proud to be part of something bigger than themselves. 
                  </p>

                  <img class="floatL imageSize" src="@/assets/imgs/cursepink.jpg"/>
                  
                  <p>
                  Our main character Ydna (played by Andy) is a low ranking member of this Coterie, roped into a secret quest far beyond his intention that is rife with world ending consequences and threats. 
                  Ydna is a traveling bard a curious drifter, caught up in a flurry of proving grounds quests from his Coterie captain, Orric, the kings emmissary and conduit. 
                  Above all else Ydna is on a bardic journey to honor his grandfather, hoping to meet exemplary figures and experience all the realm of Amara 
                  has to offer. He records most, but not all of his discoveries, in his <em>songbook</em> hoping to someday become part of the legends he's read about so eagerly.
                  </p>

                  <img class="floatL imageSize" src="@/assets/imgs/ydnaQuen.jpg"/>

                  <p>
                  Along the way we discover much about Amara and the city of Eyien, uncover secrets that threaten the kingdom, and piece together the mysterious forces surrounding this grand city of opportunity and potential in "Welcome to Amara".
                  </p>
                
                  <h2>Season 1 Arrives Mid 2020</h2>
                  
                  <img class="center bigImage" src="@/assets/imgs/arri.png"/>

                  <h2>"See You in Amara"</h2>
                </section>


                <p class="signature">-Sean &amp; Andy</p>
              </main>

              <a class="discordLinkWrap" href="https://discord.gg/82GpmYD">
              <section class="discordLink"> 

                <section>
                <p>
                  <strong>Listen to the podcast before it's released to the public</strong> and help us shape the future of "Welcome to Amara".
                </p>
                <p>
                  <strong>Click this box</strong> to join our growing discord server for early access. 
                </p>
                </section>
                  <img src="@/assets/imgs/discord.png" alt="discord icon - click to join our discord">
              </section>
              </a>

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
                  <!-- <a target="_blank" href="https://discord.gg/82GpmYD">
                    <img src="@/assets/imgs/discord.png" alt="discord icon - click to join our discord">
                  </a> -->
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
                  <img class="runish imageSize" src="@/assets/imgs/runish.png" alt="a message from beyond the veil">
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
// import "@/assets/styles/mobileport.css";
// import "@/assets/styles/tablet.css";
// import "@/assets/styles/desktop.css";

import "@/assets/styles/transitions.css";



export default {
  name: 'welcomeToAmara',
  title: 'Welcome To Amara',
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
