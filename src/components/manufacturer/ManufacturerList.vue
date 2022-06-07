<template>
    <div>
        <v-row>
            <v-col><h1>Manufacturer List</h1></v-col>
            <v-col>Количество производителей {{getManufacturerList.length}}</v-col>
            <v-col>
                <ManPaginationSelector />
            </v-col>
        </v-row>


        <v-row class="overflow-y-auto" >
<!--            <v-row>-->
                <v-col v-for="(item) in getManufacturerList" :key="item.name">

                    <ManufacturerListCard :item="item"/>

                </v-col>
<!--            </v-row>-->
        </v-row>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import ManufacturerListCard from "./ManufacturerListCard";
    import ManPaginationSelector from "./ManPaginationSelector";
    export default {
        name: "ManufacturerCard",
        components: {ManPaginationSelector, ManufacturerListCard},
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