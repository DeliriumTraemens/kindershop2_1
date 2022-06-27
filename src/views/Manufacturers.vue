<template>
    <div>
        <div><h1>Manufacturers</h1></div>
        <v-row>
            <Alphabet />
        </v-row>
        <v-row>
            <v-col cols="5">Manufacturers list
            <ManufacturerAlphabetList />
            </v-col>
            <v-col cols="7">Product Cards</v-col>
<!--            <v-col cols="3">Additional</v-col>-->
        </v-row>
    </div>
</template>

<script>
    import Alphabet from "../components/Alphabet";
    import ManufacturerAlphabetList from "../components/manufacturer/ManufacturerAlphabetList";
    export default {
        name: "Manufacturers",
        components: {ManufacturerAlphabetList, Alphabet}
    }
</script>

<style scoped>

</style>