<template>
    <div>
        <v-row class="mx-2">
            <h1 class="mb-1 mt-1">Shop Trainer</h1>
            <v-col cols="12" >
                <ManufacturerList/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                        <h2>{{getSelectedManufacturer.name}} </h2>
                    <div >
<!--                        <h5>Количество товаров: {{getSelectedManufacturer.prodCatList.length}}</h5>-->
                    </div>
                <h1>Category List</h1>
                <div>
                    <ManCategoryList />
                </div>
            </v-col>
            <v-col cols="9">

                        <ManCatProdList/>


            </v-col>


        </v-row>
    </div>
</template>

<script>
    import ManufacturerList from "../components/manufacturer/ManufacturerList";
    import {mapGetters} from 'vuex';
    import ProductSearchCard from "../components/product/ProductSearchCard";
    import ManCategoryList from "../components/manufacturer/ManCategoryList";
    import ManCatProdList from "../components/manufacturer/ManCatProdList";
    export default {
        name: "ShopTrainer",
        components: {ManCatProdList, ManCategoryList, ProductSearchCard, ManufacturerList},
        data(){
            return{
                File: []
            }
        },
        computed: {
            ...mapGetters(['getSelectedManufacturer'])
        },

        methods: {
            dropFile(e){
                this.File=e.dataTransfer.files
                console.log(e.dataTransfer.files)
            },
            dragover(e){
                e.preventDefault();
                if(!e.currentTarget.classList.contains('bg-green-300')){
                e.currentTarget.classList.add('bg-green-300');
                }
            }

        }
    }
</script>

<style scoped>
.dropcard{
    min-height:200px;
    width: 400px;
    border: 1px solid;
    border-radius: 5px;
    shadow: 6px;
}
</style>