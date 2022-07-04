<template>
    <div class="mt-5">
        ProductSearchList
        Found {{dataList.length}} items
<!--        <v-row>-->
<!--            <v-col>-->
<!--                <div v-for="item in getProducts" :key="item.name">-->
<!--                    {{item.name}}-->
<!--                </div>-->
<!--            </v-col>-->
<!--        </v-row>-->
        <v-item-group>
            <v-row class="mt-2">
                <div v-for="item in dataList" :key="item.name">

                    <ProductSearchCard :item="item"/>
                </div>
            </v-row>
        </v-item-group>
    </div>
</template>

<script>
    // import {mapGetters} from 'vuex';
    import ProductSearchCard from "./ProductSearchCard";
    export default {
        name: "ProductSearchList",
        components: {ProductSearchCard},
        props: {
            dataList:Array
        },
        beforeDestroy() {
            this.dataList =[]
        }
        // computed: {
        //     ...mapGetters(['getProducts'])
        // }
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