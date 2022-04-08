<template>
    <div class="overflow-y-auto" style="max-height: 650px" id="list1">

    <div  >
        <h2>Product List</h2>
        <div v-for="(prod,idx) in getCurrentProdList" :key="idx" >
            {{idx+1}}

            <ProductListCard :prod="prod" />
<!--<div id="showScroll">aaaa</div>-->
<!--            <LazyLoader />-->
        </div>
    </div>

    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import ProductListCard from "./ProductListCard";

    export default {
        name: "ProductList",
        components: { ProductListCard, },
        data(){
            return{
                // scroll: document.getElementById('list1').pageYOffset,
                offset:50
            }
        },
        computed: {
            ...mapGetters(['getCurrentProdList','getCurrentPage','getTotalPages'])
        },
        methods: {
            ...mapActions(['loadProductPage']),
            handleScroll(){
                if(window.scrollY + window.innerHeight >= document.body.scrollHeight - this.offset){

                    this.$store.dispatch('loadProductPage')

                    this.offset=0
                }
            }

        },
        mounted() {

            window.addEventListener('scroll', this.handleScroll)

            },

        beforeDestroy(){
            this.offset=50
            window.removeEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style scoped>

</style>