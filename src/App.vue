<template>
  <div id="app">
      <transition name="fade" mode="out-in">
        
        <!-- Ring intro page -->
        <ring-intro key="intro" @login="interaction = true" class="introRings" v-if="!this.interaction"></ring-intro>
      
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
  },
    metaInfo: {
      title: 'Welcome to Amara',
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
