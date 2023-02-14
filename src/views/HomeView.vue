<template>
  <div class="home">
    <header>
      <div class="div_1024">
        <div class="searchbar_and_subnav">
          <div class="subnav">
            <ul>
              <li>
                <router-link to="/login"
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
                          <p v-if="item.ProductPrice !== 0">
                            {{ item.ProductPrice + "元" }}
                          </p>
                          <p v-if="item.ProductPrice == 0">免費</p>
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
        <nav class="hamburger_nav">
          <label for="switch"
            ><Icon icon="charm:menu-hamburger" width="30" height="30"></Icon
          ></label>
          <input type="checkbox" id="switch" />
          <ul class="mainnav_ul">
            <li
              class="mainnav_ul_1stli"
              style="cursor: pointer"
              @click="NavToggle"
            >
              筆刷分類<Icon
                class=""
                icon="material-symbols:keyboard-arrow-up"
                width="23"
                style="transform: translateY(-1px)"
              ></Icon>
              <ul class="mainnav_cate">
                <li>
                  <router-link to="/products/watercolor"
                    >水彩、水墨</router-link
                  >
                </li>
                <li>
                  <router-link to="/products/crayon">粉筆、蠟筆</router-link>
                </li>
                <li>
                  <router-link to="/products/pencil">鉛筆、麥克筆</router-link>
                </li>
                <li>
                  <router-link to="/products/special"
                    >特殊、其他筆刷</router-link
                  >
                </li>
              </ul>
            </li>
            <li>
              <router-link to="/products/freebrush">免費筆刷</router-link>
            </li>
            <li><router-link to="/products/paybrush">付費筆刷</router-link></li>
            <li><router-link to="/products/paper">特殊紙質</router-link></li>
            <li><router-link to="/tutorial">筆刷/紙質應用教學</router-link></li>
          </ul>
        </nav>
        <!--LOGO-->
        <div class="top_LOGO">
          <router-link to="/">
            <img src="../assets/image/LOGO_trans.png" />
          </router-link>
        </div>
      </div>
    </header>
    <div class="div_1024">
      <div class="banner_and_nav">
        <div class="banner-box">
          <div class="banner-box_word">
            <p>就。很。Ｐｒｏ</p>
            <p>是一個專為Ｐｒｏｃｒｅａｔｅ</p>
            <p>使用者設計的網站</p>
            <p>這裡提供各式各樣的筆刷任君挑選</p>
          </div>
          <div class="banner-box_pic">
            <img src="../static/image/i_banner_00.png" />
          </div>
        </div>

        <nav class="mainnav">
          <ul>
            <li>
              筆刷分類<Icon
                class=""
                icon="material-symbols:keyboard-arrow-up"
                width="23"
                style="transform: translateY(-1px)"
              ></Icon>
              <ul class="mainnav_cate">
                <li>
                  <router-link to="/products/watercolor"
                    >水彩、水墨</router-link
                  >
                </li>
                <li>
                  <router-link to="/products/crayon">粉筆、蠟筆</router-link>
                </li>
                <li>
                  <router-link to="/products/pencil">鉛筆、麥克筆</router-link>
                </li>
                <li>
                  <router-link to="/products/special">特殊、其他</router-link>
                </li>
              </ul>
            </li>
            <li>
              <router-link to="/products/freebrush">免費筆刷</router-link>
            </li>
            <li><router-link to="/products/paybrush">付費筆刷</router-link></li>
            <li><router-link to="/products/paper">特殊紙質</router-link></li>
            <li><router-link to="/tutorial">筆刷/紙質應用教學</router-link></li>
          </ul>
        </nav>
      </div>
    </div>
    <content>
      <HomeProductComponent />
      <HomePaperComponent />
    </content>
    <!--問題回報-->
    <content>
      <div class="contact_box">
        <div class="contact_box_inside">
          <h3>聯絡我們</h3>
          <img src="../assets/image/LOGO-trans_cut.png" width="286px" />
          <p>
            遇到問題了嗎？<br />
            對網站有什麼建議嗎？<br />
            想要在就。很。Pro上架自己的作品嗎？<br />
            歡迎來信讓我們知道！<br />
            Johenpro_brush@gmail.com
          </p>
        </div>
      </div>
    </content>

    <footer>
      <nav class="nav_bottom">
        <ul>
          <li><router-link to="/products/freebrush">免費筆刷</router-link></li>
          <li><router-link to="/products/paybrush">付費筆刷</router-link></li>
          <li><router-link to="/products/paper">特殊紙質</router-link></li>
          <li><router-link to="/tutorial">應用教學</router-link></li>
        </ul>
      </nav>

      <div class="nav_hr"></div>

      <div class="LOGO">
        <router-link to="/">
          <img src="../assets/image/LOGO_trans.png" width="256px" />
        </router-link>
      </div>
    </footer>
    <!--返回頂部的button-->
    <button type="button" id="backtop" class="toTop-arrow"></button>
  </div>
</template>

<script>
import HomeProductComponent from "../components/HomeProductComponent.vue";
import HomePaperComponent from "../components/HomePaperComponent.vue";
import { Icon } from "@iconify/vue2";

export default {
  components: {
    HomeProductComponent,
    HomePaperComponent,
    Icon,
  },
  data() {
    return {
      ProductInCartInfo: [],
      ProductInCartId: [],
    };
  },
  methods: {
    NavToggle() {
      let displaynav = document.querySelector(".mainnav_ul_1stli > ul");
      let icon = document.querySelector(".mainnav_ul_1stli > .iconify");
      if (window.innerWidth <= 768) {
        displaynav.classList.toggle("displaynav");
        if (icon.classList.contains("icon_open") == true) {
          icon.classList.add("icon_close");
          icon.classList.remove("icon_open");
        } else {
          icon.classList.add("icon_open");
          icon.classList.remove("icon_close");
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
<style lang="scss" src="../assets/css/index.scss" scoped></style>
