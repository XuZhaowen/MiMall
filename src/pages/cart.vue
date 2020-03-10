<template>
  <div>
    <order-header></order-header>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from "./../components/OrderHeader";
import ServiceBar from "./../components/ServiceBar";
import NavFooter from "./../components/NavFooter";
export default {
  name: "cart",
  components: {
    ServiceBar,
    NavFooter,
    OrderHeader
  }
};
</script>

<style></style>
