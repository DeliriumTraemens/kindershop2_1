<template>
    <div>
      <v-row>
        <v-col>
            <h1>Left Column</h1>
      <h1>Shop Face 2</h1>
            <hr class="my-4">
            <v-card class="overflow-y-auto"
                 max-height="600">


                <CatBrowser1   v-for="nodes in data"
                               :key="nodes.id"
                               :nodes="nodes" />
            </v-card>
            <hr class="my-4">
<!--            <CategoryList />-->

        </v-col>
        <v-col>
            <h1>Center Column</h1>
            <div >
                <ProductList/>

            </div>
        </v-col>
        <v-col>
            <h1>Right Column</h1>
            <div>
                Current Page: {{getCurrentPage}}<br>
                TotalPages: {{getTotalPages}}
            </div>
        </v-col>
      </v-row>
    </div>
</template>

<script>
// import CategoryList from '../components/category/CategoryList.vue'
import CatBrowser1 from "../components/category/CatBrowser1";
import ProductList from "../components/product/ProductList";
import {mapGetters} from 'vuex';
export default {
  name: 'Shop',
    props : {
      data:[]
    },
  components: {ProductList, CatBrowser1 },
    computed: {
      ...mapGetters(['getCurrentPage','getTotalPages'])
    }
}
</script>

<style scoped>

</style>
