import axios from 'axios'

export default {
    state: {
        categoryList: [],
        selectedCategoryId: Number
    },
    getters: {
        getCategoryList(state) {
            return state.categoryList
        },
        getSelectedCategoryId(state){
            return state.selectedCategoryId
        }
    },
    mutations: {
        categoryListMutation(state, arg) {
            state.categoryList = arg
        },
        selectedCategoryIdMutation(state, arg){
            state.selectedCategoryId = arg
        }
    },
    actions: {
        async setCategoryList(context) {
            await axios.get('http://localhost:9292/category').then(res => {
                context.commit('categoryListMutation', res.data)
            })
        },
        removeCategory(context, arg) {
            axios.delete('http://localhost:9292/category').then(res => {
                console.log(res)
            })

        }
    },
}
