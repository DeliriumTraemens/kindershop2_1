<template>
    <v-container>
<!--        <p>{{selected}}</p>-->

<!--        <v-simple-table dense >-->
<!--            <template v-slot:default>-->
<!--                <thead>-->
<!--                    <tr>-->
<!--                        <th class="text-left">-->
<!--                            Filter-->
<!--                        </th>-->
<!--                    </tr>-->
<!--                </thead>-->
<!--                <tbody>-->
<!--                <tr class="tr1">-->
<!--                    <v-checkbox-->
<!--                            v-model="selected"-->
<!--                            indeterminate="true"-->
<!--                            label="Nick"-->
<!--                            value="Nick"-->
<!--                            id="vcheck"></v-checkbox>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                    <v-checkbox-->
<!--                            color="yellow"-->
<!--                            dark="true"-->
<!--                            v-model="selected"-->
<!--                            label="John"-->
<!--                            value="John"></v-checkbox>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                    <v-checkbox-->
<!--                            s-->
<!--                            v-model="selected"-->
<!--                            label="Markus"-->
<!--                            value="Markus"></v-checkbox>-->
<!--                </tr>-->
<!--                <tr>ssd</tr>-->
<!--                <tr>ssd</tr>-->
<!--                <tr>ssd</tr>-->
<!--                </tbody>-->
<!--            </template>-->
<!--        </v-simple-table>-->

<!--        <v-row>-->
<!--            <v-col>-->

<!--            <v-checkbox-->
<!--                    v-model="selected"-->
<!--                    indeterminate="true"-->
<!--                    label="Nick"-->
<!--                    value="Nick"-->
<!--            id="vcheck"></v-checkbox>-->
<!--            <v-checkbox-->
<!--                    color="yellow"-->
<!--                    dark="true"-->
<!--                    v-model="selected"-->
<!--                    label="John"-->
<!--                    value="John"></v-checkbox>-->
<!--            <v-checkbox-->
<!--                    v-model="selected"-->
<!--                    label="Markus"-->
<!--                    value="Markus"></v-checkbox>-->
<!--            </v-col>-->
<!--        </v-row>-->

        <hr>
        <p>CatId {{getSelectedCategoryId}}</p>
        <p>{{boxes}}</p>

       <div>
           <PriceChooser/>
       </div>

        <v-card class="overflow-y-auto mt-5"
                max-height="200px">
        <div v-for="it in getCurrentProductListManufacturers" :key="it">
<!--            <v-checkbox-->
<!--                    v-model="boxes"-->
<!--                    :label="it.name"-->
<!--                    :value="it.id"-->
<!--            ></v-checkbox>-->
            <input type="checkbox"
                    v-model="boxes"
                    label="it.name"
                    :value="it.id"
                   name="id"
                   id="id"
            >
            <label for="id" class="ml-2">{{it.name}}</label>
        </div>
        </v-card>

    </v-container>

</template>

<script>
    import {mapGetters} from 'vuex'
    import PriceChooser from "../common_ui/PriceChooser";



    export default {
        name: "CheckBoxTrainer",
        components: {PriceChooser},
        data(){
            return{
                selected:['Nick'],
                boxes:[],
                box1:[],
                items: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'],
            }
        },
        computed:{
            ...mapGetters(['getCurrentProductListManufacturers','getSelectedCategoryId'])
        }
    }
</script>

<style scoped>
#vcheck{
    font-size:10px;
    color: #874205;
}
.tr1{
    max-height:30px;
border-box:1px;

}
</style>