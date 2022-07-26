<template>
    <v-container>
        <p>{{selected}}</p>
        <v-checkbox
            v-model="selected"
            label="Nick"
            value="Nick"></v-checkbox>
        <v-checkbox
                v-model="selected"
                label="John"
                value="John"></v-checkbox>
        <v-checkbox
                v-model="selected"
                label="Markus"
                value="Markus"></v-checkbox>

        <hr>
        <p>{{boxes}}</p>
        <div v-for="it in getCurrentProductListManufacturers" :key="it">
            <v-checkbox
                    v-model="boxes"
                    :label="it.name"
                    :value="it.id"
            ></v-checkbox>
        </div>

    </v-container>

</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "CheckBoxTrainer",
        data(){
            return{
                selected:['Nick'],
                boxes:[],
                items: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'],
            }
        },
        computed:{
            ...mapGetters(['getCurrentProductListManufacturers'])
        }
    }
</script>

<style scoped>

</style>