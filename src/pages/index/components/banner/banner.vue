<template>
  <section>
    <a href="javascript:;" class="banner-container" @click="download">
      <img class="hide-xs" src="./../../assets/banner.png" alt="ONEX"/>
      <img class="hide-lg" src="./../../assets/banner-mobile.png" alt="ONEX"/>
      <div class="qrcode android hide-xs">
        <canvas id="android" class="hide-xs absolute-center"></canvas>
      </div>
    </a>
    <download v-show="isInnerBrowser"></download>
  </section>
</template>

<script src="./banner.js"></script>

<style lang="scss" scoped src="./banner.scss"></style>
