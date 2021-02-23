<template>
  <v-container>
    <v-footer padless>
      <v-card flat class="text-center">
        <v-card-text>
          <v-btn v-for="item in items" :key="item" :href="item.link" target="_blank" class="mx-4" icon>
            <v-icon size="24px">{{ item.icon }}</v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text
          class="pt-0"
        >El Titular ha obtenido la información, el contenido multimedia y los materiales incluidos en el sitio Web de fuentes que considera fiables, pero, si bien ha tomado todas las medidas razonables para asegurar que la información contenida es correcta, el Titular no garantiza que sea exacta, completa o actualizada. El Titular declina expresamente cualquier responsabilidad por error u omisión en la información contenida en las páginas de este sitio Web.</v-card-text>
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
  name: "Footer",
  data: () => ({
    items: [
      {
        icon: "mdi-twitter",
        link: "https://twitter.com/?lang=es"

      },
      {
        icon: "mdi-facebook",
        link: "https://es-la.facebook.com/"
      },
      {
        icon: "mdi-instagram",
        link: "https://www.instagram.com/?hl=es-la"      
      }
    ]
  })
};
</script>

<style lang="scss">
Footer {
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
    background:  #00FFFF;
    
    .v-btn {
      @media only screen and (max-width: 599px) { 
        margin: 0 7px !important;
      }
      color: #000;
    }
  }
}
</style>