<template>
  <v-app>
    <v-app-bar flat max-height="65">
      <Header />
    </v-app-bar>

    <router-view></router-view>

    <v-footer>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    Header,
    Footer
  },

  data: () => ({
    //
  })
};
</script>


<style >
.v-application {
  background: url('https://www.solofondos.com/wp-content/uploads/2015/11/21omxpw.jpg') !important;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.container {
  max-width: 1200px;
}
</style>