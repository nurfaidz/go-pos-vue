<template>
  <section>
    <div class="product-container">
      <h4 class="dashboard-title">Products</h4>
      <div class="product-wrapper">
        <q-table class="full-height table-quasar" flat bordered title="Products List" :rows="products"
          :columns="columns" row-key="id" virtual-scroll v-model:pagination="pagination" :rows-per-page-options="[0]">

          <template v-slot:body-cell-image="props">
            <q-td :props="props">
              <img :src="props.row.image" class="product-image">
            </q-td>
          </template>

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

const products = ref([
  { id: 1, name: "Product 1", price: 10000, image: "https://fakeimg.pl/100x100/" },
  { id: 2, name: "Product 2", price: 20000, image: "https://fakeimg.pl/100x100/" },
  { id: 3, name: "Product 3", price: 30000, image: "https://fakeimg.pl/100x100/" },
]);

const columns = [
  { name: "id", label: "ID", align: "left", field: (row) => row.id },
  { name: "image", label: "Image", align: "center", field: "image" },
  { name: "name", label: "Name", align: "left", field: "name" },
  { name: "price", label: "Price", align: "right", field: (row) => `Rp ${row.price.toLocaleString()}` },
  { name: "action", label: "Action", align: "center" },
];

const showDetail = (product) => {
  $q.notify({
    type: "info",
    message: `Detail: ${product.name} - Rp ${product.price.toLocaleString()}`,
  });
};
</script>

<style>
.product-container {
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dashboard-title {
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 16px;
  text-align: center;
}

.product-wrapper {
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

.product-image {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);
}
</style>
