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
<!--            <CategoryList />-->

        </v-col>
        <v-col cols="9">
            <h1>Center Column</h1>
            <div >
            <div>
                Current Page: {{getCurrentPage}}<br>
                TotalPages: {{getTotalPages}}
            </div>
                <div>

                <ProductList/>
                </div>

            </div>
        </v-col>
<!--        <v-col>-->
<!--            <h1>Right Column</h1>-->
<!--            <hr>-->
<!--            <div>-->
<!--                Current Category: {{typeof getSelectedCategoryId}}' '{{getSelectedCategoryId}} <br>-->
<!--                Target Category: {{typeof getTargetCategoryId}} ' ' {{getTargetCategoryId}}-->
<!--            </div>-->
<!--            <hr class="my-2">-->
<!--            <LiveSearch />-->
<!--            <hr class="my-2">-->
<!--            <v-card class="overflow-y-auto"-->
<!--                    max-height="600">-->

<!--                <CatBrowser1   v-for="nodes in data"-->
<!--                               :key="nodes.id"-->
<!--                               :nodes="nodes" />-->
<!--            </v-card>-->
<!--        </v-col>-->
      </v-row>
    </div>
</template>

<script>
// import CategoryList from '../components/category/CategoryList.vue'
import LiveSearch from "../components/common_ui/LiveSearch";
import CatBrowser1 from "../components/category/CatBrowser1";
import ProductList from "../components/product/ProductList";
import {mapGetters} from 'vuex';
export default {
  name: 'Shop',
    props : {
      data:[Array, Number]
    },
  components: {ProductList, CatBrowser1, LiveSearch },
    computed: {
      ...mapGetters(['getCurrentPage','getTotalPages', 'getSelectedCategoryId', 'getTargetCategoryId'])
    }
}
</script>

<style scoped>

</style>
