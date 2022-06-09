<template>
    <div>
        <h2>Shop Commander</h2>
        <v-row class="pl-2">
            <v-col >
                <h3>
                Left
                <hr class="mb-4">
                </h3>
                <LiveSearch/>
            </v-col>
            <v-col>
                <h3>Center</h3>
                <hr class="mb-4">
                <ProductList />
            </v-col>
            <v-col>
                <h3>Right</h3>
                <hr class="mb-4">
                <ProductSearchCard />
                <hr class="mb-4">

                <ProductLiveSearch />
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import LiveSearch from "../components/common_ui/LiveSearch";
    import ProductList from "../components/product/ProductList";
    import ProductLiveSearch from "../components/common_ui/ProductLiveSearch";
    import ProductSearchCard from "../components/product/ProductSearchCard";
    export default {
        name: "ShopCommander",
        components: {ProductSearchCard, ProductLiveSearch, ProductList, LiveSearch}
    }
</script>

<style scoped>


</style>