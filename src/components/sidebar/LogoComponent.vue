<template>
    <div class="top">
        <div class="logo">
            <img src="@/assets/img/logo.png" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'LogoComponent',
}
</script>

<style lang="scss">

.top{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px 5px;
    margin-top: 55px;

    .logo{
      margin-right: 10px;
    }
  }
</style>