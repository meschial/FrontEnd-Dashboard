<template>
<div class="row">
  <h2>Atualização: {{recentId}} </h2>
</div>
  
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name:'RecentUpdadeIdComponent',
 
    props:{
      id:{
        required: true
      }
    },

    mounted(){
        this.getRecentId(this.id)
        .catch(response => this.$vToastify.error("Falha ao Carregar Atualização", "Erro! "))
    },

    computed:{
        ...mapState({
            recentId: state => state.recent_update.recentId
        })
    },

    methods:{
        ...mapActions([
            'getRecentId'
        ])
    }
}
</script>

<style>

</style>