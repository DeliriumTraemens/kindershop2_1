<template>
    <div>
        <h4 class="mb-3">Live Search</h4>
        <v-text-field @input="handleInput" label="Input Category Name" v-model="input"/>
        <hr class="my-3">
        <!--            <div>{{input}}</div>-->
        <hr class="my-3">
                    <div class="search_res mb-4">Total found <strong>{{result.length}}</strong></div>

        <div class="overflow-y-auto" style="max-height: 550px" id="list1">

            <div v-for="item in result" :key="item.id" >
                <div @click="itemClicked(item)">
                    <v-layout justify-space-between
                    >
                        <div class="search_res">{{item.name}} <strong>Id {{item.id}}</strong> </div>
                        <v-layout>
                            <v-btn x-small color="orange" @click="catRemove(item.id)">–</v-btn>
                        </v-layout>


                    </v-layout>
                </div>
                <!--            <p>{{item}}</p>-->
            </div>
        </div>

    </div>
</template>

<script>
    import axios from 'axios';
    import {mapActions} from 'vuex';

    export default {
        name: "LiveSearch",
        data() {
            return {
                input: '',
                result: []
            }
        },
        methods: {
            ...mapActions(['setCurrentProdList','deleteCategory']),
            itemClicked(item) {
                this.$store.dispatch('setCurrentProdList', item)
                // alert(item.name)
            },
            handleInput() {

                if (this.input.length >= 3) {

                    const sd = new FormData();
                    sd.append('name', this.input)
                    // axios.post('http://localhost:9292/category/search', sd).then(res => {
                    axios.post('http://localhost:9292/catcat', sd).then(res => {
                        this.result = res.data
                        console.log('Search results')
                        console.log(this.result)
                    })
                    // alert('pressed')
                }
            },
            catRemove(id){
                this.$store.dispatch('deleteCategory', id)
            }
        },
    }
</script>

<style scoped>

    .search_res {
        margin-bottom: 5px;
        margin-left: 5px;
        border: 1px solid

    }

</style>