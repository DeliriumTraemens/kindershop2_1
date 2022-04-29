<template>
    <div>
        <h1 class="mb-5">Shop Trainer</h1>
        <v-row>
            <v-col>
                <ManufacturerList />
            </v-col>
            <v-col>
                <h1>Product List</h1>
                <div>
                    <h1>
                        {{getSelectedManufacturer.name}}
                    </h1>
                    <div v-for="(item,i) in getSelectedManufacturer.prodCatList" :key="i">
                        <ProductSearchCard :item="item"/>
                    </div>
                </div>
<!--                <div class="dropcard"-->
<!--                     @dragover.prevent @drop.prevent-->
<!--                     @dragover="dragover"-->
<!--                     @drop="dropFile">-->


<!--                </div>-->
<!--                <div class="dropcard">-->
<!--                    <ul v-for="(file,i) in File" :key="i" >-->
<!--                        <li> {{file.name}} </li>-->
<!--                    </ul>-->
<!--                </div>-->
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import ManufacturerList from "../components/manufacturer/ManufacturerList";
    import {mapGetters} from 'vuex';
    import ProductSearchCard from "../components/product/ProductSearchCard";
    export default {
        name: "ShopTrainer",
        components: {ProductSearchCard, ManufacturerList},
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