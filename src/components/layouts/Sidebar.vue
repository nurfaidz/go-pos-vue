<template>
  <q-drawer v-model="isSidebarOpen" show-if-above side="left" class="sidebar-transparent full-height">
    <q-scroll-area class="fit">
      <q-list>
        <template v-for="(menuItem, index) in menuList" :key="index">
          <q-item clickable v-ripple :to="menuItem.to" class="sidebar-item">
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" size="22px" />
            </q-item-section>
            <q-item-section>{{ menuItem.label }}</q-item-section>
          </q-item>
          <q-separator v-if="menuItem.separator" />
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
  width: 180px;
  background: #181818;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar-item {
  border-radius: 8px;
  color: white;
  transition: background 0.3s ease-in-out;
}

.sidebar-item:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>
