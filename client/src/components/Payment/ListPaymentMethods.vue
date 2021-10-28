<template>
  <div class="listpaymentmethods row">
    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-3" v-for="(card, index) of listPaymentMethods" :key="index">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">
            {{ card.card.brand }} {{ card.card.last4 }}
          </h5>
          <p class="card-text">
            {{ card.card.exp_month }} /
            {{ card.card.exp_year }}
          </p>
          <p class="card-text">
            {{ card.billing_details.name }}
          </p>
          <!-- <a href="#" class="btn btn-primary">Edit</a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "listpaymentmethods",
  data() {
    return {
      list: {},
    };
  },
  methods: {
    ...mapActions(["getPaymentMethods"]),
  },
  computed: {
    ...mapState({
      token: (state) => state.token,
    }),
    ...mapGetters({ listPaymentMethods: "listPaymentMethods" }),
  },
  created() {
    this.getPaymentMethods();
  },
};
</script>

<style>
</style>