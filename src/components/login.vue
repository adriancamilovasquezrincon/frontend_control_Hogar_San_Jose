<template>
  <div class="fondosolo">
    <div class="menu">
      <button class="inicio">
        <img class="iconocasa" src="../assets/fondos/casa.png" alt="" />
        <h2 class="letrasesion">inicio</h2>
      </button>
    </div>

    <div class="piso"></div>
    <div class="celular">
      <label for="tab-1" class="email">Correo</label>
      <input type="text" v-model="usuario.user" class="inputemail" />

      <label  for="tab-2" class="email2">Contraseña</label>
      <input  type="password" v-model="usuario.pass" class="inputemail2" />

      <button @click="ingresar" class="entrar">Entrar</button>
    </div>

    <div class="persona"></div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      usuario: {
        user: null,
        pass: null,
      },
    };
  },
  methods: {
    ingresar() {
      const me =this;
      axios
        .post("usuario/login", {
          email: me.usuario.user,
          password: me.usuario.pass,
        })
        .then( (response)=> {
          console.log("Entrando");
          me.$store.dispatch("setToken", response.data);
          console.log(response.data.token);
          me.$router.push("/menu");
        })
        .catch( ({ error })=> {
          console.log(error);
        });
    },
  },
};
</script>
<style>
/*tipografía*/
@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap");

.fondosolo {
  position: fixed;
  width: 1366px;
  height: 625px;
  background-image: url("../assets/fondos/Fondo_solo_ 1.png");
}
.celular {
  position: absolute;
  width: 783px;
  height: 745px;
  left: 166px;
  top: 80px;
  background-image: url("../assets/fondos/celu.png");
}
.persona {
  position: absolute;
  width: 390px;
  height: 630px;
  left: 924px;
  top: 160px;
  background-image: url("../assets/fondos/login-muñecoooo1.png");
}
.piso {
  position: absolute;
  width: 1366px;
  height: 124px;
  top: 525px;
  background-image: url("../assets/fondos/tabla piso2.png");
}
.email {
  position: absolute;
  width: 83px;
  height: 52px;
  left: 200px;
  top: 100px;

  font-family: "Kaushan Script", cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 52px;

  color: #000000;
}
.inputemail {
  position: absolute;
  width: 210px;
  height: 46px;
  left: 180px;
  top: 150px;

  background: rgba(0, 121, 71, 0.5);
  border-radius: 30px;
}
.email2 {
  position: absolute;
  width: 83px;
  height: 52px;
  left: 200px;
  top: 200px;

  font-family: "Kaushan Script", cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 52px;

  color: #000000;
}
.inputemail2 {
  position: absolute;
  width: 210px;
  height: 46px;
  left: 180px;
  top: 250px;

  background: rgba(0, 121, 71, 0.5);
  border-radius: 30px;
}
.inicio {
  position: absolute;
  width: 150px;
  height: 60px;
  left: 1170px;
  top: 5px;
  padding-left: 7px;
  background: #266439;
  border-radius: 25px;
}
.letrasesion {
  color: white;
  padding-right: 2px;
  font-family: "Fredoka One", cursive;
  letter-spacing: 2px;
}
.iconocasa {
  float: left;
}
.entrar {
  position: absolute;
  width: 150px;
  height: 50px;
  left: 210px;
  top: 330px;
  background: #266439;
  border-radius: 25px;
  color: white;
  font-family: "Fredoka One", cursive;
  letter-spacing: 2px;
  font-size: 20px;
}
</style>