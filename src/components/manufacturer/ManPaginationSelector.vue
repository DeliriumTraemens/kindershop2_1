<template>
    <v-layout justify-space-between class="myCounter">
        <v-btn @click="counterDecrement()" class="myCounterSwitch"> — </v-btn>
        <div>{{getCurrentManPage}}</div>
        <v-btn color="warning" @click="counterIncrement()" class="myCounterSwitch"> + </v-btn>
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
        background-color: darkorange;
        min-width: 30px;
        padding: 5px;

    }
</style>