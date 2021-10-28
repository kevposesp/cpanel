<template>
  <div class="invoice">
    <div class="row py-3">
      <div v-if="accessComponent" class="col-md-6">
        <CreateInvoice class="card-body border px-3 py-6 rounded-3 bk-color h-100"/>
      </div>
      <div v-if="accessComponent" class="col-md-6">
        <CreateInvoiceItem class="card-body border px-3 py-6 rounded-3 bk-color h-100"/>
      </div>
    </div>
  </div>
</template>

<script>
import CreateInvoice from '@/components/Invoice/CreateInvoice'
import CreateInvoiceItem from '@/components/Invoice/CreateInvoiceItem'

import { mapState } from 'vuex'
export default {
  name: 'invoice',
  components: {
    CreateInvoice,
    CreateInvoiceItem
  },
  computed: mapState({
      accessComponent: state => state.accessComponent
  })
}
</script>