<template>
  <div class="listpersonalinvoices row">
    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-3" v-for="(invoice, index) of listPersonalInvoices" :key="index">
      <div class="card">
          {{ invoice }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "listpersonalinvoices",
  data() {
    return {

    }
  },
  methods: {
    ...mapActions(["getPersonalInvoices"]),
  },
  computed: {
    ...mapGetters({ listPersonalInvoices: "listPersonalInvoices" }),
  },
  created() {
    this.getPersonalInvoices();
  },
};
</script>

<style>
</style>