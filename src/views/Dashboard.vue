<template>
  <section>
    <div class="dashboard-container">
      <h4 class="dashboard-title">Dashboard</h4>
      <div class="summary-wrapper">
        <q-card v-for="(item, index) in transactions" :key="index" class="summary-card">
          <q-card-section class="card-content">
            <q-icon :name="item.icon" color="primary" size="30px" />
            <div class="summary-info">
              <span class="summary-label">{{ item.label }}</span>
              <span class="summary-value">Rp {{ item.total.toLocaleString() }}</span>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const transactions = ref([
  { label: "Today", total: 150000, icon: "event" },
  { label: "Yesterday", total: 200000, icon: "history" },
  { label: "This Month", total: 450000, icon: "date_range" },
]);
</script>

<style scoped>
.dashboard-container {
  padding: 20px;
}

.dashboard-title {
  font-size: 22px;
  margin-bottom: 16px;
}

.summary-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: start;
}

.summary-card {
  flex: 1;
  min-width: 200px;
  max-width: 320px;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4);
  background-color: #252323;
}

.card-content {
  display: flex;
  align-items: center;
  gap: 25px;
  justify-content: start;
}

.summary-info {
  display: flex;
  flex-direction: column;
}

.summary-label {
  font-size: 14px;
  font-weight: 600;
  color: #eee;
}

.summary-value {
  font-weight: bold;
  font-size: 18px;
  color: #4caf50;
}
</style>
