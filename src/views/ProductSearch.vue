<template>
    <div>
    <h1>Product Search</h1>
        <h6>TODO Порезать на компоненты и замапить все в Стор</h6>
        <v-row>
            <v-col cols="2">Filters etc
                <ProductSearchManufacturersList />
                <!--                <Alphabet/>-->
            </v-col>
            <v-col cols="10">
                <div id="searchheader">Search block and results</div>
                <v-row>
                    <v-col cols="9">
                        <v-text-field class="input-field-1" label="Inputs Products Name" v-model="input"/>
                    </v-col>
                    <v-col cols="3">
                        <v-btn @click="find()" color="orange" waves>Find</v-btn>
                    </v-col>
                </v-row>
<!--                <v-row>-->
<!--                    <div v-for="item in 40">-->
<!--                        <div class="box1">{{item}}</div>-->
<!--                    </div>-->
<!--                </v-row>-->
                <ProductSearchList />
            </v-col>
        </v-row>

    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import Alphabet from "../components/Alphabet";
    import ProductSearchList from "../components/product/ProductSearchList";
    import ProductSearchManufacturersList from "../components/product/ProductSearchManufacturersList";
    export default {
        name: "ProductSearch",
        components: {ProductSearchManufacturersList, ProductSearchList, Alphabet},
        data(){
            return{
                input:''
            }
        },
        methods:{
            ...mapActions(['searchProducts']),
            find(){
                if(this.input.length<3){
                    this.incorrectInput(this.input.length)
                } else {
                    // alert('doSearch')
                    this.$store.dispatch('searchProducts', this.input)
                }
            },
            incorrectInput(size){
                switch(size){
                    case 0: alert('Your typed Nothing at All')
                        break;
                    case 1: alert('Your input is too small -- add Two Symbols plz')
                        break;
                    case 2: alert('Just add One Symbols here')
                }
            }
        }
    }
</script>

<style scoped>
#searchheader{
    margin-bottom: 1em;
}
#search-group{
    mrgin-top:2em;
}
#input-field{
    min-height:10px;
    border:1px solid;
    border-radius: 4px;
}
.input-field-1{
    /*margin: 1em;*/
    padding-left: 1em;
    padding-right: 1em;
    border:1px solid;
    border-radius: 4px;
}
    .box1{
        width: 50px;
        height: 50px;
        border: 1px solid;
        border-radius: 4px;
        margin: 3px;
    }
</style>