<template>
<div>
    ManCatProdList
    <div v-for="(item, i) in getManProdCatList" :key="i">
        <ProductSearchCard :item="item"/>

    </div>
</div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import ProductSearchCard from "../product/ProductSearchCard";

    export default {
        name: "ManCatProdList",
        components: {ProductSearchCard},
        computed:{
            ...mapGetters(['getManProdCatList'])
        }
    }
</script>

<style scoped>

</style>