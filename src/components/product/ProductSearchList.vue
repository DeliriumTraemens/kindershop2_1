<template>
    <div class="mt-5">
        ProductSearchList
        Found {{getProducts.length}} items
        <v-row class="mt-2">
            <div v-for="item in getProducts" :key="item.id">
                <ProductSearchCard :item="item" />
            </div>
        </v-row>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import ProductSearchCard from "./ProductSearchCard";
    export default {
        name: "ProductSearchList",
        components: {ProductSearchCard},
        computed: {
            ...mapGetters(['getProducts'])
        }
    }
</script>

<style scoped>
.card{
    width:50px;
    height:50px;
    border:1px solid;
    border-radius:4px;
    margin: 5px;
}
</style>