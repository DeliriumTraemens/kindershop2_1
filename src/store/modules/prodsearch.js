import axios from "axios";

export default{
    state: {
        result: [],
        productList:[],
        manufacturers:[],
        categories:[],
        currPage:'',
        totalPgs:'',
        searchName:''
    },
    getters: {
        getResult(state){
            return state.result
        },
        getProducts(state){
            return state.productList
        },
        getManufacturers(state){
            return state.manufacturers
        },
        getCategories(state){
            return state.categories
        },
        getCurrPage(state){
            return state.currPage
        },
        getTotalPgs(state){
            return state.totalPgs
        },
        getSearchName(state){
            return state.searchName
        }

    },
    mutations: {
        resultMutation(state, arg){
            state.result=arg
        },
        productsMutation(state, arg){
            state.productList=arg
            // arg.forEach(product => {
            //     state.products.push(product)
            // })
            // state.products = arg
        },

        productFilterMutation(state, arg){
            state.productList=arg
        },

        manufacturersMutation(state, arg){
            state.manufacturers=arg},
        categoriesMutation(state, arg){
            state.categories=arg},
        currPageMutation(state, arg){
            state.currPage=arg},
        totalPgsMutation(state, arg){
            state.totalPgs=arg},
        searchNameMutation(state, arg){
            state.searchName = arg
        }

    },
    actions: {
        searchProducts(context, arg){
            // alert('Your entered \'' + arg+'\''+typeof(arg))
            context.commit('searchNameMutation', arg)
            const sd = new FormData();
            sd.append('name', arg)

            axios.post('http://localhost:9292/prodcat/find', sd,
                {
                    maxContentLength: 0,
                    maxBodyLength: 0
                }).then(res=>{
                    context.commit('productsMutation', res.data.products)
                    context.commit('manufacturersMutation',res.data.manufacturers)
                    console.log(res.data)
            })
        },

   async filterManufacturers(context, arg){
            context.commit('productFilterMutation',[])
            const sd = new FormData();
            sd.append('id', arg ),
                sd.append('name', context.getters.getSearchName)
     await   axios.post('http://localhost:9292/prodcat/manFilter', sd,
            {
            maxContentLength: 0,
            maxBodyLength: 0
        }).then(result => {
            context.commit('productFilterMutation', result.data)
            console.log('State PRODUCTS')
            console.log(context.state.products)
        })
    }
   }
}