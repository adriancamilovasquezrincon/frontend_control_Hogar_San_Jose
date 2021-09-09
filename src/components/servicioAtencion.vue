<template>
  <div class="mesa">
    <h1 class="atencion">Servicio Atención</h1>
    <div class="asistencia">
      <img src="../assets/imagenesHogar/cuadroCircular.png" alt="" />
      <div id="salud">
        <img src="../assets/imagenesHogar/salud.png" alt="" />
        <h4 id="textoSalud">Asistencia en Salud</h4>
      </div>
    </div>

    <div class="comida">
      <img src="../assets/imagenesHogar/cuadroSombra2.png" alt="" />
      <div id="plato">
        <img src="../assets/imagenesHogar/plato.png" alt="" />
        <h4 id="textoAlimentacion">Alimentación</h4>
      </div>
    </div>

    <div class="ropa">
      <img src="../assets/imagenesHogar/cuadroCircular.png" alt="" />
      <div id="ropa">
        <img src="../assets/imagenesHogar/ropa.png" alt="" />
        <h4 id="textoRopa">Cuidado de la ropa</h4>
      </div>
    </div>

    <div class="hospedaje">
      <img src="../assets/imagenesHogar/cuadroSombra2.png" alt="" />
      <div id="casa">
        <img src="../assets/imagenesHogar/casita.png" alt="" />
        <h4 id="textoHospedaje">Hospedaje</h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Servicio Atencion",
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
.atencion {
  text-align: center;
  margin-top: 90px;
  font-size: 50px;
  color: white;
}
.asistencia {
  position: absolute;
  left: 80px;
  top: 142px;
}
.comida {
  position: absolute;
  left: 400px;
  top: 275px;
}
.ropa {
  position: absolute;
  left: 720px;
  top: 142px;
}
.hospedaje {
  position: absolute;
  left: 1040px;
  top: 275px;
}
/**Iconos de atencion a los usuarios */
#salud{
  position: absolute;
  left: 8px;
  top: 105px;
}
#plato{
  position: absolute;
  left: 38px;
  top: 80px;
}
#ropa{
  position: absolute;
  left: 64px;
  top: 108px;
}
#casa{
  position: absolute;
  left: 40px;
  top: 120px;
}
/**Textos de Atención*/
#textoSalud {
  position: absolute;
  left: 16px;
  top: 220px;
  color: white;
  font-size: 20px;
}
#textoAlimentacion {
  position: absolute;
  left: 40px;
  top: 210px;
  color: white;
  font-size: 20px;
}
#textoRopa {
  position: absolute;
  left: 30px;
  top: 210px;
  color: white;
  font-size: 20px;
  text-align: center;
}
#textoHospedaje {
  position: absolute;
  left: 50px;
  top: 178px;
  color: white;
  font-size: 20px;
}
</style>