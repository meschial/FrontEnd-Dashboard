<template>
    <div class="menu-mobile fixed-top">
        <div class="page-content" id="content">
            <button id="sidebarCollapse" type="button"><i class="fas fa-bars"></i></button>
        </div>
        <div class="text">
            <span>G Digital</span>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'; 
export default {
    name:'MenuMobileComponent',

     mounted(){
    //toggle sidebar
     $('#sidebarCollapse').on('click', function() {
      $('#sidebar').toggleClass('active');
    });
  },
    
}
</script>

<style lang="scss" scoped>
.menu-mobile{
    display: flex;
    padding: 10px;
    color: #fff;
    background-color: $blue-dark;
    font-size: 25px;

    button{
        color: #fff;
        background-color: $blue;
        border: 0;
        border-radius: 7px;
        width: 40px;
        height: 40px;
    }

    .icon{
        width: 0;
        display: flex;
        align-items: center;
    }
    .text{
        display: flex;
        width: 100%;
        position: absolute;
        align-items: center;
        justify-content: center;
        font-weight: bold;
    }
}

</style>