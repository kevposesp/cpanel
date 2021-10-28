<template>
  <div class="createpayment">
      <form
          class="needs-validation"
          :class="{ 'was-validated': errors.validateForm }"
          novalidate
          @submit.prevent="validateForm(), createMethodPayment(card), errors.icreated = true"
        >
          <h4>Create Payment Method</h4>
          <div class="p-3 row">
            <div class="col-md-12">
              <label for="cc-number" class="form-label"
                >Credit card number</label
              >
              <input
                type="text"
                class="form-control"
                placeholder=""
                required=""
                v-model="card.number"
              />
              <div class="invalid-feedback">Credit card number is required</div>
            </div>
            <div class="col-md-6">
              <label for="cc-number" class="form-label">Expiration month</label>
              <input
                type="text"
                class="form-control"
                placeholder=""
                required=""
                v-model="card.exp_month"
              />
              <div class="invalid-feedback">Expiration month is required</div>
            </div>
            <div class="col-md-6">
              <label for="cc-number" class="form-label">Expiration year</label>
              <input
                type="text"
                class="form-control"
                placeholder=""
                required=""
                v-model="card.exp_year"
              />
              <div class="invalid-feedback">Expiration year is required</div>
            </div>
            <div class="col-md-6">
              <label for="cc-number" class="form-label">CVV</label>
              <input
                type="text"
                class="form-control"
                placeholder=""
                required=""
                v-model="card.cvc"
              />
              <div class="invalid-feedback">Credit card number is required</div>
            </div>
            </div>
            <button class="btn btn-primary btn-lg mx-auto d-block" type="submit">
                Save method
            </button>
            <div v-if="errors.icreated == true && errors.created == false" class="alert alert-success mt-3 mb-0" role="alert">
                El metodo de pago se guardo correctamente!
            </div>
            <div v-if="errors.icreated == true && errors.created == true" class="alert alert-danger mt-3 mb-0" role="alert">
                No se pudo guardar el metodo de pago!
            </div>
        </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: "createpayment",
  data() {
    return {
      card: {
        number: null,
        exp_month: null,
        exp_year: null,
        cvc: null,
      },
      errors: {
          validateForm: false,
          created: false,
          icreated: false
      }
    };
  },
  methods: {
    validateForm() {
      for (var property in this.card) {
        if(this.card.property == null){
            this.errors.validateForm = true
        }
      }
    },
    ...mapActions(['createMethodPayment'])
  },
  computed: mapState({
      token: state => state.token
  })
};
</script>
