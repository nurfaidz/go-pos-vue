<script setup lang="ts">
import { ref } from "vue";
import Header from "./components/layouts/Header.vue";
import Sidebar from "./components/layouts/Sidebar.vue";
import { RouterView } from "vue-router";

const drawer = ref(true);
</script>

<template>
  <q-layout view="lHh Lpr lFf" class="app-container">
    <Header @toggleSidebar="drawer = !drawer" />
    <Sidebar v-model="drawer" />

    <q-page-container class="full-height">
      <q-page class="q-pa-md full-height content-container">
        <RouterView />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.app-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.content-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
}
</style>
