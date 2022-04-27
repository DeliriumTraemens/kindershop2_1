<template>
        <v-card id="myCard"
                @dragover.prevent @drop.prevent
                @dragover="dragover"
                @drop="dropFile($event, item.id)"
        >
            <v-card-title>
                {{item.name}} id{{item.id}}
            </v-card-title>
            <v-card-subtitle>
                Количество товаров {{item.prodCatList.length}}
            </v-card-subtitle>
            <v-img
                    contain
                    :src="'http://localhost:9292/images/'+item.image"
                    transition="scale-transition"
                    height="80px"
            />
        </v-card>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: "ManufacturerListCard",
        props: {
            item: undefined
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
            ...mapActions(['editPicture']),

             dropFile(e, id){
                // this.File=e.dataTransfer.files
                this.manufacturer.id=id
                this.manufacturer.file=e.dataTransfer.files
                // console.log('Man Id '+this.manufacturer.id)

                this.$store.dispatch('editPicture', this.manufacturer)
                // console.log(e.dataTransfer.files)
            },
            dragover(){

            }
        }
    }
</script>

<style scoped>
#myCard{
    width: 200px;
    min-width: 150px;
    height: 200px;
}
</style>