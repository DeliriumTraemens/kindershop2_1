<template>
        <v-card id="myCard"
                @click="clickedCard(item)"
                @dragover.prevent @drop.prevent
                @dragover="dragover"
                @drop="dropFile($event, item.id)"
        >
            <v-card-title>
                <h5>{{item.name}} <br> id{{item.id}}</h5>
            </v-card-title>
<!--            <v-card-subtitle>-->
<!--                Количество товаров {{item.prodCatList.length}}-->
<!--            </v-card-subtitle>-->
            <v-img
                    contain
                    :src="'http://localhost:9292/images/'+item.image"
                    transition="scale-transition"
                    height="50px"
            />
        </v-card>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: "ManufacturerListCardAlphabet",
        props: {
            item: {}
        },
        data() {
            return{
                File:[],
                manufacturer:{
                    id: '',
                    file: []
                }
            }
        },
        methods: {
            ...mapActions(['editPicture', 'editPictureAlphabet','setSelectedManufacturer']),

             dropFile(e, id){
                // this.File=e.dataTransfer.files
                this.manufacturer.id=id
                this.manufacturer.file=e.dataTransfer.files
                // console.log('Man Id '+this.manufacturer.id)
                 //Add editPictureAlphabet to $store
                this.$store.dispatch('editPictureAlphabet', this.manufacturer)
                // console.log(e.dataTransfer.files)
            },
            dragover(){
            },
            clickedCard(item){
                this.$store.dispatch('setSelectedManufacturer', item)
            }
        }
    }
</script>

<style scoped>
#myCard{
    font-size:1.5em;

    width: 140px;
    min-width: 140px;
    height: 200px;
}
</style>