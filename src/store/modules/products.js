import axios from "axios";

export default {
    state: {
        currentProdList: [],
        currentPage: '',
        totalPages: ''
    },
    getters: {
        getCurrentProdList(state) {
            return state.currentProdList
        },
        getCurrentPage(state) {
            return state.currentPage
        },
        getTotalPages(state) {
            return state.totalPages
        }
    },
    mutations: {
        currentProdListMutation(state, arg) {
            state.currentProdList = arg
        },
        currentPageMutation(state, arg) {
            state.currentPage = arg
        },
        totalPagesMutation(state, arg) {
            state.totalPages = arg
        }

    },
    actions: {
        async setCurrentProdList(context, arg) {
            await axios.get('http://localhost:9292/product/' + arg.id)
                .then(res => {
                    context.commit('currentProdListMutation', res.data.products);
                    context.commit('currentPageMutation', res.data.currentPage);
                    context.commit('totalPagesMutation', res.data.totalPages);
                    console.log('Pagination')
                    console.log('Current Page  ' + res.data.currentPage)
                    console.log('Total Pages  ' + res.data.totalPages)
                    // console.log(context.getters.getCurrentProdList)
                })
        }
    }
}