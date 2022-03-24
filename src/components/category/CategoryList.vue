<template>
    <v-container>
        <h3>Category List 2</h3>
        <hr class="my-4">
        <div class="mb-5">{{getCategoryList.name}} </div>
        <div v-for="item in getCategoryList.children" :key="item.name">
            <div class="card1">
                {{item.name}} <strong>{{item.id}}</strong>

                <div v-for="sub in item.children" :key="sub.id" class="card1">
                    {{sub.name}}

<!--                    <div v-if="!sub.children.length() > 0">-->
<!--                        <div v-for="sub1 in sub" :key="sub.id" class="card1">-->
<!--                            {{sub1.name}}-->
<!--                        </div>-->
<!--                    </div>-->

                </div>

            </div>
        </div>
    </v-container>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name: "CategoryList",
        data(){
            return{
                cats: {}

            }
        },
        computed: {
            ...mapGetters(['getCategoryList'])
        },
        methods:{
            ...mapActions(['setCategoryList']),
            setCats(){
                this.cats = this.getCategoryList
            }
        },
       async mounted(){
            this.setCats()
            // await this.$store.dispatch('setCategoryList')

        }
    }
</script>

<style scoped>
.card1{
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    border: 1px solid;
    border-radius:4px;
}
</style>
