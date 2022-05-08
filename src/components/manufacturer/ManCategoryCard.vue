<template>
    <v-card class="mb-3" @click="cardClick(item.id)">

        <h4>{{item.name}}</h4>
        {{item.id}}<br>

    </v-card>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: "ManCategoryCard",
        props: {
            item: Array
        },
        methods: {
            ...mapActions(['setManProdCatList']),
            cardClick(id){
                // alert('ManCategoryCardClicked '+id)
                //Передаем Id категории а actions
                this.$store.dispatch('setManProdCatList', id)
            }
        },
    }
</script>

<style scoped>
    .manCatCard{
        border: 1px solid;
        margin-bottom: 5px;
    }
</style>