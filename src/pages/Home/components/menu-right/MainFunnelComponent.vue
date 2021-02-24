<template>
    <div class="main-funnel">
        <span>Funis Favoritos</span>

        <div class="scroll">
            <div class="top-funnel">
                <div class="avatar">
                    <span><i class="fa fa-filter"></i></span>
                </div>
                <div class="info">
                    <p class="name">Funil de vendas para leds</p>
                    <p class="status">Postado recente</p>
                </div>
            </div>
            <hr>
            <div class="top-funnel">
                <div class="avatar">
                    <span><i class="fa fa-filter"></i></span>
                </div>
                <div class="info">
                    <p class="name">Funil de vendas para leds</p>
                    <p class="status">Postado recente</p>
                </div>
            </div>
            <hr>
            <div class="top-funnel">
                <div class="avatar">
                    <span><i class="fa fa-filter"></i></span>
                </div>
                <div class="info">
                    <p class="name">Funil de vendas para leds</p>
                    <p class="status">Postado recente</p>
                </div>
            </div>
            <hr>
            <div class="top-funnel">
                <div class="avatar">
                    <span><i class="fa fa-filter"></i></span>
                </div>
                <div class="info">
                    <p class="name">Funil de vendas para leds</p>
                    <p class="status">Postado recente</p>
                </div>
            </div>
            <hr>
            <div class="top-funnel">
                <div class="avatar">
                    <span><i class="fa fa-filter"></i></span>
                </div>
                <div class="info">
                    <p class="name">Funil de vendas para leds</p>
                    <p class="status">Postado recente</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainFunnelComponent',

    
}
</script>


<style lang="scss" scoped>
@import '@/assets/scss/_main';

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
            display: flex;
            align-items: center;
            margin: 15px 0;

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
                }

                .name{
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
</style>