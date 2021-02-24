<template>
    <div class="main-funnel">
        <span>Atualizações Recentes</span>

        <div class="scroll">
            <div class="top-funnel">
                <div class="info">
                    <p class="name">Atualizando Funil para leds</p>
                </div>
            </div>
            <hr>
            <div class="top-funnel">
                <div class="info">
                    <p class="name">Atualizando Funil para leds</p>
                </div>
            </div>
            <hr>
            <div class="top-funnel">
                <div class="info">
                    <p class="name">Atualizando Funil para leds</p>
                </div>
            </div>
            <hr>
            <div class="top-funnel">
                <div class="info">
                    <p class="name">Atualizando Funil para leds</p>
                </div>
            </div>
            <hr>
            <div class="top-funnel">
                <div class="info">
                    <p class="name">Atualizando Funil para leds</p>
                </div>
            </div>
            <hr>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecentUpdateComponent'
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
        height: 200px; 

        .top-funnel{
            width: 100%;
            display: flex;
            align-items: center;
            margin: 15px 0;

            .info{

                p{
                    margin: 0;
                    color: $blue;
                }

                .name{
                    font-size: 15px;
                }
            }
        }
    }
}
</style>