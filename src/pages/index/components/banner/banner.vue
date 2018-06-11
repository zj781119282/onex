<template>
  <section>
    <a href="javascript:;" class="banner-container" @click="download">
      <img class="hide-xs" src="./../../assets/banner.png" alt="ONEX"/>
      <img class="hide-lg" src="./../../assets/banner-mobile.png" alt="ONEX"/>
      <canvas id="android" class="hide-xs"></canvas>
      <span class="android hide-xs">Android</span>
      <canvas id="ios" class="hide-xs"></canvas>
      <span class="ios hide-xs">iOS</span>
    </a>
    <download v-show="isInnerBrowser"></download>
  </section>
</template>

<script src="./banner.js"></script>

<style lang="scss" scoped src="./banner.scss"></style>
