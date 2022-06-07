<template>
    <div>
        <h1>Category Search</h1>
        <v-row>
            <v-col cols="3">
                <h3>
                    Left
                    <hr class="mb-4">
                </h3>
                <LiveSearch />
            </v-col>
            <v-col>
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