<template>
    <span></span>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: "LazyLoader",

        methods: mapActions(['loadProductPage']),
        mounted() {
            window.onscroll = () => {
                const el = document.documentElement
                const isBottomOfScreen = el.scrollTop + window.innerHeight > el.offsetHeight - 2
                if (isBottomOfScreen) {
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