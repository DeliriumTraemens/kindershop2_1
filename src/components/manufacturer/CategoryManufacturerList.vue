<template>
    <div>
        <v-row>
            <div v-for="item in getCurrentProductListManufacturers" :key="item.id">
                <div id="manCard">{{item.name}}</div>
            </div>
        </v-row>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "CategoryManufacturerList",
        computed:{
            ...mapGetters(['getCurrentProductListManufacturers'])
        }
    }
</script>

<style scoped>
#manCard{
    margin-right: 5px;
    margin-bottom: 3px;
    border-radius: 4px;
    padding: 2px;
    border: 1px solid;

}
</style>