import axios from "axios";
export default{
    state:{
        currentProdList:[{}]
    },
    getters:{
        getCurrentProdList(state){
            return state.currentProdList
        }
    },
    mutations:{
        currentProdListMutation(state, arg){
            state.currentProdList=arg
}
    },
    actions:{
        async setCurrentProdList(context, arg){
            await axios.get('http://localhost:9292/product/'+arg.id)
                .then(res=>{
                    context.commit('currentProdListMutation', res.data);
                    // console.log(context.getters.getCurrentProdList)
                })
        }
    }
}