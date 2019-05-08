<template>
  <div>
    <navbar></navbar>
    <!-- Main View -->
    <router-view></router-view>
    <mfooter></mfooter>
  </div>
</template>
<script>
import navbar from "./components/nav/index.vue";
/** Registered footer as mfooter because the name footer is reserved */
import mfooter from "./components/footer/index.vue";
export default {
  components: {
    navbar,
    mfooter
  }
};
</script>

