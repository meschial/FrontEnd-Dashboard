<template>
    <div id="app">

        <MenuMobileComponent  />
       
        <SideBarComponent  />

        <main>
            <div class="pages">
                <router-view />
            </div>

        </main>
    </div>
</template>

<script>
import SideBarComponent from '@/components/SideBarComponent';
import MenuMobileComponent from '@/components/MenuMobileComponent';

export default {
    name: 'DashboardComponent',

    components:{
        SideBarComponent,
        MenuMobileComponent,
    },
}
</script>

<style lang="scss" scoped>
</style>