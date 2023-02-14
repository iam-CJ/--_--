<template>
  <div>
    <TutorialComponent />
    <!--返回頂部的button-->
    <button type="button" id="backtop" class="toTop-arrow"></button>
  </div>
</template>
<script>
import TutorialComponent from "../components/TutorialComponent.vue";

export default {
  components: {
    TutorialComponent,
  },
};
</script>
