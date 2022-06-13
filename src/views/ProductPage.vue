<template>
    <div>
        <h1>ProductPage</h1>
        <v-row>
            <h2>{{getCurrentProductCard.name}}</h2>
            <v-col cols="7">
                <div>
                    <v-img
                            width="400px"
                            contain
                            transition="scale-transition"
                            :src="'http://kinder.ru/image/'+getCurrentProductCard.image"
                    />
                </div>
                <!--                            :src="'http://kinder.ru/image/'+getCurrentProductCard.image"-->
                <!--                            :src="'http://localhost:9292/images/'+pick"-->
                <v-row>
                    <!--                    <div v-for="picture in images" :key="picture.id">-->
                    <div v-for="picture in getCurrentProductCard.images" :key="picture.id">
                        <div class="smallPick" @click="setPick(picture)">
                            <v-img
                                    width="70px"
                                    :src="'http://kinder.ru/image/'+picture.image"
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
                        ProductName <br>
                        {{product.name}}<br>
                        Getternme <br>
                        {{getCurrentProductCard.name}}
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
                        <div v-for="pict in images" :key="pict.id">
                            <h5>{{pict}}</h5>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "ProductPage",
        data() {
            return {
                product: {
                    article: '',
                    catId: Number,
                    description: '',
                    height: Number,
                    id: Number,
                    image: '',
                    images: [],
                    isbn: '',
                    length: Number,
                    manufacturer: {},
                    model: '',
                    name: '',
                    points: Number,
                    price: Number,
                    quantity: Number,
                    status: Number,
                    upc: '',
                    viewed: Number,
                    weight: Number,
                    width: Number
                },
                pick: String,
                images: []
            }
        },
        computed: {
            ...mapGetters(['getCurrentProductCard']),
            // computeProduct(){
            //     this.product = this.getCurrentProductCard
            //     this.pick = this.getCurrentProductCard.image
            // }
        },
        created() {
            this.initProduct()
            this.pick = this.getCurrentProductCard.image



        },
        methods: {
            buildImages(pictures) {
                this.images.push(this.getCurrentProductCard.image);
                pictures.forEach(i => {
                    this.images.push(i.image)
                })
            },
            initProduct() {
                {
                    this.product.name = this.getCurrentProductCard.name
                    this.product.id = this.getCurrentProductCard.id
                    this.product.model = this.getCurrentProductCard.model
                    this.product.article = this.getCurrentProductCard.article
                    this.pick = this.getCurrentProductCard.image,
                        this.buildImages(this.getCurrentProductCard.images)
                console.log('initProduct Product')
                console.log(this.product)

            }
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
        /*margin: 5px;*/
        padding: 5px;
        border: 1px solid;
        border-radius: 4px;
    }

    .smallPick {
        margin-top: 10px;
        margin-left: 10px;
        padding: 3px;
        border: 1px solid;
        border-radius: 6px;
    }
</style>