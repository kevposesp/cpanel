<template>
  <div class="createinvoiceitem">
    <h4>Create a invoice item</h4>
    <div class="col-md-12">
      <label class="form-label">A que usuario quieres enviarla?</label>
      <select
        v-model="item.idUser"
        class="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
      >
        <option v-for="(user, index) of invoiceCreateItem.users" :key="index" :value="user.id">
          {{ user.userName }}
        </option>
      </select>
    </div>
    <div class="col-md-8">
      <label class="form-label">Producto a elegir</label>
      <select
        v-model="item.product"
        class="form-select form-select-lg mb-3"
        @click="getPricesProduct({from: 'createinvoiceitem', id: item.product.id})"
      >
      
        <option v-for="(product, index) of invoiceCreateItem.products" :key="index" :value="product">
          {{ product.name }}
        </option>
      </select>
      
    </div>
    <div class="col-md-4">
      <label class="form-label">Precios del producto</label>
      <select
        v-model="item.price"
        class="form-select form-select-lg mb-3"
      >
        <option v-for="(price, index) of invoiceCreateItem.prices" :key="index" :value="price.id">
          {{ price.unit_amount/100 }} €
        </option>
      </select>
    </div>
    <button type="button" class="btn btn-primary mt-3" @click="createInvoiceItem(item)">
      Enviar
    </button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "createinvoiceitem",
  data() {
    return {
      item: {
        idUser: "",
        price: "",
        product: ""
      }
    };
  },
  methods: {
    ...mapActions(['getUsers', 'getProducts','createInvoiceItem', 'getPricesProduct']),
  },
  computed: mapState({
    ...mapState({
        token: (state) => state.token,
    }),
    ...mapGetters({invoiceCreateItem: 'invoiceCreateItem'})
  }),
  created() {
    this.getUsers("createinvoiceitem")
    this.getProducts("createinvoiceitem")
  },
};
</script>

<style>
</style>