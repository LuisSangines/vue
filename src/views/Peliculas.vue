<template>
  <v-contanier>
    <div class="promosionales">
      <v-carousel cycle hide-delimiters>
        <v-carousel-item
          v-for="(item,i) in carrusel"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
          eager="true"
        >
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="estrenos">
      <v-container>
        <h2 class="text-center">Que quieres ver hoy?</h2>  
          <v-row>
            <v-col v-for="item in items" :key="item.id" class="d-flex child-flex" cols="6" sm="4">
              <v-card flat tile 
                :loading="loading"
                class="mx-auto my-12"
                max-width="374"
                elevation="8"
              >
                <v-img :src="item.src" aspect-ratio="1"  height="250px">
                </v-img>
                  <v-card-title>
                    {{ item.title }}
                  </v-card-title>
                  <v-card-text>
                    <v-row
                      align="center"
                      class="mx-0"
                    >
                      <v-rating
                        :value= item.rating
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                      ></v-rating>
                      <div class="grey--text ml-4">
                        {{ item.rating }} (413)
                      </div>
                    </v-row><br>
                    <div class="movieInfo">Info</div>
                  </v-card-text> 
              </v-card>
            </v-col>
          </v-row>
      </v-container>
    </div>
  </v-contanier>
</template>

<script>
export default {
  name: "Peliculas",
    data() {
    return {
      carrusel:[
        {
          src: require("../assets/images/peli1.png"),
        },
        {
          src: require("../assets/images/peli2.jpg"),
        },
        {
          src: require("../assets/images/peli3.jpg"),
        }
      ],
      items: [
        {
          id: 1,
          src: require("../assets/images/img1.jpg"),
          title: "Frozen: una aventura congelada",
          rating: 3.5
        },
        {
          id: 2,
          src: require("../assets/images/img2.jpg"),
          title: "Escuadrón Suicida",
          rating: 4
        },
        {
          id: 3,
          src: require("../assets/images/img3.jpg"),
          title: "Avengers: Endgame",
          rating: 4.5
        },
        {
          id: 4,
          src: require("../assets/images/img4.jpg"),
          title: "Star wars: episodio III - la venganza de los sith",
          rating: 5
        },
        {
          id: 5,
          src: require("../assets/images/img5.jpg"),
          title: "Rápidos y furiosos: 5in control",
          rating: 3.8
        },
        {
          id: 6,
          src: require("../assets/images/img6.jpg"),
          title: "Harry Potter y la orden del Fénix",
          rating: 4.2
        },
        {
          id: 7,
          src: require("../assets/images/img7.jpg"),
          title: "El Señor de los Anillos: la Comunidad del Anillo",
          rating: 4.8
        },
        {
          id: 8,
          src: require("../assets/images/img8.jpg"),
          title: "Piratas del Caribe: la maldición del Perla Negra",
          rating: 4
        },
        {
          id: 9,
          src: require("../assets/images/img9.jpg"),
          title: "Star Trek",
          rating: 4.2
        }
      ]
    };
  }
}
</script>

<style lang="scss">


.Peliculas{
  background-color: aqua;
  padding: 15px;
  align-items: center;
  .p{
    align-self: center;
  }
}

.v-container {
  max-width: 1200px;
  .v-card{
    align-self: center;
  }
}

.movieInfo{
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 1vw;
  font-style: italic;
}
</style>

