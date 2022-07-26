<template>
   <v-container>
       <v-row>
           <v-col>
               <ListSwitcherTrain />
           </v-col>
           <v-col>
               <CheckBoxTrainer />
           </v-col>
           <v-col></v-col>
       </v-row>
   </v-container>
</template>

<script>
    import ListSwitcherTrain from "../components/trainer/ListSwitcherTrain";
    import CheckBoxTrainer from "../components/trainer/CheckBoxTrainer";
    export default {
        name: "UiTrainer",
        components: {CheckBoxTrainer, ListSwitcherTrain},
    }
</script>

<style scoped>

</style>