<template>
  <div class="relative mt-12 pt-12">
    <v-row justify="center" class="mt-12 pt-12">
      <div style="width:700px" class="mt-12 white rounded-xl pa-9">
        <v-row align="center" style="">
          <router-link to="/visline/vip/FIT">
            <div class="red lighten-5 rounded-xl vislineBox d-inline-block">
              <v-row align="center" justify="center" class="heightAll cursorPointer py-4">
                <v-icon class="widthAll" size="45">mdi-airplane-settings</v-icon>
                <h3 class="vislineBoxText mt-4">تورهای FIT</h3>
              </v-row>
            </div>

          </router-link>
        </v-row>
        <v-row align="center" justify="center" style="">
          <router-link to="/Europe">
            <div class="blue lighten-5 rounded-xl vislineBox d-inline-block">
              <v-row align="center" justify="center" class="heightAll cursorPointer py-4">
                <v-icon class="widthAll" size="45" style="">mdi-account-group-outline</v-icon>
                <h3 class="vislineBoxText mt-4">تورهای گروهی</h3>
              </v-row>
            </div>
          </router-link>
        </v-row>
        <v-row align="center" justify="end" style="">
          <router-link to="">
            <div class="yellow lighten-5 rounded-xl vislineBox d-inline-block">
              <v-row align="center" justify="center" class="heightAll cursorPointer py-4">
                <v-icon class="widthAll" size="45" style="">mdi-passport</v-icon>
                <h3 class="vislineBoxText mt-4">ویزای تک کانادا</h3>
              </v-row>
            </div>
          </router-link>
        </v-row>
        <!-- <div id="gdyVVwLR" style="min-height: 90vh;">
      <script type="text/JavaScript"
        src="https://survey.porsline.ir/embed/eyJ3aWR0aCI6IjEwMCUiLCJoZWlnaHQiOiIxMDAlIiwiYm9yZGVyIjoibm9uZSJ9/gdyVVwLR">
      </script>
    </div> -->
      </div>
    </v-row>
  </div>
</template>

<style scoped>
.vislineBox {
  width: 200px;
}

.vislineBox {
  box-shadow: 0 0 2px rgb(160, 160, 160);

}

.vislineBox:hover {
  box-shadow: 0 0 5px rgb(129, 129, 129);

}

.vislineBoxText {
  color: #4d4d4d
}

.vislineBox:hover .vislineBoxText {
  color: #161616
}
</style>

<script>
export default {
  name: 'visline-vip',
  components: {},
  data: () => ({

  }),
  methods: {

  },
  created() {
    document.title = ' اخذ ویزا - FIT'
    window.scrollTo(0, 0);
  }
}
</script>
