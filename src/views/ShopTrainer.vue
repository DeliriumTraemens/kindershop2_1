<template>
    <div>
        <h1 class="mb-5">Shop Trainer</h1>
        <v-row>
            <v-col cols="4" style="max-height: 550px">
                <ManufacturerList />
            </v-col>
            <v-col>
                <h1>Product List</h1>
                <div >
                    <div >
                        <h1>
<!--                        {{getSelectedManufacturer.name}}-->
                    </h1>
<!--                        <h4>Количество товаров: {{getSelectedManufacturer.prodCatList.length}}</h4>-->
                    </div>
<!--                    <div class="overflow-y-auto" style="max-height: 550px">-->
<!--                        <div v-for="(item,i) in getSelectedManufacturer.prodCatList" :key="i">-->
<!--                            <div>FFF</div>-->
<!--                            <ProductSearchCard :item="item"/>-->
<!--                        </div>-->
<!--                    </div>-->

                <h3>Categories</h3>
                <ManCategoryList />

                </div>
            </v-col>
            <v-col cols="4" style="max-height: 550px">
                <h3>Cat Prod</h3>
                <ManCatProdList />

            </v-col>

            <v-col class="overflow-y-auto" style="max-height: 550px">
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