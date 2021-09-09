<template>
  <div class="mesa">
    <h2 class="formacion">Servicio Formación</h2>

    <div class="psicologia">
      <img src="../assets/imagenesHogar/cuadroCircular.png" alt="" />

      <div id="sicologa">
        <img src="../assets/imagenesHogar/psicologia.png" alt="" />
        <h4 id="textoSicologia">Asistencia en psicología</h4>
      </div>
    </div>

    <div class="deportes">
      <img src="../assets/imagenesHogar/cuadroSombra2.png" alt="" />
      <div id="deporte">
        <img src="../assets/imagenesHogar/ejercicio.png" alt="" />
        <h4 id="textoDeporte">Asistencia en Deportes</h4>
      </div>
    </div>
    <div class="espiritual">
      <img src="../assets/imagenesHogar/cuadroCircular.png" alt="" />
      <div id="iglesia">
        <img src="../assets/imagenesHogar/iglesia2.png" alt="" />
        <h4 id="textoEspiritual">Asesoría Espiritual</h4>
      </div>
    </div>
    <div class="manualidades">
      <img src="../assets/imagenesHogar/cuadroSombra2.png" alt="" />
      <div id="pintura">
        <img src="../assets/imagenesHogar/pintura.png" alt="" />
        <h4 id="textoManualidad">Manualidades</h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style>
.mesa {
  position: fixed;
  width: 1366px;
  height: 800px;
  background-image: url("../assets/imagenesHogar/mesa.png");
}
.formacion {
  text-align: center;
  margin-top: 90px;
  font-size: 50px;
  color: white;
}
.psicologia {
  position: absolute;
  left: 80px;
  top: 142px;
}
.deportes {
  position: absolute;
  left: 400px;
  top: 275px;
}
.espiritual {
  position: absolute;
  left: 720px;
  top: 142px;
}
.manualidades {
  position: absolute;
  left: 1040px;
  top: 275px;
}

/**Iconos de servicio Formación */
#sicologa {
  position: absolute;
  left: 50px;
  top: 140px;
}
#deporte {
  position: absolute;
  left: 55px;
  top: 80px;
}
#iglesia {
  position: absolute;
  left: 60px;
  top: 108px;
}
#pintura {
  position: absolute;
  left: 60px;
  top: 100px;
}
/**Textos de formación*/
#textoSicologia {
  position: absolute;
  left: 14px;
  top: 180px;
  color: white;
  font-size: 20px;
  text-align: center;
}
#textoEspiritual {
  position: absolute;
  left: 40px;
  top: 210px;
  color: white;
  font-size: 20px;
  text-align: center;
}
#textoDeporte {
  position: absolute;
  left: 35px;
  top: 210px;
  color: white;
  font-size: 20px;
  text-align: center;
}
#textoManualidad {
  position: absolute;
  left: 40px;
  top: 198px;
  color: white;
  font-size: 20px;
}
</style>