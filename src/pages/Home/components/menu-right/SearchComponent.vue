<template>
<div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1"><i class="fa fa-search"></i></span>
    <input type="text" class="form-control" placeholder="Buscar">
</div>
  
</template>

<script>
export default {
    name: 'SearchComponent'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_main';

.input-group-text{
        border: none;
        background-color: #fff;
        border-top-left-radius: 50px !important;
        border-bottom-left-radius: 50px !important;
        padding: 0 0 0 50px;
    }
    .form-control{
        border: none;
        border-top-right-radius: 50px !important;
        border-bottom-right-radius: 50px !important;

    }
</style>