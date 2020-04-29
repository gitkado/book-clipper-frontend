export const state = () => ({
    successMessage: ""
})

export const mutations = {
    setSuccessMessage(state, message) {
        state.successMessage = message
    },
    resetSuccessMessage(state) {
        state.successMessage = ""
    }
}

export const actions = {
    flashSuccessMessage({commit}, message) {
        commit("setSuccessMessage", message)
        setTimeout(() => {
          commit("resetSuccessMessage")
        }, 5000)
    }
}
