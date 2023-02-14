<template>
  <div>
    <div class="paper_box">
      <h3>特殊紙質</h3>
      <div class="hr"></div>
      <div class="paper_card_container">
        <div class="paper_card_row">
          <div
            class="paper_card_col"
            v-for="(item, index) in ProductDataFilter"
            :key="item.id"
          >
            <div class="paper_card">
              <img
                :src="
                  require('../static/image/d_paper_0' + (index + 1) + '.png')
                "
              />
              <div class="paper_card_bottom">
                <p>
                  {{ item.ProductNameTranslate }}<br />By
                  {{ item.ProductAuthor }}
                </p>
                <div class="paper_card_bottom_button">
                  <p>{{ item.ProductPrice + "元" }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="paper_link">
        <router-link to="/products/paper">查看更多特殊紙質>>></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ProductData from "../assets/product.json";

export default {
  name: "productCardCol",
  data() {
    return {
      ProductData,
    };
  },
  computed: {
    ProductDataFilter() {
      return this.ProductData.products
        .filter((item) => item.ProductType == "paper")
        .slice(0, 4);
    },
  },
};
</script>
<style lang="scss" src="../assets/css/index.scss" scoped></style>
