<template>
  <header>
    <div class="header-content">
      <div class="user-menu">
        <img class="user-avatar" src="https://avatars.githubusercontent.com/u/499550?s=60&v=4" alt="User avatar"
          @click="toggleDropdown" ref="avatarRef" />

        <div class="dropdown" v-if="isDropdownOpen" ref="dropdownRef">
          <a href="javascript:void(0)">Profile</a>
          <a href="javascript:void(0)">Settings</a>
          <a href="javascript:void(0)">Logout</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isDropdownOpen = ref(false);
const avatarRef = ref<HTMLElement | null>(null);
const dropdownRef = ref<HTMLElement | null>(null);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const closeDropdown = (event: MouseEvent) => {
  if (
    dropdownRef.value &&
    !dropdownRef.value.contains(event.target as Node) &&
    avatarRef.value &&
    !avatarRef.value.contains(event.target as Node)
  ) {
    isDropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", closeDropdown);
});

onUnmounted(() => {
  document.removeEventListener("click", closeDropdown);
});
</script>

<style scoped>
header {
  background-color: var(--color-primary);
  color: var(--color-text);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.header-content {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
}

.user-menu {
  position: relative;
}

.user-avatar {
  border-radius: 50%;
  cursor: pointer;
  width: 40px;
  height: 40px;
}

.dropdown {
  position: absolute;
  right: 0;
  top: 50px;
  background-color: var(--color-primary);
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  min-width: 150px;
}

.dropdown a {
  padding: 0.5rem;
  text-decoration: none;
  color: white;
  transition: background 0.2s;
}

.dropdown a:hover {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
}
</style>
