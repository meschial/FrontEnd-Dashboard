<template>  
  <div id="sidebar">
      <div class="top-bar">
          <LogoComponent />
      </div>

      <div class="menu-bar">
        <MenuComponent />
      </div>

      <div class="account-bar">
        <AccountComponent />
      </div>

      <div class="logout-bar">
        <LogoutComponent />
      </div>
  </div>
</template>

<script>
import LogoComponent from './sidebar/LogoComponent'
import MenuComponent from './sidebar/MenuComponent'
import AccountComponent from './sidebar/AccountComponent'
import LogoutComponent from './sidebar/LogoutComponent'
export default {

    components:{
      LogoComponent,
      AccountComponent,
      MenuComponent,
      LogoutComponent
    }
}

</script>

<style lang="scss">
::-webkit-scrollbar-track {
        background-color: #F4F4F4;
        display: none;
    }
    ::-webkit-scrollbar {
        width: 3px;
        background: #F4F4F4;
        display: none;
    }
    ::-webkit-scrollbar-thumb {
        background: $blue;
        display: none;
    }
    
@media (max-width: 768px) {
  #sidebar {
    margin-left: -17rem;
    transition-duration: 0.5s;
    z-index: 2;
  }
  #sidebar.active {
    margin-left: 0;
    z-index: 2;
    transition-duration: 0.5s;
  }
  #content {
    width: auto;
    margin: 0;
    z-index: 2;
  }
}
</style>