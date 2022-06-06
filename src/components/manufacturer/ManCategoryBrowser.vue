<template>
    <div>
        <v-card @click="nodeClicked(nodes.id)" class="mt-2">
            <span
                    v-if="nodes.children.length>0"
                    class="type"
                    style="font-size:10px; color: darkblue"
            >
            {{ expanded ? '&#9660;' : '&#9658;' }}
          </span>
            <span
                    v-else
                    style="font-size:10px; color: mediumblue"
            > &#9671; </span>

            {{nodes.name}} id: {{nodes.id}}
        </v-card>

        <div v-if="expanded" class="ml-3">
            <ManCategoryBrowser
                    v-for="(child, indx) in nodes.children"
                    :key="indx"
                    :nodes="child"/>
        </div>

    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: "ManCategoryBrowser",
        components:{},
        props:{
            nodes: [Array, Number, Object],
            depth: {
                type: Number,
                default: 0
            }
        },

        data() {
            return{
                expanded: false
            }
        },

        methods: {
            ...mapActions(['setManProdCatList']),

            nodeClicked(id){
                this.expanded = !this.expanded;
                this.$store.dispatch('setManProdCatList', id)

            }
        },
    }
</script>

<style scoped>
    .node {
        border-top: 1px solid;
        border-left: 2px solid;
        border-top-left-radius: 6px;

        border-left-color: #0802aa;

        text-align: left;
        margin-top: 3px;
        font-size: 14px;
        /*max-height: 2em;*/
    }

    .lay1{

        max-height:30px;
        padding-left:0.5em;
    }

</style>