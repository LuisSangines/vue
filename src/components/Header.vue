<template>
  <v-container>
    <v-toolbar dense class="mainHeader" >
      <v-toolbar-title>
        <v-avatar>
          <img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
          >
        </v-avatar>
        Netflox
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text><router-link to="/">Peliculas</router-link></v-btn>
        <v-btn text><router-link to="/hambre">Hambre??</router-link></v-btn>
      </v-toolbar-items>
      <div class="hidden-sm-and-up">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
          </template>
          <v-list class="responsiveMenu">
            <v-list-item>
              <v-list-item-title><router-link to="/">Peliculas</router-link></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title><router-link to="/hambre">Hambre??</router-link></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
  })
};
</script>


<style lang="scss">
header {
  .v-toolbar__title {
    font-weight: 600;
    text-transform: uppercase;
  }

  .v-toolbar__content {
    @media only screen and (max-width: 499px) {
      padding: 0;
    }
  }
}

.mainHeader {
  background: #008080 !important;
  .v-toolbar__title {
    color:#800000;
  }

  .v-toolbar__items {
    .v-btn__content {
      a {
        color:#800000;
      }
    }

    .v-btn {
      @media only screen and (max-width: 599px) {
        padding: 0 0 0 10px;
      }
    }
  }

}
</style>
