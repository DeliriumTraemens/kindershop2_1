<template>
  <div>
    <Shop :data="getCategoryList.children"/>
  </div>


</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex'
import Shop from './Shop'
export default {
  name: 'Home',
  components: {
    Shop

  },
  computed: {
    ...mapGetters(['getCategoryList'])
  },
  methods: {
    ...mapActions(['setCategoryList'])
  },
  async created(){
    await this.$store.dispatch('setCategoryList')
  }
}
</script>
