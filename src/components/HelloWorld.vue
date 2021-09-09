<template>
  <div>
    <div class="fondo1">
      <div>
        <div class="nubepequeña"></div>

        <div class="nube1-1"></div>

        <div class="nube2"></div>

        <div class="nube3"></div>

        <div class="nube4"></div>

        <div class="nube5"></div>
      </div>

      <div class="menu">
        <button class="instagram">
          <img src="../assets/fondos/instagram.png" alt="" />
        </button>

        <button class="facebook">
          <img src="../assets/fondos/facebook.png" alt="" />
        </button>

        <button class="whatsApp">
          <img src="../assets/fondos/whatsApp.png" alt="" />
        </button>

        <button class="blog">
          <h2 class="letrasesion">Blog</h2>
        </button>

        <router-link to="/login"><button class="iniciosesion">
          <img
            class="iconopersona"
            src="../assets/fondos/iconopersona.png"
            alt=""
          />
          <h2 class="letrasesion">inicio sesión</h2>
        </button></router-link>
      </div>

      <h1 class="titulo1">Hogar</h1>
      <h2 class="titulo2">San José</h2>
      <h3 class="titulo3">GALÁN</h3>

      <div class="abuelo">
        <img src="../assets/fondos/abuelosbaile.png" alt="" />
      </div>

      <div>
        <button class="boton1">
          <img src="../assets/fondos/icono1.png" alt="" />
        </button>
      </div>
      <div>
        <h3 class="servicio">Servicios</h3>
      </div>

      <div>
        <button class="boton2">
          <img src="../assets/fondos/icono2.png" alt="" />
        </button>
      </div>
      <div>
        <h3 class="quienes">¿Quiénes somos?</h3>
      </div>

      <div>
        <button class="boton3">
          <img src="../assets/fondos/icono3.png" alt="" />
        </button>
      </div>
      <div>
        <h3 class="informacion">Información</h3>
      </div>

      <div>
        <h1 class="proceso">Proceso de Ingreso</h1>
      </div>
    </div>

    <div class="fondo2">
      <div class="imagenproceso1">
        <img src="../assets/fondos/proceso1.png" alt="" />
      </div>

      <div class="imagenproceso2">
        <img src="../assets/fondos/proceso2.png" alt="" />
      </div>

      <div class="imagenproceso3">
        <img src="../assets/fondos/proceso3.png" alt="" />
      </div>

      <div class="num1">
        <h1 class="uno">1</h1>
      </div>

      <div class="num2">
        <h1 class="dos">2</h1>
      </div>

      <div class="num3">
        <h1 class="tres">3</h1>
      </div>

      <div class="texto1">
        <h4 class="letra">Nos contactas y pasas una solicitud.</h4>
      </div>

      <div class="texto2">
        <h4 class="letra2">
          Esperas la respuesta de admisión por parte de la junta.
        </h4>
      </div>

      <div class="texto3">
        <h4 class="letra3">
          Te damos el cupo para disfrutar de nuestros servicios.
        </h4>
      </div>

      <h1 class="titulofotos">fotografías</h1>
    </div>

    <div class="fondo3">
      <div class="cajafoto1"></div>

      <div class="cajafoto2"></div>

      <div class="cajafoto3"></div>

      <div class="cajafoto4"></div>

      <div class="cajafoto5"></div>

      <div class="cajafoto6"></div>

      <div class="cajafoto7"></div>

      <div class="cajafoto8"></div>

      <div class="cajafoto9"></div>

      <div class="cajafoto10"></div>

      <div class="cajafoto11"></div>

      <div class="cajafoto12"></div>
    </div>

    <div class="fondo4">
      <div>
        <div class="nubepequeña"></div>

        <div class="nube1"></div>

        <div class="nube2"></div>

        <div class="nube3"></div>

        <div class="nube4grande"></div>

        <div class="nube5"></div>
      </div>

      <h1 class="titulofelices">FELICES SIEMPRE FELICES</h1>

      <div class="logo"></div>

      <div class="bordemapa"></div>

      <div class="mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6450.292635440404!2d-73.28972342858887!3d6.639497000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69d005ba189c4f%3A0x86873914e998e082!2sGal%C3%A1n%2C%20Santander!5e1!3m2!1ses-419!2sco!4v1628108349371!5m2!1ses-419!2sco"
          width="350"
          height="250"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div class="telefono">
        <img src="../assets/fondos/telefono.png" alt="" />
      </div>

      <div class="textotelefono">
        <h5>Teléfono: 3203817111</h5>
      </div>

      <div class="correo">
        <img src="../assets/fondos/correo.png" alt="" />
      </div>

      <div class="textocorreo">
        <h5>HogarSanjose@hotmail.com</h5>
      </div>

      <div class="cajagalan">
        <h4 class="textogalan">Galán- Santander-Colombia</h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
