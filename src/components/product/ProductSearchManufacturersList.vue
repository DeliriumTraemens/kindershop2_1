<template>
    <div class="mt-2">
        <p>ProductSearchManufacturersList</p>
        <v-row>
            <v-col>
                <div v-for="man in getManufacturers" :key="man.id">
                    <v-btn x-small block >{{man.name}}</v-btn>
<!--                    <div class="manCard">-->
<!--                        {{man.name}}-->
<!--                    </div>-->
                </div>

            </v-col>
        </v-row>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "ProductSearchManufacturersList",
        computed:{
            ...mapGetters(['getManufacturers'])
        },
    }
</script>

<style scoped>
.manCard{
    background-color: #f5f5e3;
    border: 1px solid;
    border-radius: 3px;
    margin-top: 2px;
    height: 1.3em;
}
</style>