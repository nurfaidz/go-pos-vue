<template>
  <q-header class="text-white header" elevated>
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="$emit('toggleSidebar')" />
      <q-space />
      <q-btn round flat>
        <q-avatar size="36px">
          <img src="https://avatars.githubusercontent.com/u/499550?s=60&v=4" />
        </q-avatar>
        <q-menu auto-close class="bg-grey-8 text-white">
          <q-list style="min-width: 150px">
            <q-item clickable>
              <q-item-section>Profile</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Settings</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Logout</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </q-toolbar>
  </q-header>
</template>

<style scoped>
.header {
  background-color: #181818;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0 16px;
}
</style>
