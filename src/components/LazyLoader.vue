<template>
    <span>  aa </span>
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

        methods: {
            ...mapActions(['loadProductPage']),
            handleScroll(){
                if(window.scrollY + window.innerHeight >= document.body.scrollHeight -50){
                    alert('Scrolled Lazy Loader')
                }
            }
        },

        mounted() {

            window.addEventListener('scroll', this.handleScroll)

            // window.onscroll = () => {
            //     let el = document.documentElement
            //     this.isBottomOfScreen = el.scrollTop + window.innerHeight > el.offsetHeight - 10
            //     if (this.isBottomOfScreen) {
            //         // alert('ProductList')
            //         this.loadProductPage()
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