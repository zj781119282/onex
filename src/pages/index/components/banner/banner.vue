<template>
  <section>
    <a href="http://image.enyes.net/onex.apk">
      <img v-show="!mobile" src="./../../assets/banner.png" alt="ONEX"/>
      <img v-show="mobile" src="./../../assets/banner-mobile.png" alt="ONEX"/>
    </a>
  </section>
</template>

<script>
  export default {
    name: 'banner',
    data() {
      return {
        mobile: window.innerWidth <= 768,
      }
    },
  }
</script>

<style lang="scss" scoped></style>
