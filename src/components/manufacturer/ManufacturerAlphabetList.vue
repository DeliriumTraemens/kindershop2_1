<template>
    <div>
        <v-row>
<!--            {{getLetterList}}-->
            <div v-for="item in getLetterList" :key="item.id">
                <ManufacturerListCardAlphabet  :item="item"/>

            </div>
        </v-row>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import ManufacturerListCardAlphabet from "./ManufacturerListCardAlphabet";
    export default {
        name: "ManufacturerAlphabetList",
        components: {ManufacturerListCardAlphabet},
        // beforeCreate() {
        //     this.$store.dispatch('setLetterList')
        // },
        computed: {
            ...mapGetters(['getLetterList'])
        },
        methods: {
            ...mapActions(['setLetterList'])
        }
    }
</script>

<style scoped>

</style>