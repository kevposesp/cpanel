<template>
  <div class="createinvoice">
    <h4>Create a invoice</h4>
    <label class="form-label">A que usuario quieres enviarla?</label>
    <select
      v-model="userSelect"
      class="form-select form-select-lg mb-3"
      aria-label=".form-select-lg example"
    >
      <option v-for="(user, index) of invoiceCreate.users" :key="index" :value="user.id">
        {{ user.userName }}
      </option>
    </select>
    <button type="button" class="btn btn-primary" @click="createInvoice(userSelect)">
      Enviar
    </button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
    name: "createinvoice",
    data(){
        return {
            userSelect: ""
        }
    },
    methods: {
        ...mapActions(['getUsers', 'createInvoice'])
    },
    computed: { 
        ...mapState({
            token: (state) => state.token,
        }),
        ...mapGetters({invoiceCreate: 'invoiceCreate'})
    },
    created(){
        this.getUsers("createinvoice")
    }
}
</script>

<style>
</style>