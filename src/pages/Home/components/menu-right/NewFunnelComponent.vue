<template>
        <button class="funnel">CRIAR FUNIL</button>
</template>

<script>
export default {
    name: 'NewFunnelComponent'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_main';

.funnel{
    margin-top: 50px;
    background-color: $orange;
    border-radius: 5px;
    padding: 20px 0;
    width: 100%;
    color: #fff;
    border: none;
}
.funnel:hover{
    background-color: #9ec42c;
    transition-duration: 0.3s;
}
</style>