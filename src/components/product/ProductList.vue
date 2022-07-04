<template>
    <div  id="list1" >

        <div  >
        <h2>Product List</h2>
<!--            <h4>Scroll {{scroll}}</h4>-->
            <div v-if="getCurrentProdList.length === 0" class="empty-box" >
            <h2>Категория без товаров id: {{getSelectedCategoryId}}</h2>
        </div>
                <div style="max-height: 650px" class="overflow-y-auto pr-2" id="infinite-list">
                    <v-row  id="aaa" >
                        <div v-for="(prod,idx) in getCurrentProdList" :key="idx">
                            {{idx+1}}
                            <ProductListCard :prod="prod"/>
                        </div>
                    </v-row>
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
                // scroll: document.getElementById('aaa').pageYOffset,
                offset: 120
            }
        },
        computed: {
            ...mapGetters(['getCurrentProdList','getCurrentPage','getTotalPages','getSelectedCategoryId'])
        },
        methods: {
            ...mapActions(['loadProductPage']),

            loadNextPage(){
                this.$store.dispatch('loadProductPage')

            },
            handleScroll(){


                ////////////////
                // if(document.documentElement.scrollTop + window.innerHeight ===
                //     document.documentElement.offsetHeight){
                //     alert('scroll')
                //     this.$store.dispatch('loadProductPage')
                //
                //     this.offset=0
                // }
                ////////////////


/////////
                // if(document.documentElement.scrollTop + window.innerHeight  >= document.body.scrollHeight ){
                //     alert('scroll')
                //     this.$store.dispatch('loadProductPage')
                //
                //     this.offset=0
                // }

                // if(window.scrollY + window.innerHeight  + this.offset >= document.body.scrollHeight ){
                //     alert('scroll')
                //     this.$store.dispatch('loadProductPage')
                //
                //     this.offset=0
                // }
            }

        },
        mounted() {
            const scrollElm = document.querySelector('#infinite-list');
            scrollElm.addEventListener('scroll', e=>{
                if( scrollElm.scrollTop + scrollElm.clientHeight >= scrollElm.scrollHeight){
                    this.loadNextPage()
                }
            })
            // window.addEventListener('scroll', this.handleScroll)

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