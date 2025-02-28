<template>
  <q-drawer v-model="isSidebarOpen" show-if-above side="left" :width="200" class="sidebar-transparent"
    style="background: #181818;">
    <q-scroll-area class="fit q-pa-sm">
      <q-list class="column">
        <template v-for="(menuItem, index) in menuList" :key="index">
          <q-item clickable v-ripple :active="menuItem.label === 'Dashboard'" class="q-my-xs sidebar-item"
            :to="menuItem.to">
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" size="20px" />
            </q-item-section>
            <q-item-section>{{ menuItem.label }}</q-item-section>
          </q-item>
          <q-separator v-if="menuItem.separator" :key="'sep' + index" spaced />
        </template>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup lang="ts">
import { defineModel, ref } from "vue";

const isSidebarOpen = defineModel<boolean>();

const menuList = ref([
  { icon: "dashboard", label: "Dashboard", separator: true, to: '/' },
  { icon: "shopping_cart", label: "Products", separator: false, to: '/products' },
  { icon: "receipt_long", label: "Transactions", separator: true, to: '/transactions' },
]);
</script>

<style>
.sidebar-transparent {
  background: #181818 !important;
  box-shadow: none !important;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar-item {
  width: 100%;
  border-radius: 8px;
  transition: background 0.3s ease-in-out;
  color: white;
}

.sidebar-item:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>
