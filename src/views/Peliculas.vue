<template>
  <v-container>
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
        <div class="titulo">
        <h1 class="text-center">Que quieres ver hoy?</h1>  
        </div>
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
                    <div class="trailerMovie">
  
                      <v-menu transition="fab-transition">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          dark
                          color="primary"
                          v-bind="attrs"
                          v-on="on"
                        >
                          VER TRAILER
                        </v-btn>
                      </template>
                      <iframe width="560" height="315" :src="item.watch_trailer"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </v-menu>

                    </div>
                  </v-card-text> 
              </v-card>
            </v-col>
          </v-row>
      </v-container>
    </div>
  </v-container>
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
          rating: 3.5,
          watch_trailer: "https://youtube.com/embed/FLzfXQSPBOg" 
        },
        {
          id: 2,
          src: require("../assets/images/img2.jpg"),
          title: "Escuadrón Suicida",
          rating: 4,
          watch_trailer: "https://youtube.com/embed/Ri-OUeRulio"
        },
        {
          id: 3,
          src: require("../assets/images/img3.jpg"),
          title: "Avengers: Endgame",
          rating: 4.5,
          watch_trailer: "https://youtube.com/embed/KdL8ucqi1F8"
        },
        {
          id: 4,
          src: require("../assets/images/img4.jpg"),
          title: "Star wars: episodio III - la venganza de los sith",
          rating: 5,
          watch_trailer: "https://youtube.com/embed/5UnjrG_N8hU"
        },
        {
          id: 5,
          src: require("../assets/images/img5.jpg"),
          title: "Rápidos y furiosos: 5in control",
          rating: 3.8,
          watch_trailer: "https://youtube.com/embed/6nu_OQYEwPY"
        },
        {
          id: 6,
          src: require("../assets/images/img6.jpg"),
          title: "Harry Potter y la orden del Fénix",
          rating: 4.2,
          watch_trailer: "https://youtube.com/embed/xw6MZfsv-pY"
        },
        {
          id: 7,
          src: require("../assets/images/img7.jpg"),
          title: "El Señor de los Anillos: la Comunidad del Anillo",
          rating: 4.8,
          watch_trailer: "https://youtube.com/embed/GuW21RLMndc"
        },
        {
          id: 8,
          src: require("../assets/images/img8.jpg"),
          title: "Piratas del Caribe: la maldición del Perla Negra",
          rating: 4,
          watch_trailer: "https://youtube.com/embed/5Itr2jHuJaw"
        },
        {
          id: 9,
          src: require("../assets/images/img9.jpg"),
          title: "Star Trek",
          rating: 4.2,
          watch_trailer: "https://youtube.com/embed/7TSsdMOmDdg"
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
}

.v-container {
  max-width: 1200px;
}

.titulo{
  box-shadow: 10px 10px 5px #000;
  border-radius: 20px;
}
h1{
  font-family: cursive,Lucida Handwriting;
}
</style>

