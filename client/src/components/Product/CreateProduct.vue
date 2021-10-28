<template>
  <div class="createproduct">
        <h4>Create a product</h4>
        <div class="col-md-12">
            <label class="form-label">Nombre del producto</label>
            <input class="form-control form-control-lg" type="text" v-model="product.name">
        </div>
        <div class="col-md-12">
            <label class="form-label">Descripcion del producto</label>
            <textarea class="form-control" rows="3" v-model="product.description"></textarea>
        </div>
        <button type="button" class="btn btn-primary mt-3" @click="createProduct(product)">Enviar</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    name: "createproduct",
    data(){
        return {
            product: {}
        }
    },
    methods: {
        ...mapActions(['createProduct'])
    },
    computed: mapState({
        token: (state) => state.token,
    })
}
</script>

<style>

</style>