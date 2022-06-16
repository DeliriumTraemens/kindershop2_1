<template>
    <v-card class="myCard">
        <div class="myHeader">{{item.name}}</div>
        <div style="color:#f6ec94; padding-left:8px">Product Id {{item.id}}</div>
<!--        <div style="color:darkblue">Product Id {{item.id}}  <-&ndash;&gt;  Category Id {{item.id}}</div>-->
        <v-row class="myRow">
            <v-col cols="7">
<!--                <div v-for="cat in item.categoryList" class="ml-3">-->
<!--                    <h6> {{cat.name}} Id:{{cat.id}}</h6>-->
<!--                </div>-->
                <h6>Categories</h6>
                <div v-for="cat in item.categoryList" :key="cat.id">
                    <div class="myCatList">{{cat.name}} Id:{{cat.id}}</div>
                </div>
            </v-col>
            <v-col cols="5">
<!--                        :src="'http://localhost:9292/images/'+item.image"-->
                <v-img
                        :src="'http://kinder.ru/image/'+item.image"
                        contain
                        transition="scale-transition"
                        height="120"
                />
            </v-col>
        </v-row>
                <div class="myHeader">
                    Производитель: <strong>{{item.manufacturer.name}}</strong>

                </div>
        <v-btn x-small @click="showProduct(item)">Show</v-btn>

    </v-card>
</template>

<script>
    import {mapMutations} from 'vuex';
    export default {
        name: "ProductSearchCard",
        props:{
            item:{}
        },
        methods:{
            ...mapMutations(['currentProductIdMutation']),
            showProduct(item){
                this.$store.commit('currentProductIdMutation', item.id)
                this.$router.push('/product')


            }
        }
    }
</script>

<style scoped>
    .myCard{
        background-color: #874205;
        max-width:400px;
        min-height: 150px;
        border:1px solid;
        border-radius: 4px;
        /*margin-top: 10px;*/
        margin-bottom: 10px;
        margin-left: 5px;
        padding: 3px;
    }
    .myHeader{
        border:1px solid;
        background-color: #f5e8b4;
        margin: 3px;
        padding-left: 5px;
        padding-bottom: 3px;
        /*font-family: "Times New Roman";*/
        font-size: 16px;
        line-height: 18px;
    }
    .myRow{
        border:1px solid;
        background-color:white;
        margin: 3px;
    }
    .myCatList{
        font-size: 12px;
        margin-left: 10px;
    }
</style>