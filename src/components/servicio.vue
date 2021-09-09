<template>
  <div class="fondo">
    <h1 class="servicios">Servicios</h1>

    <div class="marco1">
      <img src="../assets/imagenesHogar/marco.png" alt="" />
      <div class="cuadro">
        <img src="../assets/imagenesHogar/cuadrado.png" alt="" />
        <router-link to="/atencion">
          <h3 id="atencion">Servicio Atención</h3></router-link
        >
      </div>
    </div>
    <div class="marco2">
      <img src="../assets/imagenesHogar/marcos.png" alt="" />
      <div class="cuadro2">
        <img src="../assets/imagenesHogar/cuadrado.png" alt="" />
        <router-link to="/formacion">
          <h3 id="formacion">Servicio formación</h3></router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "servicio",
  data() {
    return {};
  },
};
</script>
<style>
.servicios {
  text-align: center;
  margin-top: 100px;
  font-size: 50px;
}
.fondo {
  position: fixed;
  width: 1366px;
  height: 800px;
  background-image: url("../assets/imagenesHogar/Fondo_solo_ 3.png");
}
.marco1 {
  position: absolute;
  left: 250px;
  top: 175px;
}
.marco2 {
  position: absolute;
  left: 800px;
  top: 175px;
}
.cuadro {
  position: absolute;
  left: 36px;
  top: 242px;
}
.cuadro2 {
  position: absolute;
  left: 35px;
  top: 242px;
  margin-left: 1px;
}

#atencion {
  position: absolute;
  left: 22px;
  top: 35px;
  font-size: 32px;
  text-align: center;
}
#formacion {
  position: absolute;
  left: 22px;
  top: 35px;
  font-size: 32px;
  text-align: center;
}
</style>