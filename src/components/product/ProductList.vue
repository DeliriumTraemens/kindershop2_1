<template>
    <div>
        <h2>Product List</h2>
        <div v-for="(prod,idx) in getCurrentProdList" :key="idx">
            {{idx+1}}

            <ProductListCard :prod="prod" />

        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import ProductListCard from "./ProductListCard";

    export default {
        name: "ProductList",
        components: {ProductListCard},
        computed: {
            ...mapGetters(['getCurrentProdList'])
        }
    }
</script>

<style scoped>

</style>