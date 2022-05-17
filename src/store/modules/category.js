import axios from 'axios'

export default {
    state: {
        categoryList: Array,
        selectedCategoryId: '',
        targetCategoryId:''
    },
    getters: {
        getCategoryList(state) {
            return state.categoryList
        },
        getSelectedCategoryId(state){
            return state.selectedCategoryId
        },
        getTargetCategoryId(state){
            return state.targetCategoryId
        }
    },
    mutations: {
        categoryListMutation(state, arg) {
            state.categoryList = arg
        },
        selectedCategoryIdMutation(state, arg){
            state.selectedCategoryId = arg
        },
        targetCategoryIdMutation(state,arg){
            state.targetCategoryId=arg
        }
    },
    actions: {
       async deleteCategory(context,arg){
            await axios.post('http://localhost:9292/category/deleteCat/'+arg).then(res=>{
                context.commit('categoryListMutation', res.data)
            })
        },
       async addNewSubCategory(context,arg){
            const sd= new FormData();
            sd.append('parentId', arg.parentId)
            sd.append('name', arg.name)
            sd.append('description', arg.description)

            await axios.post('http://localhost:9292/category/addNewSubcat', sd).then(res=>{
                context.commit('categoryListMutation', res.data)
            })

        },
        setSelectedCategoryId(context,arg){
            context.commit('selectedCategoryIdMutation', arg)
        },
        setTargetCategoryId(context,arg){
            context.commit('targetCategoryIdMutation', arg)
        },
        editCategoryIerarchy(context){
            /*Отправляем два параметра:
            * 1-й - Id категории (selectedCategoryId)
            * 2-й Новый Парент Id для нее (targetCategoryId)
            * Наверно лучше через POST*/
            const id = context.getters.getSelectedCategoryId
            const parentId = String(context.getters.getTargetCategoryId)
            let fd = new FormData()
            fd.append('id', String(id))
            fd.append('parentId', parentId)
            axios.post('http://localhost:9292/category/editierarchy', fd).then(res => {
                context.commit('categoryListMutation', res.data)
            })
        },

        async setCategoryList(context) {
            // await axios.get('http://localhost:9292/category').then(res => {
            await axios.get('http://localhost:9292/catalog').then(res => {
                context.commit('categoryListMutation', res.data)
                console.log('Catalog List')
                console.log(res.data)
            })
        },
        removeCategory(context, arg) {
            axios.delete('http://localhost:9292/category',arg).then(res => {
                console.log(res)
            })

        },

    },
}
