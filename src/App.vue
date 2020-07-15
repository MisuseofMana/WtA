<template>
  <div id="app">
      <transition name="fade" mode="out-in">
        <section v-if="!this.interaction">
          <media-player /> 
          <!-- Ring intro page -->
          <ring-intro key="intro" @login="interaction = true" class="introRings"></ring-intro>
        </section>
      
        <!-- Main Content -->
        <main-page key="mainPage" 
        @secretSolve="easter = !easter" v-if="this.interaction && (!this.easter && !this.easterQuen)"
        @quenSecretSolve="easterQuen = !easterQuen"
        ></main-page>

        <!-- A Secret -->
        <ydna-easter-egg key="easter" @backHome="easter = !easter" v-if="this.easter"></ydna-easter-egg>
        
        <!-- Another Secret -->
        <quen-easter-egg key="easter" @backHome="easterQuen = !easterQuen" v-if="this.easterQuen"></quen-easter-egg>

      </transition>
  </div>
</template>

<script>
import mediaPlayer from "@/components/mediaPlayer"
import ringIntro from '@/components/ringIntro';
import mainPage from '@/components/mainPage';
import ydnaEasterEgg from '@/components/ydnaEasterEgg';
import quenEasterEgg from '@/components/quenEasterEgg';

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
    ringIntro,
    mainPage,
    mediaPlayer,
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
      easter: false,
      easterQuen: false,
    }
  },
}

</script>
