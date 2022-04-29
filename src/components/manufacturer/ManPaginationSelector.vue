<template>
    <v-layout justify-space-between class="myCounter">
        <div @click="counterDecrement()" class="myCounterSwitch"> — </div>
        <div>{{getCurrentManPage}}</div>
        <div @click="counterIncrement()" class="myCounterSwitch"> + </div>
    </v-layout>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    export default {
        name: "ManPaginationSelector",
        computed:{
            ...mapGetters(['getCurrentManPage'])
        },
        methods:{
            ...mapActions(['decrementCurrentManPage','incrementCurrentManPage']),
            counterDecrement(){
                this.$store.dispatch('decrementCurrentManPage')
            },
            counterIncrement(){
                this.$store.dispatch('incrementCurrentManPage')

            }
        }
    }
</script>

<style scoped>
    .myCounter{
        max-width: 400px;
        margin-bottom: 20px;
        border: 1px solid;
        padding: 5px;
    }
    .myCounterSwitch{
        border: 1px solid;
        border-radius: 3px;
        background-color: oldlace;
        min-width: 20px;
        padding: 5px;
    }
</style>