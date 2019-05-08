<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
    <mfooter></mfooter>
  </div>
</template>
<script>
import navbar from "./components/nav/index.vue";
import mfooter from "./components/footer/index.vue";
export default {
  components: {
    navbar,
    mfooter
  }
};
</script>

