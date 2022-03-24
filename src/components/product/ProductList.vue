<template>
    <div>
        <h2>Product List</h2>
        <div v-for="(prod,idx) in getCurrentProdList" :key="idx">
            {{idx}}
            <h3>FFF</h3>
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
    .textdescr {
        display: inline-block;
        max-height: 100px;
        border: 1px solid;
        border-radius: 5px;
        padding: 5px;
        overflow: hidden;
        text-trim: force-end;
        text-overflow: ellipsis "[ ..]";

    }
</style>