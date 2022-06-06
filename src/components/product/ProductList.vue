<template>
    <div  id="list1" >

        <div  >
        <h2>Product List</h2>
            <div v-if="getCurrentProdList.length === 0" class="empty-box" >
            <h2>Категория без товаров id: {{getSelectedCategoryId}}</h2>
        </div>
            <div style="max-height: 650px" class="overflow-y-auto" >
                <div v-for="(prod,idx) in getCurrentProdList" :key="idx">
                    {{idx+1}}

                    <ProductListCard :prod="prod"/>
                </div>
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
            ...mapGetters(['getCurrentProdList','getCurrentPage','getTotalPages','getSelectedCategoryId'])
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
.empty-box{
    min-height: 200px;
    background-color:black;
    color: yellow;
    text-align: center;
}
</style>