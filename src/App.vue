<template>
  <div id="app">
    <router-view name="nav" />
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    backTopButton() {
      return document.querySelector("#backtop");
    },
  },
  mounted() {
    window.addEventListener("scroll", this.buttonShow);
    this.backTopButton.addEventListener("click", this.backTop);
  },
  methods: {
    backTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    buttonShow() {
      if (window.scrollY > 300) {
        this.backTopButton.style.display = "block";
      } else {
        this.backTopButton.style.display = "none";
      }
    },
  },
};
</script>
<style>
*,
*:before,
*:after {
  box-sizing: inherit;
  font-family: "Noto Serif TC", serif;
}

.toTop-arrow {
  width: 3.5rem;
  height: 3.5rem;
  padding: 0;
  margin: 0;
  border: 2px solid black;
  border-radius: 100%;
  opacity: 0.8;
  background: white;
  cursor: pointer;
  position: fixed;
  right: 1rem;
  bottom: 3rem;
  display: none;
}

.toTop-arrow::before,
.toTop-arrow::after {
  width: 25px;
  height: 3px;
  border-radius: 3px;
  background: black;
  position: absolute;
  content: "";
}

.toTop-arrow::before {
  transform: rotate(-45deg) translate(1%, -50%);
  left: 0.4rem;
}

.toTop-arrow::after {
  transform: rotate(45deg) translate(-1%, -50%);
  right: 0.4rem;
}
</style>
