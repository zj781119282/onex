<template>
  <section>
    <a href="javascript:;" @click="download">
      <img v-show="!mobile" src="./../../assets/banner.png" alt="ONEX"/>
      <img v-show="mobile" src="./../../assets/banner-mobile.png" alt="ONEX"/>
    </a>
    <download v-show="isInnerBrowser"></download>
  </section>
</template>

<script src="./banner.js"></script>

<style lang="scss" scoped></style>
