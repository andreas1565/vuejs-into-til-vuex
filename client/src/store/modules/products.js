import axios from 'axios';
// state is where all of the data in your app Lives it link the data Property
const state = {
  products: [],
  product: []
};
// Does A Can get data Between store and compontents/views and Updates when changes made to the state
const getters = {
  allProducts: state => state.products,
  OneProduct: state => state.product
};
// Here you can put your http request For your backend API
const actions = {
  async fetchProducts({ commit }) {
    try {
      const response = await axios.get('http://localhost:3000/products');
      commit('setProducts', response.data);
    } catch (error) {
      console.error(error);
    }
  },

  async fetchOneProduct({ commit }, id) {
    try {
      const response = await axios.get(`http://localhost:3000/products/${id}`);
      commit('setProduct', response.data);
    } catch (error) {
      console.error(error);
      if (error.response.status === 404) {
        window.location.href = '/404';
      }
    }
  },

  async addProduct({ commit }, Formdata) {
    try {
      const response = await axios.post('http://localhost:3000/products', {
        name: Formdata.name,
        description: Formdata.description
      });
      commit('newProducts', response.data);
    } catch (error) {
      console.error(error);
    }
  },

  async updateProduct({ commit }, formData) {
    try {
      const response = await axios.patch(
        `http://localhost:3000/products/${formData.id}`,
        {
          id: formData.id,
          name: formData.name,
          description: formData.description
        }
      );
      commit('updateProduct', response.data);
    } catch (error) {
      console.error(error);
    }
  },

  async deleteProduct({ commit }, id) {
    await axios.delete(`http://localhost:3000/products/${id}`);
    commit('removeProduct', id);
  }
};
// Actions can commit a mutation Means It's a way to Change state
const mutations = {
  setProducts: (state, products) => (state.products = products),
  setProduct: (state, product) => (state.product = product),
  newProducts: (state, products) => state.products.unshift(products),
  removeProduct: (state, id) =>
    (state.products = state.products.filter(products => products.id !== id)),
  updateProduct: (state, formData) => {
    const index = state.products.findIndex(
      products => products.id === formData.id
    );
    if (index !== -1) {
      state.products.splice(index, 1, formData);
    }
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
