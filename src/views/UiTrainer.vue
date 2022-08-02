<template>
   <v-container>
       <v-row>
           <v-col cols="3">
               <v-card class="overflow-y-auto"
                       height="400px">

                    <CatBrowser1 v-for="nodes in getCategoryList.children"
                            :key="nodes.id"
                            :nodes="nodes" />
               </v-card>

               <ManufacturersFilter/>
<!--                    <CheckBoxTrainer />-->

           </v-col>
           <v-col cols="7">
               <ProductList/>
           </v-col>
           <v-col>
               <BrowserTrainerLayout1 />
               <ListSwitcherTrain />
           </v-col>
       </v-row>
   </v-container>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import ListSwitcherTrain from "../components/trainer/ListSwitcherTrain";
    import CheckBoxTrainer from "../components/trainer/CheckBoxTrainer";
    import BrowserTrainerLayout1 from "../components/trainer/BrowserTrainerLayout1";
    import CatBrowser1 from "../components/category/CatBrowser1";
    import ProductList from "../components/product/ProductList";
    import ManufacturersFilter from "../components/trainer/ManufacturersFilter";
    export default {
        name: "UiTrainer",
        components: {
            ManufacturersFilter,
            ProductList, CatBrowser1, BrowserTrainerLayout1, CheckBoxTrainer, ListSwitcherTrain},
        computed: {
            ...mapGetters(['getCategoryList'])
        },
        methods: {
            ...mapActions(['setCategoryList'])
        },
        async created(){
            await this.$store.dispatch('setCategoryList')
        }
    }
</script>

<style scoped>

</style>