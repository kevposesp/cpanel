<template>
  <div class="dashboard">
    <h1 class="h3">Dashboard</h1>
    <div class="row">
      <div class="col-xl-3 col-md-6 col-sm-12">
        <div class="card mcard border-left-blue">
          <div class="h3">Earnings</div>
          <div class="h4">4000€</div>
        </div>
      </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-md-12 border px-3 py-6 rounded-3 bk-color h-100">
            <h4>My Payment Methods</h4>
            <ListPaymentMethods/>
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-md-12 border px-3 py-6 rounded-3 bk-color h-100">
            <h4>My Invoices</h4>
            <ListPersonalInvoices/>
        </div>
    </div>
  </div>
</template>

<script>
import ListPaymentMethods from '@/components/Payment/ListPaymentMethods'
import ListPersonalInvoices from '@/components/Invoice/ListPersonalInvoices'

export default {
  name: "dashboard",
  components: {
      ListPaymentMethods,
      ListPersonalInvoices
  }
};
</script>

<style>
.mcard {
  box-shadow: 0px 2px 12px #888888;
  padding: 10px 15px;
}
.mcard .h3 {
  color: #3536f5;
}
.mcard .h4 {
  color: #454545;
}
</style>