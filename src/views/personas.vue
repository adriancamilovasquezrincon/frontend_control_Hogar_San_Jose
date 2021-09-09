<template>
  <div class="fondo">
    <div class="cuadro">
      <div>
        <v-toolbar app class="black">
          <v-btn class="ma-2" color="primary" dark @click="atras">
            <v-icon dark left> mdi-arrow-left </v-icon>Atrás
          </v-btn>

          <v-spacer></v-spacer>
          <v-text-field
            dark
            v-model="search"
            prepend-icon="mdi-magnify"
            label="Búsqueda"
            single-line
            hide-details
          ></v-text-field>

          <v-spacer></v-spacer>
          <v-badge bordered color="error" icon="mdi-lock" overlap>
            <v-btn class="black--text" color="white" depressed @click="cerrar">
              Cerrar Sesión
            </v-btn>
          </v-badge>
        </v-toolbar>
      </div>

      <br /><br />

      <div class="container">
        <v-data-table
          :headers="headers"
          :items="persona"
          :search="search"
          sort-by="calories"
          id="azul"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Personas</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-btn @click="imprimir()"><v-icon>mdi-printer</v-icon></v-btn>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" persistent max-width="500px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    Nuevo
                  </v-btn>
                </template>
                <v-card>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.tipoPersona"
                            label="Tipo de Persona"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.nit"
                            label="Nit"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.numDocumento"
                            label="numDocumento"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.nombres"
                            label="nombres"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.apellidos"
                            label="apellidos"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.telefono"
                            label="Teléfono"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.correo"
                            label="correo"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.cargo"
                            label="cargo"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.lugarNacimiento"
                            label="lugarNacimiento"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.estado"
                            label="Estado"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false">
                      Cancelar
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="guardar">
                      Guardar
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <v-dialog v-model="Modal" max-width="290">
                <v-card>
                  <v-card-title class="headline" v-if="Accion == 1">
                    Activar Item
                  </v-card-title>
                  <v-card-title class="headline" v-if="Accion == 2">
                    Desactivar Item
                  </v-card-title>
                  <v-card-text>
                    Estás a punto de <span v-if="Accion == 1">activar </span>
                    <span v-if="Accion == 2">desactivar </span> el item
                    {{ Nombre }}
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      @click="activarDesactivarCerrar()"
                      color="primary"
                      flat="flat"
                    >
                      Cancelar
                    </v-btn>
                    <v-btn
                      v-if="Accion == 1"
                      @click="activar()"
                      color="primary"
                      flat="flat"
                    >
                      Activar
                    </v-btn>
                    <v-btn
                      v-if="Accion == 2"
                      @click="desactivar()"
                      color="primary"
                      flat="flat"
                    >
                      Desactivar
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="headline"
                    >Are you sure you want to delete this item?</v-card-title
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete"
                      >Cancel</v-btn
                    >
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                      >OK</v-btn
                    >
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:[`item.opciones`]="{ item }">
            <v-icon
              color="primary"
              small
              class="mr-2"
              @click="editarItem(item)"
            >
              mdi-pencil
            </v-icon>

            <template v-if="item.estado">
              <v-icon small @click="activarDesactivarMostrar(2, item)">
                mdi-block-helper
              </v-icon>
            </template>
            <template v-else>
              <v-icon small @click="activarDesactivarMostrar(1, item)">
                mdi-check
              </v-icon>
            </template>
          </template>

          <template v-slot:[`item.estado`]="{ item }">
            <div v-if="item.estado">
              <span class="green--text">Activo</span>
            </div>
            <div v-else>
              <span class="red--text">Inactivo</span>
            </div>
          </template>

          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize"> Reset </v-btn>
          </template>
        </v-data-table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import jsPDF from "jspdf";
