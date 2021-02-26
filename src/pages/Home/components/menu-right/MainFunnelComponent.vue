<template>
    <div class="main-funnel">
        <span>Funis Favoritos</span>

        <div class="scroll">

            <div class="top-funnel" v-for="(funil, index) in funnel.items" :key="index">
                <router-link :to="{name: 'funnelId', params: {id: funil.id}}">
                    <div class="avatar">
                        <span><i class="fa fa-filter"></i></span>
                    </div>
                    <div class="info">
                        <p>{{funil.name}}</p>
                        <p class="status">{{funil.email}}</p>
                    </div>
                </router-link>
            </div>
            
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: 'MainFunnelComponent',

    mounted(){
        this.getFunnel()
        .catch(response => this.$vToastify.error("Falha ao Carregar Funis Favoritos", "Erro! "))
    },

    computed:{
        ...mapState({
            funnel: state => state.funnel
        })
    },

    methods:{
        ...mapActions([
            'getFunnel'
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
        height: 350px;        
        .top-funnel{
            width: 100%;
            border-bottom: 1px solid #f1f1f1;

            a{
                display: flex;
                align-items: center;
                margin: 15px 0;
                text-decoration: none;

                .avatar{
                    span{
                        display: block;
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 25px;
                    }
                }

                .info{
                    
                    p{
                        margin: 0;
                        color: $blue;
                        font-size: 15px;
                    }

                    .status{
                        font-size: 10px;
                        color: #222;
                    }
                }
            }
        }
    }
}
</style>