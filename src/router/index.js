import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import HowToPayView from "../views/HowToPayView.vue";
import TutorialView from "../views/TutorialView.vue";
//import AlreadyLoginPage from "../components/AlreadyLoginPage.vue";
import ProductsTypeComponent from "../components/ProductsTypeComponent.vue";
// import UserinfoPage from '../components/UserinfoPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      title: "就。很。Pro | 會員登入",
      keepAlive: true, // 需要被緩存
    },
  },
  {
    path: "/",
    name: "home",
    components: {
      default: HomeView,
      //nav: AlreadyLoginPage,
    },
    meta: {
      title: "就。很。Pro | Procreate中文筆刷資源網",
      keepAlive: true,
    },
  },
  // {
  //   path: '/info',
  //   name: 'info',
  //   components:{
  //     default:UserinfoPage,
  //     nav:HeaderPage,
  //     meta:{
  //       title:'就。很。Pro | 會員資料',
  //       keepAlive: true,
  //     }
  //   }
  // },
  {
    path: "/products/watercolor",
    name: "watercolor",
    component: ProductsTypeComponent,
    props: {
      RouterType: "watercolor",
      ProductTypeBanner: {
        backgroundimg: "static/image/i_banner_01.png",
        typetitle: "水彩、水墨筆刷",
        typeimg: "static/image/i_product01_00.png",
      },
    },
    meta: {
      title: "就。很。Pro | 水彩、水墨筆刷",
      keepAlive: true,
    },
  },
  {
    path: "/products/crayon",
    name: "crayon",
    component: ProductsTypeComponent,
    props: {
      RouterType: "crayon",
      ProductTypeBanner: {
        backgroundimg: "static/image/i_banner_02.png",
        typetitle: "粉筆、蠟筆筆刷",
        typeimg: "static/image/i_product02_00.png",
      },
    },
    meta: {
      title: "就。很。Pro | 粉筆、蠟筆筆刷",
      keepAlive: true,
    },
  },
  {
    path: "/products/pencil",
    name: "pencil",
    component: ProductsTypeComponent,
    props: {
      RouterType: "pencil",
      ProductTypeBanner: {
        backgroundimg: "static/image/i_banner_03.png",
        typetitle: "鉛筆、麥克筆刷",
        typeimg: "static/image/i_product03_00.png",
      },
    },
    meta: {
      title: "就。很。Pro | 鉛筆、麥克筆刷",
      keepAlive: true,
    },
  },
  {
    path: "/products/special",
    name: "special",
    component: ProductsTypeComponent,
    props: {
      RouterType: "special",
      ProductTypeBanner: {
        backgroundimg: "static/image/i_banner_04.png",
        typetitle: "特殊及其他筆刷",
        typeimg: "static/image/i_product04_00.png",
      },
    },
    meta: {
      title: "就。很。Pro | 特殊及其他筆刷",
      keepAlive: true,
    },
  },
  {
    path: "/products/paper",
    name: "paper",
    component: ProductsTypeComponent,
    props: {
      RouterType: "paper",
      ProductTypeBanner: {
        backgroundimg: "static/image/i_banner_07.png",
        typetitle: "特殊紙質",
        typeimg: "",
      },
    },
    meta: {
      title: "就。很。Pro | 特殊紙質",
      keepAlive: true,
    },
  },
  {
    path: "/products/freebrush",
    name: "freebrush",
    component: ProductsTypeComponent,
    props: {
      RouterType: "freebrush",
      ProductTypeBanner: {
        backgroundimg: "static/image/i_banner_05.png",
        typetitle: "免費筆刷",
        typeimg: "",
      },
    },
    meta: {
      title: "就。很。Pro | 免費筆刷",
      keepAlive: true,
    },
  },
  {
    path: "/products/paybrush",
    name: "paybrush",
    component: ProductsTypeComponent,
    props: {
      RouterType: "paybrush",
      ProductTypeBanner: {
        backgroundimg: "static/image/i_banner_06.png",
        typetitle: "付費筆刷",
        typeimg: "",
      },
    },
    meta: {
      title: "就。很。Pro | 付費筆刷",
      keepAlive: true,
    },
  },
  {
    path: "/howtopay",
    name: "howtopay",
    component: HowToPayView,
    meta: {
      title: "就。很。Pro | 付款說明",
      keepAlive: true,
    },
  },
  {
    path: "/tutorial",
    name: "tutorial",
    component: TutorialView,
    meta: {
      title: "就。很。Pro | 筆刷、紙質應用教學",
      keepAlive: true,
    },
  },
  {
    path: "*",
    redirect: "/",
  },
  {
    path: "/products",
    redirect: "/products/watercolor",
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});

export default router;
