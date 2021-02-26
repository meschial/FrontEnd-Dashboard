<template>
<div class="row">
  <h2>Funil: {{funnel}} </h2>
</div>
  
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name:'FunnelIdComponent',
 
    props:{
      id:{
        required: true
      }
    },

    mounted(){
        this.getFunnelId(this.id)
        .catch(response => this.$vToastify.error("Falha ao Carregar Funil", "Erro! "))
    },

    computed:{
        ...mapState({
            funnel: state => state.funnel.funnelId
        })
    },

    methods:{
        ...mapActions([
            'getFunnelId'
        ])
    }
}
</script>

<style>

</style>