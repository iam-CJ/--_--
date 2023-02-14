import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next)=>{
  const isLogin = localStorage.getItem('token') == 'ImLogin' ;
  window.document.title = to.meta.title == undefined?'就。很。Pro｜Procreate中文筆刷資源網':to.meta.title
  if( isLogin ){
    next();
  } else {
    if( to.path !== '/login')
      next('/login');
    else
      next();
  }
});
