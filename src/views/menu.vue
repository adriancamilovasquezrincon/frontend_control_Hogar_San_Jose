<template>
  <div>
    <header class="bg_animate">
      <div class="header_nav">
        <div class="contenedor">
          <v-btn color="white" dark @click.stop="drawer = !drawer">
            <v-col>
              <v-btn icon color="black">
                <v-icon>mdi-home</v-icon>
              </v-btn>
            </v-col>
          </v-btn>
          <h1>Inicio</h1>
          <v-btn @click="token" color="yellow">Token</v-btn>

          <v-badge bordered color="error" icon="mdi-lock" overlap>
            <v-btn
              class="black--text"
              color="white"
              depressed
              @click="cerrarSesion"
            >
              Cerrar Sesión
            </v-btn>
          </v-badge>
        </div>
      </div>
    </header>

    <div>
      <v-app id="inspire">
        <v-sheet
          height="700"
          class="overflow-hidden"
          style="position: relative"
        >
          <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list-item class="lista">
              <v-list class="menuBajar" nav dense>
                <v-app id="inspire">
                  <div>
                    <template>
                      <div>
                        <v-expansion-panels v-model="panel">
                          <v-expansion-panel>
                              <router-link to="/usuarios">
                                <v-icon>mdi-clipboard-text</v-icon>
                                <v-btn id="linea" text color="secondary"
                                  >Usuario</v-btn
                                ></router-link
                              >
                              <router-link to="/tipoGasto">
                                <v-icon>mdi-clipboard-text</v-icon>
                                <v-btn text color="secondary"
                                  >tipoGasto</v-btn
                                ></router-link
                              >

                          </v-expansion-panel>
                          <v-expansion-panel>
                              <router-link to="/rubros">
                                <v-icon color="grey lighten-1">
                                  mdi-cart
                                </v-icon>
                                <v-btn text color="secondary"
                                  >rubros</v-btn
                                ></router-link
                              >
                              <router-link to="/personas">
                                <v-icon>mdi-account-circle</v-icon>
                                <v-btn text color="secondary"
                                  >personas</v-btn
                                ></router-link
                              >
                          </v-expansion-panel>
                          <v-expansion-panel>
                              <router-link to="/ingresos">
                                <v-icon color="grey lighten-1">
                                  mdi-cart
                                </v-icon>
                                <v-btn text color="secondary"
                                  >ingresos</v-btn
                                ></router-link
                              >

                              <router-link to="/gastos">
                                <v-icon>mdi-account-circle</v-icon>
                                <v-btn text color="secondary"
                                  >gastos</v-btn
                                ></router-link
                              >
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </div>
                    </template>
                  </div>
                </v-app>
              </v-list>
            </v-list-item>
          </v-navigation-drawer>

          <section class="banner contenedor">
            <section class="banner_title">
              <h2>Bienvenid@</h2>
            </section>
            <div class="banner_img"></div>
          </section>

          <div class="burbujas">
            <div class="burbuja"></div>
            <div class="burbuja"></div>
            <div class="burbuja"></div>
            <div class="burbuja"></div>
            <div class="burbuja"></div>
            <div class="burbuja"></div>
            <div class="burbuja"></div>
            <div class="burbuja"></div>
            <div class="burbuja"></div>
            <div class="burbuja"></div>
          </div>
        </v-sheet>
      </v-app>
    </div>
  </div>
