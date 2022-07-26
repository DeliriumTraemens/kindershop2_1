<template>
  <v-app>
    <v-app-bar
            absolute
      app
      color="grey darken-2"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <v-btn @click="show_shop" x-small color="warning" class="mr-2">Shop</v-btn>
      <v-btn @click="category_commander" x-small color="warning" class="mr-2">Category Commander</v-btn>
      <v-btn @click="shop_commander" x-small color="blue" class="mr-2">Shop Commander</v-btn>
      <v-btn @click="categorySearh" x-small color="green" class="mr-2">Category Search</v-btn>
      <v-btn @click="productSearch" x-small color="green" class="mr-2">Product Search</v-btn>
      <v-btn @click="shop_trainer" x-small color="red">Shop Trainer</v-btn>
      <v-btn @click="shop_trainer2" x-small color="red">Manufacturers</v-btn>
      <v-btn @click="ui_trainer" x-small color="orange">UiTrainer</v-btn>


      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  methods:{
    shop_commander(){
      this.$router.push('/commander')
    },
    show_shop(){
      this.$router.push('/')
    },
    shop_trainer(){
      this.$router.push('/trainer')
    },
    shop_trainer2(){
      this.$router.push('/trainer2')
    },
    categorySearh(){
      this.$router.push('/catSearch')
    },
    productSearch(){
      this.$router.push('/prodSearch')
    },
    category_commander(){
      this.$router.push('/catcommander')
    },
    ui_trainer(){
      this.$router.push('/ui_train')
    }
  }
};
</script>
