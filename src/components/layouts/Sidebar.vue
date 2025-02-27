<template>
  <div>
    <aside :class="['sidebar', { 'sidebar-closed': !isSidebarOpen }]">
      <div class="sidebar-logo">
        <!-- <img src="https://fakeimg.pl/250x100/" alt="Logo" /> -->
        <span>Logo</span>
        <button class="toggle-btn" @click="toggleSidebar">
          ☰
        </button>
      </div>

      <nav class="sidebar-nav">
        <a href="/" class="nav-link">Dashboard</a>
        <a href="/products" class="nav-link">Products</a>
        <a href="/transactions" class="nav-link">Transactions</a>
      </nav>
    </aside>

    <button class="mobile-toggle" @click="toggleSidebar" v-if="!isSidebarOpen">
      ☰
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isSidebarOpen = ref(true);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: var(--color-primary);
  color: var(--color-text);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
}

.sidebar-closed {
  transform: translateX(-100%);
}

.sidebar-logo {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sidebar-logo img {
  max-height: 50px;
}

.toggle-btn {
  top: 20px;
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 24px;
  cursor: pointer;
  transition: transform 0.3s;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.sidebar-nav a {
  color: white;
  text-decoration: none;
  padding: 0.75rem;
  transition: background 0.2s;
  display: block;
}

.sidebar-nav a:hover {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
}

.mobile-toggle {
  position: fixed;
  top: 20px;
  left: 20px;
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 24px;
  cursor: pointer;
  z-index: 1100;
  border-radius: 5px;
  display: block;
}

@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
  }

  .sidebar-closed {
    transform: translateX(0);
  }
}
</style>
