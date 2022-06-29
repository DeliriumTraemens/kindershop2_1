<template>
    <v-container>
        <v-card class="mt-4">
            <v-row>
                <h5>Caroussel</h5>
                <v-img
                        width="400px"
                        contain
                        transition="scale-transition"
                        :src="'http://kinder.ru/image/' + pick"
                />
            </v-row>
            <v-row class="smallPickRow">
                    <div v-for="picture in picsArr" :key="picture" >
                        <div  @click="setPickure(picture)" id="smallPick">
                            <v-img
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
            pick:'',
            images:[]
        },
        data(){
            return{
                picture: '',
                picsArr:[]
            }
        },
        mounted(){
          // return this.picture = this.pick
            this.picsArr.push(this.pick)
            this.images.forEach(el => this.picsArr.push(el.image))
            },
        beforeDestroy(){
            this.picture =''
            this.picsArr = null
        },
       computed:{
           setPick(){
               return this.picture=this.pick;
           },
           // setPicsArr(){
           //     this.picsArr.push(this.pick)
           //     this.images.forEach(el => this.picsArr.push(el.image))
           //     return this.picsArr
           //         // = this.images
           // }

       },
        methods:{
            setPicture(){
              this.picture=this.pick
            },
            setPickure(picture){
                this.pick = picture
            }
        }
    }
</script>

<style scoped>
    .smallPickRow {
        margin-top: 10px;
        margin-left: 5px;
        padding-left: 3px;
        border: 1px solid;
        border-radius: 6px;
        max-width: 100%;
    }

    #smallPick{
        margin: 6px;
        border: 1px solid;
        border-radius: 6px;
        height: 75px;
    }
</style>