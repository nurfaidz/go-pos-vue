<template>
  <section class="product-page">
    <h1>Products List</h1>
    <div class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" :alt="product.name" class="product-image">
        <h2 class="product-name">{{ product.name }}</h2>
        <p class="product-price">Rp {{ product.price.toLocaleString() }}</p>
        <button class="buy-btn">Detail</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const products = ref([
  { 'id': 1, 'name': 'Product 1', 'price': 10000, 'image': 'https://fakeimg.pl/250x100/' },
  { 'id': 2, 'name': 'Product 2', 'price': 20000, 'image': 'https://fakeimg.pl/250x100/' },
  { 'id': 3, 'name': 'Product 3', 'price': 30000, 'image': 'https://fakeimg.pl/250x100/' },
  { 'id': 4, 'name': 'Product 4', 'price': 40000, 'image': 'https://fakeimg.pl/250x100/' },
  { 'id': 5, 'name': 'Product 5', 'price': 50000, 'image': 'https://fakeimg.pl/250x100/' },
]);

</script>

<style scoped>
.product-page {
  padding: 20px;
  max-width: 1200px;
  margin: auto;
  text-align: center;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.product-card {
  background: white;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s;
}

.product-card:hover {
  transform: scale(1.05)
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.product-name {
  font-size: 18px;
  margin: 10px 0;
}

.product-price {
  color: #2ecc71;
  font-size: 16px;
  font-weight: bold;
}

.buy-btn {
  background: #3498db;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s;
}

.buy-btn:hover {
  background: #2980b9;
}
</style>
