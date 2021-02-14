<template>
  <v-container>
    <v-footer padless>
      <v-card flat class="text-center">
        <v-card-text>
          <v-btn v-for="item in items" :key="item" :href="item.link" class="mx-4" icon>
            <v-icon size="24px">{{ item.icon }}</v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text
          class="pt-0"
        >Esto es el footer, que siemore va al pie de la pagina</v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          {{ new Date().getFullYear() }} —
          <strong>Pruebas con vuetify y vue</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-container>
</template>

<script>

export default {
  name: "Header",
  data: () => ({
    items: [
      {
        icon: "mdi-twitter",
        link: "https://github.com/LuisSangines"

      },
      {
        icon: "mdi-facebook",
        link: "a"
      },
      {
        icon: "mdi-instagram",
        link: "a"      
      }
    ]
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
    @media only screen and (max-width: 599px) {
      padding: 0;
    }
  }
}
.v-footer {
  align-self: center;
  background: #000 !important;
  align-content: center;
  .v-card__text {
    @media only screen and (max-width: 599px) { 
      padding: 16px 0;
    }
    background:  aqua;
    
    .v-btn {
      @media only screen and (max-width: 599px) { 
        margin: 0 7px !important;
      }
      color: #000;
    }
  }
}
</style>