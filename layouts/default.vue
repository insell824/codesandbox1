<template>
  <v-app>
    <v-navigation-drawer v-model="isOpenDrawer" clipped fixed app dark>
      <v-list nav dense>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action class="ml-1 mr-2">
            <v-icon dense>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      clipped-left
      fixed
      app
      elevate-on-scroll
      color="primary"
      dark
      dense
    >
      <v-app-bar-nav-icon @click.stop="isOpenDrawer = !isOpenDrawer" tile />
      <v-toolbar-title>CodeSandbox</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      isOpenDrawer: true,
      items: [
        {
          icon: "mdi-home",
          title: "Top Page",
          to: "/",
        },
      ],
    };
  },
};
</script>
