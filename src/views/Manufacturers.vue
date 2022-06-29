<template>
    <div>
        <div><h1>Manufacturers</h1></div>
        <v-row>
            <Alphabet />
        </v-row>
        <v-row>
            <v-col cols="3">Manufacturers list
            <ManufacturerAlphabetList />
            </v-col>
            <v-col cols="2">ManCatList
                <ManCategoryList />
            </v-col>
            <v-col cols="7">
                Products
                <ManCatProdList/>
            </v-col>
<!--            <v-col cols="3">Additional</v-col>-->
        </v-row>
    </div>
</template>

<script>
    import Alphabet from "../components/Alphabet";
    import ManufacturerAlphabetList from "../components/manufacturer/ManufacturerAlphabetList";
    import ManCategoryList from "../components/manufacturer/ManCategoryList";
    import ManCatProdList from "../components/manufacturer/ManCatProdList";
    export default {
        name: "Manufacturers",
        components: {ManCatProdList, ManCategoryList, ManufacturerAlphabetList, Alphabet}
    }
</script>

<style scoped>

</style>