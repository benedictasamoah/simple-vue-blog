<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>
<script>
import navbar from "./components/nav/index.vue";
export default {
  components: {
    navbar
  }
};
</script>

