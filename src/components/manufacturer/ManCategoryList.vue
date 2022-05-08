<template>
    <div>
        <h3>Man Cat List</h3>
        <div>
            <h4>Количество категорий: {{getManCatList.length}}</h4>
        </div>
        <hr class="my-3">
        <div>
            <div v-for="(item, i) in getManCatList" :key="i">
                <ManCategoryCard :item="item"/>
            </div>
<!--        {{getManCatList}}-->
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import ManCategoryCard from "./ManCategoryCard";
    export default {
        name: "ManCategoryList",
        components: {ManCategoryCard},
        computed: {
            ...mapGetters(['getManCatList'])
        }
    }
</script>

<style scoped>

</style>