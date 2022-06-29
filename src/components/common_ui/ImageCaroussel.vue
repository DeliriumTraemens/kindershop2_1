<template>
    <v-container>
        <v-card class="mt-4">
            <v-row >
                <h5>Caroussel</h5>
                <div id="mainPicture">
                    <v-img
                            width="350px"
                            height="350px"
                            contain
                            transition="scale-transition"
                            :src="'http://kinder.ru/image/' + pick"
                    />
                </div>
            </v-row>
            <v-row class="smallPickRow">
                    <div v-for="picture in images" :key="picture" >
                        <div  @click="setPickure(picture)" id="smallPick">
                            <v-img
                                    height="70px"
                                    width="70px"
                                    :src="'http://kinder.ru/image/'+picture"
                                    contain
                                    transition="scale-transition"
                            />
                        </div>
                        <!--                                    :src="'http://kinder.ru/image/'+picture"-->
                    </div>
            </v-row>
<!--                {{setPicsArr}}-->
        </v-card>
    </v-container>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "ImageCaroussel",
        props:{
            pick:String,
            images: Array
        },
        data(){
            return{
                picture: this.getSelectedProduct.image,
                picsArr:[]
            }
        },
        created(){
            // return this.picture=this.getSelectedProduct.image
            },


        methods:{

            setPickure(picture){
                this.pick = picture
            }
        }
    }
</script>

<style scoped>
    #mainPicture {
        margin: 5px;
        padding: 5px;
        border: 1px solid;
        border-radius: 4px;
        max-height: 450px;
        max-width: 100%;
    }
    .smallPickRow {
        margin-top: 10px;
        margin-left: 5px;
        padding-left: 3px;
        border: 1px solid;
        border-radius: 6px;
        max-width: 100%;
        /*max-height: 80px;*/
    }

    #smallPick{
        margin: 6px;
        border: 1px solid;
        border-radius: 6px;
        height: 75px;
    }
</style>