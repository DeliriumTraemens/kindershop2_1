<template>
    <div>
        <h1>ProductPage</h1>
        <v-row>
            <v-col cols="7">
            <h2>{{product.name}}</h2>
                <v-row id="mainPicture">
                    <div >
                        <v-img
                                width="400px"
                                contain
                                transition="scale-transition"
                                :src="'http://kinder.ru/image/'+pick"
                        />
                    </div>
                </v-row>
                <!--                            :src="'http://kinder.ru/image/'+getCurrentProductCard.image"-->
                <!--                            :src="'http://localhost:9292/images/'+pick"-->
                <v-row class="smallPickRow">
                    <!--                    <div v-for="picture in images" :key="picture.id">-->
                    <div v-for="picture in pictures" :key="picture.id" >
                        <div  @click="setPick(picture)" id="smallPick">
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
            </v-col>
            <v-col cols="5">
                <v-card>
                    <v-card-title>
                        {{product.name}}<br>
                    </v-card-title>
                    <v-card-subtitle>

                        <h4>
                            Id: {{product.id}}
                        </h4>
                        <h4>
                            Model: {{product.model}}
                        </h4>
                        <h4>
                            Article: {{product.article}}
                        </h4>
                        <h4>
                            UPC: {{product.upc}}
                        </h4>
                        <hr class="my-2">
                        <h4>
                            Weight: {{product.weight}}
                        </h4>
                    </v-card-subtitle>
                    <v-card-text>
                        {{product.description}}
                    </v-card-text>
                    <v-card-actions>
                        Price: <strong>{{product.price}}</strong>
                    </v-card-actions>
                    <v-card-actions>
                        <v-btn> ORDER NOW</v-btn>
                    </v-card-actions>

                    <v-card-text>


                        <div>Image: {{pick}}</div>
                        <hr>
                        <div> Kartinkes</div>
                        <div v-for="pict in pictures" :key="pict.id">
                            <h5>{{pict}}</h5>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

    </div>
</template>

<script>
    import axios from 'axios';
    import {mapGetters, mapMutations} from 'vuex';

    export default {
        name: "ProductPage",
        data() {
            return {
                product: {},
                pick: String,
                pictures: []
            }
        },
        computed: {
            ...mapGetters(['getCurrentProductId']),

        },
        created() {
            this.getProduct();



        },
        methods: {
            ...mapMutations(['currentProductIdMutation']),

            async getProduct() {
                const idp = this.getCurrentProductId
                // alert(idp)
                await axios.get('http://localhost:9292/prodshow/'+idp).then(result =>{
                    this.product= result.data
                })

                this.pick = this.product.image
                this.buildImages(this.product.images)

            },

            buildImages(picks) {
                this.pictures.push(this.product.image);
                picks.forEach(i => {
                    this.pictures.push(i.image)
                })
            },

            setPick(picture) {
                this.pick = picture
            },

            // initProduct(){
            //     return this.product = this.getCurrentProduct
            // }

        },
        destroyed() {
            this.product = null
            this.pick = null
            this.images = null
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
    }

    #smallPick{
        margin: 6px;
        border: 1px solid;
        border-radius: 6px;
        height: 75px;
    }
</style>