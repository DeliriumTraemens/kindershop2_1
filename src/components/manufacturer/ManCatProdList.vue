<template>
<div>
    ManCatProdList
    <h4>Количество товаров: {{getManProdCatList.length}}</h4>
    <div v-for="(item) in getManProdCatList" :key="item.id">
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