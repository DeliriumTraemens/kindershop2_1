<template>
<div>
    ManCatProdList
    <h4>Количество товаров: {{getManProdCatList.length}}</h4>

    <div style="max-height: 650px" class="overflow-y-auto px-3" >
        <div v-for="(item) in getManProdCatList" :key="item.id" class="overflow-y-auto" id="prodCardList">
            <ProductSearchCard :item="item"/>

        </div>
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
    #prodCardList{max-height:600px}

</style>