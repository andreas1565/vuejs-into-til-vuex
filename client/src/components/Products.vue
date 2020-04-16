<template>
  <div>
    <h1>Products</h1>
    <AddProduct :AddProduct="AddProduct" />
    <ul v-if="allProducts.length !== 0">
      <li v-for="product in allProducts" :key="`${product.id}-${Math.random()}`">
        {{ product.name }}
        <button @click="deleteProduct(product.id)">slet</button>
        <router-link
          :to="{ name: 'DashboardEditProductPage', params: { id: product.id } }"
        >EditProduct</router-link>
      </li>
    </ul>
    <p v-else-if="allProducts.length == 0">no products</p>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import AddProduct from "./AddProduct.vue";
export default {
  name: "Products",
  components: {
    AddProduct
  },
  methods: {
    // Does That I can use My Fitch/Axois functions
    ...mapActions(["fetchProducts", "deleteProduct", "addProduct"]),
    AddProduct(Formdata) {
      this.addProduct(Formdata);
    }
  },
  // Gets the data from the store
  computed: mapGetters(["allProducts"]),

  deleteProduct(id) {
    this.deleteProduct(id);
  },
  // created is a Life cycle method That runs when component mounds and a call the function fetchProducts
  created() {
    this.fetchProducts();
  }
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>
