import axios from 'axios'
export default{
    state: {
        categoryList:[{}]
    },
    getters:{
        getCategoryList(state){
            return state.categoryList
        }
    },
    mutations: {
        categoryListMutation(state, arg){
            state.categoryList = arg
        }
    },
    actions: {
        async setCategoryList(context){
            await axios.get('http://localhost:9292/category').then(res=>{
                context.commit('categoryListMutation', res.data)
            })
        }
    },
}
