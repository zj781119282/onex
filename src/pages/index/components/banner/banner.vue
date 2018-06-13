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
      <canvas id="android" class="absolute-center"></canvas>
    </div>
    <div class="qrcode ios hide-xs" :class="{hide:qrCode !== 'ios'}">
      <canvas id="ios" class="absolute-center"></canvas>
    </div>
  </section>
</template>

<script src="./banner.js"></script>

<style lang="scss" scoped src="./banner.scss"></style>
