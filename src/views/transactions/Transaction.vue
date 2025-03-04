<template>
  <section>
    <div class="transaction-container">
      <h4 class="transaction-title">Transaction</h4>
      <div class="transaction-wrapper">
        <q-table class="full-height table-quasar" flat bordered title="Transaction List" :rows="transactions"
          :columns="columns" row-key="id" virtual-scroll v-model:pagination="pagination" :rows-per-page-options="[0]">
          <template v-slot:body-cell-action="props">
            <q-td :props="props">
              <q-btn label="Detail" @click="showDetail(props.row)" />
            </q-td>
          </template>
        </q-table>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

const transactions = ref([
  { id: 1, name: "Transaction 1", reference: "TRX0001", amount: 10000, fee: 300, total: 10300 },
  { id: 2, name: "Transaction 2", reference: "TRX0002", amount: 20000, fee: 300, total: 20300 },
  { id: 3, name: "Transaction 3", reference: "TRX0003", amount: 30000, fee: 300, total: 30300 },
]);

const columns = [
  { name: "id", label: "ID", align: "left", field: (row) => row.id },
  { name: "name", label: "Name", align: "left", field: "name" },
  { name: "reference", label: "Reference", align: "left", field: "reference" },
  { name: "amount", label: "Amount", align: "right", field: (row) => `Rp ${row.amount.toLocaleString()}` },
  { name: "fee", label: "Fee", align: "right", field: (row) => `Rp ${row.fee.toLocaleString()}` },
  { name: "total", label: "Total", align: "right", field: (row) => `Rp ${row.total.toLocaleString()}` },
  { name: "action", label: "Action", align: "center" },
];

const showDetail = (transaction) => {
  $q.notify({
    type: "info",
    message: `Detail: ${transaction.name} - Rp ${transaction.total.toLocaleString()}`,
  });
};
</script>

<style>
.transaction-container {
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.transaction-title {
  font-size: 22px;
  margin-bottom: 16px;
}

.transaction-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #252525;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4);
}

.table-quasar {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
}

.q-table__top,
.q-table__bottom,
.q-table thead tr th {
  background-color: #303030 !important;
  color: #ffffff !important;
  font-weight: bold;
}

.q-table tbody tr {
  background-color: rgba(40, 40, 40, 0.8);
  color: #dddddd;
}

.q-table tbody tr:hover {
  background-color: #444444 !important;
}

.q-btn:hover {
  background-color: #388e3c !important;
}
</style>
