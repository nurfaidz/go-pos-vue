<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/layouts/Header.vue'
import Sidebar from './components/layouts/Sidebar.vue'
</script>

<template>
  <div class="layout">
    <Sidebar />

    <div class="main-content">
      <Header />
      <div class="content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.sidebar {
  width: 250px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: var(--color-primary);
  padding: 1rem;
  color: white;
  display: flex;
  flex-direction: column;
  z-index: 1000;
}

.main-content {
  margin-left: 250px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: calc(100% - 250px);
}

header {
  background-color: var(--color-primary);
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  position: fixed;
  top: 0;
  left: 250px;
  width: calc(100% - 250px);
  z-index: 1000;
}

.content {
  margin-top: 60px;
  padding: 1rem;
  overflow-y: auto;
  flex-grow: 1;
}

@media (max-width: 768px) {
  .sidebar {
    width: 200px;
  }

  .main-content {
    margin-left: 200px;
    width: calc(100% - 200px);
  }

  header {
    left: 200px;
    width: calc(100% - 200px);
  }
}

@media (max-width: 480px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }

  .main-content {
    margin-left: 0;
    width: 100%;
  }

  header {
    left: 0;
    width: 100%;
  }
}
</style>