/*tipografía*/
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');

.fondo1 {
  position: absolute;
  width: 1366px;
  height: 825px;
  background-image: url("../assets/fondos/fondo-inicio.png");
}
.fondo2 {
  position: absolute;
  width: 1366px;
  height: 825px;
  top: 765px;
  background-image: url("../assets/fondos/fondo2.png");
}
.fondo3 {
  position: absolute;
  width: 1366px;
  height: 825px;
  top: 1533px;
  background-image: url("../assets/fondos/fondo3.png");
}
.fondo4 {
  position: absolute;
  width: 1366px;
  height: 768px;
  top: 2301px;
  background-image: url("../assets/fondos/fondo4.png");
}
.titulo1 {
  position: absolute;
  width: 437px;
  height: 211px;
  left: 200px;
  top: 63px;

  font-family: 'Fredoka One', cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 144px;
  line-height: 174px;

  color: #266439;
}
.titulo2 {
  position: absolute;
  width: 249px;
  height: 88px;
  left: 274px;
  top: 224px;
  font-family: 'Kaushan Script', cursive;

  font-family: Kaushan Script;
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 93px;

  color: #000000;
}
.titulo3 {
  position: absolute;
  width: 114px;
  height: 40px;
  left: 341px;
  top: 310px;

  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 38px;

  color: #000000;
}
.abuelo {
  position: absolute;
  width: 545px;
  height: 384px;
  left: 795px;
  top: 117px;
}
.boton1 {
  position: absolute;
  width: 180px;
  height: 180px;
  left: 50px;
  top: 360px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border: 0;

  background: #d3f7ff;
}
.boton2 {
  position: absolute;
  width: 180px;
  height: 180px;
  left: 300px;
  top: 360px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border: 0;

  background: #d3f7ff;
}
.boton3 {
  position: absolute;
  width: 180px;
  height: 180px;
  left: 550px;
  top: 360px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border: 0;

  background: #d3f7ff;
}

/* hovers */
.boton1:hover{
  box-shadow: 0px 0px 80px #d3f1f8;
  border: 0;
}
.boton2:hover{
  box-shadow: 0px 0px 80px #d3f1f8;
  border: 0;
}
.boton3:hover{
  box-shadow: 0px 0px 80px #d3f1f8;
  border: 0;
}
.servicio {
  position: absolute;
  width: 180px;
  height: 180px;
  left: 80px;
  top: 530px;

  font-family: 'Kaushan Script', cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 52px;

  color: #000000;
}
.quienes {
  position: absolute;

  height: 180px;
  left: 280px;
  top: 530px;
  font-family: 'Kaushan Script', cursive;
 
  letter-spacing: 2px;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 52px;

  color: #000000;
}
.informacion {
  position: absolute;
  width: 180px;
  height: 180px;
  left: 570px;
  top: 530px;

  font-family: 'Kaushan Script', cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 52px;

  color: #000000;
}
.proceso {
  position: absolute;

  height: 180px;
  left: 280px;
  top: 650px;
  font-family: 'Fredoka One', cursive;

  font-size: 96px;
  line-height: 116px;

  color: rgba(0, 0, 0, 0.6);
}
.imagenproceso1 {
  position: absolute;
  width: 387px;
  height: 523px;
  left: 40px;
  top: 80px;
}
.imagenproceso2 {
  position: absolute;
  width: 387px;
  height: 523px;
  left: 487px;
  top: 80px;
}
.imagenproceso3 {
  position: absolute;
  width: 387px;
  height: 523px;
  left: 924px;
  top: 80px;
}
.num1 {
  position: absolute;
  width: 100px;
  height: 100px;
  left: 10px;
  top: 60px;

  border-radius: 50%;

  background: #d3f7ff;
}
.num2 {
  position: absolute;
  width: 100px;
  height: 100px;
  left: 450px;
  top: 60px;
  border-radius: 50%;

  background: #d3f7ff;
}
.num3 {
  position: absolute;
  width: 100px;
  height: 100px;
  left: 890px;
  top: 60px;

  border-radius: 50%;

  background: #d3f7ff;
}
#letra{
  
  font-family: 'Raleway', sans-serif;
}

