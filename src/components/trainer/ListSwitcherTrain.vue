<template>
    <v-container>
        <h2>Ui Trainer</h2>
        <v-row>
            <v-col>
                <v-btn @click="switchvisi">Switch</v-btn>
                <div v-bind:class="{train:visi , train2:!visi}">
                    <div v-if="visi">
                        <div v-for="(n, index) in 3">
                            <div>{{items[(index)]}}</div>
                        </div>
                    </div>
                    <div v-else>
                        <div v-for="(n) in items">
                            <div>{{n}}</div>
                        </div>
                    </div>
                </div>
            </v-col>
            <v-col></v-col>
            <v-col></v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "ListSwitcherTrain",
        data() {
            return {
                items: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'],
                visi: true
            }
        },
        methods: {
            switchvisi() {
                this.visi = !this.visi
            }
        }
    }
</script>

<style scoped>
    .train {
        border: 1px solid;
        border-color: red;
        padding: 1px;
    }
    .train2 {
        border: 1px solid;
        border-color: black;
        padding: 1px;
    }
</style>