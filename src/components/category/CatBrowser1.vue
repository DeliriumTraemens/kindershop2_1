<template>
    <div class="node">

        <v-layout
                class="lay1"
                justify-space-between
                @click="nodeClicked(nodes)">

            <div
                    draggable="true"
                    @dragover.prevent
                    @dragenter.prevent
                    @dragstart="startDrag2(nodes)"
                    @drop="onDrop2(nodes)"
            >
          <span
                  v-if="nodes.children.length>0"
                  class="type"
                  style="font-size:10px; color: darkorange"
          >
            {{ expanded ? '&#9660;' : '&#9658;' }}
          </span>
                <span
                        v-else
                        style="font-size:10px; color: mediumblue"
                > &#9671; </span>
                {{ nodes.name }} <strong>{{nodes.id}}</strong>
            </div>

        </v-layout>

        <div
                v-if="expanded"
                class="ml-3"
        >

            <CatBrowser1
                    v-for="(child, indx) in nodes.children"
                    :key="indx"
                    :nodes="child"
                    :depth="depth + 1" />
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: "CatBrowser1",
        props:{
            nodes: Array,
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
            ...mapActions(['setCurrentProdList']),
            nodeClicked(nodes){
                this.expanded = !this.expanded
                // console.log(nodes)
                    this.$store.dispatch('setCurrentProdList',nodes)

            },
            startDrag2(nodes){},
            onDrop2(nodes){}
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