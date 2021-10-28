<template>
  <div class="payment">
    <div class="row py-3">
      <div class="col-md-6 border px-3 py-6 rounded-3 bk-color h-100">
        <CreatePayment />
      </div>
      
    </div>
    <div class="row py-3">
      <div class="col-md-12 border px-3 py-6 rounded-3 bk-color h-100">
        <ListPaymentMethods/>
      </div>
    </div>
  </div>
</template>

<script>
import CreatePayment from '@/components/Payment/CreatePaymentMethod'
import ListPaymentMethods from '@/components/Payment/ListPaymentMethods'

export default {
  name: 'payment',
  components: {
    CreatePayment,
    ListPaymentMethods
  }
}
</script>

<style scoped>

</style>