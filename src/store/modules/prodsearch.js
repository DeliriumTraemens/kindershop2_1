import axios from "axios";

export default{
    state: {
        result: [],
        products:[],
        manufacturers:[],
        categories:[],
        currPage:'',
        totalPgs:''
    },
    getters: {
        getResult(state){
            return state.result
        },
        getProducts(state){
            return this.state.products
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
        }

    },
    mutations: {
        resultMutation(state, arg){
            state.result=arg
        },
        productsMutation(state, arg){
            state.products=arg},
        manufacturersMutation(state, arg){
            state.manufacturers=arg},
        categoriesMutation(state, arg){
            state.categories=arg},
        currPageMutation(state, arg){
            state.currPage=arg},
        totalPgsMutation(state, arg){
            state.totalPgs=arg}

    },
    actions: {
        searchProducts(context, arg){
            alert('Your entered \'' + arg+'\''+typeof(arg))
            const sd = new FormData();
            sd.append('name', arg)

            axios.post('http://localhost:9292/prodcat/search', sd,
                {
                    maxContentLength: 0,
                    maxBodyLength: 0
                }).then(res=>{
                    console.log(res.data)
            })
        }
    }
}