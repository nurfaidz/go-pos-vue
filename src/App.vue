<script setup lang="ts">
import { ref } from "vue";
import Header from "./components/layouts/Header.vue";
import Sidebar from "./components/layouts/Sidebar.vue";
import { RouterView } from "vue-router";

const drawer = ref(true);
</script>

<template>
  <q-layout view="hHh LpR fFf" class="app-container">
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
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.app-container {
  width: 1200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.q-page-container {
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
}

.content-container {
  width: 100%;
  min-height: 100%;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  box-sizing: border-box;
}

.table-quasar {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
}
</style>

<style>
.q-btn:hover {
  background-color: #388e3c !important;
}

.q-btn {
  background-color: #4caf50 !important;
  color: #fff !important;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 14px;
  transition: 0.3s ease-in-out;
}
</style>
