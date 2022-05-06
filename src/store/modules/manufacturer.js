import axios from "axios";

export default {
    state: {
        manufacturerList: [],
        selectedManufacturer: {},
        currentManPage: 0,
        totalManPages: Number,
        manProdList: [],
        manCatList:[]
    },
    getters: {
        getManufacturerList(state) {
            return state.manufacturerList
        },
        getSelectedManufacturer(state) {
            return state.selectedManufacturer
        },
        getCurrentManPage(state) {
            return state.currentManPage
        },
        getTotalManPages(state) {
            return state.totalManPages
        },
        getManCatList(state){
          return state.manCatList
        }
    },
    mutations: {
        manufacturerListMutation(state, arg) {
            state.manufacturerList = arg
        },
        selectedManufacturerMutation(state, arg) {
            state.selectedManufacturer = arg
        },
        currentManPageMutation(state, arg) {
            state.currentManPage = arg
        },

        totalManPageMutation(state, arg) {
            state.totalManPage = arg
        },
        manCatListMutation(state, arg){
            state.manCatList = arg
        }

    },
    actions: {
        setManufacturerList(context) {
            axios.get('http://localhost:9292/manufacturer', {

                maxContentLength: 0,
                maxBodyLength: 0
            }).then(res => {
                context.commit('manufacturerListMutation', res.data.manufacturers)
                // console.log(res.data.manufacturers)
            }).catch(e => {
                alert(e);
            })
        },

        setManCatList(context,arg){
            const id = arg.id
            axios.get('http://localhost:9292/manufacturer/cat/'+id).then(res=>{
                context.commit('manCatListMutation', arg)
            })
        },

        async editPicture(context, arg) {
            const sd = new FormData()
            // console.log('Store man id '+typeof(arg.id)+arg.id)
            const fileSend = arg.file[0]
            // console.log(typeof (fileSend)+' '+ fileSend.name)
            sd.append('id', String(arg.id))
            sd.append('file', fileSend)
            sd.append('page', context.getters.getCurrentManPage)

            await axios.post('http://localhost:9292/manufacturer/editPic', sd,
                {
                    maxContentLength: 0,
                    maxBodyLength: 0
                }).then(res => {
                context.commit('manufacturerListMutation', res.data.manufacturers)
                context.commit('currentManPageMutation',res.data.currentPage);
                // alert(res.data.currentPage)
                context.commit('totalManPageMutation',res.data.totalPages);
                // context.commit('manufacturerListMutation', res.data)
            }).catch(e => {
                console.log(e);
            })
        },

        setSelectedManufacturer(context, arg) {
            context.commit('selectedManufacturerMutation', arg);
            context.dispatch('setManCatList', arg)
        },

       async setManufacturerPagedList(context, arg){
          await  axios.get('http://localhost:9292/manufacturer/page',{
                params:{page: arg},
                maxContentLength: 0,
                maxBodyLength: 0
            }).then(res=>{
                // alert('request')
                context.commit('manufacturerListMutation', res.data.manufacturers)
                context.commit('currentManPageMutation',res.data.currentPage);
                // alert(res.data.currentPage)
                context.commit('totalManPageMutation',res.data.totalPages);
                // console.log(res.data)
            })
        },

      async  decrementCurrentManPage(context) {
            const currentPage = context.getters.getCurrentManPage
            if (currentPage > 0) {
              await context.dispatch('setManufacturerPagedList', context.getters.getCurrentManPage-1)

            }
        },

       async incrementCurrentManPage(context) {
            // const currentPage = context.getters.getCurrentManPage
            // context.commit('currentManPageMutation', currentPage + 1);
            await context.dispatch('setManufacturerPagedList', context.getters.getCurrentManPage+1)

        }

    }
}