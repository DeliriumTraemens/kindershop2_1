<template>
    <div class="node">
        <h3>Man Category List</h3>
        <div>
            <h4>Количество категорий: {{getManCatList.length}}</h4>
        </div>
        <hr class="my-3">
        <div>
<!--            <div v-for="(item, i) in getManCatList" :key="i">-->
<!--                <ManCategoryCard :item="item"/>-->
<!--            </div>-->
<!--        {{getManCatList}}-->
        </div>
        <ManCategoryBrowser v-for="nodes in getManCatList " :nodes="nodes"/>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import ManCategoryCard from "./ManCategoryCard";
    import ManCategoryBrowser from "./ManCategoryBrowser";
    export default {
        name: "ManCategoryList",
        components: {ManCategoryBrowser, ManCategoryCard},
        data() {
            return{
                expanded: false
            }
        },
        computed: {
            ...mapGetters(['getManCatList'])
        }
    }
</script>

<style scoped>

</style>