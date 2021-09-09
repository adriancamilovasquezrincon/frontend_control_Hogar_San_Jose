<template>
  <div class="fondo">
    <div class="azul">
      <v-card>
        <v-card-title id="beneficiario" class="white--text text-h6">
          Beneficiarios
        </v-card-title>
        <v-row class="pa-4" justify="space-between">
          <v-col cols="5">
            <v-treeview
              :active.sync="active"
              :items="items"
              :load-children="fetchUsers"
              :open.sync="open"
              activatable
              color="warning"
              open-on-click
              transition
            >
              <template v-slot:prepend="{ item }">
                <v-icon v-if="!item.children"> mdi-account </v-icon>
              </template>
            </v-treeview>
          </v-col>

          <v-divider vertical></v-divider>

          <v-col class="d-flex text-center">
            <v-scroll-y-transition mode="out-in">
              <div
                v-if="!selected"
                class="text-h6 grey--text text--lighten-1 font-weight-light"
                style="align-self: center"
              >
                Select a User
              </div>
              <v-card
                v-else
                :key="selected.id"
                class="pt-6 mx-auto"
                flat
                max-width="400"
              >
                <v-card-text>
                  <v-avatar v-if="avatar" size="88">
                    <v-img
                      :src="`https://avataaars.io/${avatar}`"
                      class="mb-6"
                    ></v-img>
                  </v-avatar>
                  <h3 class="text-h5 mb-2">
                    {{ selected.name }}
                  </h3>
                  <div class="blue--text mb-2">
                    {{ selected.email }}
                  </div>
                  <div class="blue--text subheading font-weight-bold">
                    {{ selected.username }}
                  </div>
                </v-card-text>
                <v-divider></v-divider>
                <v-row class="text-left" tag="v-card-text">
                  <v-col class="text-right mr-4 mb-2" tag="strong" cols="5">
                    Company:
                  </v-col>
                  <v-col>{{ selected.company.name }}</v-col>
                  <v-col class="text-right mr-4 mb-2" tag="strong" cols="5">
                    Website:
                  </v-col>
                  <v-col>
                    <a :href="`//${selected.website}`" target="_blank">{{
                      selected.website
                    }}</a>
                  </v-col>
                  <v-col class="text-right mr-4 mb-2" tag="strong" cols="5">
                    Phone:
                  </v-col>
                  <v-col>{{ selected.phone }}</v-col>
                </v-row>
              </v-card>
            </v-scroll-y-transition>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>
<script>
const avatars = [
  "?accessoriesType=Blank&avatarStyle=Circle&clotheColor=PastelGreen&clotheType=ShirtScoopNeck&eyeType=Wink&eyebrowType=UnibrowNatural&facialHairColor=Black&facialHairType=MoustacheMagnum&hairColor=Platinum&mouthType=Concerned&skinColor=Tanned&topType=Turban"
];

const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default {
  data: () => ({
    active: [],
    avatar: null,
    open: [],
    users: [],
  }),

  computed: {
    items() {
      return [
        {
          name: "Users",
          children: this.users,
        },
      ];
    },
    selected() {
      if (!this.active.length) return undefined;

      const id = this.active[0];

      return this.users.find((user) => user.id === id);
    },
  },

  watch: {
    selected: "randomAvatar",
  },

  methods: {
    async fetchUsers(item) {
      // Remove in 6 months and say
      // you've made optimizations! :)
      await pause(1500);

      return fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((json) => item.children.push(...json))
        .catch((err) => console.warn(err));
    },
    randomAvatar() {
      this.avatar = avatars[Math.floor(Math.random() * avatars.length)];
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
.azul {
  position: absolute;
  background-image: url("../assets/beneficiarios/azul.png");
  width: 1181px;
  height: 500px;
  left: 80px;
  top: 80px;
}
.madera {
  position: absolute;
  left: 80px;
  top: 115px;
}
.linea1 {
  position: absolute;
  width: 0px;
  height: 84px;
  left: 496px;
  top: 50px;
}
.linea2 {
  position: absolute;
  left: 80px;
  top: 115px;
  width: 1181px;
}

/**Beneficiarios */
#beneficiario{
  background-image: url('../assets/beneficiarios/madera.png');
  position: absolute;
}
</style>