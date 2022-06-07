<template>
<div>
    ManCatProdList

    <div style="max-height: 650px" class="overflow-y-auto px-3" >

        <v-row cols="3" class="pt-3">
                    <div v-for="(item) in getManProdCatList" :key="item.id" id="prodCardList">
                        <ProductSearchCard :item="item"/>
                    </div>

        </v-row>

    </div><!--Scroller End-->
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