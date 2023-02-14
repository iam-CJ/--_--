<template>
  <div>
    <HowToPayComponent />
    <!--返回頂部的button-->
    <button type="button" id="backtop" class="toTop-arrow"></button>
  </div>
</template>
<script>
import HowToPayComponent from "../components/HowToPayComponent.vue";

export default {
  components: {
    HowToPayComponent,
  },
};
</script>
