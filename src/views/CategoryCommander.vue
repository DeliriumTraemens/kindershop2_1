<template>
    <div>
        <h3>Category Commander AAA</h3>
        <v-row>
            <v-col cols="3">
                <v-card class="overflow-y-auto"
                        max-height="600">

                    <CatBrowser1 v-for="nodes in getCategoryList.children"
                                 :key="nodes.id"
                                 :nodes="nodes" />

                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card class="overflow-y-auto"
                        max-height="600">

                    <CatBrowser1 v-for="nodes in getCategoryList.children"
                                 :key="nodes.id"
                                 :nodes="nodes" />

                </v-card>
            </v-col>
            <v-col>
                <ProductList/>

            </v-col>
        </v-row>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import CatBrowser1 from "../components/category/CatBrowser1";
    import ProductList from "../components/product/ProductList";

    export default {
        name: "CategoryCommander",
        components: {ProductList, CatBrowser1},
        props : {
            data:[Array, Number]
        },
        computed: {
            ...mapGetters(['getCategoryList','getCurrentPage','getTotalPages', 'getSelectedCategoryId', 'getTargetCategoryId'])
        }
    }
</script>

<style scoped>

</style>