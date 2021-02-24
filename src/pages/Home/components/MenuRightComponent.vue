<template>
    <div class="menu-righr">
        <div class="search">
            <SearchComponent />
        </div>

        <div class="new-funnel">
            <NewFunnelComponent />
        </div>

        <div class="main-funnel-favorite">
            <MainFunnelComponent />
        </div>

        <div class="updates-recents">
            <RecentUpdateComponent />
        </div>
    </div>
</template>

<script>
import SearchComponent from './menu-right/SearchComponent'
import NewFunnelComponent from './menu-right/NewFunnelComponent'
import MainFunnelComponent from './menu-right/MainFunnelComponent'
import RecentUpdateComponent from './menu-right/RecentUpdateComponent'

export default {
    name: 'MenuRightComponent',

    components:{
        SearchComponent,
        NewFunnelComponent,
        MainFunnelComponent,
        RecentUpdateComponent,
    }
}


</script>

<style lang="scss" scoped>
@import '@/assets/scss/_main';

.menu-righr{
    margin: 65px 0;
}
</style>