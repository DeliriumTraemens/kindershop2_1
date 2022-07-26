<template>
   <v-container>
       <v-row>
           <v-col>
               <ListSwitcherTrain />
           </v-col>
           <v-col>
               <CheckBoxTrainer />
           </v-col>
           <v-col>
               <BrowserTrainerLayout1 />
           </v-col>
       </v-row>
   </v-container>
</template>

<script>
    import ListSwitcherTrain from "../components/trainer/ListSwitcherTrain";
    import CheckBoxTrainer from "../components/trainer/CheckBoxTrainer";
    import BrowserTrainerLayout1 from "../components/trainer/BrowserTrainerLayout1";
    export default {
        name: "UiTrainer",
        components: {BrowserTrainerLayout1, CheckBoxTrainer, ListSwitcherTrain},
    }
</script>

<style scoped>

</style>