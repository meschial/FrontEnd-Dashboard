const mutations = {
    SET_RECENT(state, recent){
        state.items = recent
    },

    SET_RECENT_ID(state, recentId){
        state.recentId = recentId
    }
}

export default mutations
