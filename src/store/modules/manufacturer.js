import axios from "axios";
export default{
    state:{
        manufacturerList:[],
        selectedManufacturer:{}
    },
    getters:{
        getManufacturerList(state){
            return state.manufacturerList
        },
        getSelectedManufacturer(state){
            return state.selectedManufacturer
        }
    },
    mutations:{
        manufacturerListMutation(state,arg){
            state.manufacturerList=arg
        },
        selectedManufacturerMutation(state,arg){
            state.selectedManufacturer=arg
        }

    },
    actions:{
        setManufacturerList(context){
            axios.get('http://localhost:9292/manufacturer',{
                maxContentLength: 0,
                maxBodyLength: 0
            }).then(res=>{
                context.commit('manufacturerListMutation', res.data)
            }).catch(e=>{
                alert(e);
            })
        },

      async  editPicture(context, arg){
            const sd = new FormData()
           // console.log('Store man id '+typeof(arg.id)+arg.id)
            const fileSend = arg.file[0]
            // console.log(typeof (fileSend)+' '+ fileSend.name)
            sd.append('id', String(arg.id))
            sd.append('file', fileSend)

           await axios.post('http://localhost:9292/manufacturer/editPic', sd,
                {
                    maxContentLength: 0,
                    maxBodyLength: 0
                }).then(res=>{
                context.commit('manufacturerListMutation', res.data)
            }).catch(e=>{
                console.log(e);
            })

        }

    }
}