import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'

Vue.use(VueMeta);

// This is a global mixin, it is applied to every vue instance
Vue.mixin({
  data: function() {
    return {
      transAudio: new Audio(require('@/assets/audio/magicPortal.mp3')),
    }
  }
})


new Vue({
  metaInfo: () => ({
    title: 'Welcome to Amara - A Podcast',
    titleTemplate: '%s | Welcome to Amara',
    htmlAttrs: {
      lang: 'en',
      amp: undefined
    },
    meta: [
      { charset: 'utf-8' },
        
        {name: 'twitter:card', content: '“Welcome to Amara” is a high production dramatic retelling podcast of a play by post Dungeon World campaign.'},
        {name: 'twitter:title', content: 'Welcome to Amara - The Podcast'},
        {name: 'twitter:description', content: 'Welcome To Amara website, click to discover more of Amara.'},

        {name: 'twitter:image', content: 'https://www.welcometoamara.com/s1-wta-icon.png'},

        {property: 'og:title', content: 'Welcome to Amara - The Podcast'},
        {property: 'og:site_name', content: '“Welcome to Amara” is a high production dramatic retelling podcast of a play by post Dungeon World campaign.'},

        {itemprop: 'name', content: 'Welcome to Amara - The Podcast'},
        {itemprop: 'description', content: '“Welcome to Amara” is a high production dramatic retelling podcast of a play by post Dungeon World campaign. We are Sean (The GM) and Andy (Along for the Ride), a GM/Player duo exploring the unique high fantasy world of Amara.'},
        {itemprop: 'image', content: 'https://www.welcometoamara.com/s1-wta-icon.png'},
        
        
        {property: 'og:type', content: 'website'},
        {property: 'og:image', content:  'https://www.welcometoamara.com/s1-wta-icon.png'},
        {property: 'og:description', content: 'Welcome To Amara website, click to discover more of Amara.'},

        { property:"og:title", content:"Welcome to Amara - The Podcast" },
        { property:"og:type", content:"website" },
        { property:"og:image", content: 'https://www.welcometoamara.com/s1-wta-icon.png' },


        { property:"og:url", content:"https://www.welcometoamara.com" },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property:"keywords", content:"Fantasy, Podcast, Drama, Dungeon, World, Dungeon World, Dungeon World Podcast, Welcome, Amara, Story, Storytelling, RPG, Dungeons, Dragons" },
        { property: 'author', content: 'Sean Yager' },
        { name: 'description', content: '“Welcome to Amara” is a high production dramatic retelling podcast of a play by post Dungeon World campaign. We are Sean (The GM) and Andy (Along for the Ride), a GM/Player duo exploring the unique high fantasy world of Amara.'},
        { property: 'og:description', content: '“Welcome to Amara” is a high production dramatic retelling podcast of a play by post Dungeon World campaign. We are Sean (The GM) and Andy (Along for the Ride), a GM/Player duo exploring the unique high fantasy world of Amara.'},
    ],
    script: [
      { innerHTML: '{ "@context": "http://www.schema.org", "@type": "Organization" }', type: 'application/ld+json' },
      { innerHTML: '{ "body": "yes" }', body: true, type: 'application/ld+json' }
    ],
    __dangerouslyDisableSanitizers: ['script']
  }),
  render: h => h(App),
}).$mount('#app')

