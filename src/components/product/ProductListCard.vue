<template>
    <v-card class="mb-4" style="max-width: 300px;margin: 4px; padding: 3px">

<!--                :src="'http://localhost:9292/images/'+prod.image"-->
        <v-img

                height="200px"
                :src="'http://kinder.ru/image/'+prod.image"
        />

        <hr class="my-4">
        <strong>Цена </strong> {{prod.price}} руб.
        <hr class="my-4">

        <v-card-title   class="d-inline-block text-truncate"
                        style="max-width: 290px;">
            {{prod.name}}
        </v-card-title>
        <v-card-subtitle>
           Id: {{prod.id}}<br>
            Manufacturer: <strong> {{prod.manufacturer.name}} </strong>
        </v-card-subtitle>
        <v-card-text>
<!--            <div class="textdescr">{{prod.description}}</div>-->
        </v-card-text>
        <v-card-actions>
            <v-btn x-small @click="showProductPage(prod)">Show</v-btn>
<!--            <v-btn x-small color="danger">Show Modal</v-btn>-->
            <ProductShowDialog3 :productId="prod.id"/>
<!--            <ProductShowDialog :product="prod"/>-->
        </v-card-actions>
    </v-card>
</template>

<script>
    import ProductShowDialog from "./ProductShowDialog";
    import {mapActions, mapMutations} from "vuex";
    import ProductShowDialog3 from "./ProductShowDialog3";
    export default {
        name: "ProductListCard",
        components: {
            ProductShowDialog3,
            ProductShowDialog
        },
        props: {
            prod: Object
        },
        methods: {
            ...mapActions(['setCurrentProduct']),
            ...mapMutations(['currentProductIdMutation']),

            showProductPage(prod){
                 this.$store.dispatch('setCurrentProduct', prod)
                this.$store.commit('currentProductIdMutation', prod.id)
                 this.$router.push('/product')
            }
        },
    }
</script>

<style scoped>
    .textdescr {
        display: inline-block;
        max-height: 100px;
        border: 1px dashed ;
        border-radius: 5px;

        text-overflow: ellipsis "[ ..]";
        padding: 5px;
        overflow: hidden;
        /*text-trim: force-end;*/

    }
</style>