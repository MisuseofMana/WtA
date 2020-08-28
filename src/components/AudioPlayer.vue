<template>
    <div class="episodePlayer">
        <iframe src="https://www.podbean.com/media/player/multi?playlist=http%3A%2F%2Fplaylist.podbean.com%2F9027875%2Fplaylist_multi.xml&amp;vjs=1&amp;size=430&amp;skin=13&amp;episode_list_bg=%23ffffff&amp;bg_left=%23490025&amp;bg_mid=%23640018&amp;bg_right=%23490025&amp;podcast_title_color=%23ff0080&amp;episode_title_color=%23ff0080&amp;auto=0&amp;share=0&amp;fonts=Verdana&amp;download=0&amp;rtl=0&amp;show_playlist_recent_number=5" 
        title="Welcome to Amara" 
        width="100%" 
        height="500" 
        scrolling="no" 
        style="border: none;"></iframe>
    </div>
</template>

<script>
    export default {
        name:"AudioPlayer"
    }
</script>

<style scoped>
.episodePlayer {
    display:grid;
    grid-column: 1/3;
}
</style>