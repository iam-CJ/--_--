<template>
  <div>
    <header class="nav_box">
      <div class="nav_logo">
        <router-link to="/"
          ><img src="../assets/image/LOGO_trans.png" width="200px"
        /></router-link>
      </div>
      <nav class="mainnav">
        <label for="switch"
          ><Icon icon="charm:menu-hamburger" width="30" height="30"></Icon
        ></label>
        <input type="checkbox" id="switch" />
        <ul class="mainnav_ul">
          <li
            class="mainnav_ul_1stli"
            style="cursor: pointer"
            @click="navToggle"
          >
            筆刷分類<Icon
              class=""
              icon="material-symbols:keyboard-arrow-up"
              width="23"
              style="transform: translateY(-1px)"
            ></Icon>
            <ul class="mainnav_cate">
              <li>
                <router-link to="/products/watercolor">水彩、水墨</router-link>
              </li>
              <li>
                <router-link to="/products/crayon">粉筆、蠟筆</router-link>
              </li>
              <li>
                <router-link to="/products/pencil">鉛筆、麥克筆</router-link>
              </li>
              <li>
                <router-link to="/products/special">特殊、其他筆刷</router-link>
              </li>
            </ul>
          </li>
          <li><router-link to="/products/freebrush">免費筆刷</router-link></li>
          <li><router-link to="/products/paybrush">付費筆刷</router-link></li>
          <li><router-link to="/products/paper">特殊紙質</router-link></li>
          <li><router-link to="/tutorial">筆刷/紙質應用教學</router-link></li>
        </ul>
      </nav>
      <div class="searchbar_and_subnav">
        <div class="subnav">
          <ul>
            <li>
              <router-link to="/"
                ><Icon
                  inline
                  icon="carbon:user-avatar-filled"
                  width="20px"
                ></Icon>
                <p>會員登入</p></router-link
              >
            </li>
            <li class="subnav_likeicon">
              <a href="javascript:;" @click.prevent="likeListShow"
                ><Icon inline icon="ph:heart-fill" width="20px"></Icon>
                <p>我的收藏</p></a
              >
              <div class="subnav_likelist">
                <h6>收藏項目</h6>
                <h5 v-if="ProductInCartInfo.length <= 0">
                  您目前還沒有收藏的商品
                </h5>
                <ul>
                  <li
                    class="likelist_single"
                    v-for="(item, index) in ProductInCartInfo"
                    :key="item.id"
                  >
                    <img
                      :src="require('../' + item.ProductPicture + '.png')"
                      width="80px"
                    />
                    <div class="likelist_description">
                      <p>
                        {{ item.ProductNameTranslate }}<br />{{
                          item.ProductAuthor
                        }}
                      </p>
                      <div class="likelist_price">
                        <p>{{ item.ProductPrice + "元" }}</p>
                      </div>
                    </div>
                    <button id="delete-button" @click="removeCartInfo(index)">
                      ×
                    </button>
                    <div class="likelist_line"></div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div class="searchbar">
          <span class="input-group rounded form-inline">
            <input
              type="search"
              class="form-control rounded-pill"
              style="background-color: #c4c4c4"
              placeholder="搜尋…"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <button
              type="button"
              class="btn btn-default"
              aria-label="Left Align"
            >
              <Icon icon="bx:search" width="30px"></Icon>
            </button>
          </span>
        </div>
      </div>
    </header>
    <!--nav_box end-->

    <div class="center_content">
      <aside>
        <ul>
          <li>
            筆刷分類
            <ul>
              <li>
                <router-link to="/products/watercolor"
                  >水彩、水墨筆刷</router-link
                >
              </li>
              <li>
                <router-link to="/products/crayon">粉筆、蠟筆筆刷</router-link>
              </li>
              <li>
                <router-link to="/products/pencil">鉛筆、麥克筆刷</router-link>
              </li>
              <li>
                <router-link to="/products/special">特殊、其他筆刷</router-link>
              </li>
            </ul>
          </li>
          <li><router-link to="/products/freebrush">免費筆刷</router-link></li>
          <li>
            <router-link to="/products/paybrush">付費筆刷</router-link>
            <ul>
              <li><router-link to="/howtopay">付款說明</router-link></li>
            </ul>
          </li>
          <li><router-link to="/products/paper">特殊紙質</router-link></li>
          <li><router-link to="/tutorial">應用教學</router-link></li>
        </ul>
      </aside>
      <content>
        <h3>應用教學</h3>
        <div class="border_box">
          <ul class="tabs" @click="tabToggle">
            <li>
              <a href="javascript:;" data-tablink="brush" class="active"
                >筆 刷</a
              >
            </li>
            <li>
              <a href="javascript:;" data-tablink="paper" class="">紙 質</a>
            </li>
          </ul>

          <div class="border_box_text">
            <div id="brush" class="tab">
              <p>步驟說明</p>
              <ul>
                <li>下載喜愛的筆刷</li>
                <li>點選下載好的筆刷檔案</li>
                <li>即可快速應用到Procreate！開始盡情創作吧！</li>
              </ul>

              <p>影片演示</p>
              <ul>
                <li>待更新</li>
              </ul>
            </div>
            <!--tab end-->
            <div id="paper" class="tab">
              <p>步驟說明</p>
              <ul>
                <li>下載喜愛的紙質</li>
                <li>開啟Procreate，在畫布插入紙質圖片</li>
                <li>將此圖層移至最上層，且圖層效果設為「色彩增值」</li>
                <li>這樣就完成紙質設置囉！開始盡情創作吧！</li>
              </ul>
              <p>影片演示</p>
              <ul>
                <li>待更新</li>
              </ul>
            </div>
          </div>
        </div>
      </content>
    </div>
    <!--center end-->

    <footer>
      <div class="footer_hr"></div>
      <div class="footer_logo">
        <router-link to="/">
          <img src="../assets/image/LOGO_trans.png" width="300px" />
        </router-link>
      </div>
      <p>Johenpro_brush@gmail.com</p>
    </footer>
    <div class="addlikehide" :class="{ displayshow: isActive }">
      <div class="addlike_box">
        <Icon
          icon="clarity:success-standard-line"
          width="80px"
          style="color: rgb(115, 192, 0)"
        ></Icon>
        <p>成功加入收藏</p>
      </div>
    </div>
  </div>
