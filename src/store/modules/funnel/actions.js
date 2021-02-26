import axios from 'axios'

const RESOURCE = 'users'

const actions = {

    getFunnel({ commit }){
        return axios.get(`/${RESOURCE}`)
            .then(response => commit('SET_FUNNEL', response.data))
    },

    getFunnelId({ commit}, id){
            return axios.get(`/${RESOURCE}/${id}`)
                .then(response => commit('SET_FUNNEL_ID', response.data))
        }
}

export default actions
