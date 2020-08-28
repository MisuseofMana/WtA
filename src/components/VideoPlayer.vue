<template>
    <div class="vidBlock block">
        <video id="my_video_1" class="video-js vjs-default-skin"
      controls preload="none" poster='@/assets/imgs/video-poster.png'>
    <source src="@/assets/video/trailer.mp4" type='video/mp4' />

  </video>
    </div>
</template>

<script>
    export default {
        name:"VideoPlayer"
    }
</script>

<style scoped>
video {
  width: 100%;
  height: auto;
}

.vidBlock {
    display:flex;
    justify-content: center;
    align-items: center;
}

/* MOBILE PORTRAIT MODE */
@media (min-width: 667px) {

}

/* TABLET STYLES */
@media (min-width: 768px) {
.vidBlock video{
}
}
</style>