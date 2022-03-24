import Vue from 'vue'
import Vuex from 'vuex'
import category from "./modules/category";
import products from "./modules/products";

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
      category,
      products
  }
})
