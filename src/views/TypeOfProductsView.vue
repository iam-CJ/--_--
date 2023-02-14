<template>
  <div>
    <ProductsTypeComponent />
    <!--返回頂部的button-->
    <button type="button" id="backtop" class="toTop-arrow"></button>
  </div>
</template>
<script>
import ProductsTypeComponent from "../components/ProductsTypeComponent.vue";

export default {
  components: {
    ProductsTypeComponent,
  },
};
</script>