</template>
<script>
//import Dropdown from "./Dropdown";
export default {
  name: "navigation",
  components: {},
  data() {
    return {
      detalles: [],
      selectedItem: 0,
      drawer: null,
      panel: [0, 1],
      disabled: false,
      readonly: false,
    };
  },
  methods: {
    cerrarSesion() {},
    token() {
      console.log(this.token)
      console.log(this.$store.state.token);
    },
  },
};
</script>
<style>
.contenido {
  font-size: 18px;
  width: 10px;
}
h3 {
  margin-top: 2px;
  font-size: 35px;
  text-transform: uppercase;
  font-family: "DM Serif Display", serif;
  color: black;
}
h4 {
  font-family: "DM Serif Display", serif;
  font-size: 24px;
}
.lista {
  margin-top: 12px;
  font-size: 24px;
  height: 60px;
  text-align: center;
}
.menuBajar {
  height: 40px;
  margin-top: 25px;
}
/*Grafico y Bienvenid@*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Roboto", "Sans serif";
}
.overflow-hidden {
  background: url("https://www.webcoderskull.com/img/abouts-bg.png") no-repeat
    center top / cover;
}
.contenedor {
  width: 90%;
  max-width: 1200px;
  margin: auto;
}
.bg_animate {
  width: 100%;
  height: 12vh;
  position: relative;
  overflow: hidden;
}
.header_nav {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: black;
}
.header_nav .contenedor {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}
.header_nav h1 {
  color: #fff;
  font-family: "Gagalin";
}
.header_nav nav a {
  color: #fff;
  text-decoration: none;
  margin-right: 10px;
}
.banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.banner_title h2 {
  color: rgb(0, 0, 0);
  font-size: 60px;
  font-weight: 800;
  margin-bottom: 20px;
  margin-left: 200px;
  /*text-shadow: 2px 4px  #fff;*/
  text-shadow: 0 0 20px #fefcc9, 2px -2px 3px #f29f05, -4px -4px 5px #f21f0c,
    5px -10px 6px #043c5d, -5px -12px 8px #23a5d9, 0 -15px 20px #024059,
    2px -15px 20px #23a5d9;
  color: rgb(3, 3, 3);
}
#bienvenido {
  text-shadow: 5px 5px 5px 5px solid rgb(255, 0, 0);
}
.banner_img {
  animation: movimiento 2.5s linear infinite;
}
.banner_img img {
  width: 600px;
  display: block;
}
/* burbujas */
.burbuja {
  border-radius: 50%;
  background: rgb(255, 255, 255);
  opacity: 0.3;
  position: absolute;
  bottom: -150;
  animation: burbujas 3s linear infinite;
}
.burbuja:nth-child(1) {
  width: 80px;
  height: 80px;
  left: 5%;
  animation-duration: 3s;
  animation-delay: 3s;
}
.burbuja:nth-child(2) {
  width: 100px;
  height: 100px;
  left: 35%;
  animation-duration: 3s;
  animation-delay: 5s;
}
.burbuja:nth-child(3) {
  width: 20px;
  height: 20px;
  left: 15%;
  animation-duration: 1.5s;
  animation-delay: 7s;
}
.burbuja:nth-child(4) {
  width: 50px;
  height: 50px;
  left: 90%;
  animation-duration: 6s;
  animation-delay: 3s;
}
.burbuja:nth-child(5) {
  width: 70px;
  height: 70px;
  left: 65%;
  animation-duration: 3s;
  animation-delay: 1s;
}
.burbuja:nth-child(6) {
  width: 20px;
  height: 20px;
  left: 50%;
  animation-duration: 4s;
  animation-delay: 5s;
}
.burbuja:nth-child(7) {
  width: 20px;
  height: 20px;
  left: 50%;
  animation-duration: 4s;
  animation-delay: 5s;
}
.burbuja:nth-child(8) {
  width: 100;
  height: 100px;
  left: 52%;
  animation-duration: 5s;
  animation-delay: 5s;
}
.burbuja:nth-child(9) {
  width: 65px;
  height: 65px;
  left: 51%;
  animation-duration: 3s;
  animation-delay: 2s;
}
.burbuja:nth-child(10) {
  width: 40px;
  height: 40px;
  left: 35%;
  animation-duration: 3s;
  animation-delay: 4s;
}
@keyframes burbujas {
  0% {
    bottom: 0;
    opacity: 0;
  }
  30% {
    transform: translateX(30px);
  }
  50% {
    opacity: 0.4;
  }
  100% {
    bottom: 100vh;
    opacity: 0;
  }
}
@keyframes movimiento {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(30px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>