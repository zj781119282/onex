<template>
  <section class="banner-container" id="banner">
    <img class="hide-xs" src="./../../assets/banner.png" alt="ONEX"/>
    <img class="hide-lg" src="./../../assets/banner-mobile.png" alt="ONEX"/>
    <a href="javascript:;" class="download-btn hide-lg" @click="download">{{$t('HEADER.DOWNLOAD')}}</a>
    <a href="javascript:;" class="download-btn android hide-xs" @click.stop="showQrCode('android')">
      <i></i>
      {{$t('HEADER.ANDROID_DOWNLOAD')}}
    </a>
    <a href="javascript:;" class="download-btn ios hide-xs" @click.stop="showQrCode('ios')">
      <i></i>
      {{$t('HEADER.IOS_DOWNLOAD')}}
    </a>
    <div class="qrcode android hide-xs" :class="{hide:qrCode !== 'android'}">
      <span class="triangle vertical-center"></span>
      <canvas id="android" class="absolute-center"></canvas>
    </div>
    <div class="qrcode ios hide-xs" :class="{hide:qrCode !== 'ios'}">
      <span class="triangle vertical-center"></span>
      <canvas id="ios" class="absolute-center"></canvas>
    </div>
    <div class="carousel-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./../../assets/slider_1.png" alt="ONEX"/>
        </div>
        <div class="swiper-slide">
          <img src="./../../assets/slider_2.png" alt="ONEX"/>
        </div>
        <div class="swiper-slide">
          <img src="./../../assets/slider_3.png" alt="ONEX"/>
        </div>
        <div class="swiper-slide">
          <img src="./../../assets/slider_4.png" alt="ONEX"/>
        </div>
        <div class="swiper-slide">
          <img src="./../../assets/slider_5.png" alt="ONEX"/>
        </div>
        <div class="swiper-slide">
          <img src="./../../assets/slider_6.png" alt="ONEX"/>
        </div>
      </div>
    </div>
    <div class="pages-container hide-xs"></div>
  </section>
</template>

<script src="./banner.js"></script>

<style lang="scss" scoped src="./banner.scss"></style>

<style lang="scss">
  .swiper-pagination-bullet {
    margin: 0 2px;
  }
</style>
