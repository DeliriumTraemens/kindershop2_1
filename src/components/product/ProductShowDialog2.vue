<template>
    <v-row justify="center">
        <v-dialog
                v-model="dialog"
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                        x-small
                        color="primary"
                        dark
                        v-bind="attrs"
                        v-on="on"
                        @click="dialogOpen"

                >
                    Show Product
                </v-btn>
            </template>
            <v-card>
                <v-toolbar
                        dark
                        color="warning"
                >
                    <v-btn
                            icon
                            dark
                            @click="closeDialog"
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Product Details</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn
                                dark
                                text
                                @click="dialog = false"
                        >
                            Save
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>
               <v-row class="px-3">
                   <v-col cols="7">Picture
                   <div id="mainPicture">
                       <v-img
                               width="500px"
                               contain
                               transition="scale-transition"
                               :src="'http://kinder.ru/image/'+pick"
                       />
                   </div>


                   </v-col>
                   <v-col cols="5" >Right
                       <v-card>
                           <v-card-title> ProdCard {{prodCard.name}}</v-card-title>
                           <hr class="my-2">
                           <v-card-subtitle>
                               <h4>Id: {{prodCard.id}}</h4>
                               <h5>Model: {{prodCard.model}}</h5>
                                <h5>Article: {{prodCard.article}} </h5>
                               <h5>UPC: {{prodCard.upc}}</h5>
                           </v-card-subtitle>
                           <v-card-text>
                               <h3>{{prodCard.manufacturer.name}}</h3><br>
                               <v-row>
                                   <v-col cols="2"><h3 style="color:darkred">Price:</h3></v-col>
                                   <v-col cols="2">
                                       <h2>{{prodCard.price}}</h2>
                                   </v-col>
                               </v-row>
                           </v-card-text>
                           <v-divider></v-divider>
                           <v-card-actions>
                               <v-btn color="orange">ORDER NOW</v-btn>
                               <v-btn color="warning">ADD TO A CART</v-btn>
                           </v-card-actions>
                       </v-card>

                   </v-col>
               </v-row>
                <v-row class="px-3">
                    <v-col cols="7">

                        <v-row >
                        <div v-for="picture in imageList" :key="picture.id">
                            <div class="smallPic" @click="setPick(picture.image)">
                                <v-img
                                        width="70px"
                                        :src="'http://kinder.ru/image/'+picture.image"
                                        contain
                                        transition="scale-transition"
                                />
                            </div>
                        </div>
                        </v-row>

                    </v-col>
                    <v-col cols="5">Right Picture</v-col>

                </v-row>
                <v-list
                        three-line
                        subheader
                >
                    <v-subheader>User Controls</v-subheader>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>
                                <h2>Product {{product.name}}</h2>
                            </v-list-item-title>
                            <v-list-item-title><h3>Id {{product.id}} </h3> </v-list-item-title>
                            <v-divider></v-divider>
                            <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-card>
                        {{prodCard.description}}
                    </v-card>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Description</v-list-item-title>
                            <v-list-item-subtitle>{{prodCard.description}}</v-list-item-subtitle>
                            <v-list-item-title>Price</v-list-item-title>
                            <v-list-item-subtitle>{{prodCard.price}} руб</v-list-item-subtitle>
                        </v-list-item-content>

                    </v-list-item>
                    <h2>
                    {{prodCard.name}} {{prodCard.id}}

                    </h2>
                </v-list>
                <v-divider></v-divider>

                <v-list
                        three-line
                        subheader
                >
                    <v-subheader>General</v-subheader>
                    <v-list-item>
                        <v-list-item-action>
                            <v-checkbox v-model="notifications"></v-checkbox>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Notifications</v-list-item-title>
                            <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-action>
                            <v-checkbox v-model="sound"></v-checkbox>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Sound</v-list-item-title>
                            <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-action>
                            <v-checkbox v-model="widgets"></v-checkbox>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Auto-add widgets</v-list-item-title>
                            <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    import{mapGetters,mapMutations,mapActions} from 'vuex';
    import axios from 'axios';
    export default {
        name: "ProductShowDialog",
        props: {
            product: Object
        },
        data () {
            return {
                prodCard: {},
                dialog: false,
                pick: String,
                imageList:[],
                notifications: false,
                sound: true,
                widgets: false,
            }
        },
        computed: {
            ...mapGetters(['getSelectedProduct'])
        },
        async created() {
            const idx = this.$props.product.id
             // await axios.get('http://localhost:9292/prodshow/'+this.product.id).then(res=>{
             await axios.get('http://localhost:9292/prodshow/'+idx).then(res=>{
                this.prodCard=res.data
                this.pick=res.data.image
                this.imageList=res.data.images
            })
        },

        methods: {
            ...mapMutations(['selectedProductMutation']),
            ...mapActions(['setSelectedProduct']),
            closeDialog(){

                this.dialog = false
            },
            dialogOpen(){
                alert('GGG')
            },
            setPick(picture){
                this.pick=picture
            }
        }
    }
</script>

<style scoped>
#mainPicture{
    margin: 5px;
    padding: 5px;
    border: 1px solid;
    border-radius: 4px;
}
.smallPic{
    margin-left: 10px;
    padding: 3px;
    border: 1px solid;
    border-radius: 4px;
}
</style>