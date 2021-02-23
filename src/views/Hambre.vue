<template>
  <v-container class="Hambre">
    <div class="formulario">
      <div class="titulo">
        <h1>Que se te antoja?</h1>
      </div>
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="name" :counter="20" :rules="nameRules" label="Name" required></v-text-field>
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
          <v-textarea v-model="adress" :rules="adressRules" label="Dirección" required></v-textarea>
          <v-container>
            <div class="titulo">
            <h1 class="text-center">Escoge tus acompañamientos favoritos</h1>  
            </div>
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
                          :items= [1,2,3,4,5,6]
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
  </v-container>
</template>

<script>
export default {
  name: "Hambre",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      name => !!name || "Name is required",
      name => (name && name.length <= 20) || "Name must be less than 20 characters"
    ],
    email: "",
    emailRules: [
      email => !!email || "E-mail is required",
      email => /.+@.+\..+/.test(email) || "E-mail must be valid"
    ],
    adress: "",
    adressRules: [
      adress => !!adress || "adress is required",
      adress => (adress && adress.length >= 10) || "Message must be more than 10 characters"
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
    ]
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
  background: #000;
}
h1{
  font-family: cursive,Lucida Handwriting;
  font-size: 33px;
}
.titulo{
  box-shadow: 10px 10px 5px #000;
  
}
.formulario{
  border-radius: 20px;
  background:aquamarine;
}
</style>
