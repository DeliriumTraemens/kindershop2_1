<template>
    <span></span>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: "LazyLoader",
        data(){
            return{
                isBottomOfScreen:null
            }
        },

        methods: mapActions(['loadProductPage']),
        mounted() {
            window.onscroll = () => {
                let el = document.documentElement
                this.isBottomOfScreen = el.scrollTop + window.innerHeight > el.offsetHeight - 10
                if (this.isBottomOfScreen) {
                    // alert('ProductList')
                    this.loadProductPage()
                }
            }
        },
        beforeDestroy(){
            window.onscroll = null
        }
    }
</script>

<style scoped>

</style>