<template>
  <div class="app">
    <SidebarWrapper />
    <div class="body">
      <router-view/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SidebarWrapper from '@/components/SidebarWrapper'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    SidebarWrapper
  },
  methods:{
    ...mapActions(['getToken'])
  },
  created(){
    this.getToken()
  }
}
</script>

<style>
.app {
  display: flex;
  height: 100vh;
  max-height: 100vh;
}
.app .body {
  padding: 20px 40px;
  width: 100%;
  overflow-y: scroll;
}




/* ------------------ */
.bk-color {
  background-color: #f9f9f9;
}
.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
.border-left-blue {
  border-left: 3px solid rgb(47, 47, 255) !important;
}

</style>
