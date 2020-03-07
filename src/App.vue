<template>
  <div id="app">
      <transition name="fade" mode="out-in">
        
        <!-- Ring intro page -->
        <ring-intro key="intro" @login="interaction = true" class="introRings" v-if="!this.interaction"></ring-intro>
      
        <!-- Main Content -->
        <main-page key="mainPage" @secretSolve="easter = !easter" v-if="this.interaction && !this.easter"></main-page>

        <!-- A Secret -->
        <easter-egg key="easter" @backHome="easter = !easter" v-if="this.easter"></easter-egg>

      </transition>
  </div>
</template>

<script>
import ringIntro from '@/components/ringIntro';
import mainPage from '@/components/mainPage';
import easterEgg from '@/components/easterEgg';

import "@/assets/styles/global.css";

import "@/assets/styles/default.css";

import "@/assets/styles/mobileport.css";
import "@/assets/styles/tablet.css";

import "@/assets/styles/transitions.css";

export default {
  name: 'welcomeToAmara',
  components: {
     easterEgg,
     ringIntro,
     mainPage,
  },
  data() {
    return {
      interaction: false,
      easter: false,
    }
  },
}

</script>
