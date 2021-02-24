<template>
    <div id="app">

        <SideBarComponent />

        <main>
            
            <div class="pages">
                <router-view></router-view>
            </div>

        </main>
    </div>
</template>

<script>
import SideBarComponent from '@/components/SideBarComponent';

export default {
    name: 'DashboardComponent',
    components:{
        SideBarComponent,
    }
}
</script>

<style lang="scss" scoped>

</style>