import "jspdf-autotable";
export default {
  data() {
    return {
      search: "",
      persona: [],
      zb: 0,
      dialog: false,
      headers: [
        {text: "TipoPersona", value: "tipoPersona"},
        { text: "Nit", value: "nit" },
        { text: "Numdocumento", value: "numDocumento" },
        { text: "nombres", value: "nombres" },
        { text: "apellidos", value: "apellidos" },
        { text: "telefono", value: "telefono" },
        { text: "correo", value: "correo" },
        { text: "cargo", value: "cargo" },
        { text: "lugarNacimiento", value: "lugarNacimiento" },
        { text: "Estado", value: "estado" },
        { text: "Opciones", value: "opciones" },
      ],
      editedItem: {
        tipoPersona: "",
        nit: "",
        numDocumento: "",
        nombres: "",
        apellidos: "",
        telefono: "",
        correo: "",
        cargo: "",
        lugarNacimiento: "",
        estado: 0,
      },
    };
  },
  created() {
    this.listarPersonas();
  },
  methods: {
    listarPersonas() {
      let header = { headers: { token: this.$store.state.token } };
      axios
        .get("persona", header)
        .then((response) => {
          console.log(response.data.persona);
          this.persona = response.data.persona;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    guardar() {
      if (this.zb == 0) {
        console.log("Estoy guardando la persona", this.zb);
        const me = this;
        let header = { headers: { token: this.$store.state.token } };
        axios
          .post(
            "persona/guardar",
            {
              tipopersona: this.editedItem.tipopersona,
              nit: this.editedItem.nit,
              numdocumento: this.editedItem.numdocumento,
              nombres: this.editedItem.nombres,
              apellidos: this.editedItem.apellidos,
              telefono: this.editedItem.telefono,
              correo: this.editedItem.correo,
              cargo: this.editedItem.cargo,
              lugarNacimiento: this.editedItem.lugarNacimiento,
              estado: this.editedItem.estado,
            },
            header
          )
          .then((response) => {
            console.log(response.data);
            me.listarPersonas();
            this.editedItem.tipopersona = "";
            this.editedItem.nit = "";
            this.editedItem.numdocumento = "";
            this.editedItem.nombres = "";
            this.editedItem.apellidos = "";
            this.editedItem.telefono = "";
            this.editedItem.correo = "";
            this.editedItem.cargo = "";
            this.editedItem.lugarNacimiento = "";
            this.editedItem.estado = "";

            // this.$router.push("/categorias")
          })
          .catch((error) => {
            console.log(error.response);
          });
      } else {
        console.log("Estoy editando la persona" + this.zb + " id " + this.id);
        const me = this;
        let header = { headers: { token: this.$store.state.token } };

        axios

          .put(
            `persona/actualizar/${this.id}`,
            {
              tipopersona: this.editedItem.tipopersona,
              nit: this.editedItem.nit,
              numdocumento: this.editedItem.numdocumento,
              nombres: this.editedItem.nombres,
              apellidos: this.editedItem.apellidos,
              telefono: this.editedItem.telefono,
              correo: this.editedItem.correo,
              cargo: this.editedItem.cargo,
              lugarNacimiento: this.editedItem.lugarNacimiento,
            },
            header
          )
          .then((response) => {
            console.log(response.data);
            me.listarPersonas();
            this.editedItem.tipopersona = "";
            this.editedItem.nit = "";
            this.editedItem.numdocumento = "";
            this.editedItem.nombres = "";
            this.editedItem.apellidos = "";
            this.editedItem.telefono = "";
            this.editedItem.correo = "";
            this.editedItem.cargo = "";
            this.editedItem.lugarNacimiento = "";
            this.editedItem.estado = "";
          })
          .catch(function (error) {
            console.log(error.data);
          });
      }
    },
    atras() {
      this.$router.push("/menu");
      this.$store.dispatch("setToken", this.$store.state.token);
    },
    editarItem(item) {
      this.zb = 1;
      console.log(item);
      this.id = item._id;
      this.editedItem.tipopersona = item.tipopersona;
      this.editedItem.nit = item.nit;
      this.editedItem.numdocumento = item.numdocumento;
      this.editedItem.nombres = item.nombres;
      this.editedItem.apellidos = item.apellidos;
      this.editedItem.telefono = item.telefono;
      this.editedItem.correo = item.correo;
      this.editedItem.cargo = item.cargo;
      this.editedItem.lugarNacimiento = item.lugarNacimiento;
      this.dialog = true;
    },
    activarDesactivarMostrar(accion, item) {
      let id = item._id;
      console.log(accion);
      if (accion == 2) {
        console.log(id);
        let me = this;
        let header = { headers: { token: this.$store.state.token } };
        axios
          .put(
            `persona/desactivar/${id}`,
            {
              estado: 0,
            },
            header
          )
          .then(function () {
            me.listarPersonas();
          })
          .catch(function (error) {
            console.log(error);
          });
      } else if (accion == 1) {
        console.log(id);
        let me = this;
        let header = { headers: { token: this.$store.state.token } };
        axios
          .put(
            `persona/activar/${id}`,
            {
              estado: 1,
            },
            header
          )
          .then(function () {
            me.listarPersonas();
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    activar() {
      let me = this;
      let header = { headers: { token: this.$store.state.token } };
      axios
        .put(`persona/activar/${me.Id}`, {}, header)
        .then(function () {
          me.Modal = 0;
          me.Accion = 0;
          me.Nombre = "";
          me.Id = "";
          me.listar();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    desactivar() {
      let me = this;
      let header = { headers: { token: this.$store.state.token } };
      axios
        .put(`persona/desactivar/${me.Id}`, {}, header)
        .then(function () {
          me.Modal = 0;
          me.Accion = 0;
          me.Nombre = "";
          me.Id = "";
          me.listar();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    cerrar() {
      Swal.fire({
        background: "black",
        position: "top-center",
        icon: "success",
        title: "Su sesión ha finalizado con éxito",
        showConfirmButton: false,
        timer: 1500,
      });
      this.$store.dispatch("setToken", "");
      this.$router.push("/roles");
    },
    imprimir() {
      var columns = [
        { title: "Tipopersona", dataKey: "tipopersona" },
        { title: "nit", dataKey: "nit" },
        { title: "numDocumento", dataKey: "numDocumento" },
        { title: "nombres", dataKey: "nombres" },
        { title: "apellidos", dataKey: "apellidos" },
        { title: "Telefono", dataKey: "telefono" },
        { title: "correo", dataKey: "correo" },
        { title: "cargo", dataKey: "cargo" },
        { title: "lugarNacimiento", dataKey: "lugarNacimiento" },
        { title: "Estado", dataKey: "estado" },
      ];
      var rows = [];

      this.persona.map(function (x) {
        rows.push({
          tipopersona: x.tipopersona,
          nit: x.nit,
          numDocumento: x.numDocumento,
          nombres: x.nombres,
          apellidos: x.apellidos,
          telefono: x.telefono,
          correo: x.correo,
          cargo: x.cargo,
          lugarNacimiento: x.lugarNacimiento,
          estado: x.estado,
        });
      });
      var doc = new jsPDF("p", "pt");
      doc.autoTable(columns, rows, {
        margin: { top: 60 },
        addPageContent: function () {
          doc.text("Lista de Personas", 40, 30);
        },
      });

      doc.save("Personas.pdf");
    },
  },
};
</script>
<style>
.fondo {
  position: fixed;
  width: 1366px;
  height: 800px;
  background-image: url("../assets/beneficiarios/Fondo.png");
}
.cuadro {
  position: absolute;
  background-image: url("../assets/beneficiarios/azul.png");
  width: 1181px;
  height: 500px;
  left: 80px;
  top: 80px;
}
#azul {
  position: absolute;
  background-image: url("../assets/beneficiarios/azul.png");
  width: 1140px;
  height: 300px;
  left: 20px;
  top: 80px;
}
</style>