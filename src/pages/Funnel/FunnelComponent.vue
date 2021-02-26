<template>
  <div class="row">
      <div class="col-md-9">
        <header class="title_pages">
          <p>Funil</p>
          <h2>{{funnel}}</h2>
        </header>
      </div>
  </div>
</template>

<script>
import {mapState } from 'vuex'
export default {
  name: 'FunnelComponent',

  computed:{
        ...mapState({
            funnel: state => state.funnel
        })
    },
}
</script>

<style lang="scss" scoped>
.title_pages{
    margin: 65px 0;
    font-size: 25px;
    color: $blue;
    font-weight: bold;
}
</style>