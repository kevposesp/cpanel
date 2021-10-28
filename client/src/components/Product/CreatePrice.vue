<template>
  <div class="createprice">
    <h4>Create a price</h4>
    <div class="col-md-12">
      <label class="form-label">Producto</label>
      <select
        v-model="product.idProduct"
        class="form-select form-select-lg mb-3"
      >
        <option
          v-for="(product, index) of productCreatePrice.products"
          :key="index"
          :value="product.id"
        >
          {{ product.name }}
        </option>
      </select>
    </div>
    <div class="col-md-12">
      <label class="form-label">Precio</label>
      <input
        class="form-control form-control-lg"
        type="number"
        step="any"
        v-model="product.price"
      />
    </div>
    <button type="button" class="btn btn-primary mt-3" @click="createPrice(product)">
      Enviar
    </button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "createproduct",
  data() {
    return {
      product: {}
    };
  },
  methods: {
    ...mapActions(["getProducts", "createPrice"]),
  },
  computed: {
    ...mapState({
      token: (state) => state.token,
    }),
    ...mapGetters({ productCreatePrice: "productCreatePrice" }),
  },
  created() {
    this.getProducts("createprice");
  },
};
</script>

<style>
</style>