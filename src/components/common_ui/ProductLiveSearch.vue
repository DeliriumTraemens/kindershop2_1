<template>
    <div>
        <h3>LiveProductSearch</h3>
        <hr>
        <v-text-field @input="handleInput" label="Search Product" v-model="input"/>
        <hr class="my-4">
        <h5>{{input}}</h5>
        <h5>Найдено: {{result.length}}</h5>
        <div v-for="item in result" :key="item.id" >
        <ProductSearchCard :item="item" />




        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import ProductSearchCard from "../product/ProductSearchCard.vue";


    export default {
        name: "ProductLiveSearch",
        components: {ProductSearchCard},
        data() {
            return {
                input: '',
                result: []
            }
        },
        methods: {
        async    handleInput() {
                if (this.input.length >= 3) {
                    const sd = new FormData();
                    sd.append('name', this.input)
             await       axios.post('http://localhost:9292/prodcat/search', sd,
                 {
                     maxContentLength: 0,
                     maxBodyLength: 0
                 }).then(res => {
                        this.result = res.data
                        console.log(this.result)
                    })
                }
            }
        },
        beforeDestroy() {
            this.result=null
        }

    }
</script>

<style scoped>
.prodcard{
    border: 1px solid;
    margin-bottom: 5px;
    padding: 5px;
}
.myCard{
    background-color:sandybrown;
    min-height: 150px;
    border:1px solid;
    border-radius: 4px;
    margin-bottom: 5px;
    padding: 3px;
}
.myHeader{
    border:1px solid;
    background-color:white;
    margin: 3px;
}
.myRow{
    border:1px solid;
    background-color:white;
    margin: 3px;
}
</style>