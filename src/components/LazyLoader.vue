<template>
    <span>aaa</span>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: "LazyLoader",
        props: {
            id: Number
        },
        methods: mapActions(['loadProductPage']),
        mounted() {
            // window.onscroll = ()=>{
            //     let isBottomOfScreen = (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2;
            //     if (isBottomOfScreen){
            //         alert('Bottom reached')
            //         this.loadProductPage();
            //     }
            // }
        },
        beforeDestroy(){
            window.onscroll = null
        }
    }
</script>

<style scoped>

</style>