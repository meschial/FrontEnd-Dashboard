<template>
  <div>
    <HeaderComponent />
    
    <CardsComponenet />
  </div>  
</template>

<script>
import HeaderComponent from './components/HeaderComponent'
import CardsComponenet from './components/CardsComponenet'
export default {
  name: 'PagesComponent',
  components:{
    CardsComponenet,
    HeaderComponent
  }
}
</script>

<style lang="scss" scoped>

</style>