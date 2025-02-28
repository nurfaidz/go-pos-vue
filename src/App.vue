<script setup lang="ts">
import { ref } from "vue";
import Header from "./components/layouts/Header.vue";
import Sidebar from "./components/layouts/Sidebar.vue";
import { RouterView } from "vue-router";

const drawer = ref(true);
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <Header @toggleSidebar="drawer = !drawer" />
    <Sidebar v-model="drawer" />

    <q-page-container>
      <RouterView />
    </q-page-container>
  </q-layout>
</template>
