<template>
    <div>
      <v-row>
        <v-col cols="3">
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
            <CategoryManufacturerList />
<!--            <CategoryList />-->

        </v-col>
        <v-col cols="9">
            <h1>Center Column</h1>
            <div >
                <v-row>
                    <v-col>
                        <div>
                            Current Page: {{getCurrentPage}}<br>
                            TotalPages: {{getTotalPages}}
                        </div>
                    </v-col>
                    <v-col>
<!--                        <div>-->
<!--                            Manufacturers-->
<!--                        </div>-->
<!--                        <CategoryManufacturerList />-->
                    </v-col>
                </v-row>

                <div>

                <ProductList/>
                </div>

            </div>
        </v-col>
      </v-row>
    </div>
</template>

<script>
// import CategoryList from '../components/category/CategoryList.vue'
import LiveSearch from "../components/common_ui/LiveSearch";
import CatBrowser1 from "../components/category/CatBrowser1";
import ProductList from "../components/product/ProductList";
import {mapGetters} from 'vuex';
import CategoryManufacturerList from "../components/manufacturer/CategoryManufacturerList";
export default {
  name: 'Shop',
    props : {
      data:[Array, Number]
    },
  components: {CategoryManufacturerList, ProductList, CatBrowser1, LiveSearch },
    computed: {
      ...mapGetters(['getCurrentPage','getTotalPages', 'getSelectedCategoryId', 'getTargetCategoryId'])
    }
}
</script>

<style scoped>

</style>
