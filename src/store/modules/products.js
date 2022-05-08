import axios from "axios";

export default {
    state: {
        currentProdList: [],
        currentPage: 0,
        totalPages: 0
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
        prodListPagedMutation(state, arg){
            for(let i=0; i<= arg.length; i++){

            state.currentProdList.push(arg[i])
            }
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
            context.commit('currentPageMutation', 0);

            context.commit('selectedCategoryIdMutation', arg.id)
            await axios.get('http://localhost:9292/product/' + arg.id,
                {params:{page: context.state.currentPage}})
                            .then(res => {
                                context.commit('currentProdListMutation', res.data.products);
                                context.commit('currentPageMutation', res.data.currentPage);
                                context.commit('totalPagesMutation', res.data.totalPages);
                })
        },

        async loadProductPage(context){
            // alert('Page loadProductPage')
            let catId= context.getters.getSelectedCategoryId
            await axios.get('http://localhost:9292/product/' + catId, {params:{page: context.state.currentPage + 1}})
                .then(res => {
                    context.commit('prodListPagedMutation', res.data.products);
                    context.commit('currentPageMutation', res.data.currentPage);
                    context.commit('totalPagesMutation', res.data.totalPages);
                })
        }
    }
}