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

    </v-card>
</template>

<script>
    export default {
        name: "ProductSearchCard",
        props:{
            item:{}
        }
    }
</script>

<style scoped>
    .myCard{
        background-color: #874205;
        min-height: 150px;
        border:1px solid;
        border-radius: 4px;
        margin-bottom: 10px;
        padding: 3px;
    }
    .myHeader{
        border:1px solid;
        background-color:white;
        margin: 3px;
        padding-left: 5px;
        /*font-family: "Times New Roman";*/
        font-size: 16px;
        /*line-height: 16px;*/
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