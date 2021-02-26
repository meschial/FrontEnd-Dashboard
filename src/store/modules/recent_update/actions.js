import axios from 'axios'

const RESOURCE = 'albums'

const actions = {
    getRecent({ commit }){
        return axios.get(`/${RESOURCE}`)
            .then(response => commit('SET_RECENT', response.data))
    },

    getRecentId({ commit }, id){
        return axios.get(`/${RESOURCE}/${id}`)
            .then(response => commit('SET_RECENT_ID', response.data))
    }
}

export default actions
