<template>
    <v-container>
        <p>{{selectedMans}}</p>
        <p>{{selM}}</p>
        <p>A chek {{selectedMans}}</p>
        <input type="checkbox" v-model="selectedMans" name="acheck" value="20">
        <v-row>
            <div v-if="isVisible">
                <div v-for="n in 5" :key="n">
<!--                    <div id="manCard2">{{getCurrentProductListManufacturers[n].name}}</div>-->
                    <v-checkbox
                            dense
                            v-model="selectedMans"
                            :label="getCurrentProductListManufacturers[n].name"
                            :value="getCurrentProductListManufacturers[n].id"
                    ></v-checkbox>
                </div>
                <v-btn x-small @click="showAll">ShowAll</v-btn>
            </div>
            <div v-else>
                <div v-for="item in getCurrentProductListManufacturers" :key="item.id">
<!--                    <div id="manCard">{{item.name}}</div>-->
                    <v-checkbox
                            dense
                            v-model="selM"
                            :label="item.name"
                            :value="item.id"
                    ></v-checkbox>
                </div>
                <v-btn x-small @click="showAll">ShowAll</v-btn>
            </div>
        </v-row>
    </v-container>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "CategoryManufacturerList",
        data(){
            return{
                isVisible:true,
                selectedMans: [],
                selM:[]
            }
        },
        computed:{
            ...mapGetters(['getCurrentProductListManufacturers'])
        },
        methods:{
            showAll(){
                this.isVisible = !this.isVisible
            }
        }
    }
</script>

<style scoped>
#manCard{
    margin-right: 5px;
    margin-bottom: 3px;
    border-radius: 4px;
    padding: 2px;
    font-size: small;
    border: 1px solid;

}
#manCard2{
    margin-right: 5px;
    margin-bottom: 3px;
    border-radius: 4px;
    padding: 2px;
    font-size: small;
    border: 1px solid;

}
</style>