<template>
    <div>
        <h1>Alphabet</h1>

        <v-row >
            <div v-for="s  in alphabet" :key="s">
                <div class="let-2" @click=letter(s) >{{s}}</div>
            </div>
        </v-row>


    </div>
</template>

<script>
    import axios from 'axios';
    import {mapMutations, mapActions} from 'vuex';
    export default {

        name: "Alphabet",
        data(){
            return{
                alphabet:['a','c'],
                manufacturersList:[]
            }
        },
        created() {
        axios.get('http://localhost:9292/manufacturer/alphabet').then(res => {
            console.log(res.data)
            this.alphabet = res.data
        })
        },
        methods: {
            ...mapMutations(['letterMutation']),
            ...mapActions(['setLetterList']),
            letter(s){
                // alert(s);
                this.$store.commit('letterMutation', s)
                this.$store.dispatch('setLetterList')

            }
        }
    }
</script>

<style scoped>
.let{
    min-width: 20px;
    min-height: 20px;
    border: 1px solid;
    margin: 3px;
    padding-left: 3px;
}
.let-2{
    background-color: #fdf085;
    min-width: 20px;
    min-height: 20px;
    border: 1px solid;
    border-radius:4px;

    margin: 3px;
    padding-left: 3px;
}
</style>