<template>
    <div class="main-funnel">
        <span>Atualizações Recentes</span>

        <div class="scroll">
            
            <div class="top-funnel" v-for="(recent, index) in recent.items" :key="index">
                <router-link :to="{name: 'recentId', params: {id: recent.id}}">
                    <p class="name">{{ recent.title }}</p>
                </router-link>
            </div>
            
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: 'RecentUpdateComponent',

    mounted(){
        this.getRecent()
        .catch(response => this.$vToastify.error("Falha ao Carregar Atualizações Recentes", "Erro! "))
    },

    computed:{
        ...mapState({
            recent: state => state.recent_update
        })
    },

    methods:{
        ...mapActions([
            'getRecent'
        ])
    }
}
</script>

<style lang="scss" scoped>

.main-funnel{
    margin-top: 50px;
    background-color: #fff;
    padding: 20px 20px;
    span{
        font-size: 25px;
        color:$blue;
        font-weight: bold;
    }
    .scroll{
        overflow:auto; 
        height: 200px; 

        .top-funnel{
            width: 100%;
            margin: 15px 0;
            border-bottom: 1px solid #f1f1f1;

            a{
                text-decoration: none;

                p{
                    margin: 0;
                    color: $blue;
                    font-size: 15px;
                }
                
            }
        }
    }
    ::-webkit-scrollbar-track {
        background-color: #F4F4F4;
    }
    ::-webkit-scrollbar {
        width: 3px;
        background: #F4F4F4;
    }
    ::-webkit-scrollbar-thumb {
        background: $blue;
    }
}
</style>