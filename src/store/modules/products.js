import axios from "axios";

export default {
    state: {
        currentProdList: [],
        currentPage: 0,
        totalPages: 0,
        currentProductCard: {},
        currentProductId: '',
        selectedProductId: '',
        selectedProductImages:[],
        selectedProduct:{}

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
        },
        getCurrentProductCard(state){
            return state.currentProductCard
        },
        getCurrentProductId(state){
            return state.currentProductId
        },
        getSelectedProductId(state){
            return state.selectedProductId
        },
        getSelectedProductImages(state){
            return state.selectedProductImages
        },
        getSelectedProduct(state){
            return state.selectedProduct
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
        },
        currentProductCardMutation(state, arg){
            state.currentProductCard = arg
        },
        currentProductIdMutation(state, arg){
            state.currentProductId = arg
        },
        selectedProductIdMutation(state, arg){
            state.selectedProductId= arg
        },
        selectedProductImagesMutation(state,arg){
            state.selectedProductImages=arg
            state.selectedProductImages.push(state.selectedProduct.image)
            state.selectedProduct.images.forEach(el =>{state.selectedProductImages.push(el.image)})
            state.selectedProduct.images=state.selectedProductImages
        },
        selectedProductMutation(state,arg){
            state.selectedProduct = arg
        }

    },
    actions: {
        async loadProductPage(context){
            // alert('Page loadProductPage')
            let catId= context.getters.getSelectedCategoryId
            await axios.get('http://localhost:9292/product/' + catId, {params:{page: context.state.currentPage + 1}})
                .then(res => {
                    context.commit('prodListPagedMutation', res.data.products);
                    context.commit('currentPageMutation', res.data.currentPage);
                    context.commit('totalPagesMutation', res.data.totalPages);
                })
        },
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


        async setCurrentProduct(context, arg){
            // alert('store start')
            const idx=arg.id
            await axios.get('http://localhost:9292/prodshow/'+idx).then(res => {
                console.log(res.data)
                const product = res.data
                // console.log('===========')
                // console.log(product)
                context.commit('currentProductCardMutation', product);

                // console.log(' ---------------getCurrentProduct -------------')
                // console.log(context.getters.getCurrentProductCard)
            })

        },

        async setSelectedProduct(context, arg){
            // alert('It\'s an store method ' + arg )
            context.commit('selectedProductIdMutation', arg);
            await axios.get('http://localhost:9292/prodshow/' + arg).then(res => {
                context.commit('selectedProductMutation', res.data);
                context.commit('selectedProductImagesMutation',[])
            })


        }
    }
}