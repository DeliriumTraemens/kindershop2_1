<template>
    <div>
        <h1>Manufacturer List</h1>
            Количество производителей {{getManufacturerList.length}}
        <v-row >
            <v-col v-for="(item, i) in getManufacturerList" :key="i">
                <ManufacturerListCard :item="item"/>

            </v-col>
        </v-row>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import ManufacturerListCard from "./ManufacturerListCard";
    export default {
        name: "ManufacturerCard",
        components: {ManufacturerListCard},
        mounted(){
            this.$store.dispatch('setManufacturerList')
        },
        computed: {
            ...mapGetters(['getManufacturerList'])
        },
        methods: {
            ...mapActions(['setManufacturerList'])
        }
    }
</script>

<style scoped>

</style>