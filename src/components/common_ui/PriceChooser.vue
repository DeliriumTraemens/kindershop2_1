<template>
    <div>
        <v-row>
            <v-col><div class="priceBox">{{getMinPrice}}</div></v-col>
            <v-col><div class="priceBox">{{getMaxPrice}}</div></v-col>
        </v-row>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "PriceChooser",
        computed:{
            ...mapGetters(['getMinPrice', 'getMaxPrice'])
        }
    }
</script>

<style scoped>
.priceBox{
    border: 1px solid;
    border-radius: 4px;
    margin:4px;
    padding: 2px;
}
</style>