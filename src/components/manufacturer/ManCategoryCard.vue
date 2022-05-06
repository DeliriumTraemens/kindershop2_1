<template>
    <div class="manCatCard">
        Category Card
        {{item}}
    </div>
</template>

<script>
    export default {
        name: "ManCategoryCard",
        props: {
            item: Array
        }
    }
</script>

<style scoped>
    .manCatCard{
        border: 1px solid;
        margin-bottom: 5px;
    }
</style>