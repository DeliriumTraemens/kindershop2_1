<template>
    <v-card class="myCard">
        <div class="myHeader">{{item.name}}</div>
        <v-row class="myRow">
            <v-col cols="8">
<!--                <div v-for="cat in item.categoryList" class="ml-3">-->
<!--                    <h6> {{cat.name}} Id:{{cat.id}}</h6>-->
<!--                </div>-->
                <h6>Categories</h6>
                <div v-for="cat in item.categoryList">
                    <div class="myCatList">{{cat.name}} Id:{{cat.id}}</div>
                </div>
            </v-col>
            <v-col>
                <v-img
                        contain
                        :src="'http://localhost:9292/images/'+item.image"
                        transition="scale-transition"
                        width="150"
                />
            </v-col>
        </v-row>
                <div class="myHeader">
                    Производитель: {{item.manufacturer.name}}

                </div>

    </v-card>
</template>

<script>
    export default {
        name: "ProductSearchCard",
        props:{
            item:Object
        }
    }
</script>

<style scoped>
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