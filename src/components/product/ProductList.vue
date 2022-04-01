<template>
    <div class="overflow-y-auto" style="max-height: 650px" id="list1">

    <div  >
        <h2>Product List</h2>
        <div v-for="(prod,idx) in getCurrentProdList" :key="idx" >
            {{idx+1}}

            <ProductListCard :prod="prod" />
<!--<div id="showScroll">aaaa</div>-->
        </div>
            <LazyLoader />
    </div>

    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import ProductListCard from "./ProductListCard";
    import LazyLoader from "../LazyLoader";

    export default {
        name: "ProductList",
        components: { ProductListCard, LazyLoader },
        data(){
            return{
                scroll: document.getElementById('list1').pageYOffset
            }
        },
        computed: {
            ...mapGetters(['getCurrentProdList','getCurrentPage','getTotalPages'])
        },
        methods: {
            ...mapActions(['loadProductPage']),
            // scroll() {
            //
            // }
        },
        mounted() {

            // window.onscroll = () => {
            //     const el = document.documentElement
            //     const isBottomOfScreen = el.scrollTop + window.innerHeight > el.offsetHeight - 2
            //     if (isBottomOfScreen) {
            //         // alert('ProductList')
            //         this.loadProductPage()
            //     }
            // }

            // this.scroll()
            },

        beforeDestroy(){
            window.onscroll = null
        }
    }
</script>

<style scoped>

</style>