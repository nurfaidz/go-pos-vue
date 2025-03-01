<template>
  <q-card-section>
    <q-card flat bordered class="full-width">
      <q-card-section>
        <q-input outlined v-model="search" label="Search" />
      </q-card-section>
    </q-card>
  </q-card-section>
  <q-page class="q-pa-md product-page">
    <q-table class="full-height table-quasar" flat bordered title="Products List" :rows="products" :columns="columns"
      row-key="id" virtual-scroll v-model:pagination="pagination" :rows-per-page-options="[0]">

      <template v-slot:body-cell-image="props">
        <q-td :props="props">
          <img :src="props.row.image" class="product-image">
        </q-td>
      </template>

      <template v-slot:body-cell-action="props">
        <q-td :props="props">
          <q-btn color="primary" label="Detail" @click="showDetail(props.row)" />
        </q-td>
      </template>

    </q-table>
  </q-page>
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
.product-page {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}

.table-quasar {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.05);
}

.product-image {
  width: 50px;
  height: 50px;
  border-radius: 5px;
}
</style>
