<template>
    <div>
        <h1 class="mb-5">Shop Trainer</h1>
        <v-row>
            <v-col>
                <ManufacturerList />
            </v-col>
            <v-col>
                <div class="dropcard"
                     @dragover.prevent @drop.prevent
                     @dragover="dragover"
                     @drop="dropFile">


                </div>
                <div class="dropcard">
                    <ul v-for="(file,i) in File" :key="i" >
                        <li> {{file.name}} </li>
                    </ul>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import ManufacturerList from "../components/manufacturer/ManufacturerList";

    export default {
        name: "ShopTrainer",
        components: {ManufacturerList},
        data(){
            return{
                File: []
            }
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