<template>
  <div class="sidebar">
    
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
    name: 'SideBarComponent',
    components:{
      LogoComponent,
      AccountComponent,
      MenuComponent,
      LogoutComponent
    }
}

</script>

<style lang="scss">

</style>