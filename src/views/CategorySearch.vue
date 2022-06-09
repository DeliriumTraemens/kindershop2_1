<template>
    <div>
        <h1>Category Search</h1>
        <v-row class="pl-2">
            <v-col cols="3" >
                <h3>
                    Left
                    <hr class="mb-4">
                </h3>
                <LiveSearch />
            </v-col >
            <v-col class="pr-5">
                <h3>Center</h3>
                <hr class="mb-4">
                <ProductList />
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import LiveSearch from "../components/common_ui/LiveSearch";
    import ProductList from "../components/product/ProductList";
    export default {
        name: "CategorySearch",
        components: {ProductList, LiveSearch}
    }
</script>

<style scoped>

</style>