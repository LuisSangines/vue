<template>
  <div class="Hambre">
    <v-content>
    <div class="staticHero">
      <h2>Que se te antoja?</h2>
    </div>
    <div class="oa">
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="name" :counter="20" :rules="nameRules" label="Name" required></v-text-field>
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
          <v-textarea v-model="adress" :rules="adressRules" label="Dirección" required></v-textarea>
          <v-container>
            <h2 class="text-center">Escoge tus acompañamientos favoritos</h2>  
              <v-row>
                <v-col v-for="item in golosinas" :key="item.id" class="d-flex child-flex" cols="2" sm="2">     
                  <v-card flat tile 
                    :loading="loading"
                    class="mx-auto my-12"
                    max-width="374"
                    elevation="8"
                  >
                    <v-img contain :src="item.src" aspect-ratio="1"  height="320">
                    </v-img>
                      <v-card-title>
                        {{ item.nombre }}
                      </v-card-title>
                      <v-card-text>
                        <v-checkbox
                        ></v-checkbox>                        
                        <v-row
                          align="center"
                          class="mx-0"
                        >
                        <div>
                          Precio ${{ item.costo }}
                        </div>
                        <v-select
                          :items="cantidad"
                          label="Cantidad"
                          Outlined
                        ></v-select>                        
                        </v-row><br>
                        <div class="movieInfo">Info</div>
                      </v-card-text> 
                  </v-card>
                </v-col>
              </v-row>
          </v-container>          
          <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Submit</v-btn>          
          <v-btn color="error" class="mr-4" @click="reset">Reset</v-btn>
        </v-form>
      </v-container>
    </div>
  </v-content>
  </div>
</template>

<script>
export default {
  name: "Hambre",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 20) || "Name must be less than 20 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    adress: "",
    adressRules: [
      v => !!v || "adress is required",
      v => (v && v.length >= 10) || "Message must be more than 10 characters"
    ],
    golosinas:[
      {
        src: require("../assets/images/gol1.jpg"),
        nombre: "Gansito",
        costo: 5,
        info: "a"
      },
      {
        src: require("../assets/images/gol2.jpg"),
        nombre: "Palomitas",
        costo: 5,
        info: "a"
      },
      {
        src: require("../assets/images/gol3.jpg"),
        nombre: "Papas a la francesa",
        costo: 5,
        info: "a"
      },
      {
        src: require("../assets/images/gol4.jpg"),
        nombre: "Nachos",
        costo: 5,
        info: "a"
      },
      {
        src: require("../assets/images/gol5.jpg"),
        nombre: "Snickers",
        costo: 5,
        info: "a"
      },
      {
        src: require("../assets/images/gol6.jpg"),
        nombre: "Magnum",
        costo: 5,
        info: "a"
      },
      {
        src: require("../assets/images/gol11.jpg"),
        nombre: "Pinguinos",
        costo: 5,
        info: "a"
      },   
      {
        src: require("../assets/images/gol12.png"),
        nombre: "Roles de Canela",
        costo: 5,
        info: "a"
      },         
      {
        src: require("../assets/images/gol7.jpg"),
        nombre: "Coca-Cola",
        costo: 5,
        info: "a"
      },
      {
        src: require("../assets/images/gol8.jpg"),
        nombre: "Pepsi",
        costo: 5,
        info: "a"
      },
      {
        src: require("../assets/images/gol9.jpg"),
        nombre: "Manzanita",
        costo: 5,
        info: "a"
      },
      {
        src: require("../assets/images/gol10.jpg"),
        nombre: "Mirinda",
        costo: 5,
        info: "a"
      }                
    ],
    cantidad:[1,2,3,4,5,6]
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style lang="scss">
.Hambre{
  background: aquamarine;
}
</style>
