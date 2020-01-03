<template>
  <!-- App.vue -->

  <v-app>
    <v-navigation-drawer app temporary>
      <!-- -->
    </v-navigation-drawer>

    <v-app-bar
      app
      dark
      color="primary"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Ad application</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text>LINK ONE</v-btn>
      </v-toolbar-items>

    </v-app-bar>

    <v-content>

        <router-view></router-view>

    </v-content>
  </v-app>
</template>

<script>
export default {
}
</script>