</template>
<script>
import ProductDataJson from "../assets/product.json";
import { Icon } from "@iconify/vue2";

export default {
  components: { Icon },
  data() {
    return {
      ProductDataJson,
      ProductInCartInfo: [],
      ProductInCartId: [],
      isActive: false,
    };
  },
  methods: {
    tabToggle(e) {
      let as = document.querySelectorAll(".tabs li a");
      let brush = document.querySelector("#brush");
      let paper = document.querySelector("#paper");
      let tablink = e.target.dataset.tablink;
      if (tablink == "brush") {
        as.forEach((a) => a.classList.remove("active"));
        brush.style.display = "block";
        paper.style.display = "none";
        e.target.classList.add("active");
      } else if (tablink == "paper") {
        as.forEach((a) => a.classList.remove("active"));
        brush.style.display = "none";
        paper.style.display = "block";
        e.target.classList.add("active");
      }
    },
    navToggle() {
      let displayNav = document.querySelector(".mainnav_ul_1stli > ul");
      let menuIcon = document.querySelector(".mainnav_ul_1stli > .iconify");
      if (window.innerWidth <= 768) {
        displayNav.classList.toggle("displaynav");
        if (menuIcon.classList.contains("icon_open") == true) {
          menuIcon.classList.add("icon_close");
          menuIcon.classList.remove("icon_open");
        } else {
          console.log(this.ProductDataJson.products);
          menuIcon.classList.add("icon_open");
          menuIcon.classList.remove("icon_close");
        }
      }
    },
    likeListShow() {
      let subnavLikelist = document.querySelector(".subnav_likelist");
      if (window.innerWidth <= 768) {
        subnavLikelist.classList.toggle("displaylikelist");
      } else if (
        window.innerWidth > 768 &&
        subnavLikelist.classList.contains("displaylikelist")
      ) {
        subnavLikelist.classList.toggle("displaylikelist");
      }
    },
    heartIconToggle(i) {
      if (
        this.ProductInCartId.findIndex(
          (item) => item == this.waterColor[i].id
        ) == -1
      ) {
        this.isActive = true;
        setTimeout(() => (this.isActive = false), 1000);
        this.ProductInCartInfo.push(this.waterColor[i]);
        this.ProductInCartId.push(this.waterColor[i].id);
        this.saveCartInfo();
      } else if (
        this.ProductInCartId.findIndex(
          (item) => item == this.waterColor[i].id
        ) !== -1
      ) {
        this.removeCartInfo(this.ProductInCartId.indexOf(i + 1));
      }
    },
    cartIconToggle(i) {
      if (
        this.cartIcon[i].icon ==
        "material-symbols:shopping-cart-outline-rounded"
      ) {
        this.cartIcon[i].icon = "material-symbols:shopping-cart-rounded";
      } else if (
        this.cartIcon[i].icon == "material-symbols:shopping-cart-rounded"
      ) {
        this.cartIcon[i].icon =
          "material-symbols:shopping-cart-outline-rounded";
      }
    },
    removeCartInfo(i) {
      this.ProductInCartId.splice(i, 1);
      this.ProductInCartInfo.splice(i, 1);
      this.saveCartInfo();
    },
    saveCartInfo() {
      let infoParsed = JSON.stringify(this.ProductInCartInfo);
      let idParsed = JSON.stringify(this.ProductInCartId);
      localStorage.setItem("info", infoParsed);
      localStorage.setItem("id", idParsed);
    },
    showProductPage(i) {
      let card = document.querySelectorAll(".product_card");
      let singlePage = document.querySelectorAll(".product_singlepage");
      singlePage[i].style.display = "flex";
      card.forEach((item) => (item.style.pointerEvents = "none"));
    },
    hideProductPage(i) {
      let card = document.querySelectorAll(".product_card");
      let singlePage = document.querySelectorAll(".product_singlepage");
      singlePage[i].style.display = "none";
      card.forEach((item) => (item.style.pointerEvents = "unset"));
    },
  },
  computed: {
    waterColor() {
      return this.ProductDataJson.products.filter(
        (p) => p.ProductType === "watercolor"
      );
    },
    heartIcon() {
      return document.querySelectorAll(".hearticon");
    },
    cartIcon() {
      return document.querySelectorAll(".carticon");
    },
  },
  mounted() {
    //local storage
    if (localStorage.getItem("info")) {
      try {
        this.ProductInCartInfo = JSON.parse(localStorage.getItem("info"));
      } catch (e) {
        localStorage.removeItem("info");
      }
    }
    if (localStorage.getItem("id")) {
      try {
        this.ProductInCartId = JSON.parse(localStorage.getItem("id"));
      } catch (e) {
        localStorage.removeItem("id");
      }
    }
  },
};
</script>
<style lang="scss" src="../assets/css/e_tutorial.scss" scoped></style>
