<template>
    <v-card class="mb-3" @click="cardClick(item.id)">

        <h4>{{item.name}}</h4>
        {{item.id}}<br>

    </v-card>
</template>

<script>
    export default {
        name: "ManCategoryCard",
        props: {
            item: Array
        },
        methods: {
            cardClick(id){

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