<template>
  <form @submit.prevent="Submit(OneProduct)">
    <label for="name">name</label>
    <input type="text" v-model="OneProduct.name" name="name" />
    <label for="description">description</label>
    <textarea name="description" v-model="OneProduct.description" id="description"></textarea>
    <button type="submit">update product</button>
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      name: null
    };
  },
  methods: {
    ...mapActions(["fetchOneProduct", "updateProduct"]),
    // update Product
    Submit(OneProduct) {
      const formData = {
        id: OneProduct.id,
        name: OneProduct.name,
        description: OneProduct.description
      };
      this.updateProduct(formData);
      this.$router.push("/");
    }
  },
  // Gets the data from the store
  computed: mapGetters(["OneProduct"]),
  // created is a Life cycle method That runs when component mounds and a call the function OneProduct with the product id
  created() {
    this.fetchOneProduct(this.$route.params.id);
  }
};
</script>

<style></style>
