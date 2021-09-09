<template>
  <div class="fondito">
    <h1 class="contacto">¡Puedes Contactarnos!</h1>
    <div class="mesita">
      <img src="../assets/imagenesHogar/contactarnos/mesita.png" alt="" />
    </div>
    <div class="computadorContacto">
      <img src="../assets/imagenesHogar/contactarnos/computador1.png" alt="" />
    </div>
    <h4 id="telefono">Teléfono</h4>

    <div class="rectangulo">
      <img src="../assets/imagenesHogar/contactarnos/Rectangulo.png" alt="" />
    </div>
    <div id="llamar">
      <input type="text"  />
    </div>
    <h4 id="email">Email</h4>

    <div class="rectangulo2">
      <img src="../assets/imagenesHogar/contactarnos/Rectangulo.png" alt="" />
    </div>
    <div id="correo">
      <input type="text"  />
    </div>
    <h4 id="nombres">Nombres</h4>

    <div class="rectangulo3">
      <img src="../assets/imagenesHogar/contactarnos/Rectangulo.png" alt="" />
    </div>
    <div id="identificar">
      <input type="text"  />
    </div>

    <div id="enviar">
      <img src="../assets/imagenesHogar/contactarnos/verde.png" alt="" />
    </div>
    <button type="button" id="entrar">Enviar</button>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {};
  },
};
</script>
<style>
.fondito {
  position: fixed;
  width: 1366px;
  height: 800px;
  background-image: url("../assets/imagenesHogar/contactarnos/fondito.png");
}
.computadorContacto {
  position: absolute;
  left: 30px;
  top: 120px;
}
.mesita {
  position: absolute;
  top: 532px;
}
.contacto {
  color: rgba(0, 0, 0, 0.61);
  text-align: center;
  margin-top: 100px;
  font-size: 50px;
}
.rectangulo {
  position: absolute;
  left: 920px;
  top: 220px;
}
.rectangulo2 {
  position: absolute;
  left: 920px;
  top: 340px;
}
.rectangulo3 {
  position: absolute;
  left: 920px;
  top: 460px;
}
.entrar {
  position: absolute;
  left: 920px;
  top: 500px;
  color: black;
}
#enviar {
  position: absolute;
  left: 1030px;
  top: 560px;
}
#entrar {
  position: absolute;
  left: 1070px;
  top: 573px;
  color: white;
  font-size: 35px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
#telefono {
  position: absolute;
  left: 940px;
  top: 190px;
  font-size: 22px;
}
#email {
  position: absolute;
  left: 940px;
  top: 310px;
  font-size: 22px;
}
#nombres {
  position: absolute;
  left: 940px;
  top: 430px;
  font-size: 22px;
}
#llamar {
  position: absolute;
  left: 940px;
  top: 250px;
  color: black;


}
#correo {
  position: absolute;
  left: 940px;
  top: 370px;
  color: black;


}
#identificar {
  position: absolute;
  left: 940px;
  top: 490px;
  color: black;
}
</style>