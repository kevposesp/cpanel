<template>
  <div class="product">
    <div class="row py-3">
      <div v-if="accessComponent" class="col-md-6">
        <div class="card-body border px-3 py-6 rounded-3 bk-color h-100">
          <CreateProduct />
        </div>
      </div>
      <div v-if="accessComponent" class="col-md-6">
        <div class="card-body border px-3 py-6 rounded-3 bk-color h-100">
          <CreatePrice />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CreateProduct from '@/components/Product/CreateProduct'
import CreatePrice from '@/components/Product/CreatePrice'

import { mapState } from 'vuex'
export default {
  name: 'product',
  components: {
    CreateProduct,
    CreatePrice
  },
  computed: mapState({
      accessComponent: state => state.accessComponent
  })
}
</script>
