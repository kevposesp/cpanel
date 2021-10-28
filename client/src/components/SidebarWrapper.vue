<template>
  <div class="SidebarWrapper d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
    <a href="" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span class="fs-4">CPANEL</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <router-link to="/" class="nav-link text-white">
          <!-- <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg> -->
          Home
        </router-link>
      </li>
      <li>
        <router-link to="/payment" class="nav-link text-white">
          <!-- <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg> -->
          Payment
        </router-link>
      </li>
      <li>
        <router-link to="/invoice" class="nav-link text-white">
          <!-- <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg> -->
          Invoice
        </router-link>
      </li>
      <li>
        <router-link to="/product" class="nav-link text-white">
          <!-- <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg> -->
          Product
        </router-link>
      </li>
    </ul>
    <hr>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
        <strong>mdo</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1" style="">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#" @click="signOff()">Sign out</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'SidebarWrapper',
  methods: {
    ...mapActions(['signOff'])
  }
}
</script>

<style scoped>
.SidebarWrapper {
    width: 280px;
    /* position: fixed;
    height: 100vh; */
}
</style>
