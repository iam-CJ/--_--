<template>
  <div>
    <div class="all_content">
      <div class="nav_logo">
        <router-link to="/"
          ><img src="../assets/image/LOGO_trans.png" width="200px"
        /></router-link>
      </div>
      <form class="loginform" @submit.prevent="login">
        <h4>會員登入</h4>
        <div>
          <label>帳號</label>
          <input type="text" v-model="userName" required />
        </div>
        <div>
          <label>密碼</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit" class="login_button">登入</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (this.userName == "123" && this.password == "123") {
        localStorage.setItem("token", "ImLogin");
        this.$router.push("/");
      } else {
        alert("登入失敗\n帳號密碼皆為「123」");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.nav_logo {
  margin-bottom: 30px;
}
.loginform {
  min-height: 50vh;
  min-height: 310px;
  display: grid;
  border: 1px solid black;
  padding: 30px 50px;
  border-radius: 10px;
  align-items: center;
  justify-items: center;
  label {
    margin-right: 5px;
  }
  .login_button {
    //width: 60px;
    width: fit-content;
    height: 30px;
    border: 1px solid black;
    color: black;
    background-color: #dddddd;
  }
}
</style>
