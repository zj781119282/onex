<template>
  <section>
    <a href="javascript:;" class="banner-container" @click="download">
      <img v-show="!mobile" src="./../../assets/banner.png" alt="ONEX"/>
      <img v-show="mobile" src="./../../assets/banner-mobile.png" alt="ONEX"/>
      <canvas id="android" v-show="!mobile"></canvas>
      <span class="android">Android</span>
      <canvas id="ios" v-show="!mobile"></canvas>
      <span class="ios">iOS</span>
    </a>
    <download v-show="isInnerBrowser"></download>
  </section>
</template>

<script src="./banner.js"></script>

<style lang="scss" scoped src="./banner.scss"></style>
