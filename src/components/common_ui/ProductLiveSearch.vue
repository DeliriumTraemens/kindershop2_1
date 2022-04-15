<template>
    <div>
        <h3>LiveProductSearch</h3>
        <hr>
        <v-text-field @input="handleInput" label="Search Product" v-model="input"/>
        <hr class="my-4">
        <h5>{{input}}</h5>
        <h5>Найдено: {{result.length}}</h5>
        <div v-for="item in result" :key="item.id">
            <div class="prodcard">
                <h5>{{item.name}} {{item.id}}</h5><br>
                <h6>Category {{item.catId}}</h6>
                <p>Производитель: </p>
            </div>

        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "ProductLiveSearch",
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
</style>