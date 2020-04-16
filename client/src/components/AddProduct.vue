<template>
  <form @submit="onsubmit">
    <label for="name">name</label>
    <input type="text" v-model="name" name="name" id="name" />
    <label for="description">description</label>
    <textarea name="description" v-model="description" id="description"></textarea>
    <button type="submit">send</button>
  </form>
</template>

<script>
// import { mapActions } from "vuex";
export default {
  // using props
  props: ["AddProduct"],
  name: "AddProduct",
  data() {
    return {
      name: "",
      description: ""
    };
  },
  methods: {
    // ...mapActions(["addProduct"]),
    onsubmit(e) {
      e.preventDefault();
      const Formdata = {
        name: this.name,
        description: this.description
      };
      // this.addProduct(Formdata);

      // using props
      this.AddProduct(Formdata);
      window.location.reload();
    }
  }
};
</script>
