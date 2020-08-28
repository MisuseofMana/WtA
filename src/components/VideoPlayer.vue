<template>
    <div class="vidBlock block">
        <video width="600" controls>
            <source src="@/assets/video/trailer.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
</template>

<script>
    export default {
        name:"VideoPlayer"
    }
</script>

<style scoped>
.vidBlock {
    display:flex;
    justify-content: center;
    align-items: center;
}
</style>