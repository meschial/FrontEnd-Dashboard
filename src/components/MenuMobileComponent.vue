<template>
    <div class="menu-mobile" >
        <div class="icon">
            <i class="fa fa-bars"></i>
        </div>
        <div class="text">
            <span>G Digital</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'MenuMobileComponent',
}
</script>

<style lang="scss" scoped>
.menu-mobile{
    display: flex;
    padding: 10px;
    color: #fff;
    background-color: $blue-dark;
    font-size: 25px;

    .icon{
        width: 0;
        display: flex;
        align-items: center;
    }
    .text{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-weight: bold;
    }
}
</style>