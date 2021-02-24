<template>
    <div class="training">
        <img src="@/assets/img/funil.png" alt="">
    </div>
    
</template>

<script>
export default {
    name: 'BannerComponent',
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_main';

.training{
    width: 100%;
    height: 150px;

    img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
}

</style>