.uno {
  text-align: center;
  margin-top: 25px;
  font-family: 'Fredoka One', cursive;
}
.dos {
  text-align: center;
  margin-top: 25px;
  font-family: 'Fredoka One', cursive;
}
.tres {
  text-align: center;
  margin-top: 25px;
  font-family: 'Fredoka One', cursive;
}
.titulofotos {
  position: absolute;

  height: 180px;
  left: 440px;
  top: 630px;
  font-size: 96px;
  font-family: 'Fredoka One', cursive;

  color: rgba(0, 0, 0, 0.6);
}
.cajafoto1 {
  position: absolute;
  width: 287px;
  height: 219px;
  left: 40px;
  top: 20px;
  border-radius: 10%;

  background: rgba(211, 247, 255, 0.5);
}
.cajafoto2 {
  position: absolute;
  width: 287px;
  height: 219px;
  left: 370px;
  top: 20px;
  border-radius: 10%;

  background: rgba(211, 247, 255, 0.5);
}
.cajafoto3 {
  position: absolute;
  width: 287px;
  height: 219px;
  left: 700px;
  top: 20px;
  border-radius: 10%;

  background: rgba(211, 247, 255, 0.5);
}
.cajafoto4 {
  position: absolute;
  width: 287px;
  height: 219px;
  left: 1030px;
  top: 20px;
  border-radius: 10%;

  background: rgba(211, 247, 255, 0.5);
}
.cajafoto5 {
  position: absolute;
  width: 287px;
  height: 219px;
  left: 40px;
  top: 265px;
  border-radius: 10%;

  background: rgba(211, 247, 255, 0.5);
}
.cajafoto6 {
  position: absolute;
  width: 287px;
  height: 219px;
  left: 370px;
  top: 265px;
  border-radius: 10%;

  background: rgba(211, 247, 255, 0.5);
}
.cajafoto7 {
  position: absolute;
  width: 287px;
  height: 219px;
  left: 700px;
  top: 265px;
  border-radius: 10%;

  background: rgba(211, 247, 255, 0.5);
}
.cajafoto8 {
  position: absolute;
  width: 287px;
  height: 219px;
  left: 1030px;
  top: 265px;
  border-radius: 10%;

  background: rgba(211, 247, 255, 0.5);
}
.cajafoto9 {
  position: absolute;
  width: 287px;
  height: 219px;
  left: 40px;
  top: 530px;
  border-radius: 10%;

  background: rgba(211, 247, 255, 0.5);
}
.cajafoto10 {
  position: absolute;
  width: 287px;
  height: 219px;
  left: 370px;
  top: 530px;
  border-radius: 10%;

  background: rgba(211, 247, 255, 0.5);
}
.cajafoto11 {
  position: absolute;
  width: 287px;
  height: 219px;
  left: 700px;
  top: 530px;
  border-radius: 10%;

  background: rgba(211, 247, 255, 0.5);
}
.cajafoto12 {
  position: absolute;
  width: 287px;
  height: 219px;
  left: 1030px;
  top: 530px;
  border-radius: 10%;

  background: rgba(211, 247, 255, 0.5);
}
.logo {
  position: absolute;
  width: 296px;
  height: 312px;
  left: 20px;
  top: 440px;
  opacity: 0.75;
  transform-origin: 35% 30%;
  animation: pulse 0.7s infinite ease-out 0.75s;
  background-image: url("../assets/fondos/logo.png");
}
@keyframes pulse {
  10%,
  20% {
    transform: scale(0.9, 0.85) skew(1deg);
    opacity: 1;
  }
}
.texto1 {
  position: absolute;
  width: 310px;
  height: 106px;
  left: calc(50% - 310px / 2 - 434px);
  top: 460px;

  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 38px;
  text-align: center;

  color: #ffffff;
}
.texto2 {
  position: absolute;
  width: 310px;
  height: 106px;
  left: calc(50% - 310px / 2);
  top: 460px;

  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 38px;
  text-align: center;

  color: #ffffff;
}
.texto3 {
  position: absolute;
  width: 310px;
  height: 106px;
  left: 960px;
  top: 460px;

  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 38px;
  text-align: center;

  color: #ffffff;
}
.titulofelices {
  position: absolute;
  width: 788px;
  height: 160px;
  left: 280px;
  top: 200px;
  font-family: 'Fredoka One', cursive;

  font-size: 72px;
  line-height: 87px;
  text-align: center;

  color: rgba(0, 0, 0, 0.582);
}
.mapa {
  position: absolute;
  left: 950px;
  top: 480px;
}
.bordemapa {
  position: absolute;
  left: 935px;
  top: 465px;

  width: 380px;
  height: 280px;
  border-radius: 5%;

  background: rgba(211, 247, 255, 0.5);
}
.telefono {
  position: absolute;
  top: 550px;
  left: 440px;
}
.textotelefono {
  position: absolute;
  top: 550px;
  left: 500px;
  font-size: 30px;
  font-family: 'Raleway', sans-serif;
  color: #3c784b;
}
.correo {
  position: absolute;
  top: 624px;
  left: 440px;
}
.textocorreo {
  position: absolute;
  top: 620px;
  left: 500px;
  font-size: 30px;
  font-family: 'Raleway', sans-serif;
  color: #3c784b;
}
.cajagalan {
  position: absolute;
  width: 350px;
  height: 40px;
  top: 690px;
  left: 460px;

  background: #3c784b;
  border-radius: 50px;
}
.textogalan {
  text-align: center;
  font-size: 25px;
  font-family: 'Raleway', sans-serif;
  color: white;
}
.nubepequeña {
  position: absolute;
  width: 186px;
  height: 72px;
  left: 304px;
  top: 20px;

  background-image: url("../assets/fondos/nubepequeña.png");
}
.nube1 {
  position: absolute;
  position: absolute;
  width: 486px;
  height: 200px;
  left: 650px;
  top: 30px;

  background-image: url("../assets/fondos/nubegrande.png");
}
.nube2 {
  position: absolute;
  width: 500px;
  height: 107px;
  left: 120px;
  top: 200px;

  background-image: url("../assets/fondos/nube2.png");
}
.nube3 {
  position: absolute;
  width: 300px;
  height: 117px;
  left: 1130px;
  top: 20px;

  background-image: url("../assets/fondos/nube3.png");
}
.nube4 {
  position: absolute;
  width: 186px;
  height: 72px;
  left: 620px;
  top: 270px;

  background-image: url("../assets/fondos/nubepequeña.png");
}
.nube5 {
  position: absolute;
  width: 300px;
  height: 117px;
  left: 10px;
  top: 120px;

  background-image: url("../assets/fondos/nubepequeña.png");
}
.nube4grande {
  position: absolute;
  width: 500px;
  height: 117px;
  left: 620px;
  top: 310px;

  background-image: url("../assets/fondos/nube1.png");
}
.nube1-1 {
  position: absolute;
  position: absolute;
  width: 486px;
  height: 200px;
  left: 650px;
  top: 30px;

  background-image: url("../assets/fondos/nube1.png");
}
.instagram {
  position: absolute;
  width: 60px;
  height: 60px;
  left: 30px;
  top: 5px;
  background: #266439;
  border-radius: 50%;
}
.facebook {
  position: absolute;
  width: 60px;
  height: 60px;
  left: 115px;
  top: 5px;
  background: #266439;
  border-radius: 50%;
}
.whatsApp {
  position: absolute;
  width: 60px;
  height: 60px;
  left: 200px;
  top: 5px;
  background: #266439;
  border-radius: 50%;
}
.iniciosesion {
  position: absolute;
  width: 230px;
  height: 60px;
  left: 1110px;
  top: 5px;
  padding-left: 5px;
  background: #266439;
  border-radius: 25px;

}
.iconopersona {
  float: left;
}
.letrasesion {
  color: white;
  padding-right: 7px;
  font-size: 24px;
  font-family: 'Fredoka One', cursive;
  letter-spacing: 2px;
  
}
.blog {
  position: absolute;
  width: 100px;
  height: 60px;
  left: 300px;
  top: 5px;
  background: #266439;
  border-radius: 25px;
  padding-left: 7px;
  
}
.menu{
  position: relative;
  width: 1500px;
  height: 72px;
  background-color: rgba(0, 0, 0, 0.445);
}
</style>