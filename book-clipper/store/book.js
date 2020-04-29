import axios from 'axios'

export const state = () => ({
    books: []
})

export const mutations = {
    setBooks(state, books) {
        state.books = books
    },
    removeBooks(state, i) {
        state.books.splice(i, 1);
    }
}

export const actions = {
    async getBooks({ commit }) {
        await axios.get("/Prod/books").then((response) => {
            if (response.status === 200) {
                commit('setBooks', response.data)
            } else {
                throw new Error('レスポンスエラー');
            }
        })
    },
    async deleteBooks({ commit, dispatch }, created_at, i) {
        await axios.delete(`/Prod/books/${created_at}`).then((response) => {
            if (response.status === 200) {
                commit('removeBooks', i)
                dispatch('message/flashSuccessMessage', 'Book deleted !', {root: true})
            } else {
                throw new Error('レスポンスエラー');
            }
        })
    },
}
