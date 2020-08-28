<template>
    <div class="podLinks block">
        <a href="https://podcasts.apple.com/us/podcast/welcome-to-amara/id1523678193" target="_blank">
            <img src="@/assets/imgs/apple.png" alt="apple podcasts icon">
        </a>

        <a target="_blank" href="https://open.spotify.com/show/5IuBjUDtI4uZySPwqkoUT1?si=GL5kvCDcSze79MR13QpDtg">
            <img src="@/assets/imgs/spotify.png" alt="spotify icon">
        </a>

        <a target="_blank" href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL3dlbGNvbWV0b2FtYXJhL2ZlZWQueG1s">
            <img src="@/assets/imgs/google.png" alt="google podcasts logo">
        </a>
        <a target="_blank" href="https://www.stitcher.com/podcast/welcome-to-amara">
            <img src="@/assets/imgs/stitcher.png" alt="stitcher logo">
        </a>
    </div>
</template>

<script>
    export default {
        name:"PodcastLinks"
    }
</script>

<style scoped>
/* DEFAULT STYLES - MOBILE SITE */
.podLinks {
    display:flex;
    justify-content: space-evenly;
    align-content: center;
}

.podLinks img {
    height:50px;
}

/* MOBILE PORTRAIT MODE */
@media (min-width: 667px) {

}

/* TABLET STYLES */
@media (min-width: 768px) {

}
</style>