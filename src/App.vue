<template>
  <div id="app">
        <div key="siteWrap">
          <transition name="fade" mode="out-in">
            <!-- Landing Page -->
            <div class="main" key="main" v-if="!easterYdna && !easterQuen">
              <section class="gridCont">
                <header-block/>
                <podcast-links/>
                <navigation-bar/>
                <discord-block/>
                <intro-block/>
                <audio-player/>
                <legal-stuff/>

                <section class="rings" >
                  <img @click="egg=!egg" src="@/assets/imgs/rings.gif" alt="">
                </section>

              </section>
              <section class="witchMagic"></section>
            </div>
          </transition>

          <!-- Overlay -->
          <transition name="fade" mode="out-in">
            <overlay-block key="overlay" v-if="egg"
            @secretSolve="reveal('Ydna')"
            @quenSecretSolve="reveal('Quen')"
            />
          </transition>

          <!-- Ydna -->
          <transition name="fade" mode="out-in">
            <ydna-easter-egg key="easterYdna" @backHome="easterYdna = !easterYdna" v-if="this.easterYdna"></ydna-easter-egg>
          </transition>

          <!-- Quen -->
          <transition name="fade" mode="out-in">
            <quen-easter-egg key="easterQuen" @backHome="easterQuen = !easterQuen" v-if="this.easterQuen"></quen-easter-egg>
          </transition>
        </div>



  </div>
</template>

<script>

import ydnaEasterEgg from '@/components/ydnaEasterEgg';
import quenEasterEgg from '@/components/quenEasterEgg';

import IntroBlock from "@/components/IntroBlock"
import HeaderBlock from "@/components/HeaderBlock"
import DiscordBlock from "@/components/DiscordBlock"
import NavigationBar from "@/components/NavigationBar"
import LegalStuff from "@/components/LegalStuff"
import OverlayBlock from "@/components/OverlayBlock"
import AudioPlayer from "@/components/AudioPlayer"
import PodcastLinks from "@/components/PodcastLinks"

import "@/assets/styles/global.css";
import "@/assets/styles/default.css";
import "@/assets/styles/mobileport.css";
import "@/assets/styles/tablet.css";

import "@/assets/styles/transitions.css";

export default {
  name: 'WelcomeToAmara',
  components: {
    ydnaEasterEgg,
    quenEasterEgg,
    IntroBlock,
    HeaderBlock,
    DiscordBlock,
    NavigationBar,
    LegalStuff,
    OverlayBlock,
    AudioPlayer,
    PodcastLinks

  },
    metaInfo: {
      title: 'Welcome to Amara',
      meta: [
        { charset: 'utf-8' },
        { property:"og:type", content:"website" },
        { property:"og:image", content:"https://www.welcometoamara.com/s1-wta-icon.jpg" },
        { property:"og:url", content:"https://www.welcometoamara.com" },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name:"keywords", content:"Fantasy, Podcast, Drama, Dungeon, World, Dungeon World, Dungeon World Podcast, Welcome, Amara, Story, Storytelling, RPG, Dungeons, Dragons" },
        { name: 'author', content: 'Sean Yager' },
        { name: 'og:description', content: '“Welcome to Amara” is a high production dramatic retelling podcast of a play by post Dungeon World campaign. We are Sean (The GM) and Andy (Along for the Ride), a GM/Player duo exploring the unique high fantasy world of Amara.'},
      ],
    },
  data() {
    return {
      interaction: false,
      easterQuen: false,
      easterYdna:false,
      egg: false,
    }
  },
  methods:{
    reveal(who){
      if(who === "Ydna"){
        this.easterYdna = !this.easterYdna;
      }
      else if(who === "Quen"){
        this.easterQuen = !this.easterQuen;
      }
      this.egg = false;
    }
  },
  destroyed: function () {
    this.transAudio.volume = 0.3;
    this.transAudio.play();
  }
}
</script>

<style>
/* DEFAULT STYLES */
#app {
        overflow-x: hidden;
    }

.gridCont {
    width:90%;
    max-width:500px;
    margin:0 auto;
    display:block;
}

.rings {
  display:flex;
  justify-content: center;
  margin-bottom:100px;
}

.rings img {
  width:105px;
}

.rings img:hover {
  cursor:pointer;
  filter: hue-rotate(-90deg);
}

.witchMagic {
  z-index:-999;
  width:100%;
  height:300px;
  position:fixed;
  bottom:-103px;
  background-image:url('./assets/imgs/witchcraft.gif');
  background-blend-mode: screen;
  opacity:1;
  background-size: 700px;
  background-repeat: repeat-x;
}

/* MOBILE PORTRAIT MODE */
@media (min-width: 667px) {
    body {
       background-image:url('./assets/imgs/mobileBackground.png');
       background-repeat: repeat-y;
       background-size: cover;
   }

  .gridCont {
    max-width:667px;
  }
}

/* TABLET STYLES */
@media (min-width: 768px) {
  body {
       background-image:url('./assets/imgs/mobileBackground.png');
       background-repeat: repeat-y;
       background-size: cover;
   }
  
  .gridCont {
       max-width:900px;
   }
}

</style>

