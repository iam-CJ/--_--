<template>
  <div>
    <div
      class="product_box"
      v-for="(item, index) in AllProductType"
      :key="index"
      @load="ClassAdjust(index)"
    >
      <div class="product_bannerpic">
        <img
          :src="require('../static/image/i_banner_0' + (index + 1) + '.png')"
        />
      </div>
      <div class="product_infobox_align">
        <div class="product_infobox">
          <h3>{{ ProductTypeFilter(index).infoboxTitle }}</h3>
          <img
            :src="
              require('../static/image/i_product0' + (index + 1) + '_00.png')
            "
          />
          <p v-html="ProductTypeFilter(index).infoboxContent"></p>
        </div>
      </div>
      <div class="product_border"></div>
      <div v-if="index % 2 == 0">
        <div
          class="product_bgline"
          style="top: 113.5px; margin-right: 500px; right: 0"
        ></div>
        <div
          class="product_bgline"
          style="bottom: 77px; margin-left: 500px"
        ></div>
      </div>
      <div v-if="index % 2 !== 0">
        <div
          class="product_bgline"
          style="bottom: 77px; margin-right: 500px; right: 0"
        ></div>
        <div
          class="product_bgline"
          style="top: 113.5px; margin-left: 500px"
        ></div>
      </div>
      <div class="product_card_container">
        <div class="product_card_row">
          <div
            class="product_card_col"
            v-for="item in ProductDataFilter(index)"
            :key="item.id"
          >
            <div class="product_card">
              <img :src="require('../' + item.ProductPicture + '.png')" />
              <div class="product_card_bottom">
                <p>
                  {{ item.ProductNameTranslate }}<br />By
                  {{ item.ProductAuthor }}
                </p>
                <div class="product_card_bottom_button">
                  <p v-if="item.ProductPrice !== 0">
                    {{ item.ProductPrice + "元" }}
                  </p>
                  <p v-if="item.ProductPrice == 0">免費</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product_link">
        <router-link :to="'/products/' + AllProductType[index]">{{
          ProductTypeFilter(index).linkText
        }}</router-link>
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
      AllProductType: ["watercolor", "crayon", "pencil", "special"],
      ProductType: {
        watercolor: {
          infoboxTitle: "水彩、水墨",
          infoboxContent:
            "使你的創作<br>溫馨又帶有童趣<br>隨興發揮、不受侷限<br>來揮灑顏料吧！",
          linkText: "查看更多水彩、水墨筆刷>>>",
        },
        crayon: {
          infoboxTitle: "粉筆、蠟筆",
          infoboxContent:
            "<br>厚塗推薦<br>讓你的作品更有層次感<br>一起來塗塗抹抹！",
          linkText: "查看更多粉筆、蠟筆筆刷>>>",
        },
        pencil: {
          infoboxTitle: "鉛筆、麥克筆",
          infoboxContent:
            "描繪素描風格<br>手繪筆觸、飽含溫度<br>多種仿真筆刷<br>等你來挑選",
          linkText: "查看更多鉛筆、麥克筆筆刷>>>",
        },
        special: {
          infoboxTitle: "特殊及其他筆刷",
          infoboxContent:
            "各種圖形的筆刷<br>讓你在創作時更加輕鬆<br>一瞬間<br>就能呈現你要的效果！",
          linkText: "查看更多特殊及其他筆刷>>>",
        },
      },
      ColorClass: ["green", "purple", "gray", "yellow"],
    };
  },
  computed: {},
  methods: {
    ProductTypeFilter(index) {
      return Object.values(this.ProductType)[index];
    },
    ProductDataFilter(index) {
      return this.ProductData.products
        .filter(
          (item) => item.ProductType == Object.keys(this.ProductType)[index]
        )
        .slice(0, 4);
    },
    ClassAdjust(index) {
      let ProductBox = document.querySelectorAll(".product_box");
      ProductBox[index].classList.add(this.ColorClass[index]);
      if (index % 2 == 0) {
        ProductBox[index].classList.add("right");
      }
    },
  },
  mounted: function () {
    for (let i = 0; i <= 3; i++) {
      this.ClassAdjust(i);
    }
  },
};
</script>
<style lang="scss" src="../assets/css/index.scss" scoped></style>
