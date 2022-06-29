<template>
    <v-row justify="center">
        <v-btn
                color="orange"
                x-small
                dark
                @click.stop="openClick()"
        >
            Product Details
        </v-btn>

        <v-dialog
                v-model="dialog"
                fullscreen

        >
            <v-card class="mt-4">

                <v-row justify="space-between">
                    <v-col>
                        <ImageCaroussel :pick="getSelectedProduct.image" :images="getSelectedProduct.images"/>
<!--                        <v-card>-->
<!--                            <v-card-text>-->

<!--                                <div >-->
<!--                                    <v-img-->
<!--                                            width="400px"-->
<!--                                            contain-->
<!--                                            transition="scale-transition"-->
<!--                                            :src="'http://kinder.ru/image/'+getSelectedProduct.image"-->
<!--                                    />-->
<!--                                </div>-->
<!--                            </v-card-text>-->
<!--                        </v-card>-->
                    </v-col>
                    <v-col>
                        <v-card>
                            <v-card-title class="text-h5">
                                {{getSelectedProduct.name}}
                            </v-card-title>
                                <v-spacer></v-spacer>
                            <v-card-subtitle>
                                Product ID: {{getSelectedProduct.id}}<br>
                                UPC: {{getSelectedProduct.upc}}<br>
                                Model: {{getSelectedProduct.model}}<br>
                                Article: {{getSelectedProduct.article}}<br>
                            </v-card-subtitle>
                            <v-card-text>
                                {{getSelectedProduct.description}}
                            </v-card-text>
                            <v-card-title>
                                Price: {{getSelectedProduct.price}} Rub

                            </v-card-title>
                            <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn
                                        color="green darken-1"
                                        text
                                        @click="dialog = false"
                                >
                                    Order Now!
                                </v-btn>

                                <v-btn
                                        color="green darken-1"
                                        text
                                        @click="dialog = false"
                                >
                                    Close
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>

                <div>
                </div>

                <div>

                </div>
            </v-card>

        </v-dialog>
    </v-row>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import ImageCaroussel from "../common_ui/ImageCaroussel";
    export default {
        name: "ProductShowDialog3",
        components: {ImageCaroussel},
        props: {
            productId:'',
            product:{}
        },
        data () {
            return {
                dialog: false,
            }
        },
        computed:{
            ...mapGetters(['getSelectedProduct', 'getCurrentProductCard'])
        },
        methods:{
            ...mapActions(['setSelectedProduct']),
            openClick(){
                this.dialog = true
                this.$store.dispatch('setSelectedProduct', this.$props.productId)
                // alert(this.$props.productId)
            }
        }
    }
</script>

<style scoped>

</style>