<template>
  <div class="about">
    <LoginComponent />
  </div>
</template>
<script>
import LoginComponent from "../components/LoginComponent.vue";

export default {
  components: {
    LoginComponent,
  },
};
</script>
<style lang="scss" scoped>
html {
  box-sizing: border-box;
  width: 100%;
}
*,
*:before,
*:after {
  box-sizing: inherit;
  font-family: "Noto Serif TC", serif;
}

.about {
  height: 100vh;
  width: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
  text-align: center;
  @media screen and (max-width: 768px) {
    transform: scale(0.9);
  }
  @media screen and (max-width: 390px) {
    transform: scale(0.6);
  }
}
</style